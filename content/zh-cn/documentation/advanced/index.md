---
title: 进阶篇
date: 2024-04-06T12:59:28+08:00
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

> [!note] Hugo **extended** 版本对于自定义样式是必需的。

**FixIt** 主题提供了灵活的 SCSS 定制系统。在项目根目录创建 `assets/scss/custom.scss` 即可自定义样式。

主题开放了 SCSS mixins、函数和 CSS 自定义属性供定制使用。完整 API 请参阅 [SCSS API 参考](/references/scss/)。

### 主题适配 {#theme-adaptation}

你可以通过 `hugo.toml` 中的 `[params.appearance]` 配置外观。这是自定义颜色、字体和尺寸的推荐方式。

```toml
[params.appearance]
global_font_size = "16px"
global_font_color = "#1f2328"
global_link_color = "#161209"
```

所有外观变量定义在 [`scss-vars.html`](https://github.com/hugo-fixit/FixIt/blob/{{< param docs.fixit_version >}}/layouts/_partials/function/scss-vars.html)。

### 字体样式 {#font-style}

自定义字体需要两步：导入字体 CSS，然后配置字体族。

**自定义全局字体**，以开源字体 [霞鹜文楷][LxgwWenKai] 为例：

在 `assets/scss/custom.scss` 中导入字体，并通过 `[params.appearance]` 配置字体族：

```scss {name="assets/scss/custom.scss"}
@import url('https://chinese-fonts-cdn.deno.dev/packages/lxgwwenkai/dist/LXGWWenKai-Regular/result.css');
```

```toml
[params.appearance]
global_font_family = "LXGW WenKai, system-ui, sans-serif"
```

**自定义代码字体**，以开源字体 [Fira Mono][Fira] 为例：

```scss {name="assets/scss/custom.scss"}
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap&subset=latin-ext');
```

```toml
[params.appearance]
code_font_family = "Fira Mono, Menlo, Consolas, monospace"
```

如果你想自定义的字体没有公共 CDN，你可以手动分包或 [在线分包][online-split] 发布到 NPM。以 [沐目体][MMT] 为例：

```scss {name="assets/scss/custom.scss"}
@import url('https://cdn.jsdelivr.net/npm/mmt-webfont/dist/result.css');
```

```toml
[params.appearance]
global_font_family = "MMT, system-ui, sans-serif"
```

### 页面样式 {#page-style}

{{< version 0.3.10 changed >}}

FixIt 主题通过 `page_style` 提供内置页面宽度选项：

- **narrow** — 较窄的页面/目录宽度比
- **normal** — 默认页面/目录宽度比
- **wide** — 较大的页面/目录宽度比

如需自定义页面宽度，在 `assets/scss/custom.scss` 中使用 `page-style` mixin：

```scss {name="assets/scss/custom.scss"}
@include page-style('custom') {
  @include media('xl') {
    width: ROUND(70%, 2px);
    max-width: 1600px;
  }
  @include media('lg') {
    width: ROUND(60%, 2px);
  }
  @include media('md') {
    width: ROUND(56%, 2px);
  }
}
```

然后在站点配置中设置 `page_style = "custom"`。

### 响应式和媒体查询 {#media-queries}

FixIt 主题提供了 `media` mixin 用于响应式断点：

| 目标 | 最小宽度 | 最大宽度 | 方向         |
| ---- | -------- | -------- | ------------ |
| `xs` | —        | 679.9px  | only         |
| `sm` | 680px    | 959.9px  | only/up/down |
| `md` | 960px    | 1199.9px | only/down    |
| `lg` | 1200px   | 1439.9px | only/up      |
| `xl` | 1440px   | —        | only         |

在 `assets/scss/custom.scss` 中使用：

```scss {name="assets/scss/custom.scss"}
.my-element {
  @include media('xl') {
    width: 1200px;
  }
  @include media('sm') {
    width: 100%;
  }
}
```

### 打印样式 {#print-style}

FixIt 主题通过 UnoCSS 提供了打印视图相关的工具类：

- `break-before-page` — 在元素之前插入分页符
- `break-after-page` — 在元素之后插入分页符
- `print:hidden` — 在打印视图中隐藏元素

```html
<div class="break-before-page"></div>
<div class="break-after-page"></div>
<div class="print:hidden">
  你希望在打印视图中隐藏的某些内容写在此处。
</div>
```

如果设置 `goldmark.parser.attribute.block` 为 `true`：

```markdown
{.break-before-page}
{.break-after-page}

你希望在打印视图中隐藏的某些内容写在此处。
{.print:hidden}
```

## 自定义脚本

在项目根目录创建 `assets/js/custom.ts`（或 `custom.js`），它将在每个页面末尾执行。

通过 `window.fixit` 访问 FixIt 公共 API。完整 API 请参阅 [JavaScript API 参考](/references/javascript/)。

```typescript {name="assets/js/custom.ts"}
const { fixit } = window as any

class CustomScript {
  constructor() {
    this.init()
  }

  init() {
    console.log('FixIt version:', fixit.version)

    // 监听主题切换
    fixit.eventBus.on('fixit:switch-theme', ({ detail }: any) => {
      console.log('Theme switched:', detail.mode)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  void new CustomScript()
})
```

## 自定义模板

Hugo 允许你通过覆盖主题模板来改造主题，例如：你可以创建 `layouts/404.html` 文件以覆盖 `themes/FixIt/layouts/404.html`，从而实现自定义 FixIt 主题 404 页面模板的需求。

但是，对于主题的大多数模板，我们通常不建议你这样做，因为这样可能会导致未来升级主题困难。

{{< version 0.3.7 >}}

为了避免升级冲突问题，基于这一特性，FixIt 主题开放了统一的自定义模板入口文件及配置，详见 [开放的自定义块]({{< relref "blocks" >}})。

## 自定义 Admonition {#custom-admonitions}

{{< version 0.3.13 >}}

你可以使用 `admonition` mixin 自定义 [Admonition][sc-admonition]。

首先，在 `hugo.toml` 中添加图标：

```toml
[params.admonition]
ban = "fa-solid fa-ban"
```

然后在 `assets/scss/custom.scss` 中添加样式：

```scss {name="assets/scss/custom.scss"}
.admonition {
  @include admonition(ban, #ff3d00, rgba(255, 61, 0, 0.1));
}
```

如需修改自定义 Admonition 的默认标题，在对应的语言文件中添加：

```toml
[admonition]
ban = "禁止"
```

之后，在内容中使用自定义 Admonition：

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

你可以使用 `task-icon` 和 `task-text` mixin 自定义 [任务列表][task-list]。

首先，在 `hugo.toml` 中添加图标：

```toml
[params.taskList]
tip = "fa-regular fa-lightbulb"
```

如需修改默认标题：

```toml
[task-list]
tip = "提示"
```

之后，在内容中使用自定义任务列表：

```markdown
- [tip] 这是一个带有提示图标的自定义任务列表类型。
```

呈现的输出效果：

- [tip] 这是一个带有提示图标的自定义任务列表类型。

如需自定义样式，在 `assets/scss/custom.scss` 中添加：

```scss {name="assets/scss/custom.scss"}
li[data-task='tip'] {
  @include task-icon(#EA9E36);
  @include task-text(#9974F7);
}
```

上面的例子将改变任务列表的颜色：

- [tip] 这是一个带有提示图标的自定义任务列表类型。
{style="--fi-task-color: #9974F7;--fi-checkbox-color: #EA9E36;"}

> [!TIP]
> 这只是主题文档的一个示例，并不包含在主题中。

## 引入主题组件 {#import-theme-components}

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

    [params.custom_partials]
    # ... other partials
    assets = [ "inject/component-projects.html" ]
    # ... other partials
    ```

3. **主题组件引入完成**，根据不同组件文档使用组件功能即可。

> 本章节不对主题组件的概念或者开发进行赘述，如果你对此感兴趣，可以查看 [贡献指南 - 开发组件][components]。

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
