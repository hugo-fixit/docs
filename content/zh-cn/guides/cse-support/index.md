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
    src: cover.webp
description: 在 FixIt 中设置 CSE 的指南。
---

了解如何在 FixIt 主题中配置自定义搜索引擎 (CSE)。

<!--more-->

## 什么是 CSE？

**自定义搜索引擎**（CSE）允许你为你的网站、博客或一组网站创建搜索引擎。你可以配置搜索引擎以搜索网页和图像。你可以微调排名，自定义搜索结果的外观和感觉等

常见的搜索引擎都有自己的 CSE 服务，例如：

- [Google 可编程搜索引擎][google-cse]
- [Bing 自定义搜索引擎][bing-cse]

## Google CSE

{{< version 0.3.16 >}}

Google CSE 又叫 Google Programmable Search Engine, 本节主要介绍如何在 FixIt 中使用 Google CSE，你可前往 [Programmable Search Engine Tutorial][google-cse-tutorial] 查看完整的教程。

1. 在 [Google Programmable Search Engine][google-cse] 创建一个新的搜索引擎。
2. 输入你的搜索引擎名称，例如：`FixIt`。
3. 选择在特定网站或网页中搜索，输入你的网站 URL，例如：`fixit.lruihao.cn`。
4. 点击 `创建` 按钮。
5. 稍等片刻，页面会提示你：“新的搜索引擎已创建”，然后点击 `自定义` 按钮进入搜索引擎的自定义页面。
6. 点击 外观和风格 => 布局 => 选择 `两列`。（**这一步至关重要，请勿忽略！**）
7. 最后点击概览，复制你的搜索引擎 ID。

在 FixIt 主题中配置 Google CSE：

```toml
[params]
  [params.search]
    enable = true
    type = "cse"
  [params.cse]
    engine = "google"
    resultsPage = "/search/"
    [params.cse.google]
      # 配置你的搜索引擎 ID
      cx = ""
```

然后手动创建一个搜索结果展示页面：

```bash
hugo new content search/index.md
```

🎉 大功告成！你已成功在 FixIt 主题中配置了 Google CSE，重新启动，去试试搜索功能吧。

## Bing CSE

暂不支持。

<!-- link reference definition -->
[google-cse]: https://programmablesearchengine.google.com/
[google-cse-tutorial]: https://developers.google.com/custom-search/docs/overview
[bing-cse]: https://www.customsearch.ai/
