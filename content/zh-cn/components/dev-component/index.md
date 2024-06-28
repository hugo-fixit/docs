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
type: posts
---

本文将通过开发一个 `caniuse` shortcode 来演示如何创建一个 Hugo 主题组件。

<!--more-->

## 简介

关于 Hugo 主题组件的更多信息，请参阅 [贡献指南 / 开发组件][components] 页面。

## 创建组件骨架

创建组件和创建主题是一样的，可以通过 `hugo new theme` 命令来创建一个新的主题组件。

```bash
hugo new theme shortcode-caniuse
```

执行命令后，会在 `themes` 目录下创建一个名为 `shortcode-caniuse` 的目录，这个目录包含一个完整的 Hugo 主题框架。

由于我们只需要开发一个包含 shortcode 的组件，所以可以删除不需要的文件，删除后的目录结构如下：

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

为了之后能同时兼容 Git submodule 和 Hugo Modules 的安装方式，还需初始化 Git 仓库和 `go.mod` 文件：

```bash
git init
git remote add origin git@github.com:hugo-fixit/shortcode-caniuse.git
go mod init github.com/hugo-fixit/shortcode-caniuse
```

> 这里我会将仓库地址放置到 [hugo-fixit][hugo-fixit] 组织下，你可以根据自己的需求修改。

## 创建 Shortcode

在 `layouts/shortcodes` 目录下创建一个名为 `caniuse.html` 的文件，内容如下：

```go-html-template {title="caniuse.html"}
{{- /* reference https://caniuse.bitsofco.de/ */ -}}
{{- $feature := cond .IsNamedParams (.Get "feature") (.Get 0) -}}

<p
  class="ciu_embed"
  data-feature="{{ $feature }}"
  data-periods="future_1,current,past_1,past_2"
  data-accessible-colours="false"
>
  <picture>
    <source type="image/webp" srcset="https://caniuse.bitsofco.de/image/{{ $feature }}.webp" />
    <source type="image/png" srcset="https://caniuse.bitsofco.de/image/{{ $feature }}.png" />
    <img
      src="https://caniuse.bitsofco.de/image/{{ $feature }}.jpg"
      alt="Data on support for the {{ $feature }} feature across the major browsers from caniuse.com"
    />
  </picture>
</p>
{{- /* EOF */ -}}
```

## 创建 Partial

在 `layouts/partials/inject` 目录下创建一个名为 `shortcode-caniuse.html` 的文件，引用第三方插件 [The CanIUse Embed][caniuse-embed] 的 JS 资源，内容如下：

```go-html-template {title="shortcode-caniuse.html"}
{{- /* caniuse-embed.min.js */ -}}
{{- $fingerprint := .Scratch.Get "fingerprint" -}}
{{- $source := resources.Get "lib/shortcode-caniuse/caniuse-embed.min.js" -}}
{{- if hugo.IsProduction | and .Site.Params.cdn -}}
  {{- $source = "https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js" -}}
{{- end -}}
{{- dict "Source" $source "Fingerprint" $fingerprint "Defer" true | dict "Scratch" .Scratch "Data" | partial "scratch/script.html" -}}
```

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

通过 FixIt 主题开放的自定义块，在 `layouts/partials/custom.html` 文件将 `shortcode-caniuse.html` 注入到 `custom-assets` 中：

```go-html-template
{{- define "custom-assets" -}}
  {{- partial "inject/shortcode-caniuse.html" . -}}
{{- end -}}
```

### 使用 Shortcode

在需要使用的页面中调用 `caniuse` shortcode：

```md
{{</* caniuse feature="flexbox" */>}}
或者
{{</* caniuse "flexbox" */>}}
```

呈现效果如下：

{{< caniuse "flexbox" >}}

> 点击 `caniuse.com` 网站上功能左边 `#` 号，URL 中的 `path-name` 即为 `feature` 参数。

## 参考

- [Can I use... Support tables for HTML5, CSS3, etc][caniuse]
- [The CanIUse Embed — Add support tables to your site][caniuse-embed]
- [贡献指南 / 开发组件][components]

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 -->
[components]: {{< relref "/contributing/components" >}}
[hugo-fixit]: https://github.com/hugo-fixit
[caniuse-embed]: https://caniuse.bitsofco.de/
[installation]: {{< relref "/documentation/installation" >}}
[caniuse]: https://caniuse.com/
