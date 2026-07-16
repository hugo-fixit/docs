---
title: Front matter
date: 2026-07-11T18:20:17+08:00
description: Learn about the front matter configuration options provided by Hugo and the FixIt theme.
resources:
  - name: featured-image
    src: featured-image.webp
tags:
  - Content
  - Basics
categories:
  - Documentation
collections:
  - Content Management
---

Learn about the front matter configuration options provided by Hugo and the **FixIt** theme.

<!--more-->

**Hugo** allows you to add front matter in `yaml`, `toml` or `json` to your content files.

## Hugo Built-in Fields

Front matter fields natively supported by Hugo, see [Hugo Front matter][front-matter] documentation.

- **title**: the title for the content.
- **date**: the datetime assigned to this page, which is usually fetched from the `date` field in front matter, but this behaviour is configurable in the [theme configuration][theme-config].
- **lastmod**: the datetime at which the content was last modified.
- **draft**: if `true`, the content will not be rendered unless the `--buildDrafts`/`-D` flag is passed to the `hugo` command.
- **description**: the description for the content.
- **keywords**: the keywords for the content.
- **images**: page images for Open Graph and Twitter Cards.
- **summary**: the summary for the content.
- **tags**: the tags for the content.
- **categories**: the categories for the content.
- **type**: the rendering template of page, see [templates]({{< relref path="/documentation/content-management/introduction#templates" >}}) for details.
- **layout**: the rendering template of page, see [templates]({{< relref path="/documentation/content-management/introduction#templates" >}}) for details.
- **menu**: see [Add content to Menu][content-to-menu].

## Page-level Fields

Front matter fields that can be set globally in `hugo.toml` under `[params]` and overridden per-page via front matter. See [Theme Configuration - Page Level][theme-config-page] for the full list.

## Page-only Fields

Front matter fields provided by **FixIt** that are only available per-page and cannot have global defaults in `hugo.toml`.

### Featured Images

- **featuredImage**: the featured image for the content.
- **featuredImagePreview**: the featured image for the content preview in the home page.

**featuredImage** and **featuredImagePreview** support the complete usage of [local resource references]({{< relref path="/documentation/content-management/introduction#contents-organization" >}}).

If the page resource with `name: featured-image` or `name: featured-image-preview` is set in the front matter,
it is not necessary to set the parameter `featuredImage` or `featuredImagePreview`:

```yaml
resources:
  - name: featured-image
    src: featured-image.jpg
  - name: featured-image-preview
    src: featured-image-preview.jpg
```

### Visibility Control

- **hidden_from_home_page**: if `true`, the content will not be shown in the home page.
- **hidden_from_search**: if `true`, the content will not be shown in the search results.
- **hidden_from_related**: {{< version 0.3.0 >}} if `true`, the content will not be shown in the related posts.
- **hidden_from_feed**: {{< version 0.3.10 >}} if `true`, the content will not be shown in the RSS, Atom and JSON feed.

### Collections

- **collections**: {{< version 0.3.0 >}} the collections for the content, similar to `tags` and `categories` but specific to FixIt.

### Content Encryption

- **password**: {{< version 0.2.15 >}} password of encrypted page content, see [Content Encryption][content-encryption].
- **message**: {{< version 0.2.15 >}} encryption prompt, see [Content Encryption][content-encryption].

## Special Pages

Front matter fields only valid in special pages (`_index.md`).

- **titleIcon**: the icon for the page title.
- **cardIcon**: the icon for the taxonomy card in taxonomies pages, only valid in taxonomy `_index.md`.

## Example

```yaml
---
title: My First Post
date: 2020-03-04T15:58:26+08:00
draft: true
categories:
  - Documentation
tags:
  - Hugo
  - FixIt
featuredImage: cover.jpg
hidden_from_home_page: false
lightgallery: true
toc:
  enable: true
math:
  enable: true
---
```

> [!tip]~
> Some [archetypes] are embedded in the **FixIt** theme, which will take effect when creating new content with the following commands, and the front matter will be automatically brought in.
>
> ```bash {mode=simple, linenos=false, shadow=never}
> hugo new posts/foo.md
> # Or
> hugo new --kind post-bundle posts/bar/
> ```

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 MD060 -->
[front-matter]: https://gohugo.io/content-management/front-matter/
[theme-config]: {{< relref path="/documentation/getting-started/configuration/params" >}}
[theme-config-page]: {{< relref path="/documentation/getting-started/configuration/params#page-level" >}}
[content-to-menu]: {{< relref path="/documentation/getting-started/configuration/introduction#menu-configuration" >}}
[content-encryption]: {{< relref path="/documentation/content-management/encryption" >}}
[archetypes]: https://gohugo.io/content-management/archetypes/
