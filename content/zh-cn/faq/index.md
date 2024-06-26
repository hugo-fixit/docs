---
title: 常见问答
date: 2019-08-02T11:04:49+08:00
comment: false
pageStyle: wide
lightgallery: true
---

> 本文档记录一些常见的问答，主要来自 [GitHub Discussions](https://github.com/hugo-fixit/FixIt/discussions) 和 QQ 群：`814031017`。

{{< admonition question "为什么推荐使用 Hugo extended 版本？" false >}}
由于这个主题的一些特性需要将 :(fa-brands fa-sass fa-fw): SCSS 转换为 :(fa-brands fa-css3 fa-fw): CSS, 推荐使用 Hugo **extended** 版本来获得更好的使用体验。
{{< /admonition >}}

{{< admonition question "如何切换 Hugo 的运行环境？" false >}}
`hugo server` 的默认运行环境是 `development`,
而 `hugo` 的默认运行环境是 `production`。

由于本地 `development` 环境的限制，
**评论系统**, **CDN** 和 **fingerprint** 不会在 `development` 环境下启用。

你可以使用 `hugo server -e production` 命令来开启这些特性。
{{< /admonition >}}

{{< admonition question "怎样选择搜索引擎？" false >}}
以下是两种搜索引擎的对比：

- `fuse`: 简单，无需同步 `index.json`, 没有 `contentLength` 的限制，性能高
- `algolia`: 高性能并且占用带宽低，但需要同步 `index.json` 且有 `contentLength` 的限制

文章内容被 `h2` 和 `h3` HTML 标签切分来提高查询效果并且基本实现全文搜索。
`contentLength` 用来限制 `h2` 和 `h3` HTML 标签开头的内容部分的最大长度。
{{< /admonition >}}

{{< admonition question "" false >}}

{{< /admonition >}}

{{< admonition question "" false >}}

{{< /admonition >}}

没找到你的问题？加入 [讨论](https://github.com/hugo-fixit/FixIt/discussions/new?category=q-a) 或者 QQ 群：`814031017`。
