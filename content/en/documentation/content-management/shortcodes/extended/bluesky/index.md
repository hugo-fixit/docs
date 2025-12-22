---
title: Extended Shortcode - bluesky
shortTitle: Bluesky
linkTitle: Bluesky Shortcode
date: 2025-03-12T15:04:00+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: The bluesky shortcode embeds a post from Bluesky.
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

The `bluesky` shortcode embeds a post from [Bluesky][bluesky].

<!--more-->

## Usages

Example `bluesky` input:

```markdown
{{</* bluesky link="https://bsky.app/profile/bsky.app/post/3latotljnec2h" */>}}
```

The rendered output looks like this:

{{< env "production" >}}
{{< bluesky link="https://bsky.app/profile/bsky.app/post/3latotljnec2h" >}}
{{< /env >}}

## Options

The `bluesky` shortcode has the following named parameters:

- **link** _[required]_ {{< version 0.3.17 >}}

    URL of the Bluesky post.

<!-- link reference definition -->
[bluesky]: https://bsky.app/
