---
title: Theme Installation
linkTitle: Installation
date: 2024-01-18T10:29:25+08:00
description: Install FixIt theme for your Hugo site in a few steps.
categories:
  - Documentation
collections:
  - Outline
tags:
  - Installation
resources:
  - name: featured-image
    src: cover.webp
---

Install **FixIt** theme for your Hugo site in a few steps.

<!--more-->

1. Configure the default theme to FixIt in `hugo.toml`, e.g. `theme = "FixIt"`
2. Install the theme by one of the following ways.

## Prerequisites

Thanks to the simplicity of Hugo, [Hugo][hugo] may be the only dependency of this theme.

Although not required in all cases, [Git][git], [Go][go], [Dart Sass][dart-sass] and [Node.js][node.js] are commonly used when working with Hugo.

Git is required to:

- Build Hugo from source
- Use the [Git Submodules][git-submodules] feature
- Install a theme as a Git submodule
- Access [commit information][commit-info] from a local Git repository
- Host your site with services such as [CloudCannon][cloudcannon], [Cloudflare Pages][cloudflare-pages], [GitHub Pages][github-pages], [GitLab Pages][gitlab-pages], and [Netlify][netlify]

Go is required to:

- Build Hugo from source
- Use the [Hugo Modules][hugo-modules] feature

Dart Sass is required to transpile Sass to CSS when using the latest features of the Sass language.

Node.js is required to:

- Use the FixIt CLI
- Some Automation Tools, e.g. [atomic-algolia]({{< relref path="/guides/algolia-atomic" >}})

Please refer to the relevant documentation for installation instructions:

- [Hugo][hugo-install] (extended edition, v{{< param docs.minHugoVersion >}} or later)
- [Git][git-install]
- [Go][go-install]
- _[Dart Sass][dart-sass-install] (not used yet)_
- [Node.js][node-install] (v16.0.0 or later)

## Installations

