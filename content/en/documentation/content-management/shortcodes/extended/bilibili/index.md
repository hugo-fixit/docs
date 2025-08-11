---
title: Extended Shortcode - bilibili
shortTitle: Bilibili
linkTitle: Bilibili Shortcode
date: 2023-02-24T22:52:50+08:00
aliases:
  - /extended-shortcode-bilibili/
author:
  name: Lruihao
  link: https://lruihao.cn
description: The bilibili shortcode embeds a responsive video player for bilibili videos.
resources:
  - name: featured-image
    src: featured-image.jpg
tags:
  - Shortcodes
  - Content
categories:
  - Documentation
collections:
  - Extended Shortcodes
---

The `bilibili` shortcode embeds a responsive video player for bilibili videos.

<!--more-->

## Usages

When the video only has one part, only the BV `id` of the video is required, e.g.:

```code
https://www.bilibili.com/video/BV19S411c7Wu
```

Example `bilibili` input:

```markdown
{{</* bilibili BV19S411c7Wu */>}}
Or
{{</* bilibili id=BV19S411c7Wu */>}}
```

The rendered output looks like this:

{{< bilibili id=BV19S411c7Wu >}}

When the video has multiple parts, in addition to the BV `id` of the video,
`p` is also required, whose default value is `1`, e.g.:

```code
https://www.bilibili.com/video/BV1kt411k7Rq?p=3
```

Example `bilibili` input with `p`:

```markdown
{{</* bilibili BV1kt411k7Rq 3 */>}}
Or
{{</* bilibili id=BV1kt411k7Rq p=3 */>}}
```

The rendered output looks like this:

{{< bilibili id=BV1kt411k7Rq p=3 >}}

## Options

The `bilibili` shortcode has the following named parameters:

- **id** _[required]_ (**first** positional parameter)

    The BV `id` of the video.

- **p** _[optional]_ (**second** positional parameter)

    Number of episodes of multi-P videos. Counting starts from `1`, default value is `1`.

- **autoplay** _[optional]_ {{< version 0.2.18-lts.4 >}}

    Whether to autoplay, default value is `false`.

- **poster** _[optional]_ {{< version 0.2.18-lts.4 >}}

    Whether to show the poster, default value is `true`.

- **muted** _[optional]_ {{< version 0.2.18-lts.4 >}}

    Whether to mute, default value is `false`.

- **danmaku** _[optional]_ {{< version 0.2.18-lts.4 >}}

    Whether to enable danmaku, default value is `true`.

- **t** _[optional]_ {{< version 0.2.18-lts.4 >}}

    Jump to the initial time point of the media, default value is `0`, unit: second.
