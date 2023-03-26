---
weight: 4
title: Content Management Overview
date: 2023-02-24T17:27:22+08:00
type: posts
aliases:
  - /theme-documentation-content/
author:
  name: Lruihao
  link: https://lruihao.cn
description: Find out how to create and organize your content quickly and intuitively in FixIt theme.
resources:
  - name: featured-image
    src: featured-image.jpg
tags:
  - Content
  - Basics
categories:
  - Documentation
lightgallery: true
reward: true
---

Find out how to create and organize your content quickly and intuitively in **FixIt** theme.

<!--more-->

## Contents Organization {#contents-organization}

A few suggestions to help you get a good looking site quickly:

* Keep post pages in the `content/posts` directory, for example: `content/posts/my-first-post.md`
* Keep other pages in the `content` directory, for example: `content/about.md`
* Local resources organization

{{< admonition note "Local Resource Reference" >}}
{{< version 0.2.10 >}}

There are three ways to reference local resources such as **images** and **music**:

1. Using [page resources][page-resources] in [page bundles][page-bundles].
   You can reference page resources by the value for `Resources.GetMatch` or the filepath of the resource relative to the page directory directly.
2. Store resources in the **assets** directory, which is `/assets` by default.
   The filepath of the resource to reference in the post is relative to the assets directory.
3. Store resources in the **static** directory, which is `/static` by default.
   The filepath of the resource to reference in the post is relative to the static directory.

The **priority** of references is also in the above order.

There are many places in the theme where the above local resource references can be used,
such as **links**, **images**, `image` shortcode, `music` shortcode and some params in the **front matter**.

Images in page resources or assets directory [processing][image-processing]
will be supported in the future.
It's really cool! :(fa-regular fa-grin-squint fa-fw):

[page-resources]: https://gohugo.io/content-management/page-resources/
[page-bundles]: https://gohugo.io/content-management/page-bundles/
[image-processing]: https://gohugo.io/content-management/image-processing/
{{< /admonition >}}

## Front Matter {#front-matter}

**Hugo** allows you to add front matter in `yaml`, `toml` or `json` to your content files.

{{< admonition >}}
**Not all** of the below front matters need to be set in each of your posts.
It is necessary only if the front matters and the `page` part in your [theme configuration]({{< relref path="/documentation/basics#theme-configuration" >}}) are inconsistent.
{{< /admonition >}}

* **title**: the title for the content.
* **subtitle**: {{< version 0.2.0 >}} the subtitle for the content.
* **date**: the datetime assigned to this page, which is usually fetched from the `date` field in front matter, but this behaviour is configurabl in the [theme configuration][theme-config].
* **lastmod**: the datetime at which the content was last modified.
* **draft**: if `true`, the content will not be rendered unless the `--buildDrafts`/`-D` flag is passed to the `hugo` command.
* **author**: {{< version 0.2.18 changed >}} the author config for the content, the same as the `params.author` part in the [theme configuration][theme-config].

    ```yaml
    author:
      name: "" # the author's name
      link: "" # the link of the author
      email: "" # the email of the author, used to set a Gravatar avatar, which takes precedence over `author.avatar`
      avatar: "" # the local avatar of the author
    ```

* **authorLink**: {{< version 0.2.18 deleted >}} ~~the link of the author~~, migrate to `author.link`
* **authorEmail**: {{< version 0.2.18 deleted >}} ~~the email of the author~~, migrate to `author.email`
* **gravatarForce**: {{< version 0.2.18 deleted >}} ~~Gravatar is force-used as the author's avatar.~~
* **authorAvatar**: {{< version 0.2.18 >}} whether to enable the author's avatar of the post.
* **description**: the description for the content.
* **keywords**: the keywords for the content.
* **license**: the special lisence for this content.
* **images**: page images for Open Graph and Twitter Cards.

* **tags**: the tags for the content.
* **categories**: the categories for the content.
* **featuredImage**: the featured image for the content.
* **featuredImagePreview**: the featured image for the content preview in the home page.

* **hiddenFromHomePage**: if `true`, the content will not be shown in the home page.
* **hiddenFromSearch**: {{< version 0.2.0 >}} if `true`, the content will not be shown in the search results.
* **twemoji**: {{< version 0.2.0 >}} if `true`, the content will enable the twemoji.
* **lightgallery**: {{< version 0.2.18 changed >}} the same as the `params.page.lightgallery` part in the [theme configuration][theme-config].
* **ruby**: {{< version 0.2.0 >}} if `true`, the content will enable the [ruby extended syntax][extended-markdown-syntax].
* **fraction**: {{< version 0.2.0 >}} if `true`, the content will enable the [fraction extended syntax][fraction-syntax].
* **fontawesome**: {{< version 0.2.0 >}} if `true`, the content will enable the [Font Awesome extended syntax][fontawesome-syntax].
* **linkToMarkdown**: if `true`, the footer of the content will be shown the link to the orignal Markdown file.
* **rssFullText**: {{< version 0.2.4 >}} if `true`, the full text content will be shown in RSS.
* **pageStyle**: {{< version 0.2.13 >}} Detail see [Page Style][page-style].

