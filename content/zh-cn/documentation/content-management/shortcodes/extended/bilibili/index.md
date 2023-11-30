---
title: 扩展 Shortcode - bilibili
date: 2023-02-24T22:52:50+08:00
type: posts
aliases:
  - /zh-cn/extended-shortcode-bilibili/
author:
  name: Lruihao
  link: https://lruihao.cn
description: bilibili shortcode 提供了一个内嵌的用来播放 bilibili 视频的响应式播放器。
resources:
  - name: featured-image
    src: featured-image.jpg
tags:
  - Shortcodes
  - Content
categories:
  - Documentation
hiddenFromHomePage: true
---

`bilibili` shortcode 提供了一个内嵌的用来播放 bilibili 视频的响应式播放器。

<!--more-->

## 快速使用

如果视频只有一个部分，则仅需要视频的 BV `id`, 例如：

```code
https://www.bilibili.com/video/BV1Sx411T7QQ
```

一个 `bilibili` 示例：

```go-html-template
{{</* bilibili BV1Sx411T7QQ */>}}
或者
{{</* bilibili id=BV1Sx411T7QQ */>}}
```

呈现的输出效果如下：

{{< bilibili id=BV1Sx411T7QQ >}}

如果视频包含多个部分，则除了视频的 BV `id` 之外，还需要 `p`, 默认值为 `1`, 例如：

```code
https://www.bilibili.com/video/BV1TJ411C7An?p=3
```

一个带有 `p` 参数的 `bilibili` 示例：

```go-html-template
{{</* bilibili BV1TJ411C7An 3 */>}}
或者
{{</* bilibili id=BV1TJ411C7An p=3 */>}}
```

呈现的输出效果如下：

{{< bilibili id=BV1TJ411C7An p=3 >}}

## 详细参数

`bilibili` shortcode 有以下命名参数：

- **id** _[必需]_（**第一个**位置参数）

    视频的 BV `id`。

- **p** _[可选]_（**第二个**位置参数）

    多 P 视频的集数。从 `1` 开始计数，默认值为 `1`。

- **autoplay** _[可选]_ {{< version 0.2.18-lts.4 >}}

    是否自动播放，默认值为 `false`。

- **poster** _[可选]_ {{< version 0.2.18-lts.4 >}}

    是否展示封面，默认值为 `true`。

- **muted** _[可选]_ {{< version 0.2.18-lts.4 >}}

    是否静音，默认值为 `false`。

- **danmaku** _[可选]_ {{< version 0.2.18-lts.4 >}}

    是否开启弹幕，默认值为 `true`。

- **t** _[可选]_ {{< version 0.2.18-lts.4 >}}

    跳转到媒体的初始时间点，默认值为 `0`，单位：秒。
