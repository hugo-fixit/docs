---
title: 扩展 Shortcode - spotify
shortTitle: Spotify
linkTitle: Spotify Shortcode
date: 2024-05-20T11:06:24+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: spotify shortcode 提供了一个内嵌的响应式音乐播放器。
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

`spotify` shortcode 提供了一个内嵌的响应式音乐播放器。

<!--more-->

## 快速使用

一个 `spotify` 示例：

```markdown
{{</* spotify type=artist id=74ASZWbe4lXaubB36ztrGX */>}}
Or
{{</* spotify artist 74ASZWbe4lXaubB36ztrGX */>}}
```

呈现的输出效果如下：

{{< env "production" >}}
{{< spotify artist 74ASZWbe4lXaubB36ztrGX >}}
{{< /env >}}

## 详细参数

{{< version 0.3.8 >}}

`spotify` shortcode 有以下命名参数：

- **type** _[必需]_ (**第一个**位置参数)

    Spotify 音乐的 `type`，可以是 `艺术家`、`专辑`、`曲目` 或 `播放列表`。

- **id** _[必需]_ (**第二个**位置参数)

    Spotify 音乐的 `id`，可以在 Spotify URL 中找到。

- **width** _[可选]_ (**第三个**位置参数)

    Spotify 音乐播放器的宽度。

- **height** _[可选]_ (**第四个**位置参数)

    Spotify 音乐播放器的高度。
