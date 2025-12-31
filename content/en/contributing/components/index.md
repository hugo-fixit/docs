---
title: Develop theme components
date: 2024-04-25T20:30:45+08:00
categories:
  - Contributing
hiddenFromHomePage: true
related:
  enable: false
menu:
  main:
    parent: contributing
---
<!-- markdownlint-disable-file reference-links-images -->
If you've built a Hugo theme components and want to contribute back to the Hugo FixIt Community, please share it with us.

<!--more-->

## Introduction

> Hugo provides advanced theming support with Theme Components.

Since Hugo `0.42` a project can configure a theme as a composite of as many theme components you need:

```toml
theme = [
  'base-theme',
  'my-shortcodes',
  'my-components',
]
```

You can even nest this, and have the theme component itself include theme components in its own `hugo.toml` (theme inheritance).

The theme definition example above in `hugo.toml` creates a theme with 3 theme components with precedence from left to right.

For any given file, data entry, etc., Hugo will look first in the project and then in `base-theme`, `my-shortcodes`, and lastly `my-components`.

Hugo uses two different algorithms to merge the file systems, depending on the file type:

- For `i18n` and `data` files, Hugo merges deeply using the translation ID and data key inside the files.
- For `static`, `layouts` (templates), and `archetypes` files, these are merged on file level. So the left-most file will be chosen.

The name used in the `theme` definition above must match a folder in `/your-site/themes`, e.g. `/your-site/themes/my-shortcodes`.

Also note that a component that is part of a theme can have its own configuration file, e.g. `hugo.toml`. There are currently some restrictions to what a theme component can configure:

- `params` (global and per language)
- `menu` (global and per language)
- `outputformats` and `mediatypes`

The same rules apply here: The left-most parameter/menu etc. with the same ID will win. There are some hidden and experimental namespace support in the above, which Hugo will work to improve in the future, but theme authors are encouraged to create their own namespaces to avoid naming conflicts.

To learn about theme components of Hugo and how to use them, check out <https://gohugo.io/hugo-modules/theme-components/>.

## Showcases

Visit [this page][components] to browse a collection of themes components created by the Hugo FixIt community.

## Development Tutorial

> Head to the [How to develop a Hugo theme component][dev-component] page for more details.

If you have a good understanding of components and are ready to start a new component development journey, you can try using the GitHub template repository below to create your component skeleton.

{{< gh-repo-card-container >}}
  {{< gh-repo-card repo="hugo-fixit/component-skeleton" >}}
{{< /gh-repo-card-container >}}

## References

Head to the [References][references] page for more information.

<!-- link reference definition -->
[components]: {{< relref "/ecosystem" >}}
[references]: {{< relref "/references" >}}
[dev-component]: {{< relref "/ecosystem/dev-component" >}}
