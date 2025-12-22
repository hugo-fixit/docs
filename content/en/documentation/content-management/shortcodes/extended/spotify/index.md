---
title: Extended Shortcode - spotify
shortTitle: Spotify
linkTitle: Spotify Shortcode
date: 2024-05-20T11:06:24+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: The spotify shortcode embeds a responsive music player for Spotify music.
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

The `spotify` shortcode embeds a responsive music player for Spotify music.

<!--more-->

## Usages

Example `spotify` input:

```markdown
{{</* spotify type=artist id=74ASZWbe4lXaubB36ztrGX */>}}
Or
{{</* spotify artist 74ASZWbe4lXaubB36ztrGX */>}}
```

The rendered output looks like this:

{{< env "production" >}}
{{< spotify artist 74ASZWbe4lXaubB36ztrGX >}}
{{< /env >}}

## Options

{{< version 0.3.8 >}}

The `spotify` shortcode has the following named parameters:

- **type** _[required]_ (**first** positional parameter)

    The `type` of the Spotify music, which can be `artist`, `album`, `track`, or `playlist`.

- **id** _[required]_ (**second** positional parameter)

    The `id` of the Spotify music, which can be found in the Spotify URL.

- **width** _[optional]_ (**third** positional parameter)

    The `width` of the Spotify music player.

- **height** _[optional]_ (**fourth** positional parameter)

    The `height` of the Spotify music player.
