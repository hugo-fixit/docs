---
title: 进阶篇
date: 2024-04-06T12:59:28+08:00
type: posts
author:
  name: Lruihao
  link: https://lruihao.cn
description: 探索 Hugo - FixIt 主题的的进阶使用。
resources:
  - name: featured-image
    src: featured-image.webp
categories:
  - Documentation
collections:
  - Outline
tags:
  - Advanced
  - Customization
toc:
  auto: false
---
<!-- markdownlint-disable-file MD052 -->
探索 Hugo - **FixIt** 主题的的进阶使用。

<!--more-->

## 自定义样式

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

```scss {data-open=true}
[data-page-style='custom'] {
  @media only screen and (min-width: 1441px) {
    %page-style {
      width: Round(70%, 2px);
    }
  }

  @media only screen and (min-width: 1440px) {
    %page-style {
      width: Round(60%, 2px);
    }
  }

  @media only screen and (min-width: 1200px) {
    %page-style {
      width: Round(56%, 2px);
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
  你希望在打印视图中隐藏的某些内容写在此处。
</div>
```

如果设置 `goldmark.parser.attribute.block` 为 `true`，你也可以这样用：

```markdown
{.page-break-before}
{.page-break-after}

你希望在打印视图中隐藏的某些内容写在此处。
{.print-d-none}
```

## 自定义脚本

{{< version 0.2.16 >}}

包含自定义脚本文件 `custom.js` 的目录相对于 **你的项目根目录** 的路径为 `assets/js`。

如果脚本文件 `assets/js/custom.js` 存在，它将在每篇文章和页面的末尾执行。

## 自定义模板

Hugo 允许你通过覆盖主题模板来改造主题，例如：你可以创建 `layouts/404.html` 文件以覆盖 `themes/FixIt/layouts/404.html`，从而实现自定义 FixIt 主题 404 页面模板的需求。

但是，对于主题的大多数模板，我们通常不建议你这样做，因为这样可能会导致未来升级主题困难。

{{< version 0.3.7 >}} 为了避免升级冲突问题，基于这一特性，FixIt 主题开放了统一的自定义模板入口文件，你可以通过 `define` 实现 [开放的自定义块][block]。

## PWA 支持

这部分内容在 [PWA 支持页面][pwa-support] 中介绍。

<!-- link reference definition -->
[pwa-support]: {{< relref path="/guides/pwa-support" >}}
[block]: {{< relref path="/references/blocks" >}}
