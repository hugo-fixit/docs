---
weight: 3
title: 进阶篇
date: 2023-02-24T13:22:22+08:00
type: posts
author:
  name: Lruihao
  link: https://lruihao.cn
description: 探索 Hugo - FixIt 主题的的进阶使用。
resources:
  - name: featured-image
    src: featured-image.png
tags:
  - Advanced
  - Configuration
categories:
  - Documentation
lightgallery: true
reward:
  enable: true
toc:
  auto: false
menu:
  main:
    name: 进阶篇
    title: 探索 Hugo - FixIt 主题的的进阶使用。
    parent: documentation
    weight: 3
    params:
      icon: fa-brands fa-readme
---

探索 Hugo - **FixIt** 主题的的进阶使用。

<!--more-->

## 自定义样式

{{< version 0.2.8 changed >}}

{{< admonition >}}
Hugo **extended** 版本对于自定义样式是必需的。
{{< /admonition >}}

通过定义自定义 `.scss` 样式文件，**FixIt** 主题支持可配置的样式。

包含自定义 `.scss` 样式文件的目录相对于 **你的项目根目录** 的路径为 `assets/css`。

在 `assets/css/_override.scss` 中，你可以覆盖 `themes/FixIt/assets/css/_variables.scss` 中的变量以自定义样式。

这是一个例子：

```scss
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap&subset=latin-ext');
$code-font-family: Fira Mono, Source Code Pro, Menlo, Consolas, Monaco, monospace;
```

在 `assets/css/_custom.scss` 中，你可以添加一些 CSS 样式代码以自定义样式。

### 页面宽度 {#page-style}

{{< version 0.2.13 >}}

FixIt 主题提供了页面宽度配置选项 `pageStyle` 并提供三种选项。

- **narrow** 保留 `<v0.2.13` 页面目录宽度比
- **normal** 新的默认页面目录宽度比
- **wide** 较大的页面目录宽度比

另外，你还可以在 `assets/css/_custom.scss` 中，自定义 `pageStyle` 值

例如： `pageStyle="custom"`

```scss
@media only screen and (min-width: 1441px) {
  [data-page-style='custom'] {
    .page {
      width: 70%;
    }

    aside {
      width: 15%;
    }
  }
}

@media only screen and (max-width: 1440px) {
  [data-page-style='custom'] {
    .page {
      width: 60%;
    }

    aside {
      width: 20%;
    }
  }
}

@media only screen and (max-width: 1200px) {
  [data-page-style='custom'] {
    .page {
      width: 56%;
    }

    aside {
      width: 22%;
    }
  }
}
```

### 打印样式 {#print-style}

{{< version 0.2.13 >}}

在 FixIt 主题中，提供有三个打印视图相关的 CSS 类

- `page-break-before` 在元素之前插入分页符
- `page-break-after` 在元素之后插入分页符
- `print-d-none` 在打印视图中隐藏元素

下面是一个简单的例子：

```html
<div class="page-break-before"></div>
<div class="page-break-after"></div>
<div class="print-d-none">
  您希望在打印视图中隐藏的某些内容写在此处。
</div>
```

如果设置 `goldmark.parser.attribute.block` 为 `true`，你也可以这样用：

```markdown
{.page-break-before}
{.page-break-after}

您希望在打印视图中隐藏的某些内容写在此处。
{.print-d-none}
```

## 自定义脚本

{{< version 0.2.16 >}}

包含自定义脚本文件 `custom.js` 的目录相对于 **你的项目根目录** 的路径为 `assets/js`。

如果脚本文件 `assets/js/custom.js` 存在，它将在每篇文章和页面的末尾执行。

## PWA 支持

这部分内容在 [PWA 支持页面](../../guides/pwa-support/) 中介绍。
