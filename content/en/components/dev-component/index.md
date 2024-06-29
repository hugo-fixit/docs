---
title: 如何开发一个 Hugo 主题组件
subtitle: 等你来翻译成英文 :)
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

上述命令会在 `themes` 目录创建一个 `shortcode-caniuse` 的文件夹，它是一个完整的 Hugo 主题目录结构。

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

> 本例最终会上传仓库到 [hugo-fixit][hugo-fixit] 组织下。

## 创建 Shortcode

在 `layouts/shortcodes` 目录下创建一个名为 `caniuse.html` 的文件。

根据 [The CanIUse Embed][caniuse-embed] 的使用说明，编写 shortcode 内容如下：

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

## 创建 JS 文件

为了在 FixIt 主题切换黑白主题色的同时，shortcode 也跟着改变主题色，我们可以通过 JS 处理。

在 `assets/js` 目录下创建一个名为 `shortcode-caniuse.js` 的文件，在里面写入切换主题逻辑处理：

```js
function setCanIUseEmbedsTheme(allCanIUseEmbeds, isDark) {
  allCanIUseEmbeds.forEach(function (embed) {
    embed.setAttribute('data-theme', isDark ? 'dark' : 'light');
  });
}

function CanIUseShortcodeInit() {
  if (typeof window.fixit?.switchThemeEventSet === 'object') {
    const allCanIUseEmbeds = document.querySelectorAll('.ciu-embed');
    setCanIUseEmbedsTheme(allCanIUseEmbeds, window.fixit.isDark);
    window.fixit?.switchThemeEventSet.add(function (isDark) {
      setCanIUseEmbedsTheme(allCanIUseEmbeds, isDark);
    })
    return;
  }
}


if (document.readyState !== 'loading') {
  CanIUseShortcodeInit();
} else {
  document.addEventListener('DOMContentLoaded', caniuseShortcodeInit, false);
}
```

## 创建 Partial

在 `layouts/partials/inject` 目录下创建一个名为 `shortcode-caniuse.html` 的文件。

引用第三方插件和组件本身的 JS 资源，内容如下：

```go-html-template {title="shortcode-caniuse.html"}
{{- if .HasShortcode "caniuse" -}}
  {{- $fingerprint := .Scratch.Get "fingerprint" -}}

  {{- /* embed.js */ -}}
  {{- $source := resources.Get "lib/shortcode-caniuse/embed.js" -}}
  {{- if hugo.IsProduction | and .Site.Params.cdn -}}
    {{- $source = "https://caniuse.pengzhanbo.cn/embed.js" -}}
  {{- end -}}
  {{- dict "Source" $source "Fingerprint" $fingerprint "Attr" `type="module"` "Defer" true | dict "Scratch" .Scratch "Data" | partial "scratch/script.html" -}}

  {{- /* shortcode-caniuse.min.js */ -}}
  {{- $options := dict "targetPath" "js/shortcode-caniuse.min.js" "minify" hugo.IsProduction -}}
  {{- if not hugo.IsProduction -}}
    {{- $options = dict "sourceMap" "inline" | merge $options -}}
  {{- end -}}
  {{- dict "Source" (resources.Get "js/shortcode-caniuse.js") "Build" $options "Fingerprint" $fingerprint "Defer" true | dict "Scratch" .Scratch "Data" | partial "scratch/script.html" -}}
{{- end -}}
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

{{< version 0.3.9 >}}

通过 FixIt 主题开放的自定义块，在 `layouts/partials/custom.html` 文件将 `shortcode-caniuse.html` 注入到 `custom-assets` 中：

```go-html-template
{{- define "custom-assets" -}}
  {{- partial "inject/shortcode-caniuse.html" . -}}
{{- end -}}
```

### 使用 Shortcode

`caniuse` shortcode 有以下命名参数：

- **feature** _[必需]_（第一个位置参数）特性名称
- **past** _[可选]_（第二个位置参数）显示过去 N 个版本，范围是 `0 - 5`，默认为 `2`
- **future** _[可选]_（第三个位置参数）显示未来 N 个版本，范围是 `0 - 3`，默认为 `1`

> 点击 `caniuse.com` 网站上功能左边 `#` 号，URL 中的 `pathname` 即为 `feature` 参数。

这是一个用法示例：

```markdown
{{</* caniuse feature="flexbox" */>}}
或者
{{</* caniuse "flexbox" */>}}
```

呈现效果如下：

{{< caniuse "flexbox" >}}

## 参考

- [Can I use... Support tables for HTML5, CSS3, etc][caniuse]
- [The CanIUse Embed — Add support tables to your site][caniuse-embed]
- [贡献指南 / 开发组件][components]

## 致谢

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
