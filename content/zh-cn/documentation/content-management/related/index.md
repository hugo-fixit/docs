---
title: 相关内容
date: 2024-10-27T01:05:43+08:00
description: List related content in "Related content" sections.
tags:
  - Related
  - Content
  - Advanced
categories:
  - Documentation
collections:
  - Content Management
resources:
  - name: featured-image
    src: featured-image.webp
---

在"相关内容"部分中列出相关内容。

<!--more-->

Hugo 使用一系列因素来识别基于前置参数的页面相关内容。这可以调整为所需的索引和参数集，或保留 Hugo 的默认[相关内容配置](#configure-related-content)。

## 启用相关内容

要启用相关内容，请在站点配置文件中将 `page.related.enable` 参数设置为 `true`。

```toml
[params]
# ...

[params.page]
# ...

[params.page.related]
enable = true
count = 5
position = [
  "aside",
  "footer"
]
```

> [!NOTE]
> 如果你想要隐藏某个页面不显示在相关文章中，请在该页面的前置参数中将 `hiddenFromRelated` 参数设置为 `true`。

## 配置相关内容 {#configure-related-content}

Hugo 提供了合理的相关内容默认配置，但如果需要，你可以在配置中进行微调，可在全局或语言级别进行配置。

> 本节可能已过时。请参考 [Related content | Hugo][hugo-related] 获取最新信息。

### 默认配置

如果项目中没有设置任何 `related` 配置，Hugo 的相关内容方法将使用以下配置。

```toml
[related]
includeNewer = false
threshold = 80
toLower = false

[[related.indices]]
applyFilter = false
cardinalityThreshold = 0
name = 'keywords'
pattern = ''
toLower = false
type = 'basic'
weight = 100

[[related.indices]]
applyFilter = false
cardinalityThreshold = 0
name = 'date'
pattern = ''
toLower = false
type = 'basic'
weight = 10

[[related.indices]]
applyFilter = false
cardinalityThreshold = 0
name = 'tags'
pattern = ''
toLower = false
type = 'basic'
weight = 80
```

自定义配置应使用相同的语法设置。

> [!TIP]
> 如果你添加了 `related` 配置部分，你需要添加完整的配置。无法仅设置 `includeNewer` 并使用 Hugo 默认值的其余部分。

### 顶级配置选项

threshold
: (`int`) 0-100 之间的值。较低的值将提供更多但可能不太相关的匹配。

includeNewer
: (`bool`) 设置为 `true` 以在相关内容列表中**包含比当前页面更新的页面**。这意味着随着新的相关内容的添加，较旧帖子的输出可能会发生变化。

toLower
: (`bool`) 设置为 `true` 以将索引和查询中的关键字转换为小写。这可能会以轻微的性能损失为代价提供更准确的结果。请注意，这也可以按索引设置。

### 每个索引的配置选项

name
: (`string`) 索引名称。此值直接映射到页面参数。Hugo 支持字符串值（示例中的 `author`）和列表（`tags`、`keywords` 等）以及时间和日期对象。

type
: (`string`) `basic`（默认）或 `fragments` 之一。

applyFilter
: (`string`) 对搜索结果应用特定于 `type` 的过滤器。目前仅用于 `fragments` 类型。

weight
: (`int`) 表示此参数相对于其他参数重要性的整数权重。它可以是 `0`，这会关闭此索引，甚至可以是负数。测试不同的值，看看什么最适合你的内容。

cardinalityThreshold
: (`int`) 如果在 1 到 100 之间，这是一个百分比。将删除在超过此百分比的文档中使用的所有关键字。例如，将此设置为 `60` 将删除在索引中超过 60% 文档中使用的所有关键字。如果为 `0`，则不会从索引中删除任何关键字。默认值为 `0`。

pattern
: (`string`) 这目前仅与日期相关。在列出相关内容时，我们可能希望列出在时间上也很接近的内容。为日期索引设置 "2006"（日期索引的默认值）作为模式将为在同一年发布的页面添加权重。对于更繁忙的博客，"200601"（年和月）可能是更好的默认值。

toLower
: (`bool`) 见上文。

<!-- link reference definition -->
[hugo-related]: https://gohugo.io/content-management/related/
