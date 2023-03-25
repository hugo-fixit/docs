---
title: 扩展 Shortcodes 概述
date: 2023-02-24T22:11:39+08:00
type: posts
aliases:
  - /zh-cn/theme-documentation-extended-shortcodes/
author:
  name: Lruihao
  link: https://lruihao.cn
description: FixIt 主题在 Hugo 内置的 shortcode 的基础上提供多个扩展的 shortcode。
resources:
  - name: featured-image
    src: featured-image.jpg
  - name: featured-image-preview
    src: featured-image-preview.jpg
tags:
  - Shortcodes
  - Content
  - Advanced
categories:
  - Documentation
lightgallery: true
math: true
reward: true
hiddenFromHomePage: true
---

**FixIt** 主题在 Hugo 内置的 shortcode 的基础上提供多个扩展的 shortcode。

<!--more-->

## style

{{< version 0.2.0 changed >}}

{{< admonition >}}
Hugo **extended** 版本对于 `style` shortcode 是必需的。
{{< /admonition >}}

`style` shortcode 用来在你的文章中插入自定义样式。

`style` shortcode 有两个位置参数。

第一个参数是自定义样式的内容。它支持 [:(fa-brands fa-sass fa-fw): SASS][sass] 中的嵌套语法，
并且 `&` 指代这个父元素。

第二个参数是包裹你要更改样式的内容的 HTML 标签，默认值是 `div`。

一个 `style` 示例：

```go-html-template
{{</* style "text-align:right; strong{color:#00b1ff;}" */>}}
This is a **right-aligned** paragraph.
{{</* /style */>}}
```

呈现的输出效果如下：

{{< style "text-align:right; strong{color:#00b1ff;}" >}}
This is a **right-aligned** paragraph.
{{< /style >}}

## link

{{< version 0.2.0 >}}

`link` shortcode 是 [Markdown 链接语法][md-link] 的替代。
`link` shortcode 可以提供一些其它的功能并且可以在代码块中使用。

{{< version 0.2.10 >}} 支持 [本地资源引用][contents-organization] 的完整用法。

`link` shortcode 有以下命名参数：

* **href** *[必需]*（**第一个**位置参数）

    链接的目标。

* **content** *[可选]*（**第二个**位置参数）

    链接的内容，默认值是 **href** 参数的值。

    *支持 Markdown 或者 HTML 格式。*

* **title** *[可选]*（**第三个**位置参数）

    HTML `a` 标签 的 `title` 属性，当悬停在链接上会显示的提示。

* **card** *[可选]*（**第四个**位置参数）{{< version 0.2.12 >}}

    是否显示为卡片式链接，默认值 `false`。

* **download** *[可选]* {{< version 0.2.12 >}}

    HTML `a` 标签 的 `download` 属性。

* **class** *[可选]*

    HTML `a` 标签 的 `class` 属性。

* **rel** *[可选]*

    HTML `a` 标签 的 `rel` 补充属性。

* **external-icon** *[可选]* {{< version 0.2.14 >}}

    是否自动显示外链图标。

* **noreferrer** *[可选]* {{< version 0.2.16 >}}

    `rel` 属性是否添加 `noreferrer`, 默认：`true`。

一个 `link` 示例：

```go-html-template
{{</* link "https://assemble.io" */>}}
或者
{{</* link href="https://assemble.io" */>}}

{{</* link "mailto:contact@revolunet.com" */>}}
或者
{{</* link href="mailto:contact@revolunet.com" */>}}

{{</* link "https://assemble.io" Assemble */>}}
或者
{{</* link href="https://assemble.io" content=Assemble */>}}
```

呈现的输出效果如下：

* {{< link "https://assemble.io" >}}
* {{< link "mailto:contact@revolunet.com" >}}
* {{< link "https://assemble.io" Assemble >}}

一个带有标题的 `link` 示例：

```go-html-template
{{</* link "https://github.com/upstage/" Upstage "Visit Upstage!" */>}}
或者
{{</* link href="https://github.com/upstage/" content=Upstage title="Visit Upstage!" */>}}
```

呈现的输出效果如下 （将鼠标悬停在链接上，会有一行提示）:

