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

{{< file-tree folder_slash=true >}}
- name: shortcode-caniuse
  type: dir
  children:
    - name: assets
      type: dir
    - name: i18n
      type: dir
    - name: layouts
      type: dir
      children:
        - name: partials
          type: dir
        - name: shortcodes
          type: dir
    - name: hugo.toml
      type: file
    - name: LICENSE
      type: file
    - name: README.md
      type: file
    - name: theme.toml
      type: file
{{< /file-tree >}}

> The `theme.toml` file is used for Hugo's official theme list submission. It is optional for theme components.

To be compatible with both Git submodule and Hugo Modules installation methods later on, you also need to initialize a Git repository and a `go.mod` file:

```bash
git init
git remote add origin git@github.com:hugo-fixit/shortcode-caniuse.git
go mod init github.com/hugo-fixit/shortcode-caniuse
```

## Creating Shortcode

Create a file named `caniuse.html` in the `layouts/_shortcodes` directory.

According to the usage instructions of [\<caniuse-embed\> Element][caniuse-embed], write the shortcode content as follows:

```go-template {title="caniuse.html"}
{{- /*
  reference https://github.com/Lruihao/caniuse-embed-element
  @params feature - Feature name
  @params baseline - Whether to show the feature support baseline, default is false
  @params past - Show the past N versions that match the feature, range is 0 - 5, default is 2
  @params future - Show the future N versions that match the feature, range is 0 - 3, default is 1
  @params origin - The origin of the caniuse embed data source, default is "https://caniuse.lruihao.cn"
  @params loading - Loading strategy for the iframe (eager or lazy), default is lazy
*/ -}}
{{- $caniuseEmbed := .Page.Param "caniuse_embed" -}}
{{- $feature := cond .IsNamedParams (.Get "feature") (.Get 0) -}}
{{- $baseline := cond .IsNamedParams (.Get "baseline") (.Get 1) | default $caniuseEmbed.baseline | default false -}}
{{- $past := cond .IsNamedParams (.Get "past") (.Get 2) | default $caniuseEmbed.past | default 2 -}}
{{- $future := cond .IsNamedParams (.Get "future") (.Get 3) | default $caniuseEmbed.future | default 1 -}}
{{- $origin := cond .IsNamedParams (.Get "origin") (.Get 4) | default $caniuseEmbed.origin | default "https://caniuse.lruihao.cn" -}}
{{- $loading := cond .IsNamedParams (.Get "loading") (.Get 5) | default $caniuseEmbed.loading | default "lazy" -}}
<caniuse-embed feature="{{ $feature }}" past="{{ $past }}" future="{{ $future }}" origin="{{ $origin }}" loading="{{ $loading }}"{{ if $baseline }} baseline{{ end }}></caniuse-embed>
{{- /* EOF */ -}}
```

## Creating TypeScript

To keep the caniuse embed in sync with the FixIt theme's dark/light mode, we use TypeScript to integrate with the FixIt event bus.

Create a file named `caniuse.fixit.ts` in the `assets/js` directory:

```ts
const { fixit } = window as any

interface CanIUseEmbed extends HTMLElement {
  theme: string
}

function setEmbedsTheme(embedEls: NodeListOf<CanIUseEmbed>, isDark: boolean) {
  embedEls.forEach((el) => {
    el.theme = isDark ? 'dark' : 'light'
  });
}

function initCanIUseeEmbeds() {
  const embedEls = document.querySelectorAll<CanIUseEmbed>('caniuse-embed');
  requestAnimationFrame(() => {
    setEmbedsTheme(embedEls, fixit.isDark)
  })
  fixit.eventBus.on('fixit:switch-theme', ({ detail }: { detail: { mode: string, isDark: boolean, isChanged: boolean } }) => {
    if (detail.isChanged) {
      setEmbedsTheme(embedEls, detail.isDark)
    }
  })
}

document.addEventListener('DOMContentLoaded', initCanIUseeEmbeds, false)
```

This script listens for the `fixit:switch-theme` event on the FixIt event bus and updates the `theme` property on all `<caniuse-embed>` web components on the page.

## Creating Partial

Create a file named `shortcode-caniuse.html` in the `layouts/_partials/inject` directory.

This partial loads the `<caniuse-embed>` web component library and the theme-switching script:

```go-template {title="shortcode-caniuse.html"}
{{- if .HasShortcode "caniuse" -}}
  {{- $fingerprint := .Site.Store.Get "fingerprint" -}}
  {{- $caniuseEmbedConfig := dict "Page" . "Key" "caniuse_embed" | partial "function/param.html" -}}

  {{- /* caniuse-embed-element.iife.js */ -}}
  {{- $source := resources.Get "lib/caniuse-embed-element.iife.js" -}}
  {{- if hugo.IsProduction | and $caniuseEmbedConfig.cdn -}}
    {{- $source = $caniuseEmbedConfig.cdn -}}
  {{- end -}}
  {{- dict
    "Source" $source
    "Fingerprint" $fingerprint
    "Async" true
    "Defer" true
    | dict "Page" . "Data"
    | partial "store/script.html"
  -}}

  {{- /* caniuse.fixit.min.js */ -}}
  {{- dict
    "Source" "js/caniuse.fixit.ts"
    "Build" true
    "Fingerprint" $fingerprint
    "Defer" true
    | dict "Page" . "Data"
    | partial "store/script.html"
  -}}
{{- end -}}
```

