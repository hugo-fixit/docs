---
title: 如何开发一个 Hugo 主题组件
date: 2024-06-27T17:35:29+08:00
categories:
  - Guides
tags:
  - Advanced
  - Customization
  - Shortcodes
  - Components
description: 本文将通过开发一个 caniuse shortcode 来演示如何创建一个 Hugo 主题组件。
resources:
  - name: featured-image
    src: featured-image.webp
---

本文将通过开发一个 `caniuse` shortcode 来演示如何创建一个 Hugo 主题组件。

<!--more-->

## 简介

本文旨在阐述从 0 到 1 开发一个组件的过程，而不会过度解读组件的概念和原理。关于 Hugo 主题组件的更多信息，请参阅 [贡献指南 / 开发组件][components] 页面。

本文案例开源在 GitHub [hugo-fixit][hugo-fixit] 组织下。

{{< gh-repo-card-container >}}
  {{< gh-repo-card repo="hugo-fixit/shortcode-caniuse" >}}
{{< /gh-repo-card-container >}}

## 创建组件骨架

创建组件和创建主题是一样的，可以通过 `hugo new theme` 命令来创建一个新的主题组件。

```bash
hugo new theme shortcode-caniuse
```

上述命令会在 `themes` 目录创建一个 `shortcode-caniuse` 的文件夹，它是一个完整的 Hugo 主题目录结构。

由于我们只需要开发一个包含 shortcode 的组件，所以可以删除不需要的文件，删除后的目录结构如下：

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

> `theme.toml` 文件用于 Hugo 官方主题列表收录，对于主题组件来说可有可无。

为了之后能同时兼容 Git submodule 和 Hugo Modules 的安装方式，还需初始化 Git 仓库和 `go.mod` 文件：

```bash
git init
git remote add origin git@github.com:hugo-fixit/shortcode-caniuse.git
go mod init github.com/hugo-fixit/shortcode-caniuse
```

## 创建 Shortcode

在 `layouts/_shortcodes` 目录下创建一个名为 `caniuse.html` 的文件。

根据 [\<caniuse-embed\> Element][caniuse-embed] 的使用说明，编写 shortcode 内容如下：

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

## 创建 TypeScript

为了在 FixIt 主题切换黑白主题色的同时，caniuse 嵌入组件也跟着改变主题色，我们通过 TypeScript 集成 FixIt 事件总线来实现。

在 `assets/js` 目录下创建一个名为 `caniuse.fixit.ts` 的文件：

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

该脚本监听 FixIt 事件总线上的 `fixit:switch-theme` 事件，并更新页面上所有 `<caniuse-embed>` Web 组件的 `theme` 属性。

## 创建 Partial

在 `layouts/_partials/inject` 目录下创建一个名为 `shortcode-caniuse.html` 的文件。

该 partial 负责加载 `<caniuse-embed>` Web 组件库和主题切换脚本：

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

至此，最终的项目结构如下：

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

## 发布组件

发布之前，更新一下 `LICENSE`、`README.md` 和 `theme.toml` 文件，然后提交到远程仓库即可。

## 如何使用

### 安装组件

和 [安装主题][installation] 一样，安装方式有多种，选择其一即可，例如通过 Hugo Modules 安装：

```diff {title="hugo.toml"}
[module]
  [[module.imports]]
    path = "github.com/hugo-fixit/FixIt"
+ [[module.imports]]
+   path = "github.com/hugo-fixit/shortcode-caniuse"
```

### 注入 Partial

{{< version 0.3.12 >}}

为了通过 FixIt 主题开放的 [自定义块][custom-block] 将 `shortcode-caniuse.html` 注入到 `custom-assets` 中，你需要填写以下必要配置：

```toml
[params]

[params.custom_partials]
# ... other partials
assets = [ "inject/shortcode-caniuse.html" ]
# ... other partials
```

### 配置站点级默认值

你可以在 `[params.caniuse_embed]` 下为 shortcode 参数设置站点级默认值：

```toml
[params.caniuse_embed]
baseline = false
past = 2
future = 1
origin = "https://caniuse.lruihao.cn"
loading = "lazy"
cdn = ""
```

shortcode 参数优先于这些站点级默认值。

### 使用 Shortcode

`caniuse` shortcode 有以下具名参数：

- **feature** _[必需]_（**第一个**位置参数）特性名称
- **baseline** _[可选]_（**第二个**位置参数）是否显示特性支持的基线视图，默认为 `false`
- **past** _[可选]_（**第三个**位置参数）显示过去 N 个版本，范围是 `0 - 5`，默认为 `2`
- **future** _[可选]_（**第四个**位置参数）显示未来 N 个版本，范围是 `0 - 3`，默认为 `1`
- **origin** _[可选]_（**第五个**位置参数）caniuse 嵌入数据源的来源，默认为 `https://caniuse.lruihao.cn`
- **loading** _[可选]_（**第六个**位置参数）iframe 的加载策略（`eager` 或 `lazy`），默认为 `lazy`

> 点击 `caniuse.com` 网站上功能左边 `#` 号，URL 中的 `pathname` 即为 `feature` 参数。

一个 `caniuse` 示例：

```md
{{</* caniuse feature="mdn-css_types_color_light-dark" */>}}
或者
{{</* caniuse "mdn-css_types_color_light-dark" */>}}
```

呈现的输出效果如下：

{{< caniuse "mdn-css_types_color_light-dark" >}}

使用基线视图：

```md
{{</* caniuse feature="mdn-css_types_color_light-dark" baseline="true" */>}}
或者
{{</* caniuse feature="mdn-css_types_color_light-dark" true */>}}
```

呈现的输出效果如下：

{{< caniuse "mdn-css_types_color_light-dark" true >}}

## 参考

- [贡献指南 - 开发组件][components]
- [\<caniuse-embed\> Element][caniuse-embed-el]
- [The CanIUse Embed — Add support tables to your site][caniuse-embed]
- [Can I use... Support tables for HTML5, CSS3, etc][caniuse]

## 致谢

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
