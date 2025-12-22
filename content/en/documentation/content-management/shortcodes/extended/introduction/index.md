---
title: Extended Shortcodes Overview
shortTitle: Overview
date: 2023-02-24T22:11:39+08:00
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
---

**FixIt** theme provides multiple shortcodes on top of built-in ones in Hugo.

<!--more-->

> [!TIP]
>
> - **FixIt's Embedded**:
>
>   To override FixIt's embedded shortcode, copy the [source code][fixit-shortcodes-src] to a file with the same name in the `layouts/_shortcodes` directory.
>
> - **Extra Components**:
>
>   To balance **simplicity** and **extensibility**, FixIt theme provides extra Hugo theme components for customization.\
>   Visit [this page][components] to browse a collection of themes components created by the Hugo FixIt community..

Use these FixIt's embedded shortcodes as needed.

## script

`script` is a shortcode to insert custom **:(fa-brands fa-js fa-fw): Javascript** in your post.

{{< admonition >}}
The script content can be guaranteed to be executed in order after all third-party libraries are loaded. So you are free to use third-party libraries.
{{< /admonition >}}

Example `script` input:

```markdown
{{</* script */>}}
console.log('Hello FixIt!');
{{</* /script */>}}
```

You can see the output in the console of the developer tool.

{{< script >}}
console.log('Hello FixIt!');
{{< /script >}}

## style

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

```markdown
{{</* style "text-align:right; strong{color:#00b1ff;}" */>}}
This is a **right-aligned** paragraph.
{{</* /style */>}}
```

The rendered output looks like this:

{{< style "text-align:right; strong{color:#00b1ff;}" >}}
This is a **right-aligned** paragraph.
{{< /style >}}

## link

`link` shortcode is an alternative to [Markdown link syntax][md-link]. `link` shortcode can provide some other features and can be used in code blocks.

The complete usage of [local resource references][contents-organization] is supported.

The `link` shortcode has the following named parameters:

- **href** _[required]_ (**first** positional parameter)

    Destination of the link.

- **content** _[optional]_ (**second** positional parameter)

    Content of the link, default value is the value of **href** parameter.

    _Markdown or HTML format is supported._

- **title** _[optional]_ (**third** positional parameter)

    `title` attribute of the HTML `a` tag, which will be shown when hovering on the link.

- **card** _[optional]_ (**fourth** positional parameter) {{< version 0.2.12 >}}

    Whether to display as a card link, whose default value is `false`.

- **card-icon** _[optional]_ (**fifth** positional parameter) {{< version 0.3.17 changed >}}

    Icon of the card link, support Font Awesome class name or image URL. If not specified, try to fetch the favicon from link.

- **download** _[optional]_ {{< version 0.2.12 >}}

    `optional` attribute of the HTML `a` tag.

- **class** _[optional]_

    `class` attribute of the HTML `a` tag.

- **rel** _[optional]_

    Additional `rel` attributes of the HTML `a` tag.

- **external-icon** _[optional]_ {{< version 0.2.14 >}}

    Whether to automatically display the external link icon.

- **noreferrer** _[optional]_ {{< version 0.2.16 >}}

    Whether to add `noreferrer` to the `rel` attribute, default: `true`.

Example `link` input:

