---
title: Extended Shortcodes Overview
date: 2023-02-24T22:11:39+08:00
type: posts
aliases:
  - /theme-documentation-extended-shortcodes/
author:
  name: Lruihao
  link: https://lruihao.cn
description: FixIt theme provides multiple shortcodes on top of built-in ones in Hugo.
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

**FixIt** theme provides multiple shortcodes on top of built-in ones in Hugo.

<!--more-->

## style

{{< version 0.2.0 changed >}}

{{< admonition >}}
Hugo **extended** version is necessary for `style` shortcode.
{{< /admonition >}}

`style` is a shortcode to insert custom style in your post.

The `style` shortcode has two positional parameters.

The **first** one is the custom style content,
which supports nesting syntax in [:(fa-brands fa-sass fa-fw): SASS][sass]
and `&` referring to this parent HTML element.

And the **second** one is the tag name of the HTML element wrapping the content you want to change style, and whose default value is `div`.

Example `style` input:

```go-html-template
{{</* style "text-align:right; strong{color:#00b1ff;}" */>}}
This is a **right-aligned** paragraph.
{{</* /style */>}}
```

The rendered output looks like this:

{{< style "text-align:right; strong{color:#00b1ff;}" >}}
This is a **right-aligned** paragraph.
{{< /style >}}

## link

{{< version 0.2.0 >}}

`link` shortcode is an alternative to [Markdown link syntax][md-link]. `link` shortcode can provide some other features and can be used in code blocks.

{{< version 0.2.10 >}} The complete usage of [local resource references][contents-organization] is supported.

The `link` shortcode has the following named parameters:

* **href** *[required]* (**first** positional parameter)

    Destination of the link.

* **content** *[optional]* (**second** positional parameter)

    Content of the link, default value is the value of **href** parameter.

    *Markdown or HTML format is supported.*

* **title** *[optional]* (**third** positional parameter)

    `title` attribute of the HTML `a` tag, which will be shown when hovering on the link.

* **card** *[optional]* (**fourth** positional parameter) {{< version 0.2.12 >}}

    Whether to display as a card link, whose default value is `false`.

* **download** *[optional]* {{< version 0.2.12 >}}

    `optional` attribute of the HTML `a` tag.

* **class** *[optional]*

    `class` attribute of the HTML `a` tag.

* **rel** *[optional]*

    Additional `rel` attributes of the HTML `a` tag.

* **external-icon** *[optional]* {{< version 0.2.14 >}}

    Whether to automatically display the external link icon.

* **noreferrer** *[optional]* {{< version 0.2.16 >}}

    Whether to add `noreferrer` to the `rel` attribute, default: `true`.

Example `link` input:

```go-html-template
{{</* link "https://assemble.io" */>}}
Or
{{</* link href="https://assemble.io" */>}}

{{</* link "mailto:contact@revolunet.com" */>}}
Or
{{</* link href="mailto:contact@revolunet.com" */>}}

{{</* link "https://assemble.io" Assemble */>}}
Or
{{</* link href="https://assemble.io" content=Assemble */>}}
```

The rendered output looks like this:

* {{< link "https://assemble.io" >}}
* {{< link "mailto:contact@revolunet.com" >}}
* {{< link "https://assemble.io" Assemble >}}

Example `link` input with a title:

```go-html-template
{{</* link "https://github.com/upstage/" Upstage "Visit Upstage!" */>}}
Or
{{</* link href="https://github.com/upstage/" content=Upstage title="Visit Upstage!" */>}}
```

The rendered output looks like this (hover over the link, there should be a tooltip):

{{< link "https://github.com/upstage/" Upstage "Visit Upstage!" >}}

Example `link` input for card type:

```go-html-template
{{</* link "https://github.com/hugo-fixit/FixIt" "FixIt Theme" "source of FixIt Theme" true */>}}
Or
{{</* link href="https://github.com/hugo-fixit/FixIt" content="FixIt Theme" title="source of FixIt Theme" card=true */>}}
```

The rendered output looks like this:

{{< link "https://github.com/hugo-fixit/FixIt" "FixIt Theme" "source of FixIt Theme" true >}}

Example `link` input with download attribute:

```go-html-template
{{</* link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" */>}}

{{</* link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" card=true */>}}
```

The rendered output looks like this:

