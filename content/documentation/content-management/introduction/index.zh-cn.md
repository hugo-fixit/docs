---
weight: 4
title: 内容管理概述
date: 2023-02-24T17:27:22+08:00
type: posts
aliases:
  - /zh-cn/theme-documentation-content/
author:
  name: Lruihao
  link: https://lruihao.cn
description: 了解如何在 FixIt 主题中快速，直观地创建和组织内容。
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

了解如何在 **FixIt** 主题中快速，直观地创建和组织内容。

<!--more-->

## 内容组织 {#contents-organization}

以下是一些方便你清晰管理和生成文章的目录结构建议：

* 保持博客文章存放在 `content/posts` 目录，例如：`content/posts/my-first-post.md`
* 保持简单的静态页面存放在 `content` 目录，例如：`content/about.md`
* 本地资源组织

{{< admonition note "本地资源引用" >}}
{{< version 0.2.10 >}}

有三种方法来引用**图片**和**音乐**等本地资源：

1. 使用 [页面包][page-bundles] 中的 [页面资源][page-resources]。
   你可以使用适用于 `Resources.GetMatch` 的值或者直接使用相对于当前页面目录的文件路径来引用页面资源。
2. 将本地资源放在 **assets** 目录中，默认路径是 `/assets`。
   引用资源的文件路径是相对于 assets 目录的。
3. 将本地资源放在 **static** 目录中，默认路径是 `/static`。
   引用资源的文件路径是相对于 static 目录的。

引用的**优先级**符合以上的顺序。

在这个主题中的很多地方可以使用上面的本地资源引用，
例如 **链接**, **图片**, `image` shortcode, `music` shortcode 和**前置参数**中的部分参数。

页面资源或者 **assets** 目录中的 [图片处理][image-processing] 会在未来的版本中得到支持。
非常酷的功能！:(fa-regular fa-grin-squint fa-fw):

[page-resources]: https://gohugo.io/content-management/page-resources/
[page-bundles]: https://gohugo.io/content-management/page-bundles/
[image-processing]: https://gohugo.io/content-management/image-processing/
{{< /admonition >}}

## 前置参数 {#front-matter}

**Hugo** 允许你在文章内容前面添加 `yaml`, `toml` 或者 `json` 格式的前置参数。

{{< admonition >}}
**不是所有**的以下前置参数都必须在你的每篇文章中设置。
只有在文章的参数和你的 [主题配置]({{< relref path="/documentation/basics#theme-configuration" >}}) 中的 `page` 部分不一致时才有必要这么做。
{{< /admonition >}}

* **title**: 文章标题
* **subtitle**: {{< version 0.2.0 >}} 文章副标题
* **date**: 这篇文章创建的日期时间它通常是从文章的前置参数中的 `date` 字段获取的，但是也可以在 [主题配置][theme-config] 中设置
* **lastmod**: 上次修改内容的日期时间
* **draft**: 如果设为 `true`, 除非 `hugo` 命令使用了 `--buildDrafts`/`-D` 参数，这篇文章不会被渲染
* **author**: {{< version 0.2.18 changed >}} 文章作者配置，和 [主题配置][theme-config] 中的 `params.author` 部分相同

    ```yaml
    author:
      name: "" # 文章作者
      link: "" # 文章作者的链接
      email: "" # 文章作者的邮箱，用于设置 Gravatar 头像，优先于 `author.avatar`
      avatar: "" # 文章作者的头像
    ```

* **authorLink**: {{< version 0.2.18 deleted >}} ~~文章作者的链接~~，合并到 `author.link`
* **authorEmail**: {{< version 0.2.18 deleted >}} ~~文章作者的邮箱~~，合并到 `author.email`
* **gravatarForce**: {{< version 0.2.18 deleted >}} ~~强制使用 Gravatar 作为作者头像~~
* **authorAvatar**: {{< version 0.2.18 >}} 是否启用文章作者头像
* **description**: 文章内容的描述
* **keywords**: 文章内容的关键词
* **license**: 这篇文章特殊的许可
* **images**: 页面图片，用于 Open Graph 和 Twitter Cards

* **tags**: 文章的标签
* **categories**: 文章所属的类别
* **featuredImage**: 文章的特色图片
* **featuredImagePreview**: 用在主页预览的文章特色图片

