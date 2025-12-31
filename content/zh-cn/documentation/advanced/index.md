---
title: 进阶篇
date: 2024-04-06T12:59:28+08:00
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
---

探索 Hugo - **FixIt** 主题的的进阶使用。

<!--more-->

## 自定义样式

{{< admonition >}}
Hugo **extended** 版本对于自定义样式是必需的。
{{< /admonition >}}

通过定义自定义 `.scss` 样式文件，**FixIt** 主题支持可配置的样式。

包含自定义 `.scss` 样式文件的目录相对于 **你的项目根目录** 的路径为 `assets/css`。

在 `assets/css/_override.scss` 中，你可以覆盖 `themes/FixIt/assets/css/_variables.scss` 中的变量以自定义样式。

在 `assets/css/_custom.scss` 中，你可以添加一些 CSS 样式代码以自定义样式。

### 字体样式 {#font-style}

以下字体样式均在 `assets/css/_override.scss` 中定义。

自定义全局字体，以开源字体 [霞鹜文楷][LxgwWenKai] 为例：

```scss
@import url('https://chinese-fonts-cdn.deno.dev/packages/lxgwwenkai/dist/LXGWWenKai-Regular/result.css');
$global-font-family: 'LXGW WenKai', $global-font-family;
```

自定义代码字体，以开源字体 [Fira Mono][Fira] 为例：

```scss
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap&subset=latin-ext');
$code-font-family: Fira Mono, $code-font-family;
```

如果你想自定义的字体没有公共 CDN，你可以手动分包或 [在线分包][online-split] 发布到 NPM，以 [沐目体][MMT] 为例：

```scss
@import url('https://cdn.jsdelivr.net/npm/mmt-webfont/dist/result.css');
$global-font-family: 'MMT', $global-font-family;
```

### 页面宽度 {#page-style}

{{< version 0.2.13 >}}

FixIt 主题提供了页面宽度配置选项 `pageStyle` 并提供三种选项。

- **narrow** 保留 `<v0.2.13` 页面目录宽度比
- **normal** 新的默认页面目录宽度比
- **wide** 较大的页面目录宽度比

另外，你还可以在 `assets/css/_custom.scss` 中，自定义 `pageStyle` 值

例如： `pageStyle="custom"`

```scss {name="assets/css/_custom.scss"}
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

{{< version 0.3.7 >}}

为了避免升级冲突问题，基于这一特性，FixIt 主题开放了统一的自定义模板入口文件及配置，详见 [开放的自定义块][block]。

## 自定义 Admonition {#custom-admonitions}

{{< version 0.3.13 >}}

你可以自定义 [Admonition][sc-admonition]，甚至可以覆盖默认 Admonition。

要自定义 Admonition，请在站点配置文件中更改 `params.admonition`。例如：

```toml
[params]

[params.admonition]
ban = "fa-solid fa-ban"
```

然后在项目目录 `assets/css/_override.scss` 中创建以下 SCSS 块：

```scss {title="_override.scss"}
// Custom admonitions style
$custom-admonition-map: (
  ban: (
    color: #ff3d00,
    bg-color: rgba(255, 61, 0, 0.1),
  ),
);

$admonition-color-map: map-merge($admonition-color-map, $custom-admonition-map);
```

如果你需要修改自定义 Admonition 的默认标题，你可以在对应的语言文件中添加以下内容：

```toml
[admonition]
ban = "禁止"
```

之后，你可以在内容中使用自定义 Admonition：

{{< admonition ban "" false >}}
Shortcode 语法：

```markdown {mode="simple", linenos=false}
{{?{}< admonition ban >}}
这是一个带有禁止图标的自定义 Admonition 类型。
{{?{}< /admonition >}}
```

Alert Markdown 扩展语法：

```markdown {mode="simple", linenos=false}
> [!ban]
> 这是一个带有禁止图标的自定义 Admonition 类型。
```

> [!TIP]
> 这只是主题文档的一个示例，并不包含在主题中。
{{< /admonition >}}

## 自定义任务列表 {#custom-task-lists}

{{< version 0.3.14 >}}

你可以自定义 [任务列表][task-list]，甚至可以覆盖默认任务列表。

要自定义任务列表，请在站点配置文件中更改 `params.taskList`。例如：

```toml
[params]

