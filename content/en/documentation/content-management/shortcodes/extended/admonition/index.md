---
title: Extended Shortcode - admonition
linkTitle: Admonition Shortcode
date: 2024-10-08T09:52:26+08:00
type: posts
description: The admonition shortcode allows you to add various types of callouts to your content.
resources:
  - name: featured-image
    src: featured-image.jpg
tags:
  - Shortcodes
  - Content
categories:
  - Documentation
---

The `admonition` shortcode allows you to add various types of callouts to your content.

<!--more-->

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

The `admonition` shortcode supports **13** types of banners, Unless you [Customize admonitions](#customize-admonitions), any unsupported type defaults to the `note` type. The type identifier is case-insensitive.

The complete examples are as follows:

{{< admonition >}}

```markdown {.no-header}
{{?{}< admonition >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition abstract "" false >}}

```markdown {.no-header}
{{?{}< admonition abstract >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `summary`, `tldr`
{{< /admonition >}}

{{< admonition info "" false >}}

```markdown {.no-header}
{{?{}< admonition info >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition todo "" false >}}
{{< version 0.3.13 >}}

```markdown {.no-header}
{{?{}< admonition todo >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition tip "" false >}}

```markdown {.no-header}
{{?{}< admonition tip >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `hint`, `important`
{{< /admonition >}}

{{< admonition success "" false >}}

```markdown {.no-header}
{{?{}< admonition success >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `check`, `done`
{{< /admonition >}}

{{< admonition question "" false >}}

```markdown {.no-header}
{{?{}< admonition question >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `help`, `faq`
{{< /admonition >}}

{{< admonition warning "" false >}}

```markdown {.no-header}
{{?{}< admonition warning >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `caution`, `attention`
{{< /admonition >}}

{{< admonition failure "" false >}}

```markdown {.no-header}
{{?{}< admonition failure >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `fail`, `missing`
{{< /admonition >}}

{{< admonition danger "" false >}}

```markdown {.no-header}
{{?{}< admonition danger >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Alias: `error`
{{< /admonition >}}

{{< admonition bug "" false >}}

```markdown {.no-header}
{{?{}< admonition bug >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition example "" false >}}

```markdown {.no-header}
{{?{}< admonition example >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition quote "" false >}}

```markdown {.no-header}
{{?{}< admonition quote >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Alias: `cite`
{{< /admonition >}}

## Customize admonitions

> [!todo]
> Regular development, so stay tuned...

<!-- link reference definition -->
<!-- markdownlint-disable-file reference-links-images -->
[alerts-syntax]: {{< relref "/documentation/content-management/markdown-syntax/extended#extended-syntax" >}}