At this point, the final project structure is as follows:

{{< file-tree folder_slash=true highlight_list="caniuse.html,shortcode-caniuse.html,caniuse.fixit.ts,caniuse-embed-element.iife.js" >}}
- name: shortcode-caniuse
  type: dir
  children:
    - name: assets
      type: dir
      children:
        - name: js
          type: dir
          children:
            - name: caniuse.fixit.ts
              type: file
        - name: lib
          type: dir
          children:
            - name: caniuse-embed-element.iife.js
              type: file
    - name: layouts
      type: dir
      children:
        - name: _partials
          type: dir
          children:
            - name: inject
              type: dir
              children:
                - name: shortcode-caniuse.html
                  type: file
        - name: _shortcodes
          type: dir
          children:
            - name: caniuse.html
              type: file
    - name: go.mod
      type: file
    - name: hugo.toml
      type: file
    - name: LICENSE
      type: file
    - name: README.md
      type: file
    - name: theme.toml
      type: file
{{< /file-tree >}}

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

{{< version 0.3.12 >}}

In order to inject the partial `shortcode-caniuse.html` into the `custom-assets` through the [custom block][custom-block] opened by the FixIt theme, you need to fill in the following necessary configurations:

```toml
[params]

[params.custom_partials]
# ... other partials
assets = [ "inject/shortcode-caniuse.html" ]
# ... other partials
```

### Configure Site-Level Defaults

You can set site-wide default values for the shortcode parameters under `[params.caniuse_embed]`:

```toml
[params.caniuse_embed]
baseline = false
past = 2
future = 1
origin = "https://caniuse.lruihao.cn"
loading = "lazy"
cdn = ""
```

Shortcode arguments take priority over these site-level defaults.

### Use Shortcode

The `caniuse` shortcode has the following named parameters:

- **feature** _[required]_ (**first** positional parameter) Feature name
- **baseline** _[optional]_ (**second** positional parameter) Whether to show the feature support baseline view, default is `false`
- **past** _[optional]_ (**third** positional parameter) Show the past N versions that match the feature, range is `0 - 5`, default is `2`
- **future** _[optional]_ (**fourth** positional parameter) Show the future N versions that match the feature, range is `0 - 3`, default is `1`
- **origin** _[optional]_ (**fifth** positional parameter) The origin of the caniuse embed data source, default is `https://caniuse.lruihao.cn`
- **loading** _[optional]_ (**sixth** positional parameter) Loading strategy for the iframe (`eager` or `lazy`), default is `lazy`

> Click on the `#` next to a feature on the `caniuse.com` website, and the `pathname` in the URL is the `feature` parameter.

Example `caniuse` input:

```md
{{</* caniuse feature="mdn-css_types_color_light-dark" */>}}
or
{{</* caniuse "mdn-css_types_color_light-dark" */>}}
```

The rendered output looks like this:

{{< caniuse "mdn-css_types_color_light-dark" >}}

With baseline view:

```md
{{</* caniuse feature="mdn-css_types_color_light-dark" baseline="true" */>}}
or
{{</* caniuse "mdn-css_types_color_light-dark" true */>}}
```

The rendered output looks like this:

{{< caniuse "mdn-css_types_color_light-dark" true >}}

## References

- [Contributing - Develop Theme Components][components]
- [\<caniuse-embed\> Element][caniuse-embed-el]
- [The CanIUse Embed — Add support tables to your site][caniuse-embed]
- [Can I use... Support tables for HTML5, CSS3, etc][caniuse]

## Acknowledgements

- [Lruihao/caniuse-embed-element][caniuse-embed-element]
- [pengzhanbo/caniuse-embed][caniuse-embed-repo]
- [mdn-browser-compat-data][mdn-browser-compat-data]
- [Fyrd/caniuse][Fyrd/caniuse]

<!-- link reference definition -->
<!-- markdownlint-disable-file MD007 MD032 MD052 -->
[components]: {{< relref "/contributing/components" >}}
[hugo-fixit]: https://github.com/hugo-fixit
[caniuse-embed]: https://caniuse.lruihao.cn/
[caniuse-embed-el]: https://caniuse-el.lruihao.cn/
[caniuse-embed-element]: https://github.com/Lruihao/caniuse-embed-element
[caniuse-embed-repo]: https://github.com/pengzhanbo/caniuse-embed
[installation]: {{< relref "/documentation/installation" >}}
[custom-block]: {{< relref "/references/blocks#configuration" >}}
[caniuse]: https://caniuse.com/
[mdn-browser-compat-data]: https://github.com/mdn/browser-compat-data
[Fyrd/caniuse]: https://github.com/Fyrd/caniuse
