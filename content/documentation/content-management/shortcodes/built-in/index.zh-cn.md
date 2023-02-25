---
title: 内置 Shortcodes
date: 2023-02-24T22:11:22+08:00
type: posts
aliases:
  - /zh-cn/theme-documentation-built-in-shortcodes/
author:
  name: Lruihao
  link: https://lruihao.cn
description: Hugo 提供了多个内置的 Shortcodes, 以方便作者保持 Markdown 内容的整洁。
resources:
  - name: featured-image
    src: featured-image.webp
tags:
  - Shortcodes
  - Content
  - Basics
categories:
  - Documentation
lightgallery: true
hiddenFromHomePage: true
---

**Hugo** 提供了多个内置的 Shortcodes, 以方便作者保持 Markdown 内容的整洁。

<!--more-->

Hugo 使用 Markdown 为其简单的内容格式。但是，Markdown 在很多方面都无法很好地支持。你可以使用纯 HTML 来扩展可能性。

但这恰好是一个坏主意。大家使用 Markdown, 正是因为它即使不经过渲染也可以轻松阅读。应该尽可能避免使用 HTML 以保持内容简洁。

为了避免这种限制，Hugo 创建了 [shortcodes][shortcodes]。
shortcode 是一个简单代码段，可以生成合理的 HTML 代码，并且符合 Markdown 的设计哲学。

Hugo 附带了一组预定义的 shortcodes, 它们实现了一些非常常见的用法。
提供这些 shortcodes 是为了方便保持你的 Markdown 内容简洁。

{{< admonition tip "使用 Shortcodes" >}}

1. 带有原始字体串格式的 Shortcodes \` \`
2. 带有 Markdown 的 Shortcodes `% %`
3. 不带有 Markdown 的 Shortcodes `< >`

详见 [shortcodes/#use-shortcodes](https://gohugo.io/content-management/shortcodes/#use-shortcodes)

{{< /admonition >}}

## figure {#figure}

[`figure` 的文档][figure]

一个 `figure` 示例：

```markdown
{{</* figure src="/images/lighthouse.jpg" title="Lighthouse (figure)" */>}}
```

呈现的输出效果如下：

{{< figure src="/images/lighthouse.jpg" title="Lighthouse (figure)" >}}

输出的 HTML 看起来像这样：

```html
<figure>
  <img src="/images/lighthouse.jpg" />
  <figcaption>
    <h4>Lighthouse (figure)</h4>
  </figcaption>
</figure>
```

## gist

[`gist` 的文档][gist]

一个 `gist` 示例：

```markdown
{{</* gist spf13 7896402 */>}}
```

呈现的输出效果如下：

{{< gist spf13 7896402 >}}

输出的 HTML 看起来像这样：

```html
<script type="application/javascript" src="https://gist.github.com/spf13/7896402.js"></script>
```

## highlight

[`highlight` 的文档][highlight]

一个 `highlight` 示例：

```markdown
{{</* highlight html */>}}
<section id="main">
    <div>
        <h1 id="title">{{ .Title }}</h1>
        {{ range .Pages }}
            {{ .Render "summary"}}
        {{ end }}
    </div>
</section>
{{</* /highlight */>}}
```

呈现的输出效果如下：

{{< highlight html >}}
<section id="main">
    <div>
        <h1 id="title">{{ .Title }}</h1>
        {{ range .Pages }}
            {{ .Render "summary"}}
        {{ end }}
    </div>
</section>
{{< /highlight >}}

## param

[`param` 的文档][param]

一个 `param` 示例：

```markdown
{{</* param description */>}}
```

呈现的输出效果如下：

{{< param description >}}

## ref 和 relref {#ref-and-relref}

[`ref` 和 `relref` 的文档][ref-and-relref]

## tweet

[`tweet` 的文档][tweet]

一个 `tweet` 示例：

```markdown
{{</* tweet user="SanDiegoZoo" id="1453110110599868418" */>}}
```

呈现的输出效果如下：

{{< tweet user="SanDiegoZoo" id="1453110110599868418" >}}

## vimeo

[`vimeo` 的文档][vimeo]

一个 `vimeo` 示例：

```markdown
{{</* vimeo 146022717 */>}}
```

呈现的输出效果如下：

{{< vimeo 146022717 >}}

## youtube

[`youtube` 的文档][youtube]

一个 `youtube` 示例：

```markdown
{{</* youtube w7Ft2ymGmfc */>}}
```

呈现的输出效果如下：

{{< youtube w7Ft2ymGmfc >}}

[shortcodes]: https://gohugo.io/extras/shortcodes/
[figure]: https://gohugo.io/content-management/shortcodes#figure
[gist]: https://gohugo.io/content-management/shortcodes#gist
[highlight]: https://gohugo.io/content-management/shortcodes#highlight
[param]: https://gohugo.io/content-management/shortcodes#param
[ref-and-relref]: https://gohugo.io/content-management/shortcodes#ref-and-relref
[tweet]: https://gohugo.io/content-management/shortcodes#tweet
[vimeo]: https://gohugo.io/content-management/shortcodes#vimeo
[youtube]: https://gohugo.io/content-management/shortcodes#youtube
