---
title: Built-in Shortcodes
date: 2023-02-24T22:11:22+08:00
type: posts
aliases:
  - /theme-documentation-built-in-shortcodes/
author:
  name: Lruihao
  link: https://lruihao.cn
description: Hugo provides multiple built-in shortcodes for author convenience and to keep your markdown content clean.
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

**Hugo** provides multiple built-in shortcodes for author convenience and to keep your markdown content clean.

<!--more-->

Hugo uses Markdown for its simple content format. However, there are a lot of things that Markdown doesn’t support well. You could use pure HTML to expand possibilities.

But this happens to be a bad idea. Everyone uses Markdown because it’s pure and simple to read even non-rendered. You should avoid HTML to keep it as simple as possible.

To avoid this limitations, Hugo created [shortcodes][shortcodes].
A shortcode is a simple snippet that can generate reasonable HTML code and conforms to Markdown's design philosophy.

Hugo ships with a set of predefined shortcodes that represent very common usage. These shortcodes are provided for author convenience and to keep your markdown content clean.

{{< admonition tip "Use Shortcodes" >}}

1. Shortcodes with raw string parameters \` \`
2. Shortcodes with Markdown `% %`
3. Shortcodes without Markdown `< >`

See detail [shortcodes/#use-shortcodes](https://gohugo.io/content-management/shortcodes/#use-shortcodes)

{{< /admonition >}}

## figure {#figure}

[Documentation of `figure`][figure]

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

## gist

[Documentation of `gist`][gist]

Example `gist` input:

```markdown
{{</* gist spf13 7896402 */>}}
```

The rendered output looks like this:

{{< gist spf13 7896402 >}}

The HTML looks like this:

```html
<script type="application/javascript" src="https://gist.github.com/spf13/7896402.js"></script>
```

## highlight

[Documentation of `highlight`][highlight]

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

## param

[Documentation of `param`][param]

Example `param` input:

```markdown
{{</* param description */>}}
```

The rendered output looks like this:

{{< param description >}}

## ref and relref {#ref-and-relref}

[Documentation of `ref` and `relref`][ref-and-relref]

## tweet

[Documentation of `tweet`][tweet]

Example `tweet` input:

```markdown
{{</* tweet user="SanDiegoZoo" id="1453110110599868418" */>}}
```

The rendered output looks like this:

{{< tweet user="SanDiegoZoo" id="1453110110599868418" >}}

## vimeo

[Documentation of `vimeo`][vimeo]

Example `vimeo` input:

```markdown
{{</* vimeo 146022717 */>}}
```

The rendered output looks like this:

{{< vimeo 146022717 >}}

## youtube

[Documentation of `youtube`][youtube]

Example `youtube` input:

```markdown
{{</* youtube w7Ft2ymGmfc */>}}
```

The rendered output looks like this:

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
