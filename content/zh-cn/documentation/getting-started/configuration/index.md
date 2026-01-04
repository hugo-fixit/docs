---
title: 配置 FixIt
linkTitle: 配置篇
date: 2024-03-07T15:37:59+08:00
aliases:
  - /zh-cn/theme-documentation-basics/
  - /zh-cn/documentation/basics/
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

```toml
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
# {{< version 0.2.14 >}} 父级菜单项的标识符 (identifier)
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

# {{< version 0.2.14 >}} 向菜单项添加用户定义的内容
[menu.main.params]
# 添加 CSS 类到菜单项
class = ""
# 是否为草稿菜单，类似草稿页面
draft = false
# {{< version 0.2.16 >}} 添加 fontawesome 图标到菜单项
icon = ""
# {{< version 0.2.16 >}} 设置菜单项类型，可选值：["mobile", "desktop"]
type = ""
# {{< version 0.3.9 >}} 是否显示子菜单项分割线
divided = false
```

> [!TIP]
> {{< version 0.3.14 >}}\
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

```toml
[markup]

[markup.highlight]
codeFences = true
lineNos = true
lineNumbersInTable = true
noClasses = false
```

## 分类法配置 {#taxonomies-configuration}

FixIt 主题内置了三个维度的 [分类法][configure-taxonomies]：分类、标签和合集。主题默认 `taxonomies` 配置如下：

```toml
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

## 自定义输出格式

Hugo 可以输出多种格式的内容，**FixIt** 主题利用了这个功能。为了完全配置主题，请将以下选项配置到 `hugo.toml` 中。

有关输出格式配置的更多详细信息，请参阅 [自定义输出格式][hugo-output-formats] 页面。

```toml
[mediaTypes]

[mediaTypes."text/markdown"]
suffixes = [ "md" ]

[outputFormats]

# {{< version 0.3.0 >}} 用于输出 /archives/index.html 文件的设置
[outputFormats.archives]
path = "archives"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

# {{< version 0.3.0 >}} 用于输出 /offline/index.html 文件的设置
[outputFormats.offline]
path = "offline"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

# {{< version 0.3.0 >}} 用于输出 readme.md 文件的设置
[outputFormats.readme]
baseName = "readme"
mediaType = "text/markdown"
isPlainText = true
isHTML = false

# {{< version 0.3.0 changed >}} 用于输出 baidu_urls.txt 文件的设置
[outputFormats.baidu_urls]
baseName = "baidu_urls"
mediaType = "text/plain"
isPlainText = true
isHTML = false

