---
title: Extended Shortcode - admonition
linkTitle: Admonition Shortcode
date: 2024-10-08T09:52:26+08:00
type: posts
description: The admonition shortcode allows you to add various types of callouts to your content.
resources:
  - name: featured-image
    src: featured-image.webp
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

The `admonition` shortcode supports **13** types of banners, Unless you [Customize admonitions](#custom-admonitions), any unsupported type defaults to the `note` type. The type identifier is case-insensitive.

The complete examples are as follows:

{{< admonition >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition abstract "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition abstract >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `summary`, `tldr`
{{< /admonition >}}

{{< admonition info "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition info >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition todo "" false >}}
{{< version 0.3.13 >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition todo >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition tip "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition tip >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `hint`, `important`
{{< /admonition >}}

{{< admonition success "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition success >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `check`, `done`
{{< /admonition >}}

{{< admonition question "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition question >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `help`, `faq`
{{< /admonition >}}

{{< admonition warning "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition warning >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `caution`, `attention`
{{< /admonition >}}

{{< admonition failure "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition failure >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Aliases: `fail`, `missing`
{{< /admonition >}}

{{< admonition danger "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition danger >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Alias: `error`
{{< /admonition >}}

{{< admonition bug "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition bug >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition example "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition example >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

{{< /admonition >}}

{{< admonition quote "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition quote >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

Alias: `cite`
{{< /admonition >}}

## Custom Admonitions

{{< version 0.3.13 >}}

You can define custom admonitions, or even overwrite the default admonitions.

To define a custom admonition, change `params.admonition` in your site configuration file. For example:

```toml
[params]
  [params.admonition]
    ban = "fa-solid fa-ban"
```

Then create the following SCSS block in your project directory `assets/css/_override.scss`:

```scss {title="_override.scss"}
// Custom admonition style
$custom-admonition-map: (
  ban: (
    color: #ff3d00,
    bg-color: rgba(255, 61, 0, 0.1),
  ),
);

$admonition-color-map: map-merge($admonition-color-map, $custom-admonition-map);
```

If you need to change the default title of a custom admonition, you can add the following content to the corresponding language file:

```toml
[admonition]
ban = "Forbidden"
```

After that, you can use the custom admonition in your content:

{{< admonition ban "" false >}}
Shortcode syntax:

```markdown {.no-header, linenos=false}
{{?{}< admonition ban >}}
This is a custom admonition type with a ban icon.
{{?{}< /admonition >}}
```

Alerts Markdown extension syntax:

```markdown {.no-header, linenos=false}
> [!ban]
> This is a custom admonition type with a ban icon.
```

> [!TIP]
> This is just an example of the theme documentation and is not included in the theme.
{{< /admonition >}}

<!-- link reference definition -->
<!-- markdownlint-disable-file reference-links-images -->
[alerts-syntax]: {{< relref "/documentation/content-management/markdown-syntax/extended#extended-syntax" >}}
