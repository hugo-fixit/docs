---
title: 内置 Shortcodes
shortTitle: 内置
date: 2023-02-24T22:11:22+08:00
aliases:
  - /zh-cn/theme-documentation-built-in-shortcodes/
author:
  name: Lruihao
  link: https://lruihao.cn
description: Shortcodes 是在内容文件中调用内置或自定义模板的简单片段。
resources:
  - name: featured-image
    src: featured-image.webp
tags:
  - Shortcodes
  - Content
  - Basics
categories:
  - Documentation
collections:
  - Shortcodes
lightgallery: true
---

Shortcodes 是在内容文件中调用内置或自定义模板的简单片段。

<!--more-->

## 什么是 Shortcode

Hugo 喜欢 Markdown，因为它的内容格式简单，但有时 Markdown 会有局限性。通常，内容作者被迫向 Markdown 内容中添加原始 HTML（例如，视频 `<iframe>`）。我们认为这与 Markdown 语法的美丽简洁相矛盾。

Hugo 为了避免这些限制创建了 **[shortcodes][shortcodes]**。

shortcode 是一个简单的片段，位于内容文件中，Hugo 将使用预定义的模板进行渲染。请注意，shortcode 在模板文件中不起作用。如果你需要模板中 shortcodes 提供的插入功能，你很可能需要一个 [partial template][partial-template]。

除了更干净的 Markdown，shortcodes 可以随时更新以反映新的类、技术或标准。在站点生成时，Hugo shortcodes 将轻松合并你的更改。你避免了可能复杂的搜索和替换操作。

## 使用 Shortcodes

{{< env "production" >}}
{{< youtube 2xkNJL4gJ9E >}}
{{< /env >}}

1. 带有原始字体串格式的 Shortcodes \` \`
2. 带有 Markdown 的 Shortcodes `% %`
3. 不带有 Markdown 的 Shortcodes `< >`

在 [Use Shortcodes][use-shortcodes] 部分查看更多细节。

## 内置 Shortcodes

根据需要使用这些 Hugo 内置 Shortcodes。

{{< admonition tip >}}
要覆盖 Hugo 内置 Shortcodes，请将 [源代码](https://github.com/gohugoio/hugo/tree/master/tpl/tplimpl/embedded/templates/_shortcodes) 复制到 `layouts/_shortcodes` 目录中同名的文件中。
{{< /admonition >}}

### figure {#figure}

> [`figure` shortcode 的文档][figure]。

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

### highlight

> [!TIP]
> 推荐使用 [Markdown 代码块扩展语法][code-fences-extended] 以获得更好的代码块渲染和更多功能。

> [`highlight` shortcode 的文档][highlight]。

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

### instagram

> [`instagram` shortcode 的文档](https://gohugo.io/content-management/shortcodes#instagram)。

一个 `instagram` 示例：

```markdown
{{</* instagram CxOWiQNP2MO */>}}
```

呈现的输出效果如下：

{{< env "production" >}}
{{< instagram CxOWiQNP2MO >}}
{{< /env >}}

### param

> [`param` shortcode 的文档][param]。

一个 `param` 示例：

```markdown
{{</* param description */>}}
```

呈现的输出效果如下：

{{< param description >}}

### qr

> [Documentation of `qr` shortcode][qr].

使用自闭合语法将文本作为参数传递：

```markdown
{{</* qr text="https://lruihao.cn" */>}}
```

或者将文本插入在开放和关闭标签之间：

```markdown
{{</* qr */>}}
https://lruihao.cn
{{</* /qr */>}}
```

以上两种方法都会生成这个图片：

{{< qr text="https://lruihao.cn" />}}

### ref

> [`ref` shortcode 的文档][ref]。
>
> 调用此 shortcode 时始终使用 `{{%/* */%}}` 符号。

一个 `ref` 示例：

```markdown
- [内置 Shortcodes]({{%/* ref "/documentation/content-management/shortcodes/built-in" */%}})
- [扩展 Shortcodes]({{%/* ref "/documentation/content-management/shortcodes/extended" */%}})
```

呈现的输出效果如下：

- [内置 Shortcodes]({{% ref "/documentation/content-management/shortcodes/built-in" %}})
- [扩展 Shortcodes]({{% ref "/documentation/content-management/shortcodes/extended" %}})

输出的 HTML 看起来像这样：

```html
<ul>
  <li><a href="http://example.org/documentation/content-management/shortcodes/built-in">内置 Shortcodes</a></li>
  <li><a href="http://example.org/documentation/content-management/shortcodes/extended">扩展 Shortcodes</a></li>
</ul>
```

### relref

> [`relref` shortcode 的文档][relref]。
>
> 调用此 shortcode 时始终使用 `{{%/* */%}}` 符号。

一个 `relref` 示例：

```markdown
- [内置 Shortcodes]({{%/* relref "/documentation/content-management/shortcodes/built-in" */%}})
- [扩展 Shortcodes]({{%/* relref "/documentation/content-management/shortcodes/extended" */%}})
```

呈现的输出效果如下：

- [内置 Shortcodes]({{% relref "/documentation/content-management/shortcodes/built-in" %}})
- [扩展 Shortcodes]({{% relref "/documentation/content-management/shortcodes/extended" %}})

输出的 HTML 看起来像这样：

```html
<ul>
  <li><a href="/documentation/content-management/shortcodes/built-in">内置 Shortcodes</a></li>
  <li><a href="/documentation/content-management/shortcodes/extended">扩展 Shortcodes</a></li>
</ul>
```

### x

> [`x` shortcode 的文档][x]。

一个 `x` 示例：

```markdown
{{</* x user="SanDiegoZoo" id="1453110110599868418" */>}}
```

呈现的输出效果如下：

{{< env "production" >}}
{{< x user="SanDiegoZoo" id="1453110110599868418" >}}
{{< /env >}}

### vimeo

> [`vimeo` shortcode 的文档][vimeo]。

一个 `vimeo` 示例：

```markdown
{{</* vimeo 146022717 */>}}
```

呈现的输出效果如下：

{{< env "production" >}}
{{< vimeo 146022717 >}}
{{< /env >}}

### youtube

> [`youtube` shortcode 的文档][youtube]。

一个 `youtube` 示例：

```markdown
{{</* youtube 0RKpf3rK57I */>}}
```

呈现的输出效果如下：

{{< env "production" >}}
{{< youtube 0RKpf3rK57I >}}
{{< /env >}}

## 隐私配置

要了解如何配置你的 Hugo 网站以满足新的欧盟隐私法规，请参阅 [隐私保护][privacy-protections]。

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 MD033 -->
[shortcodes]: https://gohugo.io/content-management/shortcodes/
[use-shortcodes]: https://gohugo.io/content-management/shortcodes/#use-shortcodes
[partial-template]: https://gohugo.io/templates/partial/
[figure]: https://gohugo.io/content-management/shortcodes/#figure
[code-fences-extended]: {{< relref path="/documentation/content-management/markdown-syntax/extended/#code-fences-extended" >}}
[highlight]: https://gohugo.io/content-management/shortcodes/#highlight
[param]: https://gohugo.io/content-management/shortcodes/#param
[qr]: https://gohugo.io/content-management/shortcodes/#qr
[ref]: https://gohugo.io/content-management/shortcodes/#ref
[relref]: https://gohugo.io/content-management/shortcodes/#relref
[x]: https://gohugo.io/content-management/shortcodes/#twitter
[vimeo]: https://gohugo.io/content-management/shortcodes/#vimeo
[youtube]: https://gohugo.io/content-management/shortcodes/#youtube
[privacy-protections]: https://gohugo.io/about/privacy/
