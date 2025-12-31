---
title: 开放的自定义块
date: 2024-05-09T10:28:58+08:00
collections:
  - References
resources:
  - name: featured-image-preview
    src: featured-image.webp
lightgallery: true
---

为了提升 FixIt 主题的可扩展性，我们提供了一些自定义块，你可以在你的项目中使用这些自定义块来实现更多的功能。

<!--more-->

## 有何意义

通过开放自定义块，FixIt 主题的可扩展性进一步提升。

之后，我们可以充分利用主题的基础特性，构建更多上层组件，从而使博客充满无限的想象空间和创意！

![主题、组件、博客 Venn 图](/references/blocks/featured-image.webp "以 FixIt 主题为核心构建多个上层组件，最后在最上层的博客中使用。")

## 入口文件

{{< version 0.3.7 >}}

FixIt 主题开放了统一的自定义模板入口文件 [`layouts/_partials/custom.html`][custom-html]。

在这个文件中，FixIt 主题已经定义了所有开放自定义块。如果你想进一步自定义，你可以将它从主题复制到你的项目中并重写。

```bash
cp themes/FixIt/layouts/_partials/custom.html layouts/_partials/custom.html
```

## 自定义块

你可以通过 `define` 来实现这些块。

| 块名称                        | 描述                 | 位置                                    |
| :---------------------------- | :------------------- | :-------------------------------------- |
| `custom-head`                 | 头部自定义块         | `layouts/baseof.html`                   |
| `custom-menu:desktop`         | 桌面菜单自定义块     | `layouts/_partials/header.html`         |
| `custom-menu:mobile`          | 移动菜单自定义块     | `layouts/_partials/header.html`         |
| `custom-profile`              | 首页自定义块         | `layouts/_partials/home/profile.html`   |
| `custom-aside`                | 侧栏自定义块         | `layouts/posts/single.html`             |
| `custom-comment`              | 评论系统自定义块     | `layouts/_partials/single/comment.html` |
| `custom-footer`               | 页脚自定义块         | `layouts/_partials/footer.html`         |
| `custom-widgets`              | 小部件自定义块       | `layouts/_partials/widgets.html`        |
| `custom-assets`               | 资源自定义块         | `layouts/_partials/assets.html`         |
| `custom-post__toc:before`     | 文章页目录前自定义块 | `layouts/posts/single.html`             |
| `custom-post__toc:after`      | 文章页目录后自定义块 | `layouts/posts/single.html`             |
| `custom-post__content:before` | 文章页内容前自定义块 | `layouts/posts/single.html`             |
| `custom-post__content:after`  | 文章页内容后自定义块 | `layouts/posts/single.html`             |
| `custom-post__footer:before`  | 文章页脚前自定义块   | `layouts/posts/single.html`             |
| `custom-post__footer:after`   | 文章页脚后自定义块   | `layouts/posts/single.html`             |

## 主题配置

{{< version 0.3.12 >}}

为了便于管理引入自定义模板，可以通过 `params.customPartials` 参数来指定自定义模板的路径。

自定义模板必须存放在 `/layouts/_partials/` 目录中。

```toml
[params]

[params.customPartials]
head = []
menuDesktop = []
menuMobile = []
profile = []
aside = []
comment = []
footer = []
widgets = []
assets = []
postTocBefore = []
postTocAfter = []
postContentBefore = []
postContentAfter = []
postFooterBefore = []
postFooterAfter = []
```

## 如何使用

现在我们以自定义首页的 `custom-profile` 块为例，来演示如何使用自定义块。

首先，在 `layouts/_partials/` 目录下创建自定义文件，例如 `layouts/_partials/custom/profile.html`。

写入任意内容：

```go-html-template
The quick brown fox jumps over the lazy dog.
```

然后，在配置文件中指定自定义模板的路径即可。

```toml
[params]

[params.customPartials]
profile = [ "custom/profile.html" ]
```

访问首页，你会看到在 `profile` 区域显示了模板中自定义的内容。

<!-- link reference definition -->
[custom-html]: https://github.com/hugo-fixit/FixIt/blob/master/layouts/_partials/custom.html
