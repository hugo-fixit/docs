---
title: Advanced Usage
date: 2024-04-06T12:59:28+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
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

{{< admonition >}}
Hugo **extended** version is necessary for the style customization.
{{< /admonition >}}

**FixIt** theme has been built to be as configurable as possible by defining custom `.scss` style files.

The directory including the custom `.scss` style files is `assets/css` relative to **your project root directory**.

In `assets/css/_override.scss`, you can override the variables in `themes/FixIt/assets/css/_variables.scss` to customize the style.

In `assets/css/_custom.scss`, you can add some css style code to customize the style.

### Fonts Style {#font-style}

The following font styles are defined in `assets/css/_override.scss`.

To customize the global font, take the open-source font [LXGW WenKai][LxgwWenKai] as an example:

```scss
@import url('https://chinese-fonts-cdn.deno.dev/packages/lxgwwenkai/dist/LXGWWenKai-Regular/result.css');
$global-font-family: 'LXGW WenKai', $global-font-family;
```

To customize the code font, take the open-source font [Fira Mono][Fira] as an example:

```scss
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap&subset=latin-ext');
$code-font-family: Fira Mono, $code-font-family;
```

If you want to customize a font that does not have a public CDN, you can manually or [online split][online-split] it and publish it to NPM. Take the [MMT][MMT] typeface as an example:

```scss
@import url('https://cdn.jsdelivr.net/npm/mmt-webfont/dist/result.css');
$global-font-family: 'MMT', $global-font-family;
```

### Page Style {#page-style}

{{< version 0.3.10 changed >}}

The FixIt theme provides a page width configuration option `pageStyle` and three values.

- **narrow** Keep `<v0.2.13` page/toc width ratio
- **normal** New default page/toc width ratio
- **wide** Larger page/toc width ratio

In addition, you can also customize the `pageStyle` value in `assets/css/_custom.scss`

For example: `pageStyle="custom"`

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

### Print Style {#print-style}

{{< version 0.2.13 >}}

There are three css common class for print view in FixIt Theme.

- `page-break-before` Insert page break before element
- `page-break-after` Insert page break after element
- `print-d-none` Hide elements in print view

Here is a simple exmple:

```html
<div class="page-break-before"></div>
<div class="page-break-after"></div>
<div class="print-d-none">
  Something you want to hide in the print view is written here.
</div>
```

If you set `goldmark.parser.attribute.block` to `true`, you can also use:

```markdown
{.page-break-before}
{.page-break-after}

Something you want to hide in the print view is written here.
{.print-d-none}
```

## Script Customization

{{< version 0.2.16 >}}

The directory including the custom script file named `custom.js` is `assets/js` relative to **your project root directory**.

If the script file `assets/js/custom.js` exists, it will be executed at the end of each post and page.

## Templates Customization

Hugo allows you to modify the theme by overriding the theme templates, for example: you can create `layouts/404.html` file to override `themes/FixIt/layouts/404.html`, so as to meet the needs of custom 404 page template of FixIt theme.

However, for most of the templates, FixIt theme generally doesn't recommend you do this, as it may make theme upgrades difficult in the future.

{{< version 0.3.7 >}}

In order to avoid upgrade conflicts, based on this feature, the FixIt theme opens a unified custom template entry file and configuration, see [Open Custom Blocks][block].

## Custom Admonitions {#custom-admonitions}

{{< version 0.3.13 >}}

You can define custom [admonitions][sc-admonition], or even overwrite the default admonitions.

To define a custom admonition, change `params.admonition` in your site configuration file. For example:

```toml
[params]

[params.admonition]
ban = "fa-solid fa-ban"
```

Then create the following SCSS block in your project directory `assets/css/_override.scss`:

```scss {title="_override.scss"}
// Custom admonition style
$custom-admonition-map: (
  ban: (
    color: #ff3d00,
    bg-color: rgba(255, 61, 0, 0.1),
  ),
);

$admonition-color-map: map-merge($admonition-color-map, $custom-admonition-map);
```

If you need to change the default title of a custom admonition, you can add the following content to the corresponding language file:

```toml
[admonition]
ban = "Forbidden"
```

After that, you can use the custom admonition in your content:

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

## Custom Task lists {#custom-task-lists}

{{< version 0.3.14 >}}

You can define custom [task lists][task-list], or even overwrite the default task lists.

To define a custom task list, change `params.taskList` in your site configuration file. For example:

```toml
[params]

[params.taskList]
tip = "fa-regular fa-lightbulb"
```

If you need to change the default title of a custom task list, you can add the following content to the corresponding language file:

```toml
[task-list]
tip = "Tip"
```

After that, you can use the custom task list in your content:

```markdown
- [tip] This is a custom task list type with a tip icon.
```

The rendered output looks like this:

- [tip] This is a custom task list type with a tip icon.

If you want to change the default task list style, you can add the following SCSS block in your project directory `assets/css/_custom.scss`:

```scss {name="assets/css/_custom.scss"}
li[data-task='tip'] {
  --fi-task-color: #9974F7;
  --fi-checkbox-color: #EA9E36;
}
```

Above example will change the color of the task list, like this:

- [tip] This is a custom task list type with a tip icon.
{style="--fi-task-color: #9974F7;--fi-checkbox-color: #EA9E36;"}

> [!TIP]
> This is just an example of the theme documentation and is not included in the theme.

## Import Theme Components {#import-theme-components}

> This section does not elaborate on the concept or development of theme components. If you are interested, you can check the [Contributing - Develop Theme Components][components].

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

3. **Theme component import completed**, use the component features according to different component documents.

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
