---
title: 扩展 Shortcodes 概述
date: 2023-02-24T22:11:39+08:00
aliases:
  - /zh-cn/theme-documentation-extended-shortcodes/
author:
  name: Lruihao
  link: https://lruihao.cn
description: FixIt 主题在 Hugo 内置的 shortcode 的基础上提供多个扩展的 Shortcodes。
resources:
  - name: featured-image
    src: featured-image.jpg
  - name: featured-image-preview
    src: featured-image-preview.webp
tags:
  - Shortcodes
  - Content
  - Advanced
categories:
  - Documentation
collections:
  - Extended Shortcodes
lightgallery: true
math: true
---

**FixIt** 主题在 Hugo 内置的 shortcode 的基础上提供多个扩展的 Shortcodes。

<!--more-->

## FixIt 主题内置

根据需要使用这些 FixIt 主题扩展的 Shortcodes。

{{< admonition tip >}}
要覆盖 FixIt 主题扩展的 Shortcodes，请将 [源代码](https://github.com/hugo-fixit/FixIt/tree/main/layouts/shortcodes) 复制到 `layouts/shortcodes` 目录中同名的文件中。
{{< /admonition >}}

### style

{{< admonition >}}
Hugo **extended** 版本对于 `style` shortcode 是必需的。
{{< /admonition >}}

`style` shortcode 用来在你的文章中插入自定义样式。

`style` shortcode 有两个位置参数。

第一个参数是自定义样式的内容。它支持 [:(fa-brands fa-sass fa-fw): SASS][sass] 中的嵌套语法，
并且 `&` 指代这个父元素。

第二个参数是包裹你要更改样式的内容的 HTML 标签，默认值是 `div`。

一个 `style` 示例：

```markdown
{{</* style "text-align:right; strong{color:#00b1ff;}" */>}}
This is a **right-aligned** paragraph.
{{</* /style */>}}
```

呈现的输出效果如下：

{{< style "text-align:right; strong{color:#00b1ff;}" >}}
This is a **right-aligned** paragraph.
{{< /style >}}

### link

`link` shortcode 是 [Markdown 链接语法][md-link] 的替代。
`link` shortcode 可以提供一些其它的功能并且可以在代码块中使用。

支持 [本地资源引用][contents-organization] 的完整用法。

`link` shortcode 有以下命名参数：

- **href** _[必需]_（**第一个**位置参数）

    链接的目标。

- **content** _[可选]_（**第二个**位置参数）

    链接的内容，默认值是 **href** 参数的值。

    _支持 Markdown 或者 HTML 格式。_

- **title** _[可选]_（**第三个**位置参数）

    HTML `a` 标签 的 `title` 属性，当悬停在链接上会显示的提示。

- **card** _[可选]_（**第四个**位置参数）{{< version 0.2.12 >}}

    是否显示为卡片式链接，默认值 `false`。

- **card-icon** _[可选]_ (**第五个**位置参数) {{< version 0.3.17 changed >}}

    卡片式链接的图标，支持图片链接和 Font Awesome 图标。如果未指定，则尝试从链接中获取 favicon。

- **download** _[可选]_ {{< version 0.2.12 >}}

    HTML `a` 标签 的 `download` 属性。

- **class** _[可选]_

    HTML `a` 标签 的 `class` 属性。

- **rel** _[可选]_

    HTML `a` 标签 的 `rel` 补充属性。

- **external-icon** _[可选]_ {{< version 0.2.14 >}}

    是否自动显示外链图标。

- **noreferrer** _[可选]_ {{< version 0.2.16 >}}

    `rel` 属性是否添加 `noreferrer`, 默认：`true`。

一个 `link` 示例：

```markdown
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

- {{< link "https://assemble.io" >}}
- {{< link "mailto:contact@revolunet.com" >}}
- {{< link "https://assemble.io" Assemble >}}

一个带有标题的 `link` 示例：

```markdown
{{</* link "https://github.com/upstage/" Upstage "Visit Upstage!" */>}}
或者
{{</* link href="https://github.com/upstage/" content=Upstage title="Visit Upstage!" */>}}
```

呈现的输出效果如下（将鼠标悬停在链接上，会有一行提示）:

{{< link "https://github.com/upstage/" Upstage "Visit Upstage!" >}}

一个卡片式 `link` 示例：

```markdown
{{</* link "https://github.com/hugo-fixit/FixIt" "FixIt Theme" "source of FixIt Theme" true */>}}
{{</* link "https://lruihao.cn" "Lruihao Blog" "Lruihao Blog" true "https://lruihao.cn/images/avatar.jpg" */>}}
{{</* link "https://lruihao.cn" "Lruihao Blog" "Lruihao Blog" true "fa-solid fa-blog" */>}}
```

呈现的输出效果如下：

{{< link "https://github.com/hugo-fixit/FixIt" "FixIt Theme" "source of FixIt Theme" true >}}
{{< link "https://lruihao.cn" "Lruihao Blog" "Lruihao Blog" true "https://lruihao.cn/images/avatar.jpg" >}}
{{< link "https://lruihao.cn" "Lruihao Blog" "Lruihao Blog" true "fa-solid fa-blog" >}}

一个可下载的 `link` 示例：

```markdown
{{</* link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" */>}}
{{</* link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" card=true */>}}
```

呈现的输出效果如下：

{{< link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" >}}
{{< link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" card=true >}}

### image {#image}

{{< version 0.2.18 changed >}}

`image` shortcode 是 [`figure` shortcode][figure] 的替代。`image` shortcode 可以充分利用 [lightgallery][lightgallery]。

支持 [本地资源引用][contents-organization] 的完整用法。

`image` shortcode 有以下命名参数：

- **src** _[必需]_（**第一个**位置参数）

    图片的 URL。

- **alt** _[可选]_（**第二个**位置参数）

    图片无法显示时的替代文本，默认值是 **src** 参数的值。

    _支持 Markdown 或者 HTML 格式。_

- **caption** _[可选]_（**第三个**位置参数）

    图片标题。

    _支持 Markdown 或者 HTML 格式。_

- **title** _[可选]_

    当悬停在图片上会显示的提示。

- **class** _[可选]_

    HTML `figure` 标签的 `class` 属性。

- **height** _[可选]_

    图片的 `height` 属性。

- **width** _[可选]_

    图片的 `width` 属性。

- **linked** _[可选]_

    图片是否需要被链接，默认值是 `true`。

- **rel** _[可选]_

    HTML `a` 标签 的 `rel` 补充属性，仅在 **linked** 属性设置成 `true` 时有效。

- **loading** _[可选]_ {{< version 0.2.18 >}}

    HTML `a` 标签 的 `loading` 补充属性，可选值：`eager`、`lazy`，默认值是 `lazy`。

- **optimise** _[可选]_ {{< version 0.3.17 >}}

    图片是否需要被优化，覆盖全局配置。

- **cacheRemote** _[可选]_ {{< version 0.3.17 >}}

    是否缓存远程图片，覆盖全局配置。

一个 `image` 示例：

```markdown
{{</* image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" */>}}
```

呈现的输出效果如下：

{{< image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" >}}

### admonition

`admonition` shortcode 允许你在内容中添加各种类型的标注。

完整文档请查看页面 [扩展 Shortcode - admonition][sc-admonition]。

### mermaid

`mermaid` shortcode 使用 [Mermaid][mermaidjs] 库提供绘制图表和流程图的功能。

完整文档请查看页面 [扩展 Shortcode - mermaid][sc-mermaid]。

### echarts

`echarts` shortcode 使用 [ECharts][echarts] 库提供数据可视化的功能。

完整文档请查看页面 [扩展 Shortcode - echarts][sc-echarts]。

### mapbox

`mapbox` shortcode 使用 [Mapbox GL JS][mapbox] 库提供互动式地图的功能。

完整文档请查看页面 [扩展 Shortcode - mapbox][sc-mapbox]。

### music

`music` shortcode 基于 [APlayer][aplayer] 和 [MetingJS][metingjs] 库提供了一个内嵌的响应式音乐播放器。

完整文档请查看页面 [扩展 Shortcode - music][sc-music]。

### spotify

`spotify` shortcode 提供了一个内嵌的用来播放 Spotify 音乐的响应式播放器。

完整文档请查看页面 [扩展 Shortcode - spotify][sc-spotify]。

### bilibili

`bilibili` shortcode 提供了一个内嵌的用来播放 bilibili 视频的响应式播放器。

完整文档请查看页面 [扩展 Shortcode - bilibili][sc-bilibili]。

### douyin

`douyin` shortcode 提供了一个内嵌的用来播放抖音视频的响应式播放器。

完整文档请查看页面 [扩展 Shortcode - douyin][sc-douyin]。

### typeit

`typeit` shortcode 基于 [TypeIt][typeitjs] 提供了打字动画。

完整文档请查看页面 [扩展 Shortcode - typeit][sc-typeit]。

### script

`script` shortcode 用来在你的文章中插入 **:(fa-brands fa-js fa-fw): Javascript** 脚本。

{{< admonition >}}
脚本内容可以保证在所有的第三方库加载之后按顺序执行。
所以你可以自由地使用第三方库。
{{< /admonition >}}

一个 `script` 示例：

```markdown
{{</* script */>}}
console.log('Hello FixIt!');
{{</* /script */>}}
```

你可以在开发者工具的控制台中看到输出。

{{< script >}}
console.log('Hello FixIt!');
{{< /script >}}

### details

{{< version 0.2.13 >}} {{< version 0.2.14 changed >}}

`details` shortcode 用来在你的文章中插入 **:(fa-brands fa-html5 fa-fw): HTML5 标签** `details` 和 `summary`。

`details` shortcode 有以下命名参数：

- **summary** _[可选]_ (**第一个**位置参数）

    从 Markdown 渲染到 HTML 的子 `summary` 元素的内容。默认值是 `Details`。

- **open** _[可选]_ (**第二个**位置参数）{{< version 0.3.9 >}}

    是否初始显示 `details` 元素的内容，默认值是 `false`。

- **class** _[optional]_ (**第三个**位置参数）{{< version 0.3.17 >}}

    元素的 `class` 属性的值。

- **name** _[optional]_ {{< version 0.3.17 >}}

    元素的 `name` 属性的值。

- **title** _[optional]_ {{< version 0.3.17 >}}

    元素的 `title` 属性的值。

一个 `details` 示例：

```markdown
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
_All pages and graphics on this web site are the property of FixIt._
{{< /details >}}

### center-quote

{{< version 0.2.13 >}}

`center-quote` shortcode 用来在你的文章中插入文本居中的 blockquote 标签。

一个 `center-quote` 示例：

```markdown
{{</* center-quote */>}}
this is a **center-quote** _shortcode_ example.
{{</* /center-quote */>}}
```

呈现的输出效果如下：

{{< center-quote >}}
this is a **center-quote** _shortcode_ example.
{{< /center-quote >}}

### fixit-encryptor

{{< version 0.2.15 >}}

你可以使用 `fixit-encryptor` shortcode 来加密部分内容。

完整文档请查看页面 [内容加密][content-encryption]。

### raw

{{< version 0.2.16 >}}

`raw` shortcode 用来在你的文章中插入原始 **:(fab fa-html5 fa-fw): HTML** 内容。

`raw` shortcode 只有一个参数：

- **tag** _[可选]_ (**第一个**位置参数）

    原始内容的父级元素 HTML 标签，默认值是 `div`。

一个 `raw` 示例：

```markdown
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

### reward

{{< version 0.2.18 changed >}}

`reward` shortcode 有以下命名参数：

- **wechatpay** _[可选]_（**第一个**位置参数）
- **alipay** _[可选]_（**第二个**位置参数）
- **paypal** _[可选]_（**第三个**位置参数）
- **bitcoin** _[可选]_（**第四个**位置参数）
- **author** _[可选]_（**第五个**位置参数）
- **comment** _[可选]_（**第六个**位置参数）
- **mode** _[可选]_（**第七个**位置参数）

    {{< version 0.2.18 >}} 二维码图片展示模式，可选值：["static", "fixed"]，默认：`static`

一个 `reward` 示例：

```markdown
{{</* reward wechatpay="/images/wechatpay.gif" alipay="/images/alipay.gif" comment="给作者买杯卡布奇诺～" */>}}
```

呈现的输出效果如下：

{{< reward wechatpay="/images/wechatpay.gif" alipay="/images/alipay.gif" comment="给作者买杯卡布奇诺～" >}}

### version

> [!NOTE]
> `version` shortcode 用来显示指定项目的版本，这本来是 FixIt 内部使用的 shortcode，从 {{< version 0.3.15 changed >}} 版本开始放开了限制，可以通过 `params.repoVersion` 配置指定仓库。

`version` shortcode 有以下位置参数：

- 第一个位置参数 _[必选]_ **版本号**
- 第二个位置参数 _[可选]_ **类型**，可选值：["new", "changed", "deleted"]，默认：`new`
- 第三个位置参数 _[可选]_ **发行标签的 URL 前缀**，默认：`https://github.com/hugo-fixit/FixIt/releases/tag/v`
- 第四个位置参数 _[可选]_ **项目名称**，默认：`FixIt`

一个 `version` 示例：

```markdown
{{</* version 0.3.15 */>}}
{{</* version 0.3.15 changed */>}}
{{</* version 0.3.15 deleted */>}}
```

呈现的输出效果如下：

{{< version 0.3.15 >}}\
{{< version 0.3.15 changed >}}\
{{< version 0.3.15 deleted >}}

### bluesky

{{< version 0.3.17 >}}

`bluesky` 是一个用来嵌入 [Bluesky][bluesky] 的帖子的 shortcode。

`bluesky` shortcode 有以下命名参数：

- **link** _[必选]_

    Bluesky 帖子的 URL。

一个 `bluesky` 示例：

```markdown
{{</* bluesky link="https://bsky.app/profile/bsky.app/post/3latotljnec2h" */>}}
```

呈现的输出效果如下：

{{< bluesky link="https://bsky.app/profile/bsky.app/post/3latotljnec2h" >}}

## 额外的主题组件

FixIt 主题旨在 **简洁性** 和 **可扩展性** 之间取得平衡。为此，我们开发了一系列额外的 Hugo 主题组件供用户选择。

访问 [此页面][components] 浏览由 Hugo FixIt 社区创建的主题组件合集。

<!-- link reference definition -->
<!-- markdownlint-disable-file reference-links-images no-inline-html link-fragments -->
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
[sc-admonition]: {{< relref path="/documentation/content-management/shortcodes/extended/admonition" >}}
[sc-mermaid]: {{< relref path="/documentation/content-management/shortcodes/extended/mermaid" >}}
[sc-echarts]: {{< relref path="/documentation/content-management/shortcodes/extended/echarts" >}}
[sc-mapbox]: {{< relref path="/documentation/content-management/shortcodes/extended/mapbox" >}}
[sc-music]: {{< relref path="/documentation/content-management/shortcodes/extended/music" >}}
[sc-spotify]: {{< relref path="/documentation/content-management/shortcodes/extended/spotify" >}}
[sc-bilibili]: {{< relref path="/documentation/content-management/shortcodes/extended/bilibili" >}}
[sc-douyin]: {{< relref path="/documentation/content-management/shortcodes/extended/douyin" >}}
[sc-typeit]: {{< relref path="/documentation/content-management/shortcodes/extended/typeit" >}}
[content-encryption]: {{< relref path="/documentation/content-management/encryption" >}}
[bluesky]: https://bsky.app/
[components]: relref "/ecosystem"
