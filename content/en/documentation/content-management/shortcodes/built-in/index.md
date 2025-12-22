---
title: Built-in Shortcodes
shortTitle: Built-in
date: 2023-02-24T22:11:22+08:00
aliases:
  - /theme-documentation-built-in-shortcodes/
author:
  name: Lruihao
  link: https://lruihao.cn
description: Shortcodes are simple snippets inside your content files calling built-in or custom templates.
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

Shortcodes are simple snippets inside your content files calling built-in or custom templates.

<!--more-->

## What a shortcode is

Hugo loves Markdown because of its simple content format, but there are times when Markdown falls short. Often, content authors are forced to add raw HTML (e.g., video `<iframe>`’s) to Markdown content. We think this contradicts the beautiful simplicity of Markdown’s syntax.

Hugo created **[shortcodes][shortcodes]** to circumvent these limitations.

A shortcode is a simple snippet inside a content file that Hugo will render using a predefined template. Note that shortcodes will not work in template files. If you need the type of drop-in functionality that shortcodes provide but in a template, you most likely want a [partial template][partial-template] instead.

In addition to cleaner Markdown, shortcodes can be updated any time to reflect new classes, techniques, or standards. At the point of site generation, Hugo shortcodes will easily merge in your changes. You avoid a possibly complicated search and replace operation.

## Use Shortcodes

{{< env "production" >}}
{{< youtube 2xkNJL4gJ9E >}}
{{< /env >}}

1. Shortcodes with raw string parameters \` \`
2. Shortcodes with Markdown `% %`
3. Shortcodes without Markdown `< >`

See more details in the [Use Shortcodes][use-shortcodes] section.

## Embedded shortcodes

Use these Hugo's embedded shortcodes as needed.

{{< admonition tip >}}
To override Hugo's embedded shortcode, copy the [source code](https://github.com/gohugoio/hugo/tree/master/tpl/tplimpl/embedded/templates/shortcodes) to a file with the same name in the `layouts/_shortcodes` directory.
{{< /admonition >}}

### figure {#figure}

> [Documentation of `figure` shortcode][figure].

Example `figure` input:

```markdown
{{</* figure src="/images/lighthouse.jpg" title="Lighthouse (figure)" */>}}
```

The rendered output looks like this:

{{< figure src="/images/lighthouse.jpg" title="Lighthouse (figure)" >}}

The HTML looks like this:

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
> Recommended to use the [Markdown code fences extended syntax][code-fences-extended] for better code block rendering and more features.

> [Documentation of `highlight` shortcode][highlight].

Example `highlight` input:

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

The rendered output looks like this:

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

> [Documentation of `instagram` shortcode][instagram].

Example `instagram` input:

```markdown
{{</* instagram CxOWiQNP2MO */>}}
```

The rendered output looks like this:

{{< env "production" >}}
{{< instagram CxOWiQNP2MO >}}
{{< /env >}}

### param

> [Documentation of `param` shortcode][param].

Example `param` input:

```markdown
{{</* param description */>}}
```

The rendered output looks like this:

{{< param description >}}

### qr

> [Documentation of `qr` shortcode][qr].

Use the self-closing syntax to pass the text as an argument:

```markdown
{{</* qr text="https://lruihao.cn" */>}}
```

Or insert the text between the opening and closing tags:

```markdown
{{</* qr */>}}
https://lruihao.cn
{{</* /qr */>}}
```

Both of the above produce this image:

{{< qr text="https://lruihao.cn" />}}

### ref

> [Documentation of `ref` shortcode][ref].
>
> Always use the `{{%/* */%}}` notation when calling this shortcode.

Example `ref` input:

```markdown
- [Built-in Shortcodes]({{%/* ref "/documentation/content-management/shortcodes/built-in" */%}})
- [Extended Shortcodes]({{%/* ref "/documentation/content-management/shortcodes/extended" */%}})
```

The rendered output looks like this:

- [Built-in Shortcodes]({{% ref "/documentation/content-management/shortcodes/built-in" %}})
- [Extended Shortcodes]({{% ref "/documentation/content-management/shortcodes/extended" %}})

The HTML looks like this:

```html
<ul>
  <li><a href="http://example.org/documentation/content-management/shortcodes/built-in">Built-in Shortcodes</a></li>
  <li><a href="http://example.org/documentation/content-management/shortcodes/extended">Extended Shortcodes</a></li>
</ul>
```

### relref

> [Documentation of `relref` shortcode][relref].
>
> Always use the `{{%/* */%}}` notation when calling this shortcode.

Example `relref` input:

```markdown
- [Built-in Shortcodes]({{%/* relref "/documentation/content-management/shortcodes/built-in" */%}})
- [Extended Shortcodes]({{%/* relref "/documentation/content-management/shortcodes/extended" */%}})
```

The rendered output looks like this:

- [Built-in Shortcodes]({{% relref "/documentation/content-management/shortcodes/built-in" %}})
- [Extended Shortcodes]({{% relref "/documentation/content-management/shortcodes/extended" %}})

The HTML looks like this:

```html
<ul>
  <li><a href="/documentation/content-management/shortcodes/built-in">Built-in Shortcodes</a></li>
  <li><a href="/documentation/content-management/shortcodes/extended">Extended Shortcodes</a></li>
</ul>
```

### x

> [Documentation of `x` shortcode][x].

Example `x` input:

```markdown
{{</* x user="SanDiegoZoo" id="1453110110599868418" */>}}
```

The rendered output looks like this:

{{< env "production" >}}
{{< x user="SanDiegoZoo" id="1453110110599868418" >}}
{{< /env >}}

### vimeo

[Documentation of `vimeo` shortcode][vimeo].

Example `vimeo` input:

```markdown
{{</* vimeo 146022717 */>}}
```

The rendered output looks like this:

{{< env "production" >}}
{{< vimeo 146022717 >}}
{{< /env >}}

### youtube

> [Documentation of `youtube` shortcode][youtube].

Example `youtube` input:

```markdown
{{</* youtube 0RKpf3rK57I */>}}
```

The rendered output looks like this:

{{< env "production" >}}
{{< youtube 0RKpf3rK57I >}}
{{< /env >}}

## Privacy configuration

To learn how to configure your Hugo site to meet the new EU privacy regulation, see [privacy protections][privacy-protections].

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 MD033 -->
[shortcodes]: https://gohugo.io/content-management/shortcodes/
[use-shortcodes]: https://gohugo.io/content-management/shortcodes/#use-shortcodes
[partial-template]: https://gohugo.io/templates/partial/
[figure]: https://gohugo.io/content-management/shortcodes/#figure
[code-fences-extended]: {{< relref path="/documentation/content-management/markdown-syntax/extended/#code-fences-extended" >}}
[highlight]: https://gohugo.io/content-management/shortcodes/#highlight
[instagram]: https://gohugo.io/content-management/shortcodes/#instagram
[param]: https://gohugo.io/content-management/shortcodes/#param
[qr]: https://gohugo.io/content-management/shortcodes/#qr
[ref]: https://gohugo.io/content-management/shortcodes/#ref
[relref]: https://gohugo.io/content-management/shortcodes/#relref
[x]: https://gohugo.io/content-management/shortcodes/#x
[vimeo]: https://gohugo.io/content-management/shortcodes/#vimeo
[youtube]: https://gohugo.io/content-management/shortcodes/#youtube
[privacy-protections]: https://gohugo.io/about/privacy/