{{< tabs defaultTab=3 >}}
{{% tab title="Manual" %}}
You can download the [latest release :(fa-regular fa-file-archive fa-fw): .zip file](https://github.com/hugo-fixit/FixIt/releases) of the theme and extract it in the `themes` directory.

To upgrade the theme by replacing the old theme with the new one.
{{% /tab %}}
{{% tab title="Git Clone" %}}
In this way, just clone the [FixIt](https://github.com/hugo-fixit/FixIt) theme into the `themes` directory.

```bash
git clone https://github.com/hugo-fixit/FixIt.git themes/FixIt
```

To upgrade the theme by pulling the latest commits from the repository.

```bash
cd themes/FixIt
git pull
```

{{% /tab %}}
{{% tab title="Git Submodules" %}}
{{< link "https://github.com/hugo-fixit/hugo-fixit-starter1/generate" "Click to quickly create a blog!" "A quick-start template base on Git submodule to create a Hugo FixIt site." true "fa-solid fa-screwdriver-wrench" >}}

Initialize an empty Git repository in the current directory.

```bash
git init
```

Add [FixIt](https://github.com/hugo-fixit/FixIt) to your project as a [Git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) stored in the `themes` directory.

```bash
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
```

<!--
To use the version on the `dev` branch, you can use the following command:

```bash
git submodule add -b dev https://github.com/hugo-fixit/FixIt.git themes/FixIt

# Alternatively, switch the submodule branch from `main` to `dev`:
git submodule set-branch -b dev themes/FixIt
```
-->

To upgrade the theme by using the following command:

```bash
git submodule update --remote --merge themes/FixIt
```

{{% /tab %}}
{{% tab title="Hugo Modules" %}}
{{< link "https://github.com/hugo-fixit/hugo-fixit-starter/generate" "Click to quickly create a blog!" "A quick-start template base on Hugo Modules to create a Hugo FixIt site." true "fa-solid fa-screwdriver-wrench" >}}

{{< admonition tip >}}
In this way, you don't need to configure `theme = "FixIt"` in `hugo.toml`.
{{< /admonition >}}

The easiest way to use a [Module][hugo-modules] for a theme is to import it in the config. See [Use Hugo Modules](https://gohugo.io/hugo-modules/use-modules/).

1. Initialize the hugo module system: `hugo mod init github.com/<your_user>/<your_project>`
2. Import the theme:

   ```toml
   [module]

   [[module.imports]]
   path = "github.com/hugo-fixit/FixIt"
   ```

To update or manage versions, you can use `hugo mod get`.

```bash
# Update all modules
hugo mod get -u
# Update all modules recursively
hugo mod get -u ./...
# Update one module
hugo mod get -u github.com/hugo-fixit/FixIt
# Get a specific version (e.g. v0.3.2, @latest, @main)
hugo mod get github.com/hugo-fixit/FixIt@v0.3.2
```

{{% /tab %}}
{{< /tabs >}}

---

|                               | Manual             | Git Clone          | Git Submodules     | Hugo Modules       |
| ----------------------------- | :----------------: | :----------------: | :----------------: | :----------------: |
| Prerequisites                 | Hugo               | Hugo, Git          | Hugo, Git          | Hugo, Git, Go      |
| Easy to install?              | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Easy to upgrade or downgrade? | :heavy_check_mark: | :heavy_check_mark: | :white_check_mark: | :white_check_mark: |
| Download speed?               | :x:                | :x:                | :heavy_check_mark: | :white_check_mark: |
| Automatic updates?            | :x:                | :x:                | :white_check_mark: | :white_check_mark: |
| Latest version available?     | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## CLI

{{< admonition danger "Tip" >}}
The CLI assumes prior knowledge of Hugo and FixIt. If you are new to Hugo or FixIt, we strongly suggest going through [the theme documentation](../) without any scaffold tools before using the CLI.
{{< /admonition >}}

```bash {mode="simple"}
npx fixit-cli create my-blog
```

{{< asciinema-embed 697494 >}}

FixIt provides an [official CLI][fixit-cli] for quickly scaffolding ambitious Hugo FixIt site skeleton. It provides two ways to quickly scaffold Hugo FixIt site based on Git Submodules or Hugo Modules, and provides the ability to check the latest version of the FixIt theme. See the [FixIt CLI docs][fixit-cli] for more details.

The supported template presets are:

| Module Type                      | Repository                                                               |
| :------------------------------- | :----------------------------------------------------------------------- |
| [Hugo Modules][hugo-modules]     | [hugo-fixit-starter](https://github.com/hugo-fixit/hugo-fixit-starter)   |
| [Git Submodules][git-submodules] | [hugo-fixit-starter1](https://github.com/hugo-fixit/hugo-fixit-starter1) |
| Component Skeleton               | [component-skeleton](https://github.com/hugo-fixit/component-skeleton)   |

<!-- link reference definition -->
<!-- markdownlint-disable-file MD034 search-replace -->
[hugo]: https://gohugo.io/
[hugo-install]: https://gohugo.io/installation/
[git]: https://git-scm.com/
[git-install]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[go]: https://go.dev/
[go-install]: https://go.dev/doc/install
[dart-sass]: https://gohugo.io/hugo-pipes/transpile-sass-to-css/#dart-sass
[dart-sass-install]: https://gohugo.io/hugo-pipes/transpile-sass-to-css/#dart-sass
[node.js]: https://nodejs.org/
[node-install]: https://nodejs.org/en/download/
[commit-info]: https://gohugo.io/variables/git/
[cloudcannon]: https://cloudcannon.com/
[cloudflare-pages]: https://pages.cloudflare.com/
[github-pages]: https://pages.github.com/
[gitlab-pages]: https://docs.gitlab.com/ee/user/project/pages/
[netlify]: https://www.netlify.com/
[fixit-cli]: https://github.com/hugo-fixit/fixit-cli
[git-submodules]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[hugo-modules]: https://gohugo.io/hugo-modules/
