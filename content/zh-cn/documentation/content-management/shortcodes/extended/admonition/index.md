---
title: 扩展 Shortcode - admonition
shortTitle: Admonition
linkTitle: Admonition Shortcode
date: 2023-02-24T22:11:45+08:00
description: admonition shortcode 允许你在内容中添加各种类型的标注。
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

`admonition` shortcode 允许你在内容中添加各种类型的标注。

<!--more-->

> [!TIP]+
> 这是 FixIt 主题提供的扩展 shortcode。\
> 为了更好的跨平台兼容性，推荐使用 [Alert Markdown 扩展语法][alerts-syntax]。

## 参数配置

`admonition` shortcode 有以下命名参数，位置参数按照从上到下的顺序排列：

| 参数  | 说明                                                       | 类型    | 默认值      |
| :---- | :--------------------------------------------------------- | :------ | :---------- |
| type  | `admonition` 横幅的类型。见 [支持的类型](#supported-types) | string  | note        |
| title | `admonition` 横幅的标题。（支持 Markdown 和 HTML 格式）    | string  | type 参数值 |
| open  | 横幅内容是否默认展开。                                     | boolean | true        |

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

`admonition` shortcode 支持 **13** 种类型的横幅，除非你 [自定义 Admonition][custom-admonitions]，否则任何不支持的类型都会默认为 `note` 类型。类型标识不区分大小写。

完整示例如下：

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

别名：`summary`, `tldr`
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

别名：`hint`, `important`
{{< /admonition >}}

{{< admonition success "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition success >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`check`, `done`
{{< /admonition >}}

{{< admonition question "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition question >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`help`, `faq`
{{< /admonition >}}

{{< admonition warning "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition warning >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`caution`, `attention`
{{< /admonition >}}

{{< admonition failure "" false >}}

```markdown {mode="simple", linenos=false}
{{?{}< admonition failure >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`fail`, `missing`
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

<!-- markdownlint-disable-file reference-links-images -->
[alerts-syntax]: {{< relref "/documentation/content-management/markdown-syntax/extended#extended-syntax" >}}
[custom-admonitions]: {{< relref "/documentation/advanced#custom-admonitions" >}}
