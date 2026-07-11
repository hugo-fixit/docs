---
title: 配置 FixIt
linkTitle: 配置篇
date: 2024-03-07T15:37:59+08:00
aliases:
  - /zh-cn/theme-documentation-basics/
  - /zh-cn/documentation/basics/
  - /zh-cn/documentation/getting-started/configuration/
author:
  name: Lruihao
  link: https://lruihao.cn
description: 了解如何配置你的 Hugo FixIt 站点。
resources:
  - name: featured-image
    src: cover.webp
tags:
  - Configuration
  - Installation
  - Basics
categories:
  - Documentation
collections:
  - Getting Started
lightgallery: true
heading:
  capitalize: false
---

了解如何配置你的 Hugo **FixIt** 站点。

<!--more-->

> [!warning]+ 重要提示
> Hugo 和 FixIt 主题目前都处于活跃的开发和更新阶段，功能和配置选项可能会发生变化。如果在使用过程中遇到任何报错、警告或需要技术支持，请在文档下方留言或前往我们的 [社区][community] 寻求帮助。我们会尽快为你提供解决方案。

## 配置文件 {#configuration-file}

Hugo 有一些全局配置设置，但这不在本文的讨论范围之内。

在开始配置之前，建议你执行以下命令，将主题的默认 [hugo.toml][config] 复制到你的项目中：

```bash
mv hugo.toml hugo.old.toml
cp themes/FixIt/hugo.toml hugo.toml
```

然后，记得重新启用 **FixIt** 主题：

```diff
# theme list
- # theme = ["FixIt"] # enable in your site config file
+ theme = ["FixIt"] # enable in your site config file
```

> [!NOTE]
> 你也可以将你的配置按环境、根配置键和语言拆分在 [配置目录][configuration-directory]，而不是一个单独的站点配置文件。
>
> FixIt CLI 工具支持自动拆分配置文件，详情请参阅 [FixIt CLI 文档][fixit-cli]。

## 合并配置 {#merge-configuration}

你可以从主题中 [合并配置][merge-config] 来简化文件，无需像默认那样详细。

例如，从 FixIt 主题中合并必要的配置 `markup`、 `outputs` 和 `taxonomies`：

```toggle
[markup]
_merge = "shallow"

[outputs]
_merge = "shallow"

[taxonomies]
_merge = "shallow"
```

`_merge` 的配置值可以是以下之一：

none
: 不合并。

shallow
: 只为新键添加值。

deep
: 为新键添加值，合并现有值。

## 菜单配置 {#menu-configuration}

Hugo 有一个简单而强大的 [菜单系统][menu-system]。

根据 Hugo 提供的接口，FixIt 主题只实现了部分功能，这足以满足大多数人的需求，也让用户在使用上更加简单。

> [!NOTE]
> 考虑到实用性和排版问题，FixIt 主题只支持两层嵌套的菜单，通过在菜单配置中的 `parent` 字段即可。\
> 一个菜单项的父项应该是另一个菜单项的标识符（`identifier`），在菜单中标识符应该是唯一的。

下面是一个完整的菜单项配置：

```toml
[menu]

[[menu.main]]
identifier = ""
# 父级菜单项的标识符 (identifier)
parent = ""
# 你可以在名称（允许 HTML 格式）之前添加其他信息，例如图标
pre = ""
# 你可以在名称（允许 HTML 格式）之后添加其他信息，例如图标
post = ""
name = ""
url = ""
# 当你将鼠标悬停在此菜单链接上时，将显示的标题
title = ""
weight = 1

# 向菜单项添加用户定义的内容
[menu.main.params]
# 添加 CSS 类到菜单项
class = ""
# 是否为草稿菜单，类似草稿页面
draft = false
# 添加 fontawesome 图标到菜单项
icon = ""
# 设置菜单项类型，可选值：["mobile", "desktop"]
type = ""
# 是否显示子菜单项分割线
divided = false
```

> [!TIP]
> 菜单项的链接（`url`）支持内部链接、外部链接或者为空。\
> 为空时点击菜单项不会跳转，这对于一些有子菜单的菜单项非常有用。

另外，也可以通过配置页面（即 `.md` 文件）的 `front matter` 添加内容到菜单中。

这是一个 `yaml` 示例：

```yaml
---
title: 配置 Fixit
author: Lruihao
menu:
  main:
    title: 了解如何配置你的 Hugo FixIt 站点。
    parent: documentation
    weight: 3
    params:
      icon: fa-brands fa-readme
# ...
---
```

## 解析配置 {#markup-configuration}

通过根配置键 `markup` 配置将标记语言转为 HTML。

本节仅记录**FixIt**主题的一些 [必要配置][necessary-configuration-for-theme]。有关更多详细信息，请参阅 [Configure markup][configuration-markup] 页面。

