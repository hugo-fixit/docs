---
title: 扩展 Shortcode - gist
shortTitle: Gist
linkTitle: Gist Shortcode
date: 2025-04-02T16:35:00+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: gist shortcode 用于在你的内容中嵌入 GitHub Gist。
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

`gist` shortcode 用于在你的内容中嵌入 GitHub Gist。

<!--more-->

## 快速使用

要显示具有此 URL 的 GitHub gist：

```plain
https://gist.github.com/Lruihao/fb8b2d0353465c4d40bf74818db80710
```

在你的 Markdown 中包含：

```markdown
{{</* gist Lruihao fb8b2d0353465c4d40bf74818db80710 */>}}
```

呈现的输出效果如下：

{{< env "production" >}}
{{< gist Lruihao fb8b2d0353465c4d40bf74818db80710 >}}
{{< /env >}}

生成的 HTML 如下所示：

```html
<script src="https://gist.github.com/Lruihao/fb8b2d0353465c4d40bf74818db80710.js"></script>
```

## 详细参数

`gist` shortcode 有以下位置参数：

- **第一个**位置参数 _[必需]_

    拥有 gist 的 GitHub 用户名。

- **第二个**位置参数 _[必需]_

    gist 的 ID。

- **第三个**位置参数 _[可选]_

    要显示的 gist 中的特定文件。
