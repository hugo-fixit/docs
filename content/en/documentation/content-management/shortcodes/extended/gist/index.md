---
title: Extended Shortcode - gist
shortTitle: Gist
linkTitle: Gist Shortcode
date: 2025-04-02T16:35:00+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: The gist shortcode embeds a GitHub Gist in your content.
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

The `gist` shortcode embeds a GitHub Gist in your content.

<!--more-->

## Usages

To display a GitHub gist with this URL:

```plain
https://gist.github.com/Lruihao/fb8b2d0353465c4d40bf74818db80710
```

Include this in your Markdown:

```markdown
{{</* gist Lruihao fb8b2d0353465c4d40bf74818db80710 */>}}
```

The rendered output looks like this:

{{< env "production" >}}
{{< gist Lruihao fb8b2d0353465c4d40bf74818db80710 >}}
{{< /env >}}

The HTML looks like this:

```html
<script src="https://gist.github.com/Lruihao/fb8b2d0353465c4d40bf74818db80710.js"></script>
```

To display a specific file within the gist:

```markdown
{{</* gist Lruihao fb8b2d0353465c4d40bf74818db80710 bilibili.html */>}}
```

## Parameters

The `gist` shortcode has the following positional parameters:

- **first** positional parameter _[required]_

    GitHub username who owns the gist.

- **second** positional parameter _[required]_

    The ID of the gist.

- **third** positional parameter _[optional]_

    A specific file within the gist to display.
