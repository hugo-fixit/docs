---
title: 开放的自定义块
date: 2024-05-09T10:28:58+08:00
type: posts
collections:
  - References
resources:
  - name: featured-image-preview
    src: featured-image.webp
lightgallery: true
---

为了提升 FixIt 主题的可扩展性，我们提供了一些自定义块，你可以在你的项目中使用这些自定义块来实现更多的功能。

<!--more-->

## 入口文件

{{< version 0.3.7 >}}

FixIt 主题开放了统一的自定义模板入口文件 [`layouts/partials/custom.html`][custom-html]，你可以通过这个文件来实现自定义块或者更多的想法。

为了避免升级冲突并方便引用主题组件，我们强烈建议你将此文件从主题复制到你的项目中并重写。

```bash
cp themes/FixIt/layouts/partials/custom.html layouts/partials/custom.html
```

## 自定义块

你可以通过 `define` 来实现这些块。

| 块名称                       | 描述               | 位置                                   |
| :--------------------------- | :----------------- | :------------------------------------- |
| `custom-head`                | 头部自定义块       | `layouts/_default/baseof.html`         |
| `custom-profile`             | 首页自定义块       | `layouts/partials/home/profile.html`   |
| `custom-aside`               | 侧栏自定义块       | `layouts/posts/single.html`            |
| `custom-comment`             | 评论系统自定义块   | `layouts/partials/single/comment.html` |
| `custom-footer`              | 页脚自定义块       | `layouts/partials/footer.html`         |
| `custom-widgets`             | 小部件自定义块     | `layouts/partials/widgets.html`        |
| `custom-assets`              | 资源自定义块       | `layouts/partials/assets.html`         |
| `custom-post__footer:before` | 文章页脚前自定义块 | `layouts/posts/single.html`            |
| `custom-post__footer:after`  | 文章页脚后自定义块 | `layouts/posts/single.html`            |

## 有何意义

通过开放自定义块，FixIt 主题的可扩展性进一步提升。

之后，我们可以充分利用主题的基础特性，构建更多上层组件，从而使博客充满无限的想象空间和创意！

![主题、组件、博客 Venn 图](/references/blocks/featured-image.webp "以 FixIt 主题为核心构建多个上层组件，最后在最上层的博客中使用。")

## 如何使用

例如，FixIt 主题文档站点自定义了首页的 `custom-profile` 块。

首先，创建自定义模板入口文件：

```bash
cp themes/FixIt/layouts/partials/custom.html layouts/partials/custom.html
```

然后，在自定义模板中定义 `custom-profile` 块：

```go-html-template {title="layouts/partials/custom.html"}
<!-- ... -->

{{- define "custom-profile" -}}
  {{- partial "custom/profile.html" . -}}
{{- end -}}

<!-- ... -->
```

<!-- link reference definition -->
[custom-html]: https://github.com/hugo-fixit/FixIt/blob/master/layouts/partials/custom.html
