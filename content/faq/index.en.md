---
title: FAQ
date: 2019-08-02T11:04:49+08:00
comment: false
pageStyle: wide
lightgallery: true
---

> This documentation records some common questions and answers, mainly from [GitHub Discussions](https://github.com/hugo-fixit/FixIt/discussions).

{{< admonition question "Why not support earlier versions of Hugo?" false >}}
Since the [breadcrumb navigation related function](https://gohugo.io/content-management/sections/#example-breadcrumb-navigation) was introduced in the [Hugo release v0.109.0](https://github.com/gohugoio/hugo/releases/tag/v0.109.0), this theme only supports Hugo versions not lower than **0.109.0**.
{{< /admonition >}}

{{< admonition question "Why the Hugo extended edition is recommended?" false >}}
Since some features of this theme need to processes :(fa-brands fa-sass fa-fw): SCSS to :(fa-brands fa-css3 fa-fw): CSS, it is recommended to use Hugo **extended** version for better experience.
{{< /admonition >}}

{{< admonition question "How to switch Hugo environments?" false >}}
Default environments are `development` with `hugo server` and `production` with `hugo`.

Due to limitations in the local `development` environment,
the **comment system**, **CDN** and **fingerprint** will not be enabled in the `development` environment.

You could enable these features with `hugo server -e production`.
{{< /admonition >}}

{{< admonition question "How to choose search engine?" false >}}
The following is a comparison of two search engines:

- `fuse`: simple, no need to synchronize `index.json`, no limit for `contentLength`, high performance
- `lunr`: simple, no need to synchronize `index.json`, no limit for `contentLength`,
  but high bandwidth and low performance (Especially for Chinese which needs a large segmentit library)
- `algolia`: high performance and low bandwidth, but need to synchronize `index.json` and limit for `contentLength`

{{< version 0.2.3 >}} The content of the post is separated by `h2` and `h3` HTML tag to improve query performance and basically implement full-text search.
`contentLength` is used to limit the max index length of the part starting with `h2` and `h3` HTML tag.
{{< /admonition >}}

{{< admonition question "" false >}}

{{< /admonition >}}

{{< admonition question "" false >}}

{{< /admonition >}}

Didn't find your questions? Join the [discussions](https://github.com/hugo-fixit/FixIt/discussions/new?category=q-a).