# {{< version 0.3.10 >}} 用于输出 search.json 文件的设置
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
# home = ["html", "rss", "archives", "offline", "readme", "baidu_urls", "search"]
# page = ["html", "markdown"]
# section = ["html", "rss"]
# taxonomy = ["html"]
# term = ["html", "rss"]
[outputs]
home = [
  "html",
  "rss",
  "archives",
  "offline",
  "search"
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

除了 Hugo 全局配置外，FixIt 还通过根配置键 `params` 提供了一些主题配置。

一个简单的例子：

```toml {title="hugo.toml"}
baseURL = 'https://example.org/'
languageCode = 'en'
title = 'ABC Widgets, Inc.'

[params]
version = "0.3.X"
description = "This is my new Hugo FixIt site"
keywords = [
  "Hugo",
  "FixIt"
]
# ...
```

All theme configuration settings are as follows:

所有 FixIt 主题配置设置如下：

### version

`string` FixIt 主题版本，例如：`0.3.X`, `0.3.0`, `v0.3.0` 等。

### description

`string` 网站描述。

### keywords

`string array` 网站关键词。

### defaultTheme

`string` 网站默认主题样式，默认：`auto`，可选值可以是以下之一：

light
: 浅色主题

dark
: 深色主题

auto
: 根据用户的系统主题自动选择

### fingerprint

`string` 哪种哈希函数用来 SRI, 为空时表示不使用 SRI，可选值：`["sha256", "sha384", "sha512", "md5"]`。

### dateFormat

`string` 日期格式，默认：`2006-01-02`。

### images

`string array` 网站图片，用于 Open Graph 和 Twitter Cards。

### enablePWA

{{< version 0.2.12 >}}

`bool` 开启 PWA 支持，默认：`false`。

### capitalizeTitles

{{< version 0.3.13 >}}

`bool` 是否大写标题，默认：`true`。

### externalIcon

{{< version 0.2.14 >}}

`bool` 是否自动显示外链图标，默认：`false`。

### withSiteTitle

{{< version 0.3.0 >}}

`bool` 是否在每个页面标题中添加网站标题，默认：`true`。请记得在 `hugo.toml` 中设置网站标题 (例如 `title = "title"`)。

### titleDelimiter

{{< version 0.3.0 >}}

`string` 当网站标题被添加到每个页面标题时的标题分隔符，默认：`-`。

### indexWithSubtitle

{{< version 0.3.0 >}}

`bool` 是否在主页标题中添加网站副标题，默认：`false`。请记得通过 `params.header.subtitle.name` 设置网站副标题。

### summaryPlainify

{{< version 0.3.13 >}}

`bool` 是否显示纯文本摘要，默认：`false`。

### enableTranslationMerge

{{< version 0.4.0 >}}

`bool` 是否启用从其他语言合并缺失翻译的功能，默认：`false`。

当设置为 `true` 时，缺失的翻译将被合并并显示。推荐用于多语言站点。

| 设置    | 多语言站点  | 单语言站点    | 性能影响           |
| :------ | :---------- | :------------ | :----------------- |
| `true`  | ✅ 推荐     | ⚠️ 性能损失   | 需要额外的合并计算 |
| `false` | ❌ 功能受限 | ✅ 推荐       | 无额外性能开销     |

> [!NOTE]
> 这不会创建新的页面，如果你需要空的占位页面，你可能需要 [shortcode-missing-translation][sc-missing-translation]。

### disableThemeInject

{{< version 0.2.14 >}}

`bool` 默认情况下，FixIt 只会在主页的 HTML 头中注入主题元标记。你可以将其关闭，但如果你不这样做，我们将不胜感激，因为这是观察 FixIt 受欢迎程度上升的好方法。

### author

`map` 作者配置。

```toml
[params]

[params.author]
name = ""
email = ""
link = ""
avatar = ""
```

name
: `string` 作者名称

email
: `string` 作者邮箱

link
: `string` 作者链接

avatar
: `string` 作者头像

### gitInfo

{{< version 0.3.0 >}}

`map` 公共 Git 仓库信息，仅在 `enableGitInfo` 设为 `true` 时有效。

```toml
[params]

[params.gitInfo]
repo = ""
branch = "main"
dir = "content"
issueTpl = "title=[BUG]%20{title}&body=|Field|Value|%0A|-|-|%0A|Title|{title}|%0A|URL|{URL}|%0A|Filename|{sourceURL}|"
```

repo
: `string` 公开 Git 仓库的 URL，例如 `https://github.com/hugo-fixit/docs`。

branch
: `string` 仓库分支，默认：`main`。

dir
: `string` 相对于仓库根目录的内容目录路径。

issueTpl
: `string` 用于报告文章问题的 issue 模板，可用模板参数：`{title}`, `{URL}`, `{sourceURL}`。

### app

`map` 应用图标配置。

```toml
[params]

[params.app]
name = ""
shortName = ""
noFavicon = false
svgFavicon = ""
iconColor = "#5bbad5"
tileColor = "#da532c"

[params.app.themeColor]
light = "#f8f8f8"
dark = "#252627"
```

title
: `string` 当添加到 iOS 主屏幕或者 Android 启动器时的标题，覆盖默认标题。

noFavicon
: `bool` 是否隐藏网站图标资源链接。

svgFavicon
: `string` 更现代的 SVG 网站图标，可替代旧的 `.png` 和 `.ico` 文件。

iconColor
: `string` Safari 图标颜色。

tileColor
: `string` Windows v8-10 磁贴颜色。

themeColor
: `map` Android 浏览器主题色。

- light: `string` 浅色主题颜色，默认：`#f8f8f8`。
- dark: `string` 深色主题颜色，默认：`#252627`。

### search

`map` 搜索配置。

```toml
[params]

[params.search]
enable = false
type = "fuse"
contentLength = 4000
placeholder = ""
maxResultLength = 10
snippetLength = 30
highlightTag = "em"
absoluteURL = false

[params.search.algolia]
index = ""
appID = ""
searchKey = ""

[params.search.fuse]
isCaseSensitive = false
minMatchCharLength = 2
findAllMatches = false
location = 0
threshold = 0.3
distance = 100
ignoreLocation = false
useExtendedSearch = false
ignoreFieldNorm = false
```

enable
: `bool` 是否启用搜索。

type
: `string` 搜索引擎的类型，可选值：`algolia`、`fuse`、`cse` 或 `post-chat`，默认：`fuse`。

contentLength
: `int` 文章内容最长索引长度。

placeholder
: `string` 搜索框的占位提示语。

maxResultLength
: `int` 最大结果数目。

snippetLength
: `int` 结果内容片段长度。

highlightTag
: `string` 搜索结果中高亮部分的 HTML 标签。

absoluteURL
: `bool` 是否在搜索索引中使用基于 `baseURL` 的绝对路径。

algolia
: `map` Algolia 搜索配置。

- index: `string` Algolia 索引。
- appID: `string` Algolia App ID。
- searchKey: `string` Algolia Search Key。

fuse
: {{< version 0.2.17 >}}\
`map` [Fuse 搜索配置][fusejs-options]。

- isCaseSensitive: `bool` 是否区分大小写，默认：`false`。
- minMatchCharLength: `int` 最小匹配字符长度，默认：`2`。
- findAllMatches: `bool` 是否查找所有匹配项，默认：`false`。
- location: `int` 位置，默认：`0`。
- threshold: `float` 阈值，默认：`0.3`。
- distance: `int` 距离，默认：`100`。
- ignoreLocation: `bool` 是否忽略位置，默认：`false`。
- useExtendedSearch: `bool` 是否使用扩展搜索，默认：`false`。
- ignoreFieldNorm: `bool` 是否忽略字段规范化，默认：`false`。

---

基于 [algolia][algolia]、[Fuse.js][fusejs]、[自定义搜索引擎](#cse) 或者 [PostChat](#postchat)，**FixIt** 主题支持搜索功能。

为了生成搜索功能所需要的 `search.json`, 请在你的站点配置中添加 `search` 输出文件类型到 `outputs` 部分的 `home` 字段中。

```toml
[outputs]
home = [
  "html",
  "rss",
  "archives",
  "offline",
  "search"
]
```

{{< link href="/zh-cn/guides/algolia-atomic/" content="关于 algolia 的使用技巧" card=true >}}

### cse

{{< version 0.3.16 >}}

`map` 自定义搜索引擎（CSE）配置，详见 [CSE 支持][cse-support]。

```toml
[params]

[params.cse]
engine = ""
resultsPage = "/search/"

[params.cse.google]
cx = ""

[params.cse.bing]
```

engine
: `string` 搜索引擎。`engine` 的配置值可以是 `google` 或 `bing`。

resultsPage
: `string` 搜索结果页面 URL（`layout: search`）。默认为 `/search/`。

google
: `map` [Google 自定义搜索引擎][google-cse] 配置。

- cx: `string` Google 自定义搜索引擎上下文 ID。

bing
: `map` [Bing 自定义搜索引擎][bing-cse] 配置。 (暂不支持)

### header

`map` 页面头部导航栏配置。

```toml
[params]

[params.header]
desktopMode = "sticky"
mobileMode = "auto"

[params.header.title]
logo = ""
name = ""
pre = ""
post = ""
typeit = false

[params.header.subtitle]
name = ""
typeit = false
```

desktopMode
: {{< version 0.2.13 changed >}}\
`string` 桌面端导航栏模式，可选值：`sticky`、`normal`、`auto`, 默认：`sticky`。

mobileMode
: {{< version 0.2.13 changed >}}\
`string` 移动端导航栏模式，可选值：`sticky`、`normal`、`auto`, 默认：`auto`。

title
: `map` 页面头部导航栏标题配置。

- logo: `string` LOGO 的 URL。
- name: `string` 标题名称。
- pre: `string` 在名称之前添加其他信息。
- post: `string` 在名称之后添加其他信息。
- typeit: `bool` 是否为标题显示打字机动画。

subtitle
: {{< version 0.2.12 >}}\
`map` 页面头部导航栏副标题配置。

- name: `string` 副标题名称。
- typeit: `bool` 是否为副标题显示打字机动画。

### breadcrumb

{{< version 0.2.18 >}}

`map` 面包屑导航配置。

```toml
[params]

[params.breadcrumb]
enable = false
sticky = false
showHome = false
separator = "/"
capitalize = false
```

enable
: `bool` 是否启用面包屑导航。

sticky
: `bool` 是否固定面包屑导航。

showHome
: `bool` 是否显示主页链接。

separator
: {{< version 0.3.13 >}}\
`string` 分隔符，默认：`/`。

capitalize
: {{< version 0.3.13 >}}\
`bool` 是否大写面包屑导航。

### navigation

{{< version 0.3.10 >}}

`map` 文章导航配置。

```toml
[params]

[params.navigation]
inSection = false
reverse = false
```

inSection
: `bool` 是否在 section 页面范围内显示文章导航，默认为 `false`。

reverse
: `bool` 是否反转 下一篇/上一篇 文章导航顺序，默认为 `false`。

### footer

`map` 页面底部信息配置。

```toml
[params]

[params.footer]
enable = true
copyright = true
author = true
since = ""
gov = ""
icp = ""
license = ""

[params.footer.powered]
enable = true
hugoLogo = true
themeLogo = true

[params.footer.siteTime]
enable = false
animate = true
icon = "fa-solid fa-heartbeat"
pre = ""
value = ""

[params.footer.order]
powered = 0
copyright = 0
statistics = 0
visitor = 0
beian = 0
```

enable
: `bool` 是否启用页面底部信息。

copyright
: `bool` 是否显示版权信息。

author
: `bool` 是否显示作者。

since
: `int` 网站创立年份。

gov
: {{< version 0.2.12 >}}\
`string` 公网安备信息，仅在中国使用（支持 HTML 格式）。

icp
: {{< version 0.2.12 changed >}}\
`string` ICP 备案信息，仅在中国使用（支持 HTML 格式）。

license
: `string` 许可协议信息（支持 HTML 格式）。

powered
: `map` Hugo 和主题信息。

- enable: `bool` 是否显示 Hugo 和主题信息。
- hugoLogo: `bool` 是否显示 Hugo Logo。
- themeLogo: `bool` 是否显示主题 Logo。

siteTime
: {{< version 0.2.17 >}}\
`map` 网站创立时间。

- enable: `bool` 是否显示网站创立时间。
- animate: `bool` 是否显示动画。
- icon: `string` 图标。
- pre: `string` 前缀。
- value: `string` 网站创立时间，例如：`2021-12-18T16:15:22+08:00`。

order
: {{< version 0.2.17 >}}\
`map` 页面底部行排序。

- powered: `int` Hugo 和主题信息。
- copyright: `int` 版权信息。
- statistics: `int` 统计信息。
- visitor: `int` 访客信息。
- beian: `int` 备案信息。

### archives

{{< version 0.3.0 >}}

`map` 归档页面配置。

```toml
[params]

[params.archives]
paginate = 20
dateFormat = "01-02"
```

paginate
: `int` 归档页面每页显示文章数量，默认：`20`。

dateFormat
: `string` 日期格式，默认：`01-02`。

### section

`map` Section（所有文章）页面配置。

```toml
[params]

[params.section]
paginate = 20
dateFormat = "01-02"

[params.section.feed]
limit = -1
fullText = false
```

paginate
: `int` section 页面每页显示文章数量，默认：`20`。

dateFormat
: `string` 日期格式，默认：`01-02`。

feed
: {{< version 0.3.10 >}}\
`map` Section feed 配置用于 RSS, Atom 和 JSON feed，详见 [Feed 配置](#feed)。

### list

`map` List（目录或标签）页面配置。

```toml
[params]

[params.list]
paginate = 20
dateFormat = "01-02"

[params.list.feed]
limit = -1
fullText = false
```

paginate
: `int` list 页面每页显示文章数量，默认：`20`。

dateFormat
: `string` 日期格式，默认：`01-02`。

feed
: {{< version 0.3.10 >}}\
`map` Term list feed 配置用于 RSS, Atom 和 JSON feed，详见 [Feed 配置](#feed)。

### recentlyUpdated

{{< version 0.3.13 >}}

`map` 最近更新文章设置。

```toml
[params]

[params.recentlyUpdated]
archives = true
section = true
list = true
days = 30
maxCount = 10
```

archives
: `bool` 是否在归档页面显示最近更新文章，默认：`true`。

section
: `bool` 是否在 section 页面显示最近更新文章，默认：`true`。

list
: `bool` 是否在 list 页面显示最近更新文章，默认：`true`。

days
: `int` 最近更新文章的天数，默认：`30`。

maxCount
: `int` 最大文章数目，默认：`10`。

### tagcloud

{{< version 0.2.17 >}}

`map` 标签云配置。

```toml
[params]

[params.tagcloud]
enable = false
min = 14
max = 32
peakCount = 10
orderby = "name"
```

enable
: `bool` 是否启用标签云，默认：`false`。

min
: `int` 最小字体大小，单位：px，默认：`14`。

max
: `int` 最大字体大小，单位：px，默认：`32`。

peakCount
: `int` 每个标签的最大文章数，默认：`10`。

orderby
: `string` 标签排序方式，可选值：`name`、`count`，默认：`name`。

### home

`map` 主页配置。

```toml
[params]

[params.home]

[params.home.profile]
enable = false
onlyFirstPage = false
gravatarEmail = ""
avatarURL = ""
avatarMenu = ""
title = ""
subtitle = ""
typeit = true
social = true
disclaimer = ""

[params.home.posts]
enable = true
paginate = 6
```

profile
: `map` 主页个人信息配置。

- enable: `bool` 是否显示个人信息，默认：`false`。
- onlyFirstPage: `bool` 是否只在主页第一页显示个人信息，默认：`false`。{{< version 0.4.0 >}}
- gravatarEmail: `string`Gravatar 邮箱，用于优先在主页显示的头像。
- avatarURL: `string` 主页显示头像的 URL，默认是作者的头像。
- avatarMenu: `string` 头像菜单链接的 identifier。{{< version 0.2.17 >}}
- title: `string` 主页显示的网站标题（支持 HTML 格式）。
- subtitle: `string` 主页显示的网站副标题。
- typeit: `bool` 是否为副标题显示打字机动画，默认：`true`。
- social: `bool` 是否显示社交账号，默认：`true`。
- disclaimer: `string` 免责声明（支持 HTML 格式）。

posts
: `map` 主页文章列表配置。

- enable: `bool` 是否显示文章列表，默认：`true`。
- paginate: `int` 主页每页显示文章数量，默认：`6`。

### social

`map` 作者的社交信息设置。

你可以参考位于 `themes/FixIt/assets/data/social.yaml` 的默认数据来配置你的社交链接。

你可以直接配置你的社交 ID 来生成一个默认社交链接和图标：

```toml
[params.social]
Mastodon = "@xxxx"
```

生成的社交链接是 `https://mastodon.social/@xxxx`。

或者你可以通过一个字典来设置更多的选项：

```toml
[params.social]

[params.social.Mastodon]
# 排列图标时的权重（权重越大，图标的位置越靠后）
weight = 0
# 你的社交 ID
id = "@xxxx"
# 你的社交链接的前缀
prefix = "https://mastodon.gal/"
# 当鼠标停留在图标上时的提示内容
title = "Mastodon"
```

所有支持的社交链接的默认数据位于 `themes/FixIt/assets/data/social.yaml`。
你可以参考它来配置你的社交链接。

### typeit

`map` 打字机动画配置。

```toml
[params]

[params.typeit]
speed = 100
cursorSpeed = 1000
cursorChar = "|"
duration = -1
loop = false
```

speed
: `int` 打字速度，默认：`100`。

cursorSpeed
: `int` 光标速度，默认：`1000`。

cursorChar
: `string` 光标字符，默认：`|`。

duration
: `int` 动画持续时间，默认：`-1`。

loop
: {{< version 0.2.18 >}}\
`bool` 是否循环播放，默认：`false`。

### admonition

{{< version 0.3.13 >}}

`map` Admonition 自定义配置。详见 [进阶篇 - 自定义 Admonition][custom-admonitions]

```toml
[params]

[params.admonition]
# ban = "fa-solid fa-ban"
```

格式为 `<type> = <icon>`，其中 `<type>` 是 Admonition 类型，`<icon>` 是 Font Awesome 图标类。

### taskList

{{< version 0.3.14 >}}

`map` 自定义任务列表配置。详见 [进阶篇 - 自定义任务列表][custom-task-list]

```toml
[params]

[params.taskList]
# tip = "fa-regular fa-lightbulb"
```

格式为 `<type> = <icon>`，其中 `<type>` 是任务列表类型，`<icon>` 是 Font Awesome 图标类。

### repoVersion

{{< version 0.3.15 >}}

`version` `version` shortcode 配置。

```toml
[params]

[params.repoVersion]
url = "https://github.com/hugo-fixit/FixIt/releases/tag/v"
name = "FixIt"
```

url
: `string` 发行标签的 URL 前缀。

name
: `string` 项目名称。

### mermaid

{{< version 0.4.0 changed >}}

`map` Mermaid 配置，详见 [图表支持 - Mermaid][diagrams-support-mermaid]。

```toml
[params]

[params.mermaid]
cdn = ""
zenuml = ""
themes = [
  "default",
  "dark"
]
# optional values: ["strict", "loose", "antiscript", "sandbox"]
securityLevel = "loose"
# optional values: ["classic", "handDrawn"]
look = "handDrawn"
fontFamily = ""
layoutLoaders = []
layout = "dagre"
```

cdn
: `string` {{< version 0.4.0 >}} Mermaid 核心脚本地址。\
默认：`https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs`。

zenuml
: `string` {{< version 0.4.0 >}} Mermaid ZenUML 脚本地址。\
默认为空，你可以将其设置为 CDN 源以启用 ZenUML 支持。

themes
: `string array(2)` Mermaid 主题，详见 [Mermaid Themes][mermaid-themes]。

securityLevel
: `string` {{< version 0.4.0 >}} Mermaid 图表的安全级别。默认：`loose`。

look
: `string` {{< version 0.4.0 >}} Mermaid 图表的外观样式。默认：`handDrawn`。

fontFamily
: `string` {{< version 0.4.0 >}} Mermaid 图表的字体。

layoutLoaders
: `string array` {{< version 0.4.0 >}} Mermaid 图表的布局加载器。默认为空。

layout
: `string` {{< version 0.4.0 >}} Mermaid 图表的默认布局算法。默认为 `dagre`。

### pangu

{{< version 0.2.12 >}}

`map` PanguJS 配置。

```toml
[params]

[params.pangu]
enable = false
selector = "article"
```

enable
: `bool` 是否启用 PanguJS，默认：`false`。

selector
: {{< version 0.2.17 >}}\
`string` 选择器，默认：`article`。

### watermark

{{< version 0.2.13 changed >}}

`map` 水印配置，详见 [Watermark][watermark] 文档。

```toml
[params]

[params.watermark]
enable = false
content = ""
opacity = 0.1
width = 150
height = 20
rowSpacing = 60
colSpacing = 30
rotate = 15
fontSize = 0.85
fontFamily = "inherit"
```

### busuanzi

{{< version 0.3.10 >}}

`map` 不蒜子计数器配置。

```toml
[params]

[params.busuanzi]
enable = false
source = "https://vercount.one/js"
siteViews = true
pageViews = true
```

enable
: `bool` 是否启用不蒜子计数器，默认：`false`。

source
: `string` 不蒜子计数器核心脚本地址。默认：`https://vercount.one/js`。\
支持 [Vercount][vercount], [不蒜子][busuanzi], etc.

siteViews
: `bool` 是否显示网站访问量，默认：`true`。

pageViews
: `bool` 是否显示页面访问量，默认：`true`。

### verification

`map` 网站验证代码，用于 Google/Bing/Yandex/Pinterest/Baidu/360/Sogou。

```toml
[params]

[params.verification]
google = ""
bing = ""
yandex = ""
pinterest = ""
baidu = ""
so = ""
sogou = ""
```

### seo

`map` SEO 配置。

```toml
[params]

[params.seo]
image = ""
thumbnailUrl = ""
```

image
: `string` 网站默认图片。

thumbnailUrl
: `string` 网站缩略图 URL。

### analytics

`map` 网站分析配置。

```toml
[params]

[params.analytics]
enable = false

[params.analytics.google]
id = ""
anonymizeIP = true

[params.analytics.fathom]
id = ""
server = ""

[params.analytics.baidu]
id = ""

[params.analytics.umami]
data_website_id = ""
src = ""
data_host_url = ""
data_domains = ""

[params.analytics.plausible]
data_domain = ""
src = ""

[params.analytics.cloudflare]
token = ""

[params.analytics.splitbee]
enable = false
no_cookie = true
do_not_track = true
data_token = ""
```

enable
: `bool` 是否启用网站分析，默认：`false`。

google
: `map` Google Analytics 配置。

- id: `string` Google Analytics ID。
- anonymizeIP: `bool` 是否匿名化 IP，默认：`true`。

fathom
: `map` Fathom Analytics 配置。

- id: `string` Fathom Analytics ID。
- server: `string` Fathom Analytics 服务器地址。

baidu
: {{< version 0.3.16 >}}\
`map` 百度统计配置。

- id: `string` 百度分析 ID。

umami
: {{< version 0.3.16 >}}\
`map` Umami Analytics 配置。

- data_website_id: `string` Umami 分析网站 ID。
- src: `string` Umami 分析脚本 URL。
- data_host_url: `string` Umami 分析主机 URL。
- data_domains: `string` Umami 分析域。

plausible
: {{< version 0.3.16 >}}\
`map` Plausible Analytics 配置。

- data_domain: `string` Plausible 分析域。
- src: `string` Plausible 分析脚本 URL。

cloudflare
: {{< version 0.3.16 >}}\
`map` Cloudflare Analytics 配置。

- token: `string` Cloudflare Analytics 令牌。

splitbee
: {{< version 0.3.16 >}}\
`map` Splitbee Analytics 配置。

- enable: `bool` 是否启用 Splitbee Analytics。默认为 `false`。
- no_cookie: `bool` 是否使用无 cookie 模式。默认为 `true`。
- do_not_track: `bool` 是否尊重浏览器的不跟踪设置。默认为 `true`。
- data_token: `string` Splitbee Analytics 令牌。

### cookieconsent

`map` Cookie 许可配置。

```toml
[params]

[params.cookieconsent]
enable = true

[params.cookieconsent.content]
message = ""
dismiss = ""
link = ""
```

enable
: `bool` 是否启用 Cookie Consent，默认：`true`。

content
: `map` 用于 Cookie 许可横幅的文本字符串。

- message: `string` Cookie 许可横幅的消息。
- dismiss: `string` Cookie 许可横幅的关闭按钮文本。
- link: `string` Cookie 许可横幅的链接文本。

### cdn

`map` CDN 配置。

```toml
[params.cdn]
data = ""
```

data
: `string` CDN 数据文件名称，默认不启用。位于 `themes/FixIt/assets/data/cdn/` 目录，你可以在你的项目下相同路径存放你自己的数据文件：`assets/data/cdn/`。可选值：`jsdelivr.yml`、`unpkg.yml` 等。

### compatibility

`map` 兼容性设置。

```toml
[params]

[params.compatibility]
polyfill = false
objectFit = false
```

polyfill
: `bool` 是否使用 Polyfill.io 来兼容旧式浏览器，默认：`false`。

objectFit
: `bool` 是否使用 object-fit-images 来兼容旧式浏览器，默认：`false`。

### githubCorner

{{< version 0.2.14 >}}

`map` 在左上角或者右上角显示 GitHub 开源链接。

```toml
[params]

[params.githubCorner]
enable = false
permalink = ""
title = "View source on GitHub"
position = "right"
```

enable
: `bool` 是否启用 GitHub 横幅。默认为 `false`。

permalink
: `string` GitHub 仓库的 URL。例如：`https://github.com/hugo-fixit/FixIt`

title
: `string` GitHub 横幅的标题。

position
: `string` GitHub 横幅的位置。`left` 或 `right`。默认为 `right`。

### gravatar

{{< version 0.2.18 changed >}}

`map` Gravatar 配置。

```toml
[params]

[params.gravatar]
enable = false
host = "www.gravatar.com"
style = ""
```

enable
: `bool` 是否启用 Gravatar，默认：`false`。

host
: `string` Gravatar 主机，例如：`www.gravatar.com`、`cravatar.cn` 等，默认：`www.gravatar.com`。

style
: `string` Gravatar 样式，例如：`mp`、`identicon`、`monsterid`、`wavatar`、`retro`、`robohash`、`blank` 等，默认：`""`。

### backToTop

{{< version 0.2.16 >}}

`map` 返回顶部按钮配置。

```toml
[params]

[params.backToTop]
enable = true
scrollpercent = false
```

enable
: `bool` 是否启用返回顶部按钮，默认：`true`。

scrollpercent
: `bool` 是否显示滚动百分比，默认：`false`。

### readingProgress

{{< version 0.2.16 >}}

`map` 阅读进度条配置。

```toml
[params]

[params.readingProgress]
enable = false
start = "left"
position = "top"
reversed = false
light = ""
dark = ""
height = "2px"
```

enable
: `bool` 是否启用阅读进度条，默认：`false`。

start
: `string` 阅读进度条开始位置，可选值：`left`、`right`，默认：`left`。

position
: `string` 阅读进度条位置，可选值：`top`、`bottom`，默认：`top`。

reversed
: `bool` 是否反转阅读进度条，默认：`false`。

light
: `string` 浅色主题颜色，默认：`""`。

dark
: `string` 深色主题颜色，默认：`""`。

height
: `string` 阅读进度条高度，默认：`2px`。

### pace

{{< version 0.2.17 >}}

`map` 页面加载期间顶部的进度条，详见 [Pace.js][pacejs]。

```toml
[params]

[params.pace]
enable = false
color = "blue"
theme = "minimal"
```

enable
: `bool` 是否启用 Pace.js，默认：`false`。

color
: `string` 进度条颜色，可选值：`black`、`blue`、`green`、`orange`、`pink`、`purple`、`red`、`silver`、`white`、`yellow`，默认：`blue`。

theme
: `string` 进度条主题，可选值：`barber-shop`、`big-counter`、`bounce`、`center-atom`、`center-circle`、`center-radar`、`center-simple`、`corner-indicator`、`fill-left`、`flash`、`flat-top`、`loading-bar`、`mac-osx`、`material`、`minimal`，默认：`minimal`。

### postChat

{{< version 0.3.17 >}}

`map` [PostChat][postchat] AI 配置。

> [!NOTE]
> `key` 是 `postChat` 功能所必需的。你可以从 [PostChat][postchat] 网站获取该密钥。

```toml
[params]

# PostChat: https://ai.zhheo.com/docs/addCode.html
[params.postChat]
enable = false
key = ""
# 用户如何发起聊天：["iframe", "magic"]
userMode = "iframe"
addButton = true
defaultInput = false
left = ""
bottom = ""
width = ""
height = ""
fill = ""
backgroundColor = ""
upLoadWeb = true
showInviteLink = true
userTitle = ""
userDesc = ""
# 需要屏蔽掉的 DOM 容器，例如：[".aplayer"]
blackDom = []
# 仅适用于 iframe 模式
frameWidth = "" # 例如："375px"
frameHeight = "" # 例如："600px"
# 仅适用于 magic 模式
userIcon = ""
defaultChatQuestions = []
defaultSearchQuestions = []
hotWords = true
```

### postSummary

{{< version 0.3.17 >}}

`map` PostSummary AI 配置。

> [!NOTE]
> `key` 是 `postSummary` 功能所必需的。你可以从 [PostChat][postchat] 网站获取该密钥。\
> _如果你设置了 `params.postChat.key`，则无需设置 `params.postSummary.key`。_

```toml
[params]

# PostSummary: https://ai.zhheo.com/docs/summary.html
[params.postSummary]
enable = false
key = ""
title = ""
# 主题选项：["", "simple", "yanzhi", "menghuan"]
theme = ""
postURL = ""
blacklist = ""
wordLimit = 1000
typingAnimate = true
beginningText = ""
```

### podcast

{{< version 0.4.0 >}}

`map` AI 播客配置。

```toml
[params]

# Podcast: https://ai.zhheo.com/docs/podcast.html
[params.podcast]
enable = false
```

### feed

`map` 全局 Feed 配置用于 RSS, Atom 和 JSON feed，默认配置如下：

```toml
[params]

[params.feed]
limit = 10
fullText = true

[params.feed.follow]
feedId = ""
userId = ""
```

limit
: `int` 包含在 feed 中的文章数目。如果设置为 `-1`，代表所有文章。默认：`10`。

fullText
: `bool` 是否在 feed 中显示全文内容，默认：`true`。

follow
: `map` Site Challenge for [Follow][follow] 配置。

- feedId: `string` Follow 的 Feed ID。
- userId: `string` Follow 的 User ID。

### image

{{< version 0.3.17 >}}

`map` 图片配置，结合 Hugo 的图像处理选项 `imaging` 进行图片优化。

```toml
[params]

[params.image]
cacheRemote = false
optimise = false
blackList = []
```

cacheRemote
: `bool` 是否缓存远程图片以获得更好的优化效果，默认：`false`。

optimise
: `bool` 是否对图片进行缩放和优化（可能会减慢构建速度），默认：`false`。

blackList
: `string array` {{< version 0.4.0 >}} 排除优化的图片文件名（或模式）列表。例如：`["example.jpg", "test-*.png"]`。

### codeblock

{{< version 0.4.0 >}}

`map` 代码块包装器配置。

```toml
[params]

[params.codeblock]
wrapper = true
mode = "classic"
wrapperClass = ""
maxShownLines = 10
copyable = true
lineNosToggler = true
lineWrapToggler = true
editable = false
```

> [!NOTE]
> 你可以通过 Markdown 属性覆盖全局配置，例如：
>
> ````markdown {wrapper=false, lineNos=false}
> ```lang {mode="mac", maxShownLines=5}
> code here
> ```
> ````

wrapper
: `bool` 是否启用代码块包装器，默认：`true`。

mode
: `string` 代码块模式。可选值：`classic`、`mac`、`simple` 等，默认：`classic`。（如果设置为自定义值，则需要为 `data-mode` 属性创建自定义 CSS。）

wrapperClass
: `string` 代码块包装器的自定义 CSS 类，默认为空字符串。\
例如：`is-collapsed is-expanded line-nos-hidden line-wrapping`

| 类名              | 描述                                                  |
| :---------------- | :---------------------------------------------------- |
| `is-collapsed`    | 控制代码块包装器是否折叠。（仅适用于 `classic` 模式） |
| `is-expanded`     | 控制代码块预览是否展开。（默认是折叠的）              |
| `line-nos-hidden` | 控制是否隐藏行号。                                    |
| `line-wrapping`   | 控制是否启用换行。                                    |

maxShownLines
: `int` 代码块预览时显示的最大行数，默认：`10`。

copyable
: `bool` 是否启用代码复制按钮。默认：`true`。

lineNosToggler
: `bool` 是否在代码块标题中启用行号切换按钮。默认：`true`。（仅在 `classic` 模式下可用）

lineWrapToggler
: `bool` 是否在代码块标题中启用自动换行切换按钮。默认：`true`。（仅在 `classic` 模式下可用）

editable
: `bool` 是否在代码块标题中启用代码编辑按钮。默认：`false`。（仅在 `classic` 模式下可用）

### jsonViewer

{{< version 0.4.0 >}}

`map` JSON 查看器配置。详见 [JSON 查看器支持][json-viewer]。

```toml
[params]

[params.jsonViewer]
enable = true
expandDepth = 1
copyable = true
sort = false
boxed = true
```

enable
: `bool` 是否启用 JSON 查看器，默认：`true`。

expandDepth
: `int` 初始展开深度级别。默认：`1`。

copyable
: `bool` 是否显示复制按钮，默认：`true`。

sort
: `bool` 是否按字母顺序排序对象键，默认：`false`。

boxed
: `bool` 是否在带边框的容器中显示 JSON，默认：`true`。

### customPartials

{{< version 0.3.12 >}}

`map` 自定义部分配置。详见 [开放的自定义块][block]。

### dev

{{< version 0.2.15 >}}

`map` 开发者选项。

选择命名为 `public_repo` 的范围以生成个人访问令牌，配置环境变量 `HUGO_PARAMS_GHTOKEN=xxx`，详见 <https://gohugo.io/functions/os/getenv/#examples>。

```toml
[params]

[params.dev]
enable = false
c4u = false
```

enable
: `bool` 是否启用开发者选项，默认：`false`。

c4u
: `bool` 是否启用检查功能，默认：`false`。

### page

`map` 文章页面配置。

```toml
[params]

[params.page]
# {{< version 0.2.18 >}} 是否启用文章作者头像
authorAvatar = true
# 是否在主页隐藏一篇文章
hiddenFromHomePage = false
# 是否在搜索结果中隐藏一篇文章
hiddenFromSearch = false
# {{< version 0.3.0 >}} 是否在相关文章中隐藏一篇文章
hiddenFromRelated = false
# {{< version 0.3.10 >}} 是否在 RSS、Atom 和 JSON feed 中隐藏一篇文章
hiddenFromFeed = false
# 是否使用 twemoji
twemoji = false
# {{< version 0.2.18 changed >}} 是否使用 lightgallery
# 设为 true，图片设置标题时，文章中的图片将以画廊形式呈现，例如：![alt](src "title")
# 设为 "force"，无论图片是否设置标题文章中的图片都将强制按照画廊形式呈现，例如：![alt](src)
lightgallery = false
# 是否使用 ruby 扩展语法
ruby = true
# 是否使用 fraction 扩展语法
fraction = true
# 是否使用 fontawesome 扩展语法
fontawesome = true
# 许可协议信息（支持 HTML 格式）
license = '<a rel="license external nofollow noopener noreferrer" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>'
# 是否显示原始 Markdown 文档内容的链接
linkToMarkdown = true
# {{< version 0.3.0 >}} 是否显示查看文章源码的链接
linkToSource = true
# {{< version 0.3.0 >}} 是否显示编辑文章的链接
linkToEdit = true
# {{< version 0.3.0 >}} 是否显示报告文章问题的链接
linkToReport = true
# {{< version 0.3.20 >}} 是否显示在 VSCode 中查看文章的链接
linkToVscode = true
# {{< version 0.3.10 changed >}} 页面样式 ["narrow", "normal", "wide", ...]
pageStyle = "normal"
# {{< version 0.2.17 changed >}} 开启自动书签支持
# 如果为 true，则在关闭页面时保存阅读进度
autoBookmark = false
# {{< version 0.4.0 >}} 是否显示最后修改时间
showLastmod = true
# {{< version 0.2.17 >}} 是否使用 字数统计
wordCount = true
# {{< version 0.2.17 >}} 是否使用 预计阅读
readingTime = true
# {{< version 0.2.17 >}} 文章结束标志
endFlag = ""
# {{< version 0.2.18 >}} 是否开启即时页面
instantPage = false
# {{< version 0.3.0 >}} 是否在侧边栏显示集合列表
collectionList = false
# {{< version 0.3.0 >}} 是否在文章末尾显示集合导航
collectionNavigation = false

# {{< version 0.2.15 >}} 转载配置
[params.page.repost]
enable = false
url = ""

# 目录配置
[params.page.toc]
# 是否使用目录
enable = true
# 是否保持使用文章前面的静态目录
keepStatic = false
# 是否使侧边目录自动折叠展开
auto = true
# {{< version 0.2.13 >}} 目录位置 ["left", "right"]
position = "right"
# {{< version 0.3.12 >}} 取代 `markup.tableOfContents` 设置
ordered = false
startLevel = 2
endLevel = 6
# {{< version 0.4.0 >}} 是否降低内容中的 H1 标题级别
decreaseH1 = false

# {{< version 0.2.13 >}} 在文章开头显示提示信息，提醒读者文章内容可能过时
[params.page.expirationReminder]
enable = false
# 如果文章最后更新于这天数之前，显示提醒
reminder = 90
# 如果文章最后更新于这天数之前，显示警告
warning = 180
# 如果文章到期是否关闭评论
closeComment = false

# {{< version 0.3.0 >}} 页面标题配置
[params.page.heading]
# {{< version 0.3.6 >}} 是否自动大写标题
capitalize = false

# {{< version 0.3.12 changed >}} 必须设置 `params.page.toc.ordered` 为 true
[params.page.heading.number]
# 是否启用自动标题编号
enable = false

[params.page.heading.number.format]
h1 = "{title}"
h2 = "{h2} {title}"
h3 = "{h2}.{h3} {title}"
h4 = "{h2}.{h3}.{h4} {title}"
h5 = "{h2}.{h3}.{h4}.{h5} {title}"
h6 = "{h2}.{h3}.{h4}.{h5}.{h6} {title}"

# {{< version 0.4.0 changed >}} 数学公式配置
# See http://fixit.lruihao.cn/documentation/content-management/markdown-syntax/extended/#formula
[params.page.math]
enable = true
# 数学公式渲染引擎，可选值：["katex", "mathjax"]
type = "katex"

# KaTeX server-side rendering (https://katex.org)
# KaTeX partial config: https://gohugo.io/functions/transform/tomath/#options
[params.page.math.katex]
# KaTeX extension copy-tex
copyTex = true
throwOnError = false
errorColor = "#ff4949"

# custom macros map
# syntax: <macro> = <definition>
[params.page.math.katex.macros]
# "\\f" = "#1f(#2)"  # usage: $\f{a}{b}$

# MathJax server-side rendering (https://www.mathjax.org)
# MathJax config: https://docs.mathjax.org/en/latest/options/index.html
[params.page.math.mathjax]
cdn = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"

[params.page.math.mathjax.packages]
# "[+]" = ["configmacros"]

# custom macros map
# syntax: <macro> = <definition>
[params.page.math.mathjax.macros]
# bold = ["{\\bf #1}", 1] # usage: $\bold{math}$

[params.page.math.mathjax.loader]
load = [ "ui/safe" ]

[params.page.math.mathjax.loader.paths]
# custom = "https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/"

# more loader config e.g source, dependencies, provides etc.
[params.page.math.mathjax.options]
enableMenu = true
# HTML tags that won't be searched for math
skipHtmlTags = [
  "script",
  "noscript",
  "style",
  "textarea",
  "pre",
  "code",
  "math",
  "select",
  "option",
  "mjx-container"
]
# class that marks tags not to search
ignoreHtmlClass = "mathjax_ignore"

# HTML tags that can appear within math
[params.page.math.mathjax.options.includeHtmlTags]
# "#comment" = ""
# br = "\n"
# wbr = ""

# {{< link "https://docs.mapbox.com/mapbox-gl-js" "Mapbox GL JS" >}} 配置 (https://docs.mapbox.com/mapbox-gl-js)
[params.page.mapbox]
# Mapbox GL JS 的 access token
accessToken = ""
# 浅色主题的地图样式
lightStyle = "mapbox://styles/mapbox/light-v11"
# 深色主题的地图样式
darkStyle = "mapbox://styles/mapbox/dark-v11"
# 是否添加 {{< link "https://docs.mapbox.com/mapbox-gl-js/api#navigationcontrol" NavigationControl >}}
navigation = true
# 是否添加 {{< link "https://docs.mapbox.com/mapbox-gl-js/api#geolocatecontrol" GeolocateControl >}}
geolocate = true
# 是否添加 {{< link "https://docs.mapbox.com/mapbox-gl-js/api#scalecontrol" ScaleControl >}}
scale = true
# 是否添加 {{< link "https://docs.mapbox.com/mapbox-gl-js/api#fullscreencontrol" FullscreenControl >}}
fullscreen = true

# {{< version 0.3.0 >}} 相关内容配置 (https://gohugo.io/content-management/related/)
[params.page.related]
enable = false
count = 5
# {{< version 0.3.20 >}} 相关内容显示的位置，可选值：["aside", "footer"]
position = [
  "aside",
  "footer"
]

# {{< version 0.2.17 >}} 赞赏设置
[params.page.reward]
enable = false
animation = false
# 相对于页脚的位置，可选值：["before", "after"]
position = "after"
# comment = "Buy me a coffee"
# {{< version 0.2.18 >}} 二维码图片展示模式，可选值：["static", "fixed"]，默认：`static`
mode = "static"

[params.page.reward.ways]
# wechatpay = "/images/wechatpay.png"
# alipay = "/images/alipay.png"
# paypal = "/images/paypal.png"
# bitcoin = "/images/bitcoin.png"

# 文章页面的分享信息设置
[params.page.share]
enable = true
Twitter = true
Facebook = true
Linkedin = false
Whatsapp = true
Pinterest = false
Tumblr = false
HackerNews = false
Reddit = false
VK = false
Buffer = false
Xing = false
Line = true
Instapaper = false
Pocket = false
Flipboard = false
Weibo = true
Myspace = true
Blogger = true
Baidu = false
Odnoklassniki = false
Evernote = true
Skype = false
Trello = false
Mix = false

# {{< version 0.2.15 changed >}} 评论系统设置
[params.page.comment]
enable = false

# {{< version 0.2.13 >}} {{< link "https://artalk.js.org/" Artalk >}} 评论系统设置 (https://artalk.js.org/)
[params.page.comment.artalk]
enable = false
server = "https://yourdomain"
site = "默认站点"
# {{< version 0.3.3 >}} 是否使用后端配置
useBackendConf = false
placeholder = ""
noComment = ""
sendBtn = ""
editorTravel = true
flatMode = "auto"
# {{< version 0.2.17 changed >}} 启用 lightgallery 支持
lightgallery = false
locale = "" # {{< version 0.2.15 >}}
# {{< version 0.2.18 >}}
emoticons = ""
nestMax = 2
nestSort = "DATE_ASC" # ["DATE_ASC", "DATE_DESC", "VOTE_UP_DESC"]
vote = true
voteDown = false
uaBadge = true
listSort = true
imgUpload = true
preview = true
versionCheck = true

# {{< version 0.1.1 >}} {{< link "https://disqus.com/" Disqus >}} 评论系统设置 (https://disqus.com)
[params.page.comment.disqus]
enable = false
# Disqus 的 shortname，用来在文章中启用 Disqus 评论系统
shortname = ""

# {{< version 0.1.1 >}} {{< link "https://github.com/gitalk/gitalk" Gitalk >}} 评论系统设置 (https://github.com/gitalk/gitalk)
[params.page.comment.gitalk]
enable = false
owner = ""
repo = ""
clientId = ""
clientSecret = ""

# {{< link "https://github.com/xCss/Valine" Valine >}} 评论系统设置 (https://github.com/xCss/Valine)
[params.page.comment.valine]
enable = false
appId = ""
appKey = ""
placeholder = ""
avatar = "mp"
meta = [
  'nick',
  'mail',
  'link'
]
requiredFields = []
pageSize = 10
lang = ""
visitor = true
recordIP = true
highlight = true
enableQQ = false
serverURLs = ""
# emoji 数据文件名称，默认是 "google.yml"
# ["apple.yml", "google.yml", "facebook.yml", "twitter.yml"]
# 位于 "themes/FixIt/assets/lib/valine/emoji/" 目录
# 可以在你的项目下相同路径存放你自己的数据文件：
# "assets/lib/valine/emoji/"
emoji = ""
commentCount = true

# {{< version 0.2.13 >}}
# {{< version 0.2.16 changed >}} {{< link "https://waline.js.org" Waline >}} 评论系统设置 (https://waline.js.org)
[params.page.comment.waline]
enable = false
serverURL = ""
pageview = false # {{< version 0.2.15 >}}
emoji = [ "//unpkg.com/@waline/emojis@1.1.0/weibo" ]
meta = [
  "nick",
  "mail",
  "link"
]
requiredMeta = []
login = "enable"
wordLimit = 0
pageSize = 10
imageUploader = false # {{< version 0.2.15 >}}
highlighter = false # {{< version 0.2.15 >}}
comment = false # {{< version 0.2.15 >}}
texRenderer = false # {{< version 0.2.16 >}}
search = false # {{< version 0.2.16 >}}
recaptchaV3Key = "" # {{< version 0.2.16 >}}
turnstileKey = "" # {{< version 0.3.8 >}}
reaction = false

# {{< version 0.2.18 >}}
# {{< link "https://developers.facebook.com/docs/plugins/comments" "Facebook 评论系统" >}}设置 (https://developers.facebook.com/docs/plugins/comments)
[params.page.comment.facebook]
enable = false
width = "100%"
numPosts = 10
appId = ""
languageCode = "zh_CN"

# {{< link "https://comments.app/" "Telegram Comments" >}} 评论系统设置 (https://comments.app)
[params.page.comment.telegram]
enable = false
siteID = ""
limit = 5
height = ""
color = ""
colorful = true
dislikes = false
outlined = false

# {{< link "https://commento.io/" "Commento" >}} 评论系统设置 (https://commento.io)
[params.page.comment.commento]
enable = false

# {{< link "https://utteranc.es/" "Utterances" >}} 评论系统设置 (https://utteranc.es)
[params.page.comment.utterances]
enable = false
# owner/repo
repo = ""
issueTerm = "pathname"
label = ""
lightTheme = "github-light"
darkTheme = "github-dark"

# {{< version 0.2.13 >}} {{< link "https://twikoo.js.org/" "Twikoo" >}} 评论系统设置 (https://twikoo.js.org/)
[params.page.comment.twikoo]
enable = false
envId = ""
region = ""
path = ""
visitor = true
commentCount = true
# {{< version 0.2.17 changed >}} 启用 lightgallery 支持
lightgallery = false
# {{< version 0.2.17 >}} 启用 Katex 支持
katex = false

# {{< version 0.2.14 >}} {{< link "https://giscus.app/" "Giscus" >}} 评论系统设置
[params.page.comment.giscus]
enable = false
repo = ""
repoId = ""
category = ""
categoryId = ""
mapping = ""
origin = "https://giscus.app" # {{< version 0.3.7 >}} Or set it to your self-hosted domain
strict = "0" # {{< version 0.2.18 >}}
term = ""
reactionsEnabled = "1"
emitMetadata = "0"
inputPosition = "bottom" # ["top", "bottom"]
lightTheme = "light"
darkTheme = "dark"
lazyLoad = true

# 第三方库配置
[params.page.library]

[params.page.library.css]
# someCSS = "some.css"
# 位于 "assets/"
# 或者
# someCSS = "https://cdn.example.com/some.css"

[params.page.library.js]
# someJavascript = "some.js"
# 位于 "assets/"
# 或者
# someJavascript = "https://cdn.example.com/some.js"

# 页面 SEO 配置
[params.page.seo]
# 图片 URL
images = []

# 出版者信息
[params.page.seo.publisher]
name = ""
logoUrl = ""
```

## Favicon 生成

强烈建议你把你自己的网站图标，`browserconfig.xml` 和 `site.webmanifest` 文件放在 `/static` 目录。

- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- browserconfig.xml
- favicon-32x32.png
- favicon-16x16.png
- favicon.ico
- mstile-150x150.png
- safari-pinned-tab.svg

利用 <https://realfavicongenerator.net/> 可以很容易地生成这些文件。

![完整配置下的预览](full-configuration-preview.zh-cn.png "完整配置下的预览")

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 -->
[community]: {{< relref path="/community" >}}
[config]: https://github.com/hugo-fixit/FixIt/blob/master/hugo.toml
[menu-system]: https://gohugo.io/content-management/menus/
[configuration-directory]: https://gohugo.io/configuration/introduction/#configuration-directory
[fixit-cli]: https://github.com/hugo-fixit/fixit-cli
[merge-config]: https://gohugo.io/configuration/introduction/#merge-configuration-settings
[algolia]: https://www.algolia.com/
[fusejs]: https://fusejs.io/
[fusejs-options]: https://fusejs.io/api/options.html
[cse-support]: {{< relref path="/guides/cse-support" >}}
[google-cse]: https://programmablesearchengine.google.com/
[bing-cse]: https://www.customsearch.ai/
[custom-admonitions]: {{< relref "/documentation/advanced#custom-admonitions" >}}
[custom-task-lists]: {{< relref "/documentation/advanced#custom-task-lists" >}}
[diagrams-support-mermaid]: {{< relref path="/documentation/content-management/diagrams-support/mermaid" >}}
[mermaid-themes]: https://mermaid.js.org/config/theming.html#available-themes
[watermark]: https://github.com/Lruihao/watermark#readme
[vercount]: https://vercount.one/
[busuanzi]: https://busuanzi.ibruce.info/
[pacejs]: https://github.com/CodeByZach/pace
[postchat]: https://ai.zhheo.com/console/login?InviteID=85041330
[follow]: https://follow.is/
[json-viewer]: {{< relref path="/documentation/content-management/json-viewer" >}}
[block]: {{< relref path="/references/blocks" >}}
[configuration-markup]: https://gohugo.io/configuration/markup/
[necessary-configuration-for-theme]: https://github.com/hugo-fixit/FixIt/issues/43
[hugo-output-formats]: https://gohugo.io/configuration/output-formats/
[configure-taxonomies]: https://gohugo.io/content-management/taxonomies/#configure-taxonomies
[sc-missing-translation]: https://github.com/hugo-fixit/shortcode-missing-translation