```toggle
[markup]

[markup.highlight]
codeFences = true
lineNos = true
lineNumbersInTable = true
noClasses = false
```

## 分类法配置 {#taxonomies-configuration}

FixIt 主题内置了三个维度的 [分类法][configure-taxonomies]：分类、标签和合集。主题默认 `taxonomies` 配置如下：

```toggle
[taxonomies]
category = "categories"
tag = "tags"
collection = "collections"
```

如果你希望 `taxonomies` 配置始终保持和主题一致，你可以设置 `taxonomies._merge` 为 `shallow`。

之后，你可以对文章进行分类，例如：

```yaml
---
title: 配置 FixIt
date: 2024-03-07T15:37:59+08:00
tags:
  - Configuration
  - Installation
  - Basics
categories:
  - Documentation
collections:
  - Getting Started
---
```

### 分类法图标 {#taxonomy-icons}

`map` 分类法图标配置，用于覆盖 title/card/term 三个位置的图标。

```toml
[params]

[params.taxonomy_icons]
# syntax: <taxonomy> = [<title icon>, <card icon>, <term title icon>]
# example:
# category = [
#   "fa-solid fa-folder-tree",
#   "fa-regular fa-folder",
#   "fa-regular fa-folder-open"
# ]
```

需要配合 `[taxonomies]` 使用。请先配置 `[taxonomies]`，否则该配置不会生效。

## 自定义输出格式

Hugo 可以输出多种格式的内容，**FixIt** 主题利用了这个功能。为了完全配置主题，请将以下选项配置到 `hugo.toml` 中。

有关输出格式配置的更多详细信息，请参阅 [自定义输出格式][hugo-output-formats] 页面。

```toml
[outputFormats]

# 用于输出 /archives/index.html 文件的设置
[outputFormats.archives]
path = "archives"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

# 用于输出 /offline/index.html 文件的设置
[outputFormats.offline]
path = "offline"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

# 用于输出 /link/index.html 文件的设置
[outputFormats.link]
path = "link"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

# 用于输出 /manifest/manifest.webmanifest 文件的设置
[outputFormats.manifest]
baseName = "manifest"
mediaType = "application/manifest+json"
isPlainText = true
isHTML = false

# 用于输出 readme.md 文件的设置
[outputFormats.readme]
baseName = "readme"
mediaType = "text/markdown"
isPlainText = true
isHTML = false

# 用于输出 baidu_urls.txt 文件的设置
[outputFormats.baidu_urls]
baseName = "baidu_urls"
mediaType = "text/plain"
isPlainText = true
isHTML = false

# 用于输出 search.json 文件的设置
[outputFormats.search]
baseName = "search"
mediaType = "application/json"
rel = "search"
isPlainText = true
isHTML = false
permalinkable = true
```

基本上你无需配置 `mediaTypes` 和 `outputFormats` 的配置，因为 **FixIt** 主题已经为你配置好了。你只需要配置 `outputs` 部分即可。

```toml
# 用于 Hugo 输出文档的设置，可选值如下：
# home = ["html", "rss", "archives", "search", "offline", "manifest", "link", "readme", "baidu_urls"]
# page = ["html", "markdown"]
# section = ["html", "rss"]
# taxonomy = ["html"]
# term = ["html", "rss"]
[outputs]
home = [
  "html",
  "rss",
  "archives",
  "search",
  "offline",
  "manifest",
  "link"
]
page = [
  "html",
  "markdown"
]
section = [
  "html",
  "rss"
]
taxonomy = [ "html" ]
term = [
  "html",
  "rss"
]
```

如果你希望 `outputs` 配置始终保持和主题一致，你可以设置 `outputs._merge` 为 `shallow`。

## 主题配置 {#theme-configuration}

详见 [主题配置][theme-configuration] 页面了解所有 `[params]` 配置项。

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 -->
[config]: https://github.com/hugo-fixit/FixIt/blob/{{< param docs.fixit_version >}}/hugo.toml
[menu-system]: https://gohugo.io/content-management/menus/
[configuration-directory]: https://gohugo.io/configuration/introduction/#configuration-directory
[fixit-cli]: https://github.com/hugo-fixit/fixit-cli
[merge-config]: https://gohugo.io/configuration/introduction/#merge-configuration-settings
[configuration-markup]: https://gohugo.io/configuration/markup/
[necessary-configuration-for-theme]: https://github.com/hugo-fixit/FixIt/issues/43
[hugo-output-formats]: https://gohugo.io/configuration/output-formats/
[configure-taxonomies]: https://gohugo.io/content-management/taxonomies/#configure-taxonomies
[theme-configuration]: {{< relref path="/documentation/getting-started/configuration/params" >}}
