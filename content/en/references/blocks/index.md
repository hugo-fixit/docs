---
title: Open Custom Blocks
date: 2024-05-09T10:28:58+08:00
type: posts
collections:
  - References
resources:
  - name: featured-image-preview
    src: featured-image.webp
lightgallery: true
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

| Block Name                   | Description                     | Location                               |
| :--------------------------- | :------------------------------ | :------------------------------------- |
| `custom-head`                | Head custom block               | `layouts/_default/baseof.html`         |
| `custom-profile`             | Profile custom block            | `layouts/partials/home/profile.html`   |
| `custom-comment`             | Comment system custom block     | `layouts/partials/single/comment.html` |
| `custom-aside`               | Sidebar custom block            | `layouts/posts/single.html`            |
| `custom-footer`              | Footer custom block             | `layouts/partials/footer.html`         |
| `custom-widgets`             | Widgets custom block            | `layouts/partials/widgets.html`        |
| `custom-assets`              | Assets custom block             | `layouts/partials/assets.html`         |
| `custom-post__footer:before` | Custom block before post footer | `layouts/posts/single.html`            |
| `custom-post__footer:after`  | Custom block after post footer  | `layouts/posts/single.html`            |

## What's the Meaning

By opening custom blocks, the extensibility of the FixIt theme is further enhanced.

After that, we can make full use of the basic features of the theme and build more upper-level components, so that the blog is full of unlimited imagination and creativity!

![Theme, Components, Blog Venn Diagram](./featured-image.webp "Build multiple upper-level components based on the FixIt theme, and finally use them in the top-level blog.")

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
  {{- partial "custom/profile.html" . -}}
{{- end -}}

<!-- ... -->
```

<!-- link reference definition -->
[custom-html]: https://github.com/hugo-fixit/FixIt/blob/master/layouts/partials/custom.html
