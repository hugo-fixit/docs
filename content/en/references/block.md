---
title: Open Custom Blocks
date: 2024-05-09T10:28:58+08:00
type: posts
collections:
  - References
---

To enhance the extensibility of the FixIt theme, we provide some custom blocks that you can use in your project to achieve more functionality.

<!--more-->

## Entry File

{{< version 0.3.7 >}}

The FixIt theme opens a unified custom template entry file [`layouts/partials/custom.html`][custom-html], through which you can implement custom blocks or more ideas.

To avoid upgrade conflicts and facilitate the reference of theme components, it's strongly recommended to copy this file from the theme to your project and override it.

```bash
cp themes/FixIt/layouts/partials/custom.html layouts/partials/custom.html
```

## Custom Blocks

You can implement these blocks through `define`.

| Block Name       | Description               | Location                             |
| ---------------- | ------------------------- | ------------------------------------ |
| `custom-head`    | Head custom block         | `layouts/_default/baseof.html`       |
| `custom-profile` | Profile custom block | `layouts/partials/home/profile.html` |
| `custom-aside`   | Sidebar custom block      | `layouts/posts/single.html`          |
| `custom-footer`  | Footer custom block       | `layouts/partials/footer.html`       |
| `custom-widgets` | Widgets custom block      | `layouts/partials/widgets.html`      |
| `custom-assets`  | Assets custom block       | `layouts/partials/assets.html`       |

## How to Use

For example, the FixIt theme documentation site customizes the `custom-profile` block on the homepage.

First, create a custom template entry file:

```bash
cp themes/FixIt/layouts/partials/custom.html layouts/partials/custom.html
```

Then, define the `custom-profile` block in the custom template:

```go-html-template {title="layouts/partials/custom.html"}
<!-- ... -->

{{- define "custom-profile" -}}
  <div class="profile-custom">
    {{- if .Site.BuildDrafts -}}
      <a href="https://fixit.lruihao.cn" target="_blank" rel="external" title="Go to Production Environment">
        <img src="https://img.shields.io/github/deployments/hugo-fixit/docs/Production?style=flat&label=Production&logo=vercel" alt="Production environment">
      </a>
    {{- else -}}
      <a href="https://pre.fixit.lruihao.cn" target="_blank" rel="external" title="Go to Preview Environment">
        <img src="https://img.shields.io/github/deployments/hugo-fixit/docs/Preview?style=flat&label=Preview&logo=vercel" alt="Preview environment">
      </a>
    {{- end -}}
    <a href="https://demo.fixit.lruihao.cn" target="_blank" rel="external" title="FixIt Demo">
      <img src="https://img.shields.io/badge/Demo-orange" alt="FixIt Demo">
    </a>
  </div>
{{- end -}}

<!-- ... -->
```

<!-- link reference definition -->
[custom-html]: https://github.com/hugo-fixit/FixIt/blob/master/layouts/partials/custom.html