{{< link "https://github.com/upstage/" Upstage "Visit Upstage!" >}}

一个卡片式 `link` 示例：

```go-html-template
{{</* link "https://github.com/hugo-fixit/FixIt" "FixIt Theme" "source of FixIt Theme" true */>}}
或者
{{</* link href="https://github.com/hugo-fixit/FixIt" content="FixIt Theme" title="source of FixIt Theme" card=true */>}}
```

呈现的输出效果如下：

{{< link "https://github.com/hugo-fixit/FixIt" "FixIt Theme" "source of FixIt Theme" true >}}

一个可下载的 `link` 示例：

```go-html-template
{{</* link href="/music/Wavelength.mp3" content="Wavelength" title="Download Wavelength.mp3" download="Wavelength.mp3" */>}}

{{</* link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" card=true */>}}
```

呈现的输出效果如下：

{{< link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" >}}

{{< link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" card=true >}}

## image {#image}

{{< version 0.2.18 changed >}}

`image` shortcode 是 [`figure` shortcode][figure] 的替代。`image` shortcode 可以充分利用 [lightgallery][lightgallery]。

{{< version 0.2.10 >}} 支持 [本地资源引用][contents-organization] 的完整用法。

`image` shortcode 有以下命名参数：

* **src** *[必需]*（**第一个**位置参数）

    图片的 URL。

* **alt** *[可选]*（**第二个**位置参数）

    图片无法显示时的替代文本，默认值是 **src** 参数的值。

    *支持 Markdown 或者 HTML 格式。*

* **caption** *[可选]*（**第三个**位置参数）

    图片标题。

    *支持 Markdown 或者 HTML 格式。*

* **title** *[可选]*

    当悬停在图片上会显示的提示。

* **class** *[可选]*

    HTML `figure` 标签的 `class` 属性。

* **src_s** *[可选]*

    图片缩略图的 URL, 用在画廊模式中，默认值是 **src** 参数的值。

* **src_l** *[可选]*

    高清图片的 URL, 用在画廊模式中，默认值是 **src** 参数的值。

* **height** *[可选]*

    图片的 `height` 属性。

* **width** *[可选]*

    图片的 `width` 属性。

* **linked** *[可选]*

    图片是否需要被链接，默认值是 `true`。

* **rel** *[可选]*

    HTML `a` 标签 的 `rel` 补充属性，仅在 **linked** 属性设置成 `true` 时有效。

* **loading** *[可选]* {{< version 0.2.18 >}}

    HTML `a` 标签 的 `loading` 补充属性，可选值：`eager`、`lazy`，默认值是 `lazy`。

一个 `image` 示例：

```go-html-template
{{</* image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" src_s="/images/lighthouse-small.jpg" src_l="/images/lighthouse-large.jpg" */>}}
```

呈现的输出效果如下：

{{< image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" src_s="/images/lighthouse-small.jpg" src_l="/images/lighthouse-large.jpg" >}}

## admonition

`admonition` shortcode 支持 **12** 种 帮助你在页面中插入提示的横幅。

*支持 Markdown 或者 HTML 格式。*

{{< admonition >}}
一个 **注意** 横幅
{{< /admonition >}}

{{< admonition abstract >}}
一个 **摘要** 横幅
{{< /admonition >}}

{{< admonition info >}}
一个 **信息** 横幅
{{< /admonition >}}

{{< admonition tip >}}
一个 **技巧** 横幅
{{< /admonition >}}

{{< admonition success >}}
一个 **成功** 横幅
{{< /admonition >}}

{{< admonition question >}}
一个 **问题** 横幅
{{< /admonition >}}

{{< admonition warning >}}
一个 **警告** 横幅
{{< /admonition >}}

{{< admonition failure >}}
一个 **失败** 横幅
{{< /admonition >}}

{{< admonition danger >}}
一个 **危险** 横幅
{{< /admonition >}}

{{< admonition bug >}}
一个 **Bug** 横幅
{{< /admonition >}}

{{< admonition example >}}
一个 **示例** 横幅
{{< /admonition >}}

{{< admonition quote >}}
一个 **引用** 横幅
{{< /admonition >}}

`admonition` shortcode 有以下命名参数：

* **type** *[必需]*（**第一个**位置参数）

    `admonition` 横幅的类型，默认值是 `note`。

* **title** *[可选]*（**第二个**位置参数）

    `admonition` 横幅的标题，默认值是 **type** 参数的值。（支持 markdown）{{< version 0.2.14 changed >}}

* **open** *[可选]*（**第三个**位置参数） {{< version 0.2.0 changed >}}

    横幅内容是否默认展开，默认值是 `true`。

一个 `admonition` 示例：

```go-html-template
{{</* admonition type=tip title="This is a tip" open=false */>}}
一个 **技巧** 横幅
{{</* /admonition */>}}
或者
{{</* admonition tip "This is a tip" false */>}}
一个 **技巧** 横幅
{{</* /admonition */>}}
```

呈现的输出效果如下：

{{< admonition tip "This is a tip" false >}}
一个 **技巧** 横幅
{{< /admonition >}}

## mermaid

`mermaid` shortcode 使用 [Mermaid][mermaidjs] 库提供绘制图表和流程图的功能。

完整文档请查看页面 [扩展 Shortcode - mermaid][sc-mermaid]。

## echarts

`echarts` shortcode 使用 [ECharts][echarts] 库提供数据可视化的功能。

完整文档请查看页面 [扩展 Shortcode - echarts][sc-echarts]。

## mapbox

`mapbox` shortcode 使用 [Mapbox GL JS][mapbox] 库提供互动式地图的功能。

完整文档请查看页面 [扩展 Shortcode - mapbox][sc-mapbox]。

## music

`music` shortcode 基于 [APlayer][aplayer] 和 [MetingJS][metingjs] 库提供了一个内嵌的响应式音乐播放器。

完整文档请查看页面 [扩展 Shortcode - music][sc-music]。

## bilibili

`bilibili` shortcode 提供了一个内嵌的用来播放 bilibili 视频的响应式播放器。

完整文档请查看页面 [扩展 Shortcode - bilibili][sc-bilibili]。

## typeit

`typeit` shortcode 基于 [TypeIt][typeitjs] 提供了打字动画。

完整文档请查看页面 [扩展 Shortcode - typeit][sc-typeit]。

## script

{{< version 0.2.8 >}}

`script` shortcode 用来在你的文章中插入 **:(fa-brands fa-js fa-fw): Javascript** 脚本。

{{< admonition >}}
脚本内容可以保证在所有的第三方库加载之后按顺序执行。
所以你可以自由地使用第三方库。
{{< /admonition >}}

一个 `script` 示例：

```go-html-template
{{</* script */>}}
console.log('Hello FixIt!');
{{</* /script */>}}
```

你可以在开发者工具的控制台中看到输出。

{{< script >}}
console.log('Hello FixIt!');
{{< /script >}}

## details

{{< version 0.2.13 >}} {{< version 0.2.14 changed >}}

`details` shortcode 用来在你的文章中插入 **:(fa-brands fa-html5 fa-fw): HTML5 标签** details 和 summary。

`details` shortcode 只有一个参数：

* **summary** *[可选]* (**第一个**位置参数）

    summary 标签的内容（支持 markdown）

一个 `details` 示例：

```go-html-template
{{</* details "**Copyright** 2022." */>}}
*All pages and graphics on this web site are the property of FixIt.*
{{</* /details */>}}
或者
{{</* details summary="**Copyright** 2022." */>}}
*All pages and graphics on this web site are the property of FixIt.*
{{</* /details */>}}
```

呈现的输出效果如下：

{{< details "**Copyright** 2022." >}}
*All pages and graphics on this web site are the property of FixIt.*
{{< /details >}}

## center-quote

{{< version 0.2.13 >}}

`center-quote` shortcode 用来在你的文章中插入文本居中的 blockquote 标签。

一个 `center-quote` 示例：

```go-html-template
{{</* center-quote */>}}
**hello** *world*  
this is a center-quote shortcode example.
{{</* /center-quote */>}}
```

呈现的输出效果如下：

{{< center-quote >}}
**hello** *world*  
this is a center-quote shortcode example.
{{< /center-quote >}}

## fixit-encryptor

{{< version 0.2.15 >}}

您可以使用 `fixit-encryptor` shortcode 来加密部分内容。

完整文档请查看页面 [内容加密][content-encryption]。

## raw

{{< version 0.2.16 >}}

`raw` shortcode 用来在你的文章中插入原始 **:(fab fa-html5 fa-fw): HTML** 内容。

`raw` shortcode 只有一个参数：

* **tag** *[可选]* (**第一个**位置参数）

    原始内容的父级元素 HTML 标签，默认值是 `div`。

一个 `raw` 示例:

```go-html-template
{{</* raw */>}}行内公式：\(\mathbf{E}=\sum_{i} \mathbf{E}_{i}=\mathbf{E}_{1}+\mathbf{E}_{2}+\mathbf{E}_{3}+\cdots\){{</* /raw */>}}

{{</* raw */>}}
公式块：
\[ a=b+c \\ d+e=f \]
{{</* /raw */>}}

原始的带有 Markdown 和 HTML 语法的内容：{{</* raw "span" */>}}**Hello** <strong>FixIt</strong>{{</* /raw */>}}
```

呈现的输出效果如下：

{{< raw >}}行内公式：\(\mathbf{E}=\sum_{i} \mathbf{E}_{i}=\mathbf{E}_{1}+\mathbf{E}_{2}+\mathbf{E}_{3}+\cdots\){{< /raw >}}

{{< raw >}}
公式块：
\[ a=b+c \\ d+e=f \]
{{< /raw >}}

原始的带有 Markdown 和 HTML 语法的内容：{{< raw "span" >}}**Hello** <strong>FixIt</strong>{{< /raw >}}

## reward

{{< version 0.2.18 changed >}}

`reward` shortcode 有以下命名参数：

* **wechatpay** *[可选]*（**第一个**位置参数）
* **alipay** *[可选]*（**第二个**位置参数）
* **paypal** *[可选]*（**第三个**位置参数）
* **bitcoin** *[可选]*（**第四个**位置参数）
* **author** *[可选]*（**第五个**位置参数）
* **comment** *[可选]*（**第六个**位置参数）
* **mode** *[可选]*（**第七个**位置参数）

    {{< version 0.2.18 >}} 二维码图片展示模式，可选值：["static", "fixed"]，默认：`static`

一个 `reward` 示例:

```go-html-template
{{</* reward wechatpay="/images/wechatpay.gif" alipay="/images/alipay.gif" comment="给作者买杯卡布奇诺～" */>}}
```

呈现的输出效果如下：

{{< reward wechatpay="/images/wechatpay.gif" alipay="/images/alipay.gif" comment="给作者买杯卡布奇诺～" >}}

[sass]: https://sass-lang.com/documentation/style-rules/declarations#nesting
[md-link]: {{< relref path="/documentation/content-management/markdown-syntax/basics#links" >}}
[contents-organization]: {{< relref path="/documentation/content-management/introduction#contents-organization" >}}
[sc-figure]: {{< relref path="/documentation/content-management/shortcodes/built-in#figure" >}}
[lightgallery]: https://github.com/sachinchoolur/lightgallery
[mermaidjs]: https://mermaid.js.org/
[echarts]: https://echarts.apache.org/
[mapbox]: https://docs.mapbox.com/mapbox-gl-js
[aplayer]: https://github.com/MoePlayer/APlayer
[metingjs]: https://github.com/metowolf/MetingJS
[typeitjs]: https://typeitjs.com/
[sc-mermaid]: {{< relref path="/documentation/content-management/shortcodes/extended/mermaid" >}}
[sc-echarts]: {{< relref path="/documentation/content-management/shortcodes/extended/echarts" >}}
[sc-mapbox]: {{< relref path="/documentation/content-management/shortcodes/extended/mapbox" >}}
[sc-music]: {{< relref path="/documentation/content-management/shortcodes/extended/music" >}}
[sc-bilibili]: {{< relref path="/documentation/content-management/shortcodes/extended/bilibili" >}}
[sc-typeit]: {{< relref path="/documentation/content-management/shortcodes/extended/typeit" >}}
[content-encryption]: {{< relref path="/documentation/content-management/encryption" >}}
