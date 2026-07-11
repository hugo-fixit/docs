---
title: Front matter
date: 2026-07-11T18:20:17+08:00
description: 了解 Hugo 和 FixIt 主题提供的 Front matter 配置项。
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

了解 Hugo 和 **FixIt** 主题提供的 Front matter 配置项。

<!--more-->

**Hugo** 允许你在内容文件中添加 `yaml`、`toml` 或 `json` 格式的 Front matter。

## Hugo 内置字段

Hugo 原生支持的 Front matter 字段，详见 [Hugo Front matter][front-matter] 文档。

- **title**: 文章标题
- **date**: 这篇文章创建的日期时间，通常从 Front matter 的 `date` 字段获取，但也可以在 [主题配置][theme-config] 中设置
- **lastmod**: 上次修改内容的日期时间
- **draft**: 如果设为 `true`，除非 `hugo` 命令使用了 `--buildDrafts`/`-D` 参数，这篇文章不会被渲染
- **description**: 文章内容的描述
- **keywords**: 文章内容的关键词
- **images**: 页面图片，用于 Open Graph 和 Twitter Cards
- **summary**: 文章的摘要
- **tags**: 文章的标签
- **categories**: 文章所属的类别
- **type**: 页面渲染模板，详见 [页面模板]({{< relref path="/documentation/content-management/introduction#templates" >}})
- **layout**: 页面渲染模板，详见 [页面模板]({{< relref path="/documentation/content-management/introduction#templates" >}})
- **menu**: 详见 [添加内容到菜单][content-to-menu]

## 页面级字段

可在 `hugo.toml` 的 `[params]` 中全局设置，也可在每篇文章的 Front matter 中覆盖。详见 [主题配置 - 页面级参数][theme-config-page]。

## 页面专属字段

**FixIt** 主题提供的仅在页面 Front matter 中使用的字段，无法在 `hugo.toml` 中设置全局默认值。

### 封面图片

- **featuredImage**: 文章的特色图片
- **featuredImagePreview**: 用在主页预览的文章特色图片

**featuredImage** 和 **featuredImagePreview** 支持 [本地资源引用]({{< relref path="/documentation/content-management/introduction#contents-organization" >}}) 的完整用法。

如果带有在 Front matter 中设置了 `name: featured-image` 或 `name: featured-image-preview` 属性的页面资源，
没有必要再设置 `featuredImage` 或 `featuredImagePreview`:

```yaml
resources:
  - name: featured-image
    src: featured-image.jpg
  - name: featured-image-preview
    src: featured-image-preview.jpg
```

### 可见性控制

- **hidden_from_home_page**: 如果设为 `true`，这篇文章将不会显示在主页上
- **hidden_from_search**: 如果设为 `true`，这篇文章将不会显示在搜索结果中
- **hidden_from_related**: {{< version 0.3.0 >}} 如果设为 `true`，这篇文章将不会显示在相关文章中
- **hidden_from_feed**: {{< version 0.3.10 >}} 如果设为 `true`，这篇文章将不会显示在 RSS、ATOM 和 JSON Feed 中

### 集合

- **collections**: {{< version 0.3.0 >}} 文章的集合，类似 `tags` 和 `categories`，但为 FixIt 特有。

### 内容加密

- **password**: {{< version 0.2.15 >}} 加密页面内容的密码，详见 [内容加密][content-encryption]
- **message**: {{< version 0.2.15 >}} 加密提示信息，详见 [内容加密][content-encryption]

## 特殊页面

仅在特殊页面（`_index.md`）中有效的 Front matter 字段。

- **titleIcon**: 用于页面标题的图标
- **cardIcon**: 用于分类（taxonomy）页面中分类卡片的图标，仅在分类 `_index.md` 中有效

## 示例

```yaml
---
title: 我的第一篇文章
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

> [!TIP]~
> **FixIt** 主题内嵌了一些 [原型 (Archetype)][archetypes]，使用以下命令创建新内容时会自动带入常用的 Front matter：
>
> ```bash {mode=simple, linenos=false, shadow=never}
> hugo new posts/foo.md
> # 或
> hugo new --kind post-bundle posts/bar/
> ```

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 MD060 -->
[front-matter]: https://gohugo.io/content-management/front-matter/
[theme-config]: {{< relref path="/documentation/getting-started/configuration/params" >}}
[theme-config-page]: {{< relref path="/documentation/getting-started/configuration/params#页面级参数" >}}
[content-to-menu]: {{< relref path="/documentation/getting-started/configuration/introduction#menu-configuration" >}}
[content-encryption]: {{< relref path="/documentation/content-management/encryption" >}}
[archetypes]: https://gohugo.io/content-management/archetypes/