```markdown
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

- {{< link "https://assemble.io" >}}
- {{< link "mailto:contact@revolunet.com" >}}
- {{< link "https://assemble.io" Assemble >}}

Example `link` input with a title:

```markdown
{{</* link "https://github.com/upstage/" Upstage "Visit Upstage!" */>}}
Or
{{</* link href="https://github.com/upstage/" content=Upstage title="Visit Upstage!" */>}}
```

The rendered output looks like this (hover over the link, there should be a tooltip):

{{< link "https://github.com/upstage/" Upstage "Visit Upstage!" >}}

Example `link` input for card type:

```markdown
{{</* link "https://github.com/hugo-fixit/FixIt" "FixIt Theme" "source of FixIt Theme" true */>}}
{{</* link "https://lruihao.cn" "Lruihao Blog" "Lruihao Blog" true "https://lruihao.cn/images/avatar.jpg" */>}}
{{</* link "https://lruihao.cn" "Lruihao Blog" "Lruihao Blog" true "fa-solid fa-blog" */>}}
```

The rendered output looks like this:

{{< link "https://github.com/hugo-fixit/FixIt" "FixIt Theme" "source of FixIt Theme" true >}}
{{< link "https://lruihao.cn" "Lruihao Blog" "Lruihao Blog" true "https://lruihao.cn/images/avatar.jpg" >}}
{{< link "https://lruihao.cn" "Lruihao Blog" "Lruihao Blog" true "fa-solid fa-blog" >}}

Example `link` input with download attribute:

```markdown
{{</* link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" */>}}
{{</* link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" card=true */>}}
```

The rendered output looks like this:

{{< link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" >}}
{{< link href="/music/Wavelength.mp3" content="Wavelength.mp3" title="Download Wavelength.mp3" download="Wavelength.mp3" card=true >}}

## image {#image}

{{< version 0.2.18 changed >}}

`image` shortcode is an alternative to [`figure` shortcode][sc-figure]. `image` shortcode can take full advantage of the dependent library of [lightgallery][lightgallery].

The complete usage of [local resource references][contents-organization] is supported.

The `image` shortcode has the following named parameters:

- **src** _[required]_ (**first** positional parameter)

    URL of the image to be displayed.

- **alt** _[optional]_ (**second** positional parameter)

    Alternate text for the image if the image cannot be displayed, default value is the value of **src** parameter.

    _Markdown or HTML format is supported._

- **caption** _[optional]_ (**third** positional parameter)

    Image caption.

    _Markdown or HTML format is supported._

- **title** _[optional]_

    Image title that will be shown when hovering on the image.

- **class** _[optional]_

    `class` attribute of the HTML `figure` tag.

- **height** _[optional]_

    `height` attribute of the image.

- **width** _[optional]_

    `width` attribute of the image.

- **linked** _[optional]_

    Whether the image needs to be hyperlinked, default value is `true`.

- **rel** _[optional]_

    Additional `rel` attributes of the HTML `a` tag, if **linked** parameter is set to `true`.

- **loading** _[optional]_ {{< version 0.2.18 >}}

    Additional `loading` attribute of the HTML `a` tag, optional values: `eager`, `lazy`, default value is `lazy`.

- **optimise** _[optional]_ {{< version 0.3.17 >}}

    Whether to optimise the image, override the site configuration.

- **cacheRemote** _[optional]_ {{< version 0.3.17 >}}

    Whether to cache the remote image, override the site configuration.

Example `image` input:

```markdown
{{</* image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" */>}}
```

The rendered output looks like this:

{{< image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" >}}

## details

{{< version 0.2.13 >}} {{< version 0.2.14 changed >}}

`details` is a shortcode to insert **:(fa-brands fa-html5 fa-fw): HTML5 tag** `details` and `summary` in your post.

The `details` shortcode has the following named parameters:

- **summary** _[optional]_ (**first** positional parameter)

    The content of the child summary element rendered from Markdown to HTML. Default is `Details`.

- **open** _[optional]_ (**second** positional parameter) {{< version 0.3.9 >}}

    Whether to initially display the content of the `details` element. Default is `false`.

- **class** _[optional]_ (**third** positional parameter) {{< version 0.3.17 >}}

    The value of the element’s `class` attribute.

- **name** _[optional]_ {{< version 0.3.17 >}}

    The value of the element’s `name` attribute.

- **title** _[optional]_ {{< version 0.3.17 >}}

    The value of the element’s `title` attribute.

Example `details` input:

```markdown
{{</* details "**Copyright** 2022." */>}}
*All pages and graphics on this web site are the property of FixIt.*
{{</* /details */>}}
Or
{{</* details summary="**Copyright** 2022." */>}}
*All pages and graphics on this web site are the property of FixIt.*
{{</* /details */>}}
```

The rendered output looks like this:

{{< details "**Copyright** 2022." true >}}
_All pages and graphics on this web site are the property of FixIt._
{{< /details >}}

## center-quote

The `center-quote` shortcode inserts a centered blockquote element into your content.

{{< tabs >}}
{{% tab title="Admonition center type (v0.4.0+)" %}}

```markdown
> [!center]
> This paragraph is **center-aligned**.
```

{{% /tab %}}
{{% tab title="Markdown attribute" %}}

```markdown
> This paragraph is **center-aligned**.
> {.blockquote-center}
```

{{% /tab %}}
{{% tab title="Shortcode usage" %}}

```markdown
{{</* center-quote */>}}
This paragraph is **center-aligned**.
{{</* /center-quote */>}}
```

{{% /tab %}}
{{< /tabs >}}

All three approaches produce the same result:

{{< center-quote >}}
This paragraph is **center-aligned**.
{{< /center-quote >}}

## raw

{{< version 0.2.16 >}}

`raw` is a shortcode to insert raw **:(fab fa-html5 fa-fw): HTML** content in your post.
This is useful when you want to include some Markdown content to **avoid being rendered or escaped** by Hugo.

The `raw` shortcode has only one parameter:

- **tag** _[optional]_ (**first** positional parameter)

    The tag name of the wrapper HTML element, whose default value is `div`.

Example `raw` input:

```markdown
Raw content using Markdown and HTML syntax: {{</* raw "span" */>}}**Hello** <strong>FixIt</strong>{{</* /raw */>}}
```

The rendered output looks like this:

Raw content using Markdown and HTML syntax: {{< raw "span" >}}**Hello** <strong>FixIt</strong>{{< /raw >}}

## reward

{{< version 0.2.17 >}}

The `reward` shortcode has the following named parameters:

- **wechatpay** _[optional]_ (**first** positional parameter)
- **alipay** _[optional]_ (**second** positional parameter)
- **paypal** _[optional]_ (**third** positional parameter)
- **bitcoin** _[optional]_ (**fourth** positional parameter)
- **author** _[optional]_ (**fifth** positional parameter)
- **comment** _[optional]_ (**sixth** positional parameter)
- **mode** _[optional]_ (**seventh** positional parameter)

    {{< version 0.2.18 >}} display mode of QR code images, optional values: ["static", "fixed"], default: `static`

Example `reward` input:

```markdown
{{</* reward wechatpay="/images/wechatpay.gif" alipay="/images/wechatpay.gif" comment="Buy me a coffee~" */>}}
```

The rendered output looks like this:

{{< reward wechatpay="/images/wechatpay.gif" alipay="/images/wechatpay.gif" comment="Buy me a coffee~" >}}

## version

> [!NOTE]
> The `version` shortcode is used to display the version of the specified project. This was originally a shortcode used internally by FixIt. Starting from the {{< version 0.3.15 changed >}} version, the restriction has been relaxed and the specified repository can be configured through `params.repoVersion`.

The `version` shortcode has the following positional parameters:

- **first** positional parameter _[required]_ **release tag**
- **second** positional parameter _[optional]_ **type**，optional values: ["new", "changed", "deleted", "deprecated"], default: `new`
- **third** positional parameter _[optional]_ **URL prefix for the release tag**, default: `https://github.com/hugo-fixit/FixIt/releases/tag/v`
- **fourth** positional parameter _[optional]_ **project name**, default: `FixIt`

