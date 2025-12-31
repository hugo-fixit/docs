---
title: How to Develop a Hugo Theme Component
date: 2024-06-27T17:35:29+08:00
categories:
  - Guides
tags:
  - Advanced
  - Customization
  - Shortcodes
  - Components
description: This article will demonstrate how to create a Hugo theme component by developing a caniuse shortcode.
resources:
  - name: featured-image
    src: featured-image.webp
---

This article will demonstrate how to create a Hugo theme component by developing a caniuse shortcode.

<!--more-->

## Introduction

This article aims to outline the process of developing a component from scratch without delving too deeply into the concept and principles of components. For more information on Hugo theme components, please refer to the [Contributing / Develop Theme Components][components] page.

This case study is open-sourced on GitHub under the [hugo-fixit][hugo-fixit] organization.

{{< gh-repo-card-container >}}
  {{< gh-repo-card repo="hugo-fixit/shortcode-caniuse" >}}
{{< /gh-repo-card-container >}}

## Creating Component Skeleton

Creating a component is similar to creating a theme, and you can use the `hugo new theme` command to create a new theme component.

```bash
hugo new theme shortcode-caniuse
```

The above command creates a folder named `shortcode-caniuse` in the `themes` directory, which has a complete Hugo theme directory structure.

Since we only need to develop a component that includes a shortcode, you can delete unnecessary files. The directory structure after deletion is as follows:

```plaintext
./
├── assets/
├── i18n/
├── layouts/
│   ├── partials/
│   └── shortcodes/
├── hugo.toml
├── LICENSE
├── README.md
└── theme.toml
```

To be compatible with both Git submodule and Hugo Modules installation methods later on, you also need to initialize a Git repository and a `go.mod` file:

```bash
git init
git remote add origin git@github.com:hugo-fixit/shortcode-caniuse.git
go mod init github.com/hugo-fixit/shortcode-caniuse
```

## Creating Shortcode

Create a file named `caniuse.html` in the `layouts/_shortcodes` directory.

According to the usage instructions of [The CanIUse Embed][caniuse-embed], write the shortcode content as follows:

```go-html-template {title="caniuse.html"}
{{- /*
  reference https://github.com/pengzhanbo/caniuse-embed
  <feature>: Feature name
  <past>: Show the past N versions that match the feature, range is 0 - 5, default is 2
  <future>: Show the future N versions that match the feature, range is 0 - 3, default is 1
*/ -}}
{{- $feature := cond .IsNamedParams (.Get "feature") (.Get 0) -}}
{{- $past := cond .IsNamedParams (.Get "past") (.Get 1) | default 2 -}}
{{- $future := cond .IsNamedParams (.Get "future") (.Get 2) | default 1 -}}

<p class="ciu-embed" data-feature="{{ $feature }}" data-past="{{ $past }}" data-future="{{ $future }}" data-observer="true" data-theme=""></p>
{{- /* EOF */ -}}
```

## Creating JS File

In order to change the theme color of the FixIt theme to black and light, we can also change the theme color of the shortcode by using JS.

Create a file named `shortcode-caniuse.js` in the `assets/js` directory and write the theme switch logic as follows:

```js
function setCanIUseEmbedsTheme(allCanIUseEmbeds, isDark) {
  allCanIUseEmbeds.forEach((embed) => {
    embed.setAttribute('data-theme', isDark ? 'dark' : 'light')
  })
}

function CanIUseShortcodeInit() {
  if (typeof window.fixit?.switchThemeEventSet === 'object') {
    const allCanIUseEmbeds = document.querySelectorAll('.ciu-embed')
    setCanIUseEmbedsTheme(allCanIUseEmbeds, window.fixit.isDark)
    window.fixit?.switchThemeEventSet.add((isDark) => {
      setCanIUseEmbedsTheme(allCanIUseEmbeds, isDark)
    })
  }
}

if (document.readyState !== 'loading') {
  CanIUseShortcodeInit()
}
else {
  document.addEventListener('DOMContentLoaded', caniuseShortcodeInit, false)
}
```

## Creating Partial

Create a file named `shortcode-caniuse.html` in the `layouts/_partials/inject` directory.

Reference third-party plugins and the JS resources of the component itself, with the content as follows:

```go-html-template {title="shortcode-caniuse.html"}
{{- if .HasShortcode "caniuse" -}}
  {{- $fingerprint := .Site.Store.Get "fingerprint" -}}

  {{- /* shortcode-caniuse.min.css */ -}}
  {{- $options := dict "Source" "css/shortcode-caniuse/index.scss" "Fingerprint" $fingerprint -}}
  {{- $toCSS := dict "targetPath" "css/shortcode-caniuse.min.css" "enableSourceMap" true -}}
  {{- $options = dict "Context" . "ToCSS" $toCSS | merge $options -}}
  {{- partial "plugin/style.html" $options -}}

  {{- /* embed.js */ -}}
  {{- $source := resources.Get "lib/shortcode-caniuse/embed.js" -}}
  {{- if hugo.IsProduction | and .Site.Params.cdn -}}
    {{- $source = "https://caniuse.lruihao.cn/embed.js" -}}
  {{- end -}}
  {{- dict "Source" $source "Fingerprint" $fingerprint "Defer" true | dict "Page" . "Data" | partial "store/script.html" -}}

  {{- /* shortcode-caniuse.min.js */ -}}
  {{- $options := dict "targetPath" "js/shortcode-caniuse.min.js" "minify" hugo.IsProduction -}}
  {{- if not hugo.IsProduction -}}
    {{- $options = dict "sourceMap" "inline" | merge $options -}}
  {{- end -}}
  {{- dict "Source" (resources.Get "js/shortcode-caniuse.js") "Build" $options "Fingerprint" $fingerprint "Defer" true | dict "Page" . "Data" | partial "store/script.html" -}}
{{- end -}}
```

## Publishing Component

Before publishing, update the `LICENSE`, `README.md`, and `theme.toml` files, then commit to the remote repository.

## How to Use

### Install Component

The installation method is the same as [installing a theme][installation]. There are several ways to install, choose one, for example, install through Hugo Modules:

```diff
[module]
  [[module.imports]]
    path = "github.com/hugo-fixit/FixIt"
+ [[module.imports]]
+   path = "github.com/hugo-fixit/shortcode-caniuse"
```

### Inject Partial

{{< version 0.3.9 >}}

Inject the `shortcode-caniuse.html` into the `custom-assets` through the custom block opened by the FixIt theme in the `layouts/_partials/custom.html` file:

```go-html-template
{{- define "custom-assets" -}}
  {{- partial "inject/shortcode-caniuse.html" . -}}
{{- end -}}
```

### Use Shortcode

The `caniuse` shortcode has the following named parameters:

- **feature** _[required]_ (**first** positional parameter) Feature name
- **past** _[optional]_ (**second** positional parameter) Show the past N versions that match the feature, range is `0 - 5`, default is `2`
- **future** _[optional]_ (**third** positional parameter) Show the future N versions that match the feature, range is `0 - 3`, default is `1`

> Click on the `#` next to a feature on the `caniuse.com` website, and the `pathname` in the URL is the `feature` parameter.

Here is an example of usage:

```markdown
{{</* caniuse feature="css-grid" */>}}
or
{{</* caniuse "css-grid" */>}}
```

The presentation effect is as follows:

{{< caniuse "css-grid" >}}

## References

- [Can I use... Support tables for HTML5, CSS3, etc][caniuse]
- [The CanIUse Embed — Add support tables to your site][caniuse-embed]
- [Contributing - Develop Theme Components][components]

## Acknowledgements

- [mdn-browser-compat-data][mdn-browser-compat-data]
- [Fyrd/caniuse][Fyrd/caniuse]
- [pengzhanbo/caniuse-embed][caniuse-embed-repo]

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 -->
[components]: {{< relref "/contributing/components" >}}
[hugo-fixit]: https://github.com/hugo-fixit
[caniuse-embed]: https://caniuse-embed.vercel.app/
[caniuse-embed-repo]: https://github.com/pengzhanbo/caniuse-embed
[installation]: {{< relref "/documentation/installation" >}}
[caniuse]: https://caniuse.com/
[mdn-browser-compat-data]: https://github.com/mdn/browser-compat-data
[Fyrd/caniuse]: https://github.com/Fyrd/caniuse