[params.taskList]
tip = "fa-regular fa-lightbulb"
```

如果你需要修改自定义任务列表的默认标题，你可以在对应的语言文件中添加以下内容：

```toml
[task-list]
tip = "提示"
```

之后，你可以在内容中使用自定义任务列表：

```markdown
- [tip] 这是一个带有提示图标的自定义任务列表类型。
```

呈现的输出效果如下：

- [tip] 这是一个带有提示图标的自定义任务列表类型。

如果你想修改任务列表默认样式，你可以在项目目录 `assets/css/_custom.scss` 中添加以下 SCSS 块：

```scss {name="assets/css/_custom.scss"}
li[data-task='tip'] {
  --fi-task-color: #9974F7;
  --fi-checkbox-color: #EA9E36;
}
```

上面的例子将改变任务列表的颜色，如下所示：

- [tip] 这是一个带有提示图标的自定义任务列表类型。
{style="--fi-task-color: #9974F7;--fi-checkbox-color: #EA9E36;"}

> [!TIP]
> 这只是主题文档的一个示例，并不包含在主题中。

## 引入主题组件 {#import-theme-components}

> 本章节不对主题组件的概念或者开发进行赘述，如果你对此感兴趣，可以查看 [贡献指南 - 开发组件][components]。

> **为什么都是基于 FixIt 主题，别人博客的某些功能我却没有？**
{.blockquote-center}

在此之前，或许你也会有类似的疑问。其实，很有可能他们引入了额外的主题组件。

接下来以 [component-projects] 组件为例介绍如何引入一个主题组件，大多数组件引入方式类似。

1. **首先，安装组件**

    安装方式与 [安装主题][installation] 相同，有多种安装方式，任选一种即可，这里介绍两种主流方式。

    - 作为 Hugo 模块安装

        首先确保你的项目本身是一个 [Hugo 模块][use-modules]。

        然后将此主题组件添加到你的 `hugo.toml` 配置文件中：

        ```toml {mode="simple", lineNos=false}
        [module]

        [[module.imports]]
        path = "github.com/hugo-fixit/FixIt"

        [[module.imports]]
        path = "github.com/hugo-fixit/component-projects"
        ```

        在 Hugo 的第一次启动时，它将下载所需的文件。

    - 作为 Git 子模块安装

        将 FixIt 和此 git 存储库克隆到你的主题文件夹中，并将其作为网站目录的子模块添加。

        ```bash {mode="simple", lineNos=false}
        git submodule add https://github.com/hugo-fixit/component-projects.git themes/component-projects
        ```

        接下来编辑项目的 `hugo.toml` 并将此主题组件添加到你的主题中：

        ```toml {mode="simple", lineNos=false}
        theme = [
          "FixIt",
          "component-projects",
        ]
        ```

2. **注入 Partial**

    主题组件通常需要一些第三方资源，例如 CSS 或 JavaScript 等。一般来说，每个组件都会在 `layouts/_partials` 目录下提供一个初始化文件，如：`inject/component-projects.html`。

    通过 FixIt 主题开放的 [自定义块][block]，我们能通过配置轻松地注入组件的初始化文件：

    ```toml {mode="simple", lineNos=false}
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
    assets = [ "inject/component-projects.html" ]
    postTocBefore = []
    postTocAfter = []
    postContentBefore = []
    postContentAfter = []
    postFooterBefore = []
    postFooterAfter = []
    ```

3. **主题组件引入完成**，根据不同组件文档使用组件功能即可。

## PWA 支持

这部分内容在 [PWA 支持页面][pwa-support] 中介绍。

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 -->
[LxgwWenKai]: https://github.com/lxgw/LxgwWenKai
[Fira]: https://github.com/mozilla/Fira
[online-split]: https://chinese-font.netlify.app/zh-cn/online-split
[MMT]: https://github.com/Lruihao/mmt-webfont
[block]: {{< relref "/references/blocks" >}}
[sc-admonition]: {{< relref "/documentation/content-management/shortcodes/extended/admonition" >}}
[task-list]: {{< relref "/documentation/content-management/markdown-syntax/extended#task-lists" >}}
[components]: {{< relref "/contributing/components" >}}
[installation]: {{< relref "/documentation/installation" >}}
[component-projects]: https://github.com/hugo-fixit/component-projects
[use-modules]: https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module
[pwa-support]: {{< relref "/guides/pwa-support" >}}