Example `version` input:

```markdown
{{</* version 0.3.15 */>}}
{{</* version 0.3.15 changed */>}}
{{</* version 0.3.15 deleted */>}}
{{</* version 0.3.15 deprecated */>}}
```

The rendered output looks like this:

{{< version 0.3.15 >}}\
{{< version 0.3.15 changed >}}\
{{< version 0.3.15 deleted >}}\
{{< version 0.3.15 deprecated >}}

## env

{{< version 0.4.0 >}}

The `env` shortcode is used to conditionally render content based on the current Hugo environment.

In regions with restricted networks, loading YouTube, Twitter, etc. locally slows development; render them only in production and skip in dev to speed things up.

Example `env` input:

```markdown
{{</* env "development" */>}}
This content is only rendered in the **development** environment.
{{</* /env */>}}
{{</* env "production" */>}}
This content is only rendered in the **production** environment.
{{</* /env */>}}
```

The rendered output looks like this:

{{< env "development" >}}
This content is only rendered in the **development** environment.
{{< /env >}}
{{< env "production" >}}
This content is only rendered in the **production** environment.
{{< /env >}}

## admonition

The `admonition` shortcode allows you to add types of callout boxes to your content.

The full documentation is provided in [Extended Shortcode - admonition][sc-admonition].

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

