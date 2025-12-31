---
title: CSE 支持
date: 2024-11-28T15:01:29+08:00
categories:
  - Guides
  - Documentation
tags:
  - CSE
  - Advanced
resources:
  - name: featured-image
    src: featured-image.webp
description: 在 FixIt 中设置 CSE 的指南。
---

了解如何在 FixIt 主题中配置自定义搜索引擎 (CSE)。

<!--more-->

## 什么是 CSE？

**自定义搜索引擎**（CSE）允许你为你的网站、博客或一组网站创建搜索引擎。你可以配置搜索引擎以搜索网页和图像。你可以微调排名，自定义搜索结果的外观和感觉等。

常见的搜索引擎都有自己的 CSE 服务，例如：

- [Google 可编程搜索引擎][google-cse]
- [Bing 自定义搜索引擎][bing-cse]

## 在 FixIt 中配置 CSE

{{< version 0.3.16 >}}

首先，手动创建一个搜索结果展示页面：

```bash
hugo new content search/index.md
```

在 FixIt 主题中配置 Google 或 Bing CSE：

```toml
[params]

[params.search]
enable = true
type = "cse"

[params.cse]
# 搜索引擎：["google", "bing"]
engine = "google"
resultsPage = "/search/"

[params.cse.google]
cx = ""

[params.cse.bing]
# 暂不支持
```

## Google CSE

Google CSE 又叫 Google Programmable Search Engine, 本节主要介绍如何在 FixIt 中使用 Google CSE，你可前往 [Programmable Search Engine Tutorial][google-cse-tutorial] 查看完整的教程。

接着，按照以下步骤创建一个 Google 搜索引擎：

```timeline {animation=true}
events:
  - content: "在 [Google Programmable Search Engine](https://programmablesearchengine.google.com/) 创建一个新的搜索引擎。"
  - content: "输入你的搜索引擎名称，例如：`FixIt`。"
  - content: "选择在特定网站或网页中搜索，输入你的网站 URL，例如：`fixit.lruihao.cn`。"
  - content: "点击 `创建` 按钮。"
  - content: "稍等片刻，页面会提示你：“新的搜索引擎已创建”，然后点击 `自定义` 按钮进入搜索引擎的自定义页面。"
  - content: "**点击 外观和风格 => 布局 => 选择 `两列`**。（==这一步至关重要，请勿忽略！==）"
    type: warning
  - content: "最后点击概览，复制你的搜索引擎 ID。"
    type: info
  - content: "将搜索引擎 ID 填入配置文件中的 `cx` 字段。"
    type: primary
  - content: "🎉 大功告成！重新启动 Hugo 服务器试试搜索功能吧。"
    type: success
```

## Bing CSE

> [!WARNING]
> Bing CSE 在 FixIt 中暂不支持。

<!--
Bing 自定义搜索与 Google CSE 类似，但配置不同。你可以前往 [Bing Custom Search][bing-cse] 查看完整的教程。

按照以下步骤创建一个新的自定义搜索实例：
-->

<!-- link reference definition -->
[google-cse]: https://programmablesearchengine.google.com/
[google-cse-tutorial]: https://developers.google.com/custom-search/docs/overview
[bing-cse]: https://www.customsearch.ai/
