---
weight: 3
title: Advanced Usage
date: 2023-02-24T13:22:22+08:00
type: posts
author:
  name: Lruihao
  link: https://lruihao.cn
description: Discover advanced usage of the Hugo - FixIt theme.
resources:
  - name: featured-image
    src: featured-image.png
tags:
  - Advanced
  - Customization
categories:
  - Documentation
reward: true
toc:
  auto: false
menu:
  main:
    title: Discover advanced usage of the Hugo - FixIt theme.
    parent: documentation
    weight: 3
    params:
      icon: fa-brands fa-readme
---

Discover advanced usage of the Hugo - **FixIt** theme.

<!--more-->

## Style Customization

{{< version 0.2.8 changed >}}

{{< admonition >}}
Hugo **extended** version is necessary for the style customization.
{{< /admonition >}}

**FixIt** theme has been built to be as configurable as possible by defining custom `.scss` style files.

The directory including the custom `.scss` style files is `assets/css` relative to **your project root directory**.

In `assets/css/_override.scss`, you can override the variables in `themes/FixIt/assets/css/_variables.scss` to customize the style.

Here is a example:

```scss
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap&subset=latin-ext');
$code-font-family: Fira Mono, Source Code Pro, Menlo, Consolas, Monaco, monospace;
```

In `assets/css/_custom.scss`, you can add some css style code to customize the style.

### Page Style {#page-style}

{{< version 0.2.13 >}}

The FixIt theme provides a page width configuration option `pageStyle` and three values.

- **narrow** Keep `<v0.2.13` page/toc width ratio
- **normal** New default page/toc width ratio
- **wide** Larger page/toc width ratio

In addition, you can also customize the `pageStyle` value in `assets/css/_custom.scss`

For example: `pageStyle="custom"`

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

## PWA Support

This part is shown in the [pwa support page][pwa-support].

[pwa-support]: {{< relref path="/guides/pwa-support" >}}
