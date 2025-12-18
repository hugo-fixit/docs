---
title: Extended Shortcode - admonition
shortTitle: Admonition
linkTitle: Admonition Shortcode
date: 2023-02-24T22:11:45+08:00
description: The admonition shortcode allows you to add various types of callouts to your content.
resources:
  - name: featured-image
    src: featured-image.webp
tags:
  - Shortcodes
  - Content
categories:
  - Documentation
collections:
  - Extended Shortcodes
---

The `admonition` shortcode allows you to add various types of callouts to your content.

<!--more-->

> [!TIP]+
> This is an extended shortcode provided by the FixIt theme.\
> For better cross-platform compatibility, the [Alerts Markdown extension syntax][alerts-syntax] is recommended.

## Parameters

The `admonition` shortcode has the following named parameters, and the positional parameters ordered from top to bottom:

| Parameter | Description                                                                  | Type    | Default         |
| :-------- | :--------------------------------------------------------------------------- | :------ | :-------------- |
| type      | The type of the `admonition` banner. See [Supported types](#supported-types) | string  | note            |
| title     | The title of the `admonition` banner. (Markdown and HTML support)            | string  | type identifier |
| open      | Whether the content will be expandable by default.                           | boolean | true            |

## Basic Usage

Example `admonition` input:

```markdown
{{</* admonition type=quote title="[FixIt](https://github.com/hugo-fixit/FixIt)" open=true */>}}
A **clean**, **elegant** but **advanced** blog theme for [Hugo](https://gohugo.io/).
{{</* /admonition */>}}
Or
{{</* admonition quote "[FixIt](https://github.com/hugo-fixit/FixIt)" true */>}}
A **clean**, **elegant** but **advanced** blog theme for [Hugo](https://gohugo.io/).
{{</* /admonition */>}}
```

The rendered output looks like this:

{{< admonition quote "[FixIt](https://github.com/hugo-fixit/FixIt)" true >}}
A **clean**, **elegant** but **advanced** blog theme for [Hugo](https://gohugo.io/).
{{< /admonition >}}

## Supported types

The `admonition` shortcode supports **13** types of banners, Unless you [Customize admonitions][custom-admonitions], any unsupported type defaults to the `note` type. The type identifier is case-insensitive.

The complete examples are as follows:

{{< admonition >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition abstract "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition abstract >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `summary`, `tldr`
{{< /admonition >}}

{{< admonition info "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition info >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition todo "" false >}}
{{< version 0.3.13 >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition todo >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition tip "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition tip >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `hint`, `important`
{{< /admonition >}}

{{< admonition success "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition success >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `check`, `done`
{{< /admonition >}}

{{< admonition question "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition question >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `help`, `faq`
{{< /admonition >}}

{{< admonition warning "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition warning >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `caution`, `attention`
{{< /admonition >}}

{{< admonition failure "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition failure >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `fail`, `missing`
{{< /admonition >}}

{{< admonition danger "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition danger >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Alias: `error`
{{< /admonition >}}

{{< admonition bug "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition bug >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition example "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition example >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition quote "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition quote >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Alias: `cite`
{{< /admonition >}}

<!-- link reference definition -->
<!-- markdownlint-disable-file reference-links-images -->
[alerts-syntax]: {{< relref "/documentation/content-management/markdown-syntax/extended#extended-syntax" >}}
[custom-admonitions]: {{< relref "/documentation/advanced#custom-admonitions" >}}
