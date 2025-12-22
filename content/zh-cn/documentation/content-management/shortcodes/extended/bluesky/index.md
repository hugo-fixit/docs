---
title: 扩展 Shortcode - bluesky
shortTitle: Bluesky
linkTitle: Bluesky Shortcode
date: 2025-03-12T15:04:00+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: bluesky shortcode 用于嵌入 Bluesky 帖子。
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

`bluesky` shortcode 用于嵌入 [Bluesky][bluesky] 帖子。

<!--more-->

## 快速使用

`bluesky` 示例输入：

```markdown
{{</* bluesky link="https://bsky.app/profile/bsky.app/post/3latotljnec2h" */>}}
```

呈现的输出效果如下：

{{< env "production" >}}
{{< bluesky link="https://bsky.app/profile/bsky.app/post/3latotljnec2h" >}}
{{< /env >}}

## 详细参数

`bluesky` shortcode 有以下命名参数：

- **link** _[必需]_ {{< version 0.3.17 >}}

    Bluesky 帖子的 URL。

<!-- link reference definition -->
[bluesky]: https://bsky.app/