{{< link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" >}}

{{< link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" card=true >}}

## image {#image}

{{< version 0.2.18 changed >}}

`image` shortcode is an alternative to [`figure` shortcode][sc-figure]. `image` shortcode can take full advantage of the dependent library of [lightgallery][lightgallery].

{{< version 0.2.10 >}} The complete usage of [local resource references][contents-organization] is supported.

The `image` shortcode has the following named parameters:

* **src** *[required]* (**first** positional parameter)

    URL of the image to be displayed.

* **alt** *[optional]* (**second** positional parameter)

    Alternate text for the image if the image cannot be displayed, default value is the value of **src** parameter.

    *Markdown or HTML format is supported.*

* **caption** *[optional]* (**third** positional parameter)

    Image caption.

    *Markdown or HTML format is supported.*

* **title** *[optional]*

    Image title that will be shown when hovering on the image.

* **class** *[optional]*

    `class` attribute of the HTML `figure` tag.

* **src_s** *[optional]*

    URL of the image thumbnail, used for lightgallery, default value is the value of **src** parameter.

* **src_l** *[optional]*

    URL of the HD image, used for lightgallery, default value is the value of **src** parameter.

* **height** *[optional]*

    `height` attribute of the image.

* **width** *[optional]*

    `width` attribute of the image.

* **linked** *[optional]*

    Whether the image needs to be hyperlinked, default value is `true`.

* **rel** *[optional]*

    Additional `rel` attributes of the HTML `a` tag, if **linked** parameter is set to `true`.

* **loading** *[optional]* {{< version 0.2.18 >}}

    Additional `loading` attribute of the HTML `a` tag, optional values: `eager`, `lazy`, default value is `lazy`.

Example `image` input:

```go-html-template
{{</* image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" src_s="/images/lighthouse-small.jpg" src_l="/images/lighthouse-large.jpg" */>}}
```

The rendered output looks like this:

{{< image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" src_s="/images/lighthouse-small.jpg" src_l="/images/lighthouse-large.jpg" >}}

## admonition

The `admonition` shortcode supports **12** types of banners to help you put notice in your page.

*Markdown or HTML format in the content is supported.*

{{< admonition >}}
A **note** banner
{{< /admonition >}}

{{< admonition abstract >}}
An **abstract** banner
{{< /admonition >}}

{{< admonition info >}}
A **info** banner
{{< /admonition >}}

{{< admonition tip >}}
A **tip** banner
{{< /admonition >}}

{{< admonition success >}}
A **success** banner
{{< /admonition >}}

{{< admonition question >}}
A **question** banner
{{< /admonition >}}

{{< admonition warning >}}
A **warning** banner
{{< /admonition >}}

{{< admonition failure >}}
A **failure** banner
{{< /admonition >}}

{{< admonition danger >}}
A **danger** banner
{{< /admonition >}}

{{< admonition bug >}}
A **bug** banner
{{< /admonition >}}

{{< admonition example >}}
An **example** banner
{{< /admonition >}}

{{< admonition quote >}}
A **quote** banner
{{< /admonition >}}

The `admonition` shortcode has the following named parameters:

* **type** *[optional]* (**first** positional parameter)

    Type of the `admonition` banner, default value is `note`.

* **title** *[optional]* (**second** positional parameter)

    Title of the `admonition` banner, default value is the value of **type** parameter. (markdown support) {{< version 0.2.14 changed >}}

* **open** *[optional]* (**third** positional parameter) {{< version 0.2.0 changed >}}

    Whether the content will be expandable by default, default value is `true`.

Example `admonition` input:

```go-html-template
{{</* admonition type=tip title="This is a tip" open=false */>}}
A **tip** banner
{{</* /admonition */>}}
Or
{{</* admonition tip "This is a tip" false */>}}
A **tip** banner
{{</* /admonition */>}}
```

The rendered output looks like this:

{{< admonition tip "This is a tip" false >}}
A **tip** banner
{{< /admonition >}}

## mermaid

The `mermaid` shortcode supports diagrams in Hugo with [Mermaid][mermaidjs] library.

The full documentation is provided in [Extended Shortcode - mermaid][sc-mermaid].

## echarts

The `echarts` shortcode supports data visualization in Hugo with [ECharts][echarts] library.

The full documentation is provided in [Extended Shortcode - echarts][sc-echarts].

## mapbox

The `mapbox` shortcode supports interactive maps in Hugo with [Mapbox GL JS][mapbox] library.

The full documentation is provided in [Extended Shortcode - mapbox][sc-mapbox].

## music

The `music` shortcode embeds a responsive music player based on [APlayer][aplayer] and [MetingJS][metingjs] library.

The full documentation is provided in [Extended Shortcode - music][sc-music].

## bilibili

The `bilibili` shortcode embeds a responsive video player for bilibili videos.

The full documentation is provided in [Extended Shortcode - bilibili][sc-bilibili].

## typeit

The `typeit` shortcode provides typing animation based on [TypeIt][typeitjs].

The full documentation is provided in [Extended Shortcode - typeit][sc-typeit].

## script

{{< version 0.2.8 >}}

`script` is a shortcode to insert custom **:(fa-brands fa-js fa-fw): Javascript** in your post.

{{< admonition >}}
The script content can be guaranteed to be executed in order after all third-party libraries are loaded. So you are free to use third-party libraries.
{{< /admonition >}}

Example `script` input:

```go-html-template
{{</* script */>}}
console.log('Hello FixIt!');
{{</* /script */>}}
```

You can see the output in the console of the developer tool.

{{< script >}}
console.log('Hello FixIt!');
{{< /script >}}

## details

{{< version 0.2.13 >}} {{< version 0.2.14 changed >}}

`details` is a shortcode to insert **:(fa-brands fa-html5 fa-fw): HTML5 tag** details and summary in your post.

The `details` shortcode has only one parameter:

* **summary** *[optional]* (**first** positional parameter)

    summary of details. (markdown support)

Example `details` input:

```go-html-template
{{</* details "**Copyright** 2022." */>}}
*All pages and graphics on this web site are the property of FixIt.*
{{</* /details */>}}
Or
{{</* details summary="**Copyright** 2022." */>}}
*All pages and graphics on this web site are the property of FixIt.*
{{</* /details */>}}
```

The rendered output looks like this:

{{< details "**Copyright** 2022." >}}
*All pages and graphics on this web site are the property of FixIt.*
{{< /details >}}

## center-quote

{{< version 0.2.13 >}}

`center-quote` is a shortcode to insert centered text blockquote tag in your post.

Example `center-quote` input:

```go-html-template
{{</* center-quote */>}}
**hello** *world*  
this is a center-quote shortcode example.
{{</* /center-quote */>}}
```

The rendered output looks like this:

{{< center-quote >}}
**hello** *world*  
this is a center-quote shortcode example.
{{< /center-quote >}}

## fixit-encryptor

{{< version 0.2.15 >}}

You can use `fixit-encryptor` shortcode to encrypt partial content.

The full documentation is provided in [Content Encryption][content-encryption].

## raw

{{< version 0.2.16 >}}

`raw` is a shortcode to insert raw **:(fab fa-html5 fa-fw): HTML** content in your post.
This is useful when you want to include some Markdown content to **avoid being rendered or escaped** by Hugo.

The `raw` shortcode has only one parameter:

* **tag** *[optional]* (**first** positional parameter)

    The tag name of the wrapper HTML element, whose default value is `div`.

Example `raw` input:

```go-html-template
{{</* raw */>}}Inline Formula: \(\mathbf{E}=\sum_{i} \mathbf{E}_{i}=\mathbf{E}_{1}+\mathbf{E}_{2}+\mathbf{E}_{3}+\cdots\){{</* /raw */>}}

{{</* raw */>}}
Block Formula:
\[ a=b+c \\ d+e=f \]
{{</* /raw */>}}

Raw content using Markdown and HTML syntax: {{</* raw "span" */>}}**Hello** <strong>FixIt</strong>{{</* /raw */>}}
```

The rendered output looks like this:

 {{< raw >}}Inline Formula: \(\mathbf{E}=\sum_{i} \mathbf{E}_{i}=\mathbf{E}_{1}+\mathbf{E}_{2}+\mathbf{E}_{3}+\cdots\){{< /raw >}}

{{< raw >}}
Block Formula:
\[ a=b+c \\ d+e=f \]
{{< /raw >}}

Raw content using Markdown and HTML syntax: {{< raw "span" >}}**Hello** <strong>FixIt</strong>{{< /raw >}}

## reward

{{< version 0.2.17 >}}

The `reward` shortcode has the following named parameters:

* **wechatpay** *[optional]* (**first** positional parameter)
* **alipay** *[optional]* (**second** positional parameter)
* **paypal** *[optional]* (**third** positional parameter)
* **bitcoin** *[optional]* (**fourth** positional parameter)
* **author** *[optional]* (**fifth** positional parameter)
* **comment** *[optional]* (**sixth** positional parameter)
* **mode** *[optional]* (**seventh** positional parameter)

    {{< version 0.2.18 >}} display mode of QR code images, optional values: ["static", "fixed"], default: `static`

Example `reward` input:

```go-html-template
{{</* reward wechatpay="/images/wechatpay.gif" alipay="/images/wechatpay.gif" comment="Buy me a coffee~" */>}}
```

The rendered output looks like this:

{{< reward wechatpay="/images/wechatpay.gif" alipay="/images/wechatpay.gif" comment="Buy me a coffee~" >}}

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
