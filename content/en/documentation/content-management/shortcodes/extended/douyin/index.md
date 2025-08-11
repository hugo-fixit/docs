---
title: Extended Shortcode - douyin
shortTitle: Douyin
linkTitle: douyin Shortcode
date: 2024-05-20T11:06:24+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: The douyin shortcode embeds a responsive video player for douyin videos.
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

The `douyin` shortcode embeds a responsive video player for douyin videos.

<!--more-->

## Usages

Getting Video ID from PC at the video playing address, e.g.:

```code
https://www.douyin.com/video/7388149561765760266
```

Example `douyin` input:

```markdown
{{</* douyin 7388149561765760266 */>}}
Or
{{</* douyin id=7388149561765760266 */>}}
```

The rendered output looks like this:

{{< douyin id=7388149561765760266 >}}

## Options

{{< version 0.3.7 >}}

The `douyin` shortcode has the following named parameters:

- **id** _[required]_ (**first** positional parameter)

    The `id` of the video.