* **hiddenFromHomePage**: 如果设为 `true`, 这篇文章将不会显示在主页上
* **hiddenFromSearch**: {{< version 0.2.0 >}} 如果设为 `true`, 这篇文章将不会显示在搜索结果中
* **twemoji**: {{< version 0.2.0 >}} 如果设为 `true`, 这篇文章会使用 twemoji
* **lightgallery**: {{< version 0.2.18 changed >}} 和 [主题配置][theme-config] 中的 `params.page.lightgallery` 部分相同
* **ruby**: {{< version 0.2.0 >}} 如果设为 `true`, 这篇文章会使用 [上标注释扩展语法][ruby-syntax]
* **fraction**: {{< version 0.2.0 >}} 如果设为 `true`, 这篇文章会使用 [分数扩展语法][fraction-syntax]
* **fontawesome**: {{< version 0.2.0 >}} 如果设为 `true`, 这篇文章会使用 [Font Awesome 扩展语法][fontawesome-syntax]
* **linkToMarkdown**: 如果设为 `true`, 内容的页脚将显示指向原始 Markdown 文件的链接
* **rssFullText**: {{< version 0.2.4 >}} 如果设为 `true`, 在 RSS 中将会显示全文内容
* **pageStyle**: {{< version 0.2.13 >}} 页面样式，详见 [页面宽度][page-style]