The `music` shortcode embeds a responsive music player based on [APlayer.js][aplayer] and [MetingJS][metingjs] library.

The full documentation is provided in [Extended Shortcode - music][sc-music].

## aplayer and audio

{{< version 0.4.0 >}}

If you need more advanced controls (custom playlist, mini mode, custom audio type...) over the music player, you can use the `aplayer` shortcode along with the `audio` shortcode to reach full power of [APlayer.js][aplayer].

The full documentation is provided in [Extended Shortcode - aplayer][sc-aplayer].

## spotify

The `spotify` shortcode embeds a responsive music player for Spotify music.

The full documentation is provided in [Extended Shortcode - spotify][sc-spotify].

## bilibili

The `bilibili` shortcode embeds a responsive video player for bilibili videos.

The full documentation is provided in [Extended Shortcode - bilibili][sc-bilibili].

## douyin

The `douyin` shortcode embeds a responsive video player for douyin videos.

The full documentation is provided in [Extended Shortcode - douyin][sc-douyin].

## typeit

The `typeit` shortcode provides typing animation based on [TypeIt][typeitjs].

The full documentation is provided in [Extended Shortcode - typeit][sc-typeit].

## timeline

The `timeline` shortcode allows you to create a timeline.

The full documentation is provided in [Extended Shortcode - timeline][sc-timeline].

## fixit-encryptor

{{< version 0.2.15 >}}

You can use `fixit-encryptor` shortcode to encrypt partial content.

The full documentation is provided in [Content Encryption][content-encryption].

## bluesky

{{< version 0.3.17 >}}

The `bluesky` shortcode embeds a post from Bluesky.

The full documentation is provided in [Extended Shortcode - bluesky][sc-bluesky].

## gist

The `gist` shortcode embeds a GitHub Gist in your content.

The full documentation is provided in [Extended Shortcode - gist][sc-gist].

## tabs and tab

{{< version 0.4.0 >}}

The `tabs` and `tab` shortcodes allow you to create tabbed content with various styles and layouts.

The full documentation is provided in [Extended Shortcode - tabs][sc-tabs].

<!-- link reference definition -->
<!-- markdownlint-disable-file reference-links-images no-inline-html link-fragments -->
[fixit-shortcodes-src]: https://github.com/hugo-fixit/FixIt/tree/main/layouts/_shortcodes
[components]: {{< relref path="/ecosystem" >}}
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
[sc-aplayer]: {{< relref path="/documentation/content-management/shortcodes/extended/aplayer" >}}
[sc-spotify]: {{< relref path="/documentation/content-management/shortcodes/extended/spotify" >}}
[sc-bilibili]: {{< relref path="/documentation/content-management/shortcodes/extended/bilibili" >}}
[sc-douyin]: {{< relref path="/documentation/content-management/shortcodes/extended/douyin" >}}
[sc-typeit]: {{< relref path="/documentation/content-management/shortcodes/extended/typeit" >}}
[sc-timeline]: {{< relref path="/documentation/content-management/shortcodes/extended/timeline" >}}
[content-encryption]: {{< relref path="/documentation/content-management/encryption" >}}
[sc-bluesky]: {{< relref path="/documentation/content-management/shortcodes/extended/bluesky" >}}
[sc-gist]: {{< relref path="/documentation/content-management/shortcodes/extended/gist" >}}
[sc-tabs]: {{< relref path="/documentation/content-management/shortcodes/extended/tabs" >}}
