#!/usr/bin/env bash

#------------------------------------------------------------------------------
# @file
# Builds a Hugo site hosted on Vercel.
#
# The Vercel build image automatically installs Node.js dependencies.
#
# @example
# chmod a+x build.sh && ./build.sh
#------------------------------------------------------------------------------

# Exit on error, undefined variables, or pipe failures
set -euo pipefail

build_temp_dir=""
fixit_temp_dir=""

# Perform cleanup
cleanup() {
  if [[ -n "${build_temp_dir:-}" && -d "${build_temp_dir}" ]]; then
    rm -rf "${build_temp_dir}"
  fi
  if [[ -n "${fixit_temp_dir:-}" && -d "${fixit_temp_dir}" ]]; then
    rm -rf "${fixit_temp_dir}"
  fi
}

# Register the cleanup trap
trap cleanup EXIT SIGINT SIGTERM

main() {
  # Define tool versions
  # You can also manage these via Environment Variables in the Vercel dashboard.
  if [[ -z "${DART_SASS_VERSION:-}" ]]; then
    DART_SASS_VERSION=1.99.0
  fi
  if [[ -z "${GO_VERSION:-}" ]]; then
    GO_VERSION=1.26.1
  fi

  # Set the build timezone
  export TZ=Asia/Shanghai

  # Create and move into a temporary directory for downloads
  build_temp_dir=$(mktemp -d)
  pushd "${build_temp_dir}" > /dev/null

  # Create the local tools directory
  mkdir -p "${HOME}/.local"

  # Install Dart Sass
  echo "Installing Dart Sass ${DART_SASS_VERSION}..."
  curl -sLJO "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
  tar -C "${HOME}/.local" -xf "dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
  export PATH="${HOME}/.local/dart-sass:${PATH}"

  # Install Go
  # echo "Installing Go ${GO_VERSION}..."
  # curl -sLJO "https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz"
  # tar -C "${HOME}/.local" -xf "go${GO_VERSION}.linux-amd64.tar.gz"
  # export PATH="${HOME}/.local/go/bin:${PATH}"

  # Install Go from the package manager
  dnf install -y golang.x86_64

  # Return to the project root
  popd > /dev/null

  # Verify installations
  echo "Verifying installations..."
  echo Dart Sass: "$(sass --version)"
  echo Go: "$(go version)"
  echo Hugo: "$(hugo version)"
  echo Node.js: "$(node --version)"

  # Configure Git
  echo "Configuring Git..."
  git config core.quotepath false
  if [ "$(git rev-parse --is-shallow-repository)" = "true" ]; then
    git fetch --unshallow
  fi

  # Generate API references from FixIt source
  echo "Generating API references..."
  docs_root=$(pwd)
  fixit_temp_dir=$(mktemp -d)
  git clone --depth 1 https://github.com/hugo-fixit/FixIt.git "${fixit_temp_dir}"
  pushd "${fixit_temp_dir}" > /dev/null
  pnpm install

  # sassdoc → public/references/scss
  npx sassdoc@2.7.2 assets/scss/ --dest "${docs_root}/public/references/scss" --config .sassdocrc

  # typedoc → public/references/javascript
  npx typedoc --out "${docs_root}/public/references/javascript"

  popd > /dev/null

  # Build the site
  echo "Building the site..."
  hugo_args=()
  [[ "${VERCEL_ENV:-}" == "preview" ]] && hugo_args+=(--buildDrafts --baseURL "https://${VERCEL_URL}")
  pnpm build "${hugo_args[@]}"

  # Post-process encrypted content and verify encryption output.
  npx @hugo-fixit/encrypt
  npx @hugo-fixit/encrypt --verify
}

main "$@"