* **toc**: {{< version 0.2.9 changed >}} 和 [主题配置][theme-config] 中的 `params.page.toc` 部分相同
* **expirationReminder**: {{< version 0.2.13 >}} 和 [主题配置][theme-config] 中的 `params.page.expirationReminder` 部分相同
* **code**: {{< version 0.2.0 >}} 和 [主题配置][theme-config] 中的 `params.page.code` 部分相同
* **edit**: {{< version 0.2.14 >}} 和 [主题配置][theme-config] 中的 `params.page.edit` 部分相同
* **math**: {{< version 0.2.0 changed >}} 和 [主题配置][theme-config] 中的 `params.page.math` 部分相同
* **mapbox**: {{< version 0.2.0 >}} 和 [主题配置][theme-config] 中的 `params.page.mapbox` 部分相同
* **share**: 和 [主题配置][theme-config] 中的 `params.page.share` 部分相同
* **comment**: {{< version 0.2.0 changed >}} 和 [主题配置][theme-config] 中的 `params.page.comment` 部分相同
* **library**: {{< version 0.2.7 >}} 和 [主题配置][theme-config] 中的 `params.page.library` 部分相同
* **seo**: {{< version 0.2.10 >}} 和 [主题配置][theme-config] 中的 `params.page.seo` 部分相同
* **type**: 页面渲染模板，详见 [页面模板](#templates)
* **menu**: 详见 [添加内容到菜单][content-to-menu]

* **password**: {{< version 0.2.15 >}} 加密页面内容的密码，详见 [内容加密](#content-encryption)
* **message**: {{< version 0.2.15 >}} 加密提示信息，详见 [内容加密](#content-encryption)

* **repost**: {{< version 0.2.15 >}} 和 [主题配置][theme-config] 中的 `params.page.repost` 部分相同
* **autoBookmark**: {{< version 0.2.17 >}} 和 [主题配置][theme-config] 中的 `params.page.autoBookmark` 部分相同
* **wordCount**: {{< version 0.2.17 >}} 和 [主题配置][theme-config] 中的 `params.page.wordCount` 部分相同
* **readingTime**: {{< version 0.2.17 >}} 和 [主题配置][theme-config] 中的 `params.page.readingTime` 部分相同
* **endFlag**: {{< version 0.2.17 >}} 和 [主题配置][theme-config] 中的 `params.page.endFlag` 部分相同
* **reward**: {{< version 0.2.17 >}} 和 [主题配置][theme-config] 中的 `params.page.reward` 部分相同
* **instantPage**: {{< version 0.2.18 >}} 和 [主题配置][theme-config] 中的 `params.page.instantPage` 部分相同

{{< admonition tip >}}
{{< version 0.2.10 >}}

**featuredImage** 和 **featuredImagePreview** 支持 [本地资源引用](#contents-organization) 的完整用法。

如果带有在前置参数中设置了 `name: featured-image` 或 `name: featured-image-preview` 属性的页面资源，
没有必要在设置 `featuredImage` 或 `featuredImagePreview`:

```yaml
resources:
  - name: featured-image
    src: featured-image.jpg
  - name: featured-image-preview
    src: featured-image-preview.jpg
```

{{< version 0.2.12 >}}

**FixIt** 主题内嵌了一些 [原型](https://gohugo.io/content-management/archetypes/)，在使用以下命令创建新内容时生效，会自动带入常用的前置参数：

```bash
hugo new posts/foo.md
hugo new --kind post-bundle posts/bar/
```

{{< /admonition >}}

这是一个前置参数例子：

```yaml
---
title: "我的第一篇文章"
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
    # 位于 "assets/"
    # 或者
    # someCSS = "https://cdn.example.com/some.css"
  js:
    # someJS = "some.js"
    # 位于 "assets/"
    # 或者
    # someJS = "https://cdn.example.com/some.js"
seo:
  images: []
  # ...
---
```

## 内容摘要

**FixIt** 主题使用内容摘要在主页中显示大致文章信息。Hugo 支持生成文章的摘要。

![文章摘要预览](summary.zh-cn.png "文章摘要预览")

### 自动摘要拆分

默认情况下，Hugo 自动将内容的前 70 个单词作为摘要。

你可以通过在网站配置中设置 `summaryLength` 来自定义摘要长度。

如果您要使用 [CJK]^(中文/日语/韩语) 语言创建内容，并且想使用 Hugo 的自动摘要拆分功能，请在网站配置中将 `hasCJKLanguage` 设置为 `true`。

### 手动摘要拆分

另外，你也可以添加 `<!--more-->` 摘要分割符来拆分文章生成摘要。

摘要分隔符之前的内容将用作该文章的摘要。

{{< admonition >}}
请小心输入`<!--more-->` ; 即全部为小写且没有空格。
{{< /admonition >}}

### 前置参数摘要

你可能希望摘要不是文章开头的文字。在这种情况下，你可以在文章前置参数的 `summary` 变量中设置单独的摘要。

### 使用文章描述作为摘要

你可能希望将文章前置参数中的 `description` 变量的内容作为摘要。

你仍然需要在文章开头添加 `<!--more-->` 摘要分割符。将摘要分隔符之前的内容保留为空。然后 **FixIt** 主题会将你的文章描述作为摘要。

### 摘要选择的优先级顺序

由于可以通过多种方式指定摘要，因此了解顺序很有用。如下：

1. 如果文章中有 `<!--more-->` 摘要分隔符，但分隔符之前没有内容，则使用描述作为摘要。
2. 如果文章中有 `<!--more-->` 摘要分隔符，则将按照手动摘要拆分的方法获得摘要。
3. 如果文章前置参数中有摘要变量，那么将以该值作为摘要。
4. 按照自动摘要拆分方法。

{{< admonition >}}
不建议在摘要内容中包含富文本块元素，这会导致渲染错误。例如代码块，图片，表格等。
{{< /admonition >}}

## 页面模板 {#templates}

一般情况，你不需要设置 **type** 参数，因为 **Hugo** 和 **FixIt** 会帮你选择。但是 **FixIt** 主题提供了一些特殊的模板给用户使用。

### 友情链接

{{< version 0.2.12 >}}

在前置参数中设置 `type: friends`，并在 `yourSite/data/` 目录下创建 `friends.yml`，其内容格式如下：

```yml
# 朋友/站点信息例子
- nickname: 朋友名字
  avatar: 朋友头像
  url: 站点链接
  description: 对朋友或其站点的说明
```

{{< admonition tip >}}

你可以使用以下命令快速创建友情链接页面：

```bash
hugo new friends/index.md
```

{{< /admonition >}}

### 离线页面

{{< version 0.2.12 >}} 详见 [PWA 支持][pwa-support]

在前置参数中设置 `type: offline`，并在 `config.toml` 中开启 `enablePWA`：

```toml
[params]
  # enable PWA
  # 开启 PWA 支持
  enablePWA = true
```

{{< admonition tip >}}

你可以使用以下命令快速创建离线页面：

```bash
hugo new offline/index.md
```

{{< /admonition >}}

## 内容加密

这部分内容在 [内容加密页面][content-encryption] 中介绍。

## Markdown 语法

这部分内容在 [Markdown 基本语法页面][basic-markdown-syntax] 和 [Markdown 扩展语法页面][extended-markdown-syntax] 中介绍。

## Shortcodes

这部分内容在 [Shortcodes 页面][shortcodes] 中介绍。

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
