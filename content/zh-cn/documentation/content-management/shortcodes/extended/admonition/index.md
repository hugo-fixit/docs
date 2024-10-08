---
title: 扩展 Shortcode - admonition
linkTitle: Admonition Shortcode
date: 2024-10-08T09:52:26+08:00
type: posts
description: admonition shortcode 允许你在内容中添加各种类型的标注。
resources:
  - name: featured-image
    src: featured-image.jpg
tags:
  - Shortcodes
  - Content
categories:
  - Documentation
---

`admonition` shortcode 允许你在内容中添加各种类型的标注。

<!--more-->

> 这是 FixIt 主题提供的扩展 shortcode。\
> 为了更好的跨平台兼容性，推荐使用 [`alerts` Markdown 扩展语法][alerts-syntax]。

## Parameters

`admonition` shortcode 有以下命名参数，位置参数按照从上到下的顺序排列：

| 参数  | 说明                                                                                | 类型    | 可选值 |
| :---- | :---------------------------------------------------------------------------------- | :------ | :----- |
| type  | `admonition` 横幅的类型，默认值是 `note`。见 [支持的类型](#supported-types)         | string  |        |
| title | `admonition` 横幅的标题。默认值是 **type** 参数的值。（支持 Markdown 和 HTML 格式） | string  | -      |
| open  | 横幅内容是否默认展开，默认值是 `true`。                                             | boolean | -      |

## 基础用法

一个 `admonition` 示例：

```markdown
{{</* admonition type=quote title="[FixIt](https://github.com/hugo-fixit/FixIt)" open=true */>}}
一个**简洁**、**优雅**且**高效**的 [Hugo](https://gohugo.io/) 博客主题。
{{</* /admonition */>}}
或者
{{</* admonition quote "[FixIt](https://github.com/hugo-fixit/FixIt)" true */>}}
一个**简洁**、**优雅**且**高效**的 [Hugo](https://gohugo.io/) 博客主题。
{{</* /admonition */>}}
```

呈现的输出效果如下：

{{< admonition quote "[FixIt](https://github.com/hugo-fixit/FixIt)" true >}}
一个**简洁**、**优雅**且**高效**的 [Hugo](https://gohugo.io/) 博客主题。
{{< /admonition >}}

## 支持的类型 {#supported-types}

The `admonition` shortcode supports **13** types of banners, Unless you [Customize admonitions](#customize-admonitions), any unsupported type defaults to the `note` type. The type identifier is case-insensitive.

`admonition` shortcode 支持 **13** 种类型的横幅，除非你 [自定义 admonitions](#customize-admonitions)，否则任何不支持的类型都会默认为 `note` 类型。类型标识不区分大小写。

完整示例如下：

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

别名：`summary`, `tldr`
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

别名：`hint`, `important`
{{< /admonition >}}

{{< admonition success "" false >}}

```markdown {.no-header}
{{?{}< admonition success >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`check`, `done`
{{< /admonition >}}

{{< admonition question "" false >}}

```markdown {.no-header}
{{?{}< admonition question >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`help`, `faq`
{{< /admonition >}}

{{< admonition warning "" false >}}

```markdown {.no-header}
{{?{}< admonition warning >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`caution`, `attention`
{{< /admonition >}}

{{< admonition failure "" false >}}

```markdown {.no-header}
{{?{}< admonition failure >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`fail`, `missing`
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

## 自定义 admonitions {#customize-admonitions}

TODO

<!-- markdownlint-disable-file reference-links-images -->
[alerts-syntax]: {{< relref "/documentation/content-management/markdown-syntax/extended#extended-syntax" >}}