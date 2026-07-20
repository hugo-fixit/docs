---
title: Advanced Usage
date: 2024-04-06T12:59:28+08:00
description: Discover advanced usage of the Hugo - FixIt theme.
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

Discover advanced usage of the Hugo - **FixIt** theme.

<!--more-->

## Style Customization

> [!note] Hugo **extended** version is necessary for the style customization.

**FixIt** theme provides a flexible SCSS customization system. Create `assets/scss/custom.scss` in your project root to customize styles.

The theme exposes SCSS mixins, functions, and CSS custom properties for customization. See the [SCSS API Reference](/references/scss/) for the full API.

### Theme Adaptation {#theme-adaptation}

You can configure appearance via `[params.appearance]` in `hugo.toml`. This is the recommended way to customize colors, fonts, and sizes.

```toml
[params.appearance]
global_font_size = "16px"
global_font_color = "#1f2328"
global_link_color = "#161209"
```

All appearance variables are defined in [`scss-vars.html`](https://github.com/hugo-fixit/FixIt/blob/{{< param docs.fixit_version >}}/layouts/_partials/function/scss-vars.html).

### Fonts Style {#font-style}

Customizing fonts requires two steps: import the font CSS, then configure the font family.

To customize the global font, take the open-source font [LXGW WenKai][LxgwWenKai] as an example:

Import the font in `assets/scss/custom.scss`, then configure the font family via `[params.appearance]`:

```scss {name="assets/scss/custom.scss"}
@import url('https://chinese-fonts-cdn.deno.dev/packages/lxgwwenkai/dist/LXGWWenKai-Regular/result.css');
```

```toml
[params.appearance]
global_font_family = "LXGW WenKai, system-ui, sans-serif"
```

To customize the code font, take the open-source font [Fira Mono][Fira] as an example:

```scss {name="assets/scss/custom.scss"}
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap&subset=latin-ext');
```

```toml
[params.appearance]
code_font_family = "Fira Mono, Menlo, Consolas, monospace"
```

If you want to customize a font that does not have a public CDN, you can manually or [online split][online-split] it and publish it to NPM. Take the [MMT][MMT] typeface as an example:

```scss {name="assets/scss/custom.scss"}
@import url('https://cdn.jsdelivr.net/npm/mmt-webfont/dist/result.css');
```

```toml
[params.appearance]
global_font_family = "MMT, system-ui, sans-serif"
```

### Page Style {#page-style}

{{< version 0.3.10 changed >}}

The FixIt theme provides built-in page width options via `page_style`:

- **narrow** — Narrow page/toc width ratio
- **normal** — Default page/toc width ratio
- **wide** — Larger page/toc width ratio

For a custom page width, use the `page-style` mixin in `assets/scss/custom.scss`:

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

Then set `page_style = "custom"` in your site configuration.

### Responsive Media Queries {#media-queries}

The FixIt theme provides a `media` mixin for responsive breakpoints:

| Target | Min Width | Max Width | Direction    |
| ------ | --------- | --------- | ------------ |
| `xs`   | —         | 679.9px   | only         |
| `sm`   | 680px     | 959.9px   | only/up/down |
| `md`   | 960px     | 1199.9px  | only/down    |
| `lg`   | 1200px    | 1439.9px  | only/up      |
| `xl`   | 1440px    | —         | only         |

Usage in `assets/scss/custom.scss`:

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

### Print Style {#print-style}

FixIt theme provides UnoCSS utility classes for print view:

- `break-before-page` — Insert page break before element
- `break-after-page` — Insert page break after element
- `print:hidden` — Hide elements in print view

```html
<div class="break-before-page"></div>
<div class="break-after-page"></div>
<div class="print:hidden">
  Something you want to hide in the print view is written here.
</div>
```

If `goldmark.parser.attribute.block` is set to `true`:

```markdown
{.break-before-page}
{.break-after-page}

Something you want to hide in the print view is written here.
{.print:hidden}
```

## Script Customization

Create `assets/js/custom.ts` (or `custom.js`) in your project root. It will be executed at the end of each page.

Access the FixIt public API via `window.fixit`. See the [JavaScript API Reference](/references/javascript/) for the full API.

```typescript {name="assets/js/custom.ts"}
const { fixit } = window as any

class CustomScript {
  constructor() {
    this.init()
  }

  init() {
    console.log('FixIt version:', fixit.version)

    // Listen to theme changes
    fixit.eventBus.on('fixit:switch-theme', ({ detail }: any) => {
      console.log('Theme switched:', detail.mode)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  void new CustomScript()
})
```

## Templates Customization

Hugo allows you to modify the theme by overriding theme templates, for example: you can create `layouts/404.html` to override `themes/FixIt/layouts/404.html`.

However, for most templates, FixIt theme generally doesn't recommend this, as it may make theme upgrades difficult.

{{< version 0.3.7 >}}

To avoid upgrade conflicts, FixIt theme opens a unified custom template entry file and configuration. See [Open Custom Blocks]({{< relref "blocks" >}}).

## Custom Admonitions {#custom-admonitions}

{{< version 0.3.13 >}}

You can define custom [admonitions][sc-admonition] using the `admonition` mixin.

First, add the icon in `hugo.toml`:

```toml
[params.admonition]
ban = "fa-solid fa-ban"
```

Then add the style in `assets/scss/custom.scss`:

```scss {name="assets/scss/custom.scss"}
.admonition {
  @include admonition(ban, #ff3d00, rgba(255, 61, 0, 0.1));
}
```

To customize the default title, add to the language file:

```toml
[admonition]
ban = "Forbidden"
```

Then use it in content:

{{< admonition ban "" false >}}
Shortcode syntax:

```markdown {mode="simple", linenos=false}
{{?{}< admonition ban >}}
This is a custom admonition type with a ban icon.
{{?{}< /admonition >}}
```

Alerts Markdown extension syntax:

```markdown {mode="simple", linenos=false}
> [!ban]
> This is a custom admonition type with a ban icon.
```

> [!TIP]
> This is just an example of the theme documentation and is not included in the theme.
{{< /admonition >}}

## Custom Task Lists {#custom-task-lists}

{{< version 0.3.14 >}}

You can define custom [task lists][task-list] using the `task-icon` and `task-text` mixins.

First, add the icon in `hugo.toml`:

```toml
[params.taskList]
tip = "fa-regular fa-lightbulb"
```

To customize the default title:

```toml
[task-list]
tip = "Tip"
```

Then use it in content:

```markdown
- [tip] This is a custom task list type with a tip icon.
```

The rendered output:

- [tip] This is a custom task list type with a tip icon.

To customize the style, add in `assets/scss/custom.scss`:

```scss {name="assets/scss/custom.scss"}
li[data-task='tip'] {
  @include task-icon(#EA9E36);
  @include task-text(#9974F7);
}
```

Above example will change the color of the task list:

- [tip] This is a custom task list type with a tip icon.
{style="--fi-task-color: #9974F7;--fi-checkbox-color: #EA9E36;"}

> [!TIP]
> This is just an example of the theme documentation and is not included in the theme.

## Import Theme Components {#import-theme-components}

> **Why do others have certain features on their blogs based on the FixIt theme, but I don't?**
{.blockquote-center}

Before this, you might have had similar questions. Actually, it is very likely that they have introduced additional theme components.

Next, taking the [component-projects] component as an example, we will introduce how to import a theme component. Most components are imported in a similar way.

1. **First, install the component**

    The installation method is the same as [installing the theme][installation]. There are several ways to install, choose one, Here are two mainstream ways.

    - Install as a Hugo module

        First, make sure your project itself is a [Hugo module][use-modules].

        Then add this theme component to your `hugo.toml` configuration file:

        ```toml {mode="simple", lineNos=false}
        [module]

        [[module.imports]]
        path = "github.com/hugo-fixit/FixIt"

        [[module.imports]]
        path = "github.com/hugo-fixit/component-projects"
        ```

        On the first start of Hugo it will download the required files.

    - Install as a Git submodule

        Clone FixIt and this git repository into your theme folder and add it as a submodule to the site directory.

        ```bash {mode="simple", lineNos=false}
        git submodule add https://github.com/hugo-fixit/component-projects.git themes/component-projects
        ```

        Next edit `hugo.toml` of your project and add this theme component to your themes:

        ```toml {mode="simple", lineNos=false}
        theme = [
          "FixIt",
          "component-projects",
        ]
        ```

2. **Inject Partial**

    Theme components usually require some third-party resources, such as CSS or JavaScript. Generally, each component will provide an initialization file in the `layouts/_partials` directory, such as: `inject/component-projects.html`.

    Through the [custom blocks][block] opened by the FixIt theme, we can easily inject the initialization file of the component through configuration:

    ```toml {mode="simple", lineNos=false}
    [params]

    [params.custom_partials]
    # ... other partials
    assets = [ "inject/component-projects.html" ]
    # ... other partials
    ```

3. **Theme component import completed**, use the component features according to different component documents.

> This section does not elaborate on the concept or development of theme components. If you are interested, you can check [Contributing - Develop Theme Components][components].

## PWA Support

This part is shown in the [pwa support page][pwa-support].

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 -->
[LxgwWenKai]: https://github.com/lxgw/LxgwWenKai
[Fira]: https://github.com/mozilla/Fira
[online-split]: https://chinese-font.netlify.app/en/online-split
[MMT]: https://github.com/Lruihao/mmt-webfont
[block]: {{< relref "/references/blocks" >}}
[sc-admonition]: {{< relref "/documentation/content-management/shortcodes/extended/admonition" >}}
[task-list]: {{< relref "/documentation/content-management/markdown-syntax/extended#task-lists" >}}
[components]: {{< relref "/contributing/components" >}}
[installation]: {{< relref "/documentation/installation" >}}
[component-projects]: https://github.com/hugo-fixit/component-projects
[use-modules]: https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module
[pwa-support]: {{< relref "/guides/pwa-support" >}}
