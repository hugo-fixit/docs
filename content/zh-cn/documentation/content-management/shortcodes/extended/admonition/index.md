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
> 为了更好的跨平台兼容性，推荐使用 [Alerts Markdown 扩展语法][alerts-syntax]。

## Parameters

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

`admonition` shortcode 支持 **13** 种类型的横幅，除非你 [自定义 admonitions](#custom-admonitions)，否则任何不支持的类型都会默认为 `note` 类型。类型标识不区分大小写。

完整示例如下：

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

别名：`summary`, `tldr`
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

别名：`hint`, `important`
{{< /admonition >}}

{{< admonition success "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition success >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`check`, `done`
{{< /admonition >}}

{{< admonition question "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition question >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`help`, `faq`
{{< /admonition >}}

{{< admonition warning "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition warning >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`caution`, `attention`
{{< /admonition >}}

{{< admonition failure "" false >}}

```markdown {.no-header, linenos=false}
{{?{}< admonition failure >}}
The quick brown fox jumps over the lazy dog.
{{?{}< /admonition >}}
```

别名：`fail`, `missing`
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

## 自定义 Admonition {#custom-admonitions}

{{< version 0.3.13 >}}

你可以自定义 Admonition，甚至可以覆盖默认 Admonition。

要自定义 Admonition，请在站点配置文件中更改 `params.admonition`。例如：

```toml
[params]
  [params.admonition]
    ban = "fa-solid fa-ban"
```

然后在项目目录 `assets/css/_override.scss` 中创建以下 SCSS 块：

```scss {title="_override.scss"}
// Custom admonitions style
$custom-admonition-map: (
  ban: (
    color: #ff3d00,
    bg-color: rgba(255, 61, 0, 0.1),
  ),
);

$admonition-color-map: map-merge($admonition-color-map, $custom-admonition-map);
```

如果你需要修改自定义 Admonition 的默认标题，你可以在对应的语言文件中添加以下内容：

```toml
[admonition]
ban = "禁止"
```

之后，你可以在内容中使用自定义 Admonition：

{{< admonition ban "" false >}}
Shortcode 语法：

```markdown {.no-header, linenos=false}
{{?{}< admonition ban >}}
这是一个带有禁止图标的自定义 Admonition 类型。
{{?{}< /admonition >}}
```

Alerts Markdown 扩展语法：

```markdown {.no-header, linenos=false}
> [!ban]
> 这是一个带有禁止图标的自定义 Admonition 类型。
```

> [!TIP]
> 这只是主题文档的一个示例，并不包含在主题中。
{{< /admonition >}}

<!-- markdownlint-disable-file reference-links-images -->
[alerts-syntax]: {{< relref "/documentation/content-management/markdown-syntax/extended#extended-syntax" >}}