* **toc**: {{< version 0.2.9 changed >}} the same as the `params.page.toc` part in the [theme configuration][theme-config].
* **expirationReminder**: {{< version 0.2.13 >}} the same as the `params.page.expirationReminder` part in the [theme configuration][theme-config].
* **code**: {{< version 0.2.0 >}} the same as the `params.page.code` part in the [theme configuration][theme-config].
* **edit**: {{< version 0.2.14 >}} the same as the `params.page.edit` part in the [theme configuration][theme-config].
* **math**: {{< version 0.2.0 changed >}} the same as the `params.page.math` part in the [theme configuration][theme-config].
* **mapbox**: {{< version 0.2.0 >}} the same as the `params.page.mapbox` part in the [theme configuration][theme-config].
* **share**: the same as the `params.page.share` part in the [theme configuration][theme-config].
* **comment**: {{< version 0.2.0 changed >}} the same as the `params.page.comment` part in the [theme configuration][theme-config].
* **library**: {{< version 0.2.7 >}} the same as the `params.page.library` part in the [theme configuration][theme-config].
* **seo**: {{< version 0.2.10 >}} the same as the `params.page.seo` part in the [theme configuration][theme-config].
* **type**: the rendering template of page, see [templates](#templates) for details.
* **menu**: see [Add content to Menu][content-to-menu].

* **password**: {{< version 0.2.15 >}} password of encrypted page content, see [Content Encryption](#content-encryption).
* **message**: {{< version 0.2.15 >}} encryption prompt, see [Content Encryption](#content-encryption).

* **repost**: {{< version 0.2.15 >}} the same as the `params.page.repost` part in the [theme configuration][theme-config].
* **autoBookmark**: {{< version 0.2.17 >}} the same as the `params.page.autoBookmark` part in the [theme configuration][theme-config].
* **wordCount**: {{< version 0.2.17 >}} the same as the `params.page.wordCount` part in the [theme configuration][theme-config].
* **readingTime**: {{< version 0.2.17 >}} the same as the `params.page.readingTime` part in the [theme configuration][theme-config].
* **endFlag**: {{< version 0.2.17 >}} the same as the `params.page.endFlag` part in the [theme configuration][theme-config].
* **reward**: {{< version 0.2.17 >}} the same as the `params.page.reward` part in the [theme configuration][theme-config].
* **instantPage**: {{< version 0.2.18 >}} the same as the `params.page.instantPage` part in the [theme configuration][theme-config].

{{< admonition tip >}}
{{< version 0.2.10 >}}

**featuredImage** and **featuredImagePreview** support the complete usage of [local resource references](#contents-organization).

If the page resource with `name: featured-image` or `name: featured-image-preview` is set in the front matter,
it is not necessary to set the parameter `featuredImage` or `featuredImagePreview`:

```yaml
resources:
  - name: featured-image
    src: featured-image.jpg
  - name: featured-image-preview
    src: featured-image-preview.jpg
```

{{< version 0.2.12 >}}

Some [archetypes](https://gohugo.io/content-management/archetypes/) are embedded in the **FixIt** theme, which will take effect when creating new content with the following commands, and the front matter will be automatically brought in.

```bash
hugo new posts/foo.md
hugo new --kind post-bundle posts/bar/
```

{{< /admonition >}}

Here is a front matter example:

```yaml
---
title: "My First Post"
subtitle: ""
date: 2020-03-04T15:58:26+08:00
lastmod: 2020-03-04T15:58:26+08:00
draft: true
author: ""
authorLink: ""
authorEmail: ""
description: ""
keywords: ""
license: ""
images: []

tags: []
categories: []
featuredImage: ""
featuredImagePreview: ""

hiddenFromHomePage: false
hiddenFromSearch: false
twemoji: false
lightgallery: true
ruby: true
fraction: true
fontawesome: true
linkToMarkdown: true
rssFullText: false
pageStyle: "normal"
gravatarForce: false

toc:
  enable: true
  auto: true
expirationReminder:
  enable: false
  # ...
code:
  copy: true
  # ...
edit:
  enable: false
  # ...
math:
  enable: true
  # ...
mapbox:
  accessToken: ""
  # ...
share:
  enable: true
  # ...
comment:
  enable: true
  # ...
library:
  css:
    # someCSS = "some.css"
    # located in "assets/"
    # Or
    # someCSS = "https://cdn.example.com/some.css"
  js:
    # someJS = "some.js"
    # located in "assets/"
    # Or
    # someJS = "https://cdn.example.com/some.js"
seo:
  images: []
  # ...
---
```

## Content Summaries

**FixIt** theme uses the summary of the content to display abstract information in the home page. Hugo can generate summaries of your content.

![Summary Preview](summary.png "Summary Preview")

### Automatic Summary Splitting

By default, Hugo automatically takes the first 70 words of your content as its summary.

You may customize the summary length by setting `summaryLength` in the site configuration.

If you are creating content in a [CJK]^(Chinese/Japanese/Korean) language and want to use Hugo’s automatic summary splitting, set `hasCJKLanguage` to `true` in your site configuration.

### Manual Summary Splitting

Alternatively, you may add the `<!--more-->` summary divider where you want to split the article.

Content that comes before the summary divider will be used as that content’s summary.

{{< admonition >}}
Be careful to enter `<!--more-->` exactly; i.e., all lowercase and with no whitespace.
{{< /admonition >}}

### Front Matter Summary

You might want your summary to be something other than the text that starts the article. In this case you can provide a separate summary in the `summary` variable of the article front matter.

### Use Description as Summary

You might want your description in the `description` variable of the article front matter as the summary.

You may add the `<!--more-->` summary divider at the start of the article. Keep content that comes before the summary divider empty. Then **FixIt** theme will use your description as the summary.

### Priority Order of Summary Selection

Because there are multiple ways in which a summary can be specified it is useful to understand the order. It is as follows:

1. If there is a `<!--more-->` summary divider present in the article but no content is before the divider, the description will be used as the summary.
2. If there is a `<!--more-->` summary divider present in the article the text up to the divider will be provided as per the manual summary split method.
3. If there is a summary variable in the article front matter the value of the variable will be provided as per the front matter summary method.
4. The text at the start of the article will be provided as per the automatic summary split method.

{{< admonition >}}
It is not recommended to include rich text block elements in the summary, which will cause typographic errors. Such as code blocks, pictures, tables, etc.
{{< /admonition >}}

## Templates {#templates}

Generally, you don't need to set the **type** parameter, because Hugo and fixit will help you choose. However, the **FixIt** theme provides some special templates for users to use.

### Friends

{{< version 0.2.12 >}}

Set `type: friends` in the front matter and create data file named `friends.yml` in the `yourSite/data/` directory, whose content format is as follows:

```yml
# Friend/Site info of one
- nickname: friend's name
  avatar: friend's avatar
  url: site link
  description: description of friend/site
```

{{< admonition tip >}}

You can use the following command to quickly create a friends page:

```bash
hugo new friends/index.md
```

{{< /admonition >}}

### Offline

{{< version 0.2.12 >}} See [PWA Support][pwa-support] for details.

Set `type: offline` in the front matter and set `enablePWA` in `config.toml`:

```toml
[params]
  # enable PWA
  enablePWA = true
```

{{< admonition tip >}}

You can use the following command to quickly create a offline page:

```bash
hugo new offline/index.md
```

{{< /admonition >}}

## Content Encryption

This part is shown in the [content encryption page][content-encryption].

## Markdown Syntax

This part is shown in the [basic markdown syntax page][basic-markdown-syntax] and the [extended markdown syntax page][extended-markdown-syntax].

## Shortcodes

This part is shown in the [shortcodes page][shortcodes].

[theme-config]: {{< relref path="/documentation/basics#theme-configuration" >}}
[content-to-menu]: {{< relref path="/documentation/basics#content-to-menu" >}}
[ruby-syntax]: {{< relref path="/documentation/content-management/markdown-syntax/extended#ruby" >}}
[fraction-syntax]: {{< relref path="/documentation/content-management/markdown-syntax/extended#fraction" >}}
[fontawesome-syntax]: {{< relref path="/documentation/content-management/markdown-syntax/extended#fontawesome" >}}
[page-style]: {{< relref path="/documentation/advanced#page-style" >}}
[pwa-support]: {{< relref path="/guides/pwa-support" >}}
[content-encryption]: {{< relref path="/documentation/content-management/encryption" >}}
[basic-markdown-syntax]: {{< relref path="/documentation/content-management/markdown-syntax/basics" >}}
[extended-markdown-syntax]: {{< relref path="/documentation/content-management/markdown-syntax/extended" >}}
[shortcodes]: {{< relref path="/documentation/content-management/shortcodes" >}}
