---
title: Configure FixIt
linkTitle: Configuration
date: 2024-03-07T15:37:59+08:00
aliases:
  - /theme-documentation-basics/
  - /documentation/basics/
author:
  name: Lruihao
  link: https://lruihao.cn
description: Find out how to configure your Hugo FixIt site.
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

Find out how to configure your Hugo **FixIt** site.

<!--more-->

> [!warning]+ Important Notice
> Hugo and the FixIt theme are currently under active development and updates. Features and configuration options may change over time. If you encounter any errors, warnings, or need technical support during usage, please leave a comment below or visit our [community][community] for help. We will provide solutions as soon as possible.

## Configuration file

Hugo has some global configuration settings, which are beyond the scope of this article.

Before starting configuration, it is recommended that you execute the following command to copy the default [hugo.toml][config] of theme to your project:

```bash
mv hugo.toml hugo.old.toml
cp themes/FixIt/hugo.toml hugo.toml
```

Then, remember to re-enable the **FixIt** theme:

```diff
# theme list
- # theme = ["FixIt"] # enable in your site config file
+ theme = ["FixIt"] # enable in your site config file
```

> [!NOTE]
> You can also split your configuration by environment, root configuration key, and language instead of a single site configuration file into [configuration directory][configuration-directory].
>
> The FixIt CLI tool supports auto-split configuration file. See [FixIt CLI documentation][fixit-cli] for more details.

## Merge configuration

You can simplify your configuration files by [merging configuration][merge-config] from the theme instead of being as detailed as the default.

For example, merging necessary configuration `markup`, `outputs`, and `taxonomies` from the FixIt theme:

```toml
[markup]
_merge = "shallow"

[outputs]
_merge = "shallow"

[taxonomies]
_merge = "shallow"
```

The configuration value for `_merge` can be one of:

none
: No merge.

shallow
: Only add values for new keys.

deep
: Add values for new keys, merge existing.

## Menu Configuration {#menu-configuration}

Hugo has a simple yet powerful [menu system][menu-system].

According to the interface provided by Hugo, FixIt theme only realizes some functions, it is enough to meet the needs of most people and make users easier to use.

> [!NOTE]
> In consideration of practicability and typesetting, the FixIt theme only supports two-tier nested menus, which can be configured through the `parent` field in the menu configuration.
> The parent item of a menu item should be the `identifier` of another menu item, and the identifier should be unique in the menu.

The following is a complete menu item configuration:

```toml
[menu]

[[menu.main]]
identifier = ""
# {{< version 0.2.14 >}} Identifier of the parent menu item
parent = ""
# you can add extra information before the name (HTML format is supported), such as icons
pre = ""
# you can add extra information after the name (HTML format is supported), such as icons
post = ""
name = ""
url = ""
# title will be shown when you hover on this menu link
title = ""
weight = 1

# {{< version 0.2.14 >}} add user-defined content to menu items
[menu.main.params]
# add css class to a specific menu item
class = ""
# whether set as a draft menu item whose function is similar to a draft post/page
draft = false
# {{< version 0.2.16 >}} add fontawesome icon to a specific menu item
icon = ""
# {{< version 0.2.16 >}} set menu item type, optional values: ["mobile", "desktop"]
type = ""
# {{< version 0.3.9 >}} whether to show the submenu item divider line
divided = false
```

> [!TIP]
> {{< version 0.3.14 >}}\
> The link (`url`) of the menu item supports internal links, external links, or empty.
> When it is empty, clicking the menu item will not jump, which is very useful for some menu items with submenus.

In addition, you can also add content to the menu through the `front matter` of the configuration page (i.e. the `.md`-file).

Here is a `yaml` example:

```yaml
---
title: Configure FixIt
author: Lruihao
menu:
  main:
    title: Find out how to configure your Hugo FixIt site.
    parent: documentation
    weight: 3
    params:
      icon: fa-brands fa-readme
# ...
---
```

## Markup Configuration

Configure rendering of markup to HTML via the root configuration keys `markup`.

This section only records some [necessary configuration][necessary-configuration-for-theme] for the **FixIt** theme. For more details, see the [Configure markup][configuration-markup] page.

```toml
[markup]

[markup.highlight]
codeFences = true
lineNos = true
lineNumbersInTable = true
noClasses = false
```

## Taxonomies Configuration

The FixIt theme has three built-in [taxonomies][configure-taxonomies]: categories, tags, and collections. The default `taxonomies` configuration of the theme is as follows:

```toml
[taxonomies]
category = "categories"
tag = "tags"
collection = "collections"
```

If you want the `taxonomies` configuration to always be consistent with the theme, you can set `taxonomies._merge` to `shallow`.

After that, you can categorize your posts, for example:

```yaml
---
title: Configure FixIt
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

## Custom output formats

Hugo can output content in multiple formats. The **FixIt** theme takes advantage of this feature. In order to fully configure the theme, configure the following options into `hugo.toml`.

More details about the configuration of output formats can be found in the [Custom output formats][hugo-output-formats] page.

```toml
[mediaTypes]

[mediaTypes."text/markdown"]
suffixes = [ "md" ]

[outputFormats]

# {{< version 0.3.0 >}} Options to make output /archives/index.html file
[outputFormats.archives]
path = "archives"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

# {{< version 0.3.0 >}} Options to make output /offline/index.html file
[outputFormats.offline]
path = "offline"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

# {{< version 0.3.0 >}} Options to make output readme.md file
[outputFormats.readme]
baseName = "readme"
mediaType = "text/markdown"
isPlainText = true
isHTML = false

# {{< version 0.3.0 changed >}} Options to make output baidu_urls.txt file
[outputFormats.baidu_urls]
baseName = "baidu_urls"
mediaType = "text/plain"
isPlainText = true
isHTML = false

# {{< version 0.3.10 >}} Options to make output search.json file
[outputFormats.search]
baseName = "search"
mediaType = "application/json"
rel = "search"
isPlainText = true
isHTML = false
permalinkable = true
```

You only need to configure the root configuration key `outputs`, because the **FixIt** theme has already configured the `mediaTypes` and `outputFormats` for you.

```toml
# Options to make hugo output files, the optional values are below:
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

If you want the `outputs` configuration to always be consistent with the theme, you can set `outputs._merge` to `shallow`.

## Theme Configuration {#theme-configuration}

In addition to Hugo global configuration, **FixIt** provides some theme configuration via the root configuration keys `params`.

A simple example:

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

### version

`string` The FixIt theme version. e.g. `0.2.X`, `0.2.15`, `v0.2.15` etc.

### description

`string` The site description for SEO.

### keywords

`string array` The site keywords for SEO.

### defaultTheme

`string` The site default theme. Default is `auto`. The configuration value for `defaultTheme` can be one of:

light
: light style for FixIt

dark
: dark style for FixIt

auto
: automatically switch between light and dark styles based on the user's system preference

### fingerprint

`string` Which hash function used for SRI, when empty, no SRI is used. The configuration value for `fingerprint` can be one of `sha256`, `sha384`, `sha512`, `md5`.

### dateFormat

`string` The date format for the site. Default is `2006-01-02`.

### images

`string array` Website images for Open Graph and Twitter Cards.

### enablePWA

{{< version 0.2.12 >}}

`bool` Enable PWA. Default is `false`.

### externalIcon

{{< version 0.2.14 >}}

`bool` Whether to add external Icon for external links automatically. Default is `false`.

### capitalizeTitles

{{< version 0.3.13 >}}

`bool` Whether to capitalize titles. Default is `true`.

### withSiteTitle

{{< version 0.3.0 >}}

`bool` Whether to add site title to the title of every page. Default is `true`. Remember to set up your site title in `hugo.toml` (e.g. `title = "title"`)

### titleDelimiter

{{< version 0.3.0 >}}

`string` Title delimiter when the site title is be added to the title of every page. Default is `-`.

### indexWithSubtitle

{{< version 0.3.0 >}}

`bool` Whether to add site subtitle to the title of index page. Default is `false`. Remember to set up your site subtitle by `params.header.subtitle.name`.

### summaryPlainify

{{< version 0.3.13 >}}

`bool` Whether to show summary in plain text. Default is `false`.

### enableTranslationMerge

{{< version 0.4.0 >}}

`bool` Whether to enable merging missing translations from other languages. Default is `false`.

When set to `true`, missing translations will be merged and displayed. Recommended for multi-language sites.

| Setting | Multi-language Sites | Single-language Sites | Performance Impact          |
| :------ | :------------------- | :-------------------- | :-------------------------- |
| `true`  | ✅ Recommended       | ⚠️ Performance Loss   | Additional merging overhead |
| `false` | ❌ Limited Function  | ✅ Recommended        | No additional overhead      |

> [!NOTE]
> This won't create new pages, if you need empty placeholder pages, you might need [shortcode-missing-translation][sc-missing-translation].

### disableThemeInject

{{< version 0.2.14 >}}

`bool` FixIt will, by default, inject a theme meta tag in the HTML head on the home page only. You can turn it off, but we would really appreciate if you don’t, as this is a good way to watch FixIt's popularity on the rise. Default is `false`.

### author

`map` The author Configuration.

```toml
[params]

[params.author]
name = ""
email = ""
link = ""
avatar = ""
```

name
: `string` The author's name.

email
: `string` The author's email.

link
: `string` The author's link.

avatar
: `string` The author's avatar.

### gitInfo

{{< version 0.3.0 >}}

`map` The Git repository information (only then `enableGitInfo` is `true`).

```toml
[params]

[params.gitInfo]
repo = ""
branch = "main"
dir = "content"
issueTpl = "title=[BUG]%20{title}&body=|Field|Value|%0A|-|-|%0A|Title|{title}|%0A|URL|{URL}|%0A|Filename|{sourceURL}|"
```

repo
: `string` The public Git repository URL. e.g. `https://github.com/hugo-fixit/docs`

branch
: `string` The public Git repository branch. Default is `main`.

dir
: `string` The content directory path relative to the root of the repository.

issueTpl
: `string` The issue template for reporting issue of the posts. Available template params: `{title}`, `{URL}`, `{sourceURL}`.

### app

`map` The App icon Configuration.

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
: `string` Optional site title override for the app when added to an iOS home screen or Android launcher.

noFavicon
: `bool` Whether to omit favicon resource links. Default is `false`.

svgFavicon
: `string` Modern SVG favicon to use in place of older style `.png` and `.ico` files.

iconColor
: `string` Safari mask icon color. Default is `#5bbad5`.

tileColor
: `string` Windows v8-10 tile color. Default is `#da532c`.

themeColor
: `map` Android browser theme color.

- light: `string` The light theme color. Default is `#f8f8f8`.
- dark: `string` The dark theme color. Default is `#252627`.

### search

`map` The Search Configuration.

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
: `bool` Whether to enable search. Default is `false`.

type
: `string` The type of search engine. The configuration value for `type` can be one of `algolia`, `fuse`, `cse` or `post-chat`. Default is `fuse`.

contentLength
: `int` The max index length of the chunked content. Default is `4000`.

placeholder
: `string` The placeholder of the search bar. Default is `""`.

maxResultLength
: `int` The max number of results length. Default is `10`.

snippetLength
: `int` The snippet length of the result. Default is `30`.

highlightTag
: `string` The HTML tag name of the highlight part in results. Default is `em`.

absoluteURL
: `bool` Whether to use the absolute URL based on the baseURL in search index. Default is `false`.

algolia
: `map` The Algolia Configuration.

- index: `string` The Algolia index.
- appID: `string` The Algolia appID.
- searchKey: `string` The Algolia searchKey.

fuse
: {{< version 0.2.17 >}}\
`map` The [Fuse Configuration][fusejs-options].

- isCaseSensitive: `bool` Whether the search is case sensitive. Default is `false`.
- minMatchCharLength: `int` The minimum number of characters that must be matched before a result is considered a match. Default is `2`.
- findAllMatches: `bool` Whether to find all matches. Default is `false`.
- location: `int` The location. Default is `0`.
- threshold: `float` The threshold. Default is `0.3`.
- distance: `int` The distance. Default is `100`.
- ignoreLocation: `bool` Whether to ignore location. Default is `false`.
- useExtendedSearch: `bool` Whether to use extended search. Default is `false`.
- ignoreFieldNorm: `bool` Whether to ignore field norm. Default is `false`.

---

Based on [algolia][algolia], [Fuse.js][fusejs], [Custom Search Engine](#cse) or [PostChat](#postchat), searching is supported in **FixIt** theme.

In order to generate `search.json` for searching, add `search` output file type to the `home` of the `outputs` part in your site configuration.

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

{{< link href="/guides/algolia-atomic" content="Tips about algolia" card=true >}}

### cse

{{< version 0.3.16 >}}

`map` The Custom Search Engine (CSE) Configuration. See [CSE Support][cse-support].

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
: `string` The search engine. The configuration value for `engine` can be one of `google`, `bing`.

resultsPage
: `string` The search results page URL (`layout: search`). Default is `/search/`.

google
: `map` The [Google Custom Search Engine][google-cse] Configuration.

- cx: `string` The Google Custom Search Engine Context ID.

bing
: `map` The [Bing Custom Search Engine][bing-cse] Configuration. (Unsupported)

### header

`map` The Header Configuration.

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
`string` Desktop header mode. The configuration value for `desktopMode` can be one of `sticky`, `normal`, `auto`. Default is `sticky`.

mobileMode
: {{< version 0.2.13 changed >}}\
`string` Mobile header mode. The configuration value for `mobileMode` can be one of `sticky`, `normal`, `auto`. Default is `auto`.

title
: `map` The Header title Configuration.

- logo: `string` URL of the LOGO.
- name: `string` Title name.
- pre: `string` You can add extra information before the name (HTML format is supported), such as icons.
- post: `string` You can add extra information after the name (HTML format is supported), such as icons.
- typeit: `bool` Whether to use typeit animation for title name. Default is `false`.

subtitle
: {{< version 0.2.12 >}}\
`map` The Header subtitle Configuration.

- name: `string` Subtitle name.
- typeit: `bool` Whether to use typeit animation for subtitle name. Default is `false`.

### breadcrumb

{{< version 0.2.18 >}}

`map` The Breadcrumb Configuration.

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
: `bool` Whether to enable breadcrumb. Default is `false`.

sticky
: `bool` Whether to make the breadcrumb sticky. Default is `false`.

showHome
: `bool` Whether to show the home link in the breadcrumb. Default is `false`.

separator
: {{< version 0.3.13 >}}\
`string` The separator of the breadcrumb. Default is `/`.

capitalize
: {{< version 0.3.13 >}}\
`bool` Whether to capitalize the breadcrumb. Default is `false`.

### navigation

{{< version 0.3.10 >}}

`map` The Post navigation Configuration.

```toml
[params]

[params.navigation]
inSection = false
reverse = false
```

inSection
: `bool` Whether to show the post navigation in section pages scope. Default is `false`.

reverse
: `bool` Whether to reverse the next/previous post navigation order. Default is `false`.

### footer

`map` The Footer Configuration.

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
: `bool` Whether to enable footer. Default is `true`.

copyright
: `bool` Whether to show copyright info. Default is `true`.

author
: `bool` Whether to show the author. Default is `true`.

since
: `int` Site creation year.

gov
: {{< version 0.2.12 >}}\
`string` Public network security only in China (HTML format is supported).

icp
: `string` ICP info only in China (HTML format is supported).

license
: `string` License info (HTML format is supported).

powered
: `map` The Footer powered Configuration.

- enable: `bool` Whether to show Hugo and theme info. Default is `true`.
- hugoLogo: `bool` Whether to show Hugo logo. Default is `true`.
- themeLogo: `bool` Whether to show theme logo. Default is `true`.

siteTime
: {{< version 0.2.17 >}}\
`map` The Footer siteTime Configuration.

- enable: `bool` Whether to show site creation time. Default is `false`.
- animate: `bool` Whether to animate the site creation time. Default is `true`.
- icon: `string` The icon of the site creation time. Default is `fa-solid fa-heartbeat`.
- pre: `string` You can add extra information before the value (HTML format is supported).
- value: `string` The value of the site creation time. e.g. `2021-12-18T16:15:22+08:00`.

order
: {{< version 0.2.17 >}}\
`map` The Footer order Configuration.

- powered: `int` The order of the powered line. Default is `0`.
- copyright: `int` The order of the copyright line. Default is `0`.
- statistics: `int` The order of the statistics line. Default is `0`.
- visitor: `int` The order of the visitor line. Default is `0`.
- beian: `int` The order of the beian line. Default is `0`.

The order value can be one of `first`, `0`, `1`, `2`, `3`, `4`, `5`, `last`.

### archives

{{< version 0.3.0 >}}

`map` The Archives page Configuration.

```toml
[params]

[params.archives]
paginate = 20
dateFormat = "01-02"
```

paginate
: `int` Special amount of posts in each archives page. Default is `20`.

dateFormat
: `string` Date format (month and day). Default is `01-02`.

### section

`map` The Section page Configuration.

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
: `int` Special amount of posts in each section page. Default is `20`.

dateFormat
: `string` Date format (month and day). Default is `01-02`.

feed
: {{< version 0.3.10 >}}\
`map` Section feed config for RSS, Atom and JSON feed. See [Feed config](#feed).

### list

`map` The List (category or tag) page Configuration.

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
: `int` Special amount of posts in each list page. Default is `20`.

dateFormat
: `string` Date format (month and day). Default is `01-02`.

feed
: {{< version 0.3.10 >}}\
`map` Term list feed config for RSS, Atom and JSON feed. See [Feed config](#feed).

### recentlyUpdated

{{< version 0.3.13 >}}

`map` The Recently Updated posts Configuration.

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
: `bool` Whether to enable recently updated posts in archives. Default is `true`.

section
: `bool` Whether to enable recently updated posts in section. Default is `true`.

list
: `bool` Whether to enable recently updated posts in list. Default is `true`.

days
: `int` The days of recently updated posts. Default is `30`.

maxCount
: `int` The max count of recently updated posts. Default is `10`.

### tagcloud

{{< version 0.2.17 >}}

`map` The TagCloud Configuration for tags page.

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
: `bool` Whether to enable tagcloud. Default is `false`.

min
: `int` Minimum font size in px. Default is `14`.

max
: `int` Maximum font size in px. Default is `32`.

peakCount
: `int` Maximum count of posts per tag. Default is `10`.

orderby
: `string` Order of tags. The configuration value for `orderby` can be one of `name`, `count`. Default is `name`.

### home

`map` The Home page Configuration.

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
: `map` The Home page profile Configuration.

- enable: `bool` Whether to enable home page profile. Default is `false`.
- onlyFirstPage: `bool` Whether to show profile and content only in the first home page. Default is `false`.
- gravatarEmail: `string` Gravatar Email for preferred avatar in home page.
- avatarURL: `string` URL of avatar shown in home page, default is author's avatar.
- avatarMenu: `string` Identifier of avatar menu link. {{< version 0.2.17 >}}
- title: `string` Title shown in home page (HTML format is supported).
- subtitle: `string` Subtitle shown in home page.
- typeit: `bool` Whether to use typeit animation for subtitle. Default is `true`.
- social: `bool` Whether to show social links. Default is `true`.
- disclaimer: `string` Disclaimer (HTML format is supported).

posts
: `map` The Home page posts Configuration.

- enable: `bool` Whether to enable home page posts. Default is `true`.
- paginate: `int` Special amount of posts in each home posts page. Default is `6`.

### social

`map` Social Configuration about the author.

The default data of all supported social links is located in `themes/FixIt/assets/data/social.yaml`,
which is you can refer to.

You can directly set your ID to get a default social link and its icon:

```toml
[params.social]
Mastodon = "@xxxx"
```

The social link generated is `https://mastodon.social/@xxxx`.

Or You can set more options through a object:

```toml
[params.social]

[params.social.Mastodon]
# weight when arranging icons (the greater the weight, the later the icon is positioned)
weight = 0
# your social ID
id = "@xxxx"
# prefix of your social link
prefix = "https://mastodon.gal/"
# content hovering on the icon
title = "Mastodon"
```

### typeit

`map` TypeIt Configuration.

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
: `int` Typing speed between each step (measured in milliseconds). Default is `100`.

cursorSpeed
: `int` Blinking speed of the cursor (measured in milliseconds). Default is `1000`.

cursorChar
: `string` Character used for the cursor (HTML format is supported). Default is `|`.

duration
: `int` Cursor duration after typing finishing (measured in milliseconds, `-1` means unlimited). Default is `-1`.

loop
: {{< version 0.2.18 >}}\
`bool` Whether your strings will continuously loop after completing. Default is `false`.

### admonition

{{< version 0.3.13 >}}

`map` Admonition custom Configuration. See [Advanced - Custom Admonitions][custom-admonitions]

```toml
[params]

[params.admonition]
# ban = "fa-solid fa-ban"
```

The syntax is `<type> = <icon>`, where `<type>` is the type of the admonition and `<icon>` is the Font Awesome icon class.

### taskList

{{< version 0.3.14 >}}

`map` Task lists custom Configuration. See [Advanced - Custom Task Lists][custom-task-lists]

```toml
[params]

[params.taskList]
# tip = "fa-regular fa-lightbulb"
```

The syntax is `<type> = <icon>`, where `<type>` is the type of the task list and `<icon>` is the Font Awesome icon class.

### repoVersion

{{< version 0.3.15 >}}

`map` The `version` shortcode Configuration.

```toml
[params]

[params.repoVersion]
url = "https://github.com/hugo-fixit/FixIt/releases/tag/v"
name = "FixIt"
```

url
: `string` The URL prefix for the release tag.

name
: `string` The project name.

### mermaid

{{< version 0.4.0 changed >}}

`map` Mermaid Configuration, see [Diagrams Support - Mermaid][diagrams-support-mermaid].

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
: `string` {{< version 0.4.0 >}} The Mermaid ESM module CDN source.\
Default is `https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs`.

zenuml
: `string` {{< version 0.4.0 >}} The ZenUML ESM module CDN source.\
Default is empty, you can set it to a CDN source to enable ZenUML support.

themes
: `string array(2)` Themes for Mermaid. See [Mermaid Themes][mermaid-themes] for available values.

securityLevel
: `string` {{< version 0.4.0 >}} The security level for Mermaid diagrams. Default is `loose`.

look
: `string` {{< version 0.4.0 >}} The appearance style for Mermaid diagrams. Default is `handDrawn`.

fontFamily
: `string` {{< version 0.4.0 >}} The font family for Mermaid diagrams.

layoutLoaders
: `string array` {{< version 0.4.0 >}} The layout loaders for Mermaid diagrams. Default is empty.

layout
: `string` {{< version 0.4.0 >}} The default layout algorithm for rendering diagrams. Default is `dagre`.

### pangu

{{< version 0.2.12 >}}

`map` PanguJS Configuration.

```toml
[params]

[params.pangu]
enable = false
selector = "article"
```

enable
: `bool` Whether to enable PanguJS. Default is `false`.

selector
: {{< version 0.2.17 >}}\
`string` The selector of PanguJS. Default is `article`.

### watermark

{{< version 0.2.13 changed >}}

`map` Watermark Configuration. See [Watermark][watermark] for more information.

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

`map` Busuanzi count Configuration.

```toml
[params]

[params.busuanzi]
enable = false
source = "https://vercount.one/js"
siteViews = true
pageViews = true
```

enable
: `bool` Whether to enable Busuanzi count. Default is `false`.

source
: `string` Busuanzi count core script source. Default is `https://vercount.one/js`.\
Support [Vercount][vercount], [Busuanzi][busuanzi], etc.

siteViews
: `bool` Whether to show the site views. Default is `true`.

pageViews
: `bool` Whether to show the page views. Default is `true`.

### verification

`map` Site verification code Configuration for Google/Bing/Yandex/Pinterest/Baidu/360/Sogou.

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

`map` Site SEO Configuration.

```toml
[params]

[params.seo]
image = ""
thumbnailUrl = ""
```

image
: `string` Image URL.

thumbnailUrl
: `string` Thumbnail URL.

### analytics

`map` Analytics Configuration.

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
: `bool` Whether to enable analytics. Default is `false`.

google
: `map` Google Analytics Configuration.

- id: `string` Google Analytics ID.
- anonymizeIP: `bool` Whether to anonymize IP. Default is `true`.

fathom
: `map` Fathom Analytics Configuration.

- id: `string` Fathom Analytics ID.
- server: `string` Server URL for your tracker if you're self hosting.

baidu
: {{< version 0.3.16 >}}\
`map` Baidu Analytics Configuration.

- id: `string` Baidu Analytics ID.

umami
: {{< version 0.3.16 >}}\
`map` Umami Analytics Configuration.

- data_website_id: `string` Umami Analytics website ID.
- src: `string` The script URL of Umami Analytics.
- data_host_url: `string` The host URL of Umami Analytics.
- data_domains: `string` The domain of Umami Analytics.

plausible
: {{< version 0.3.16 >}}\
`map` Plausible Analytics Configuration.

- data_domain: `string` Plausible Analytics domain.
- src: `string` The script URL of Plausible Analytics.

cloudflare
: {{< version 0.3.16 >}}\
`map` Cloudflare Analytics Configuration.

- token: `string` Cloudflare Analytics token.

splitbee
: {{< version 0.3.16 >}}\
`map` Splitbee Analytics Configuration.

- enable: `bool` Whether to enable Splitbee Analytics. Default is `false`.
- no_cookie: `bool` Whether to use no cookie mode. Default is `true`.
- do_not_track: `bool` Whether to respect the do not track setting of the browser. Default is `true`.
- data_token: `string` Splitbee Analytics token.

### cookieconsent

`map` Cookie consent Configuration.

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
: `bool` Whether to enable cookie consent. Default is `true`.

content
: `map` Cookie consent content Configuration.

- message: `string` The message of cookie consent.
- dismiss: `string` The dismiss of cookie consent.
- link: `string` The link of cookie consent.

### cdn

`map` CDN Configuration for third-party library files.

```toml
[params]

[params.cdn]
data = "unpkg.yml"
```

data
: `string` CDN data file name, disabled by default. The data file is located in `themes/FixIt/assets/data/cdn/` directory. You can store your own data files in the same path under your project: `assets/data/cdn/`. The configuration value for `data` can be one of `jsdelivr.yml`, `unpkg.yml`, etc.

### compatibility

`map` Compatibility Configuration.

```toml
[params]

[params.compatibility]
polyfill = false
objectFit = false
```

polyfill
: `bool` Whether to use Polyfill.io to be compatible with older browsers. Default is `false`.

objectFit
: `bool` Whether to use object-fit-images to be compatible with older browsers. Default is `false`.

### githubCorner

{{< version 0.2.14 >}}

`map` GitHub banner in the top-right or top-left corner.

```toml
[params]

[params.githubCorner]
enable = false
permalink = ""
title = "View source on GitHub"
position = "right"
```

enable
: `bool` Whether to enable GitHub banner. Default is `false`.

permalink
: `string` The URL of the GitHub repository. e.g. `https://github.com/hugo-fixit/FixIt`

title
: `string` The title of the GitHub banner.

position
: `string` The position of the GitHub banner. The configuration value for `position` can be one of `left`, `right`. Default is `right`.

### gravatar

{{< version 0.2.18 changed >}}

`map` Gravatar Configuration.

```toml
[params]

[params.gravatar]
enable = false
host = "www.gravatar.com"
style = ""
```

enable
: `bool` Whether to enable Gravatar. Default is `false`.\
Depends on the author's email, if the author's email is not set, the local avatar will be used.

host
: `string` Gravatar host. e.g. `www.gravatar.com`, `cravatar.cn` etc. Default is `www.gravatar.com`.

style
: `string` Gravatar style. The configuration value for `style` can be one of `mp`, `identicon`, `monsterid`, `wavatar`, `retro`, `blank`, `robohash`. Default is `""`.

### backToTop

{{< version 0.2.16 >}}

`map` Back to top Configuration.

```toml
[params]

[params.backToTop]
enable = true
scrollpercent = false
```

enable
: `bool` Whether to enable back to top. Default is `true`.

scrollpercent
: `bool` Scroll percent label in b2t button. Default is `false`.

### readingProgress

{{< version 0.2.16 >}}

`map` Reading progress bar Configuration.

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
: `bool` Whether to enable reading progress bar. Default is `false`.

start
: `string` The start position of reading progress bar. The configuration value for `start` can be one of `left`, `right`. Default is `left`.

position
: `string` The position of reading progress bar. The configuration value for `position` can be one of `top`, `bottom`. Default is `top`.

reversed
: `bool` Whether to reverse the reading progress bar. Default is `false`.

light
: `string` The light color of reading progress bar. Default is `""`.

dark
: `string` The dark color of reading progress bar. Default is `""`.

height
: `string` The height of reading progress bar. Default is `2px`.

### pace

{{< version 0.2.17 >}}

`map` Progress bar in the top during page loading, based on [Pace.js][pacejs].

```toml
[params]

[params.pace]
enable = false
color = "blue"
theme = "minimal"
```

enable
: `bool` Whether to enable pace. Default is `false`.

color
: `string` The color of pace. All available colors: `black`, `blue`, `green`, `orange`, `pink`, `purple`, `red`, `silver`, `white`, `yellow`. Default is `blue`.

theme
: `string` The theme of pace. All available themes: `barber-shop`, `big-counter`, `bounce`, `center-atom`, `center-circle`, `center-radar`, `center-simple`, `corner-indicator`, `fill-left`, `flash`, `flat-top`, `loading-bar`, `mac-osx`, `material`, `minimal`. Default is `minimal`.

### postChat

{{< version 0.3.17 >}}

`map` [PostChat][postchat] AI Configuration.

> [!NOTE]
> The `key` is required for the `postChat` to work. You can get the key from the [PostChat][postchat] website.

```toml
[params]

# PostChat: https://ai.zhheo.com/docs/addCode.html
[params.postChat]
enable = false
key = ""
# How users initiate chats: ["iframe", "magic"]
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
# dom container to be blacked out, e.g. [".aplayer"]
blackDom = []
# Only for iframe mode
frameWidth = "" # e.g. "375px"
frameHeight = "" # e.g. "600px"
# only for magic mode
userIcon = ""
defaultChatQuestions = []
defaultSearchQuestions = []
hotWords = true
```

### postSummary

{{< version 0.3.17 >}}

`map` PostSummary AI Configuration.

> [!NOTE]
> The `key` is required for the `postSummary` to work. You can get the key from the [PostChat][postchat] website.\
> _If you set `params.postChat.key`, you don't need to set `params.postSummary.key`._

```toml
[params]

# PostSummary: https://ai.zhheo.com/docs/summary.html
[params.postSummary]
enable = false
key = ""
title = ""
# themes options: ["", "simple", "yanzhi", "menghuan"]
theme = ""
postURL = ""
blacklist = ""
wordLimit = 1000
typingAnimate = true
beginningText = ""
```

### podcast

{{< version 0.4.0 >}}

`map` Podcast AI Configuration.

```toml
[params]

# Podcast: https://ai.zhheo.com/docs/podcast.html
[params.podcast]
enable = false
```

### feed

{{< version 0.3.10 >}}

`map` Global Feed config for RSS, Atom and JSON feed. Default is as follows:

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
: `int` The number of posts to include in the feed. If set to `-1`, all posts. Default is `10`.

fullText
: `bool` Whether to show the full text content in feed. Default is `true`.

follow
: `map` Site Challenge for [Follow][follow] Configuration.

- feedId: `string` The Feed ID.
- userId: `string` The User ID.

### image

{{< version 0.3.17 >}}

`map` Image configuration, combined with Hugo's image processing options `imaging` for image optimisation.

```toml
[params]

[params.image]
cacheRemote = false
optimise = false
blackList = []
```

cacheRemote
: `bool` Whether to cache remote images for better optimisations. Default is `false`.

optimise
: `bool` Whether to resize and optimise images (may slow builds). Default is `false`.

blackList
: `string array` {{< version 0.4.0 >}} A list of image file names or patterns to exclude from optimisation. e.g. `["example.jpg", "test-*.png"]`.

### codeblock

{{< version 0.4.0 >}}

`map` Code block wrapper Configuration.

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
> You can override the global config via Markdown attributes, for example:
>
> ````markdown {wrapper=false, lineNos=false}
> ```lang {mode="mac", maxShownLines=5}
> code here
> ```
> ````

wrapper
: `bool` Whether to enable the code block wrapper. Default is `true`.

mode
: `string` Code block mode. The configuration value for `mode` can be one of `classic`, `mac`, `simple`, etc. Default is `classic`. (If you set to custom value, you need to create a custom CSS for `data-mode` attribute.)

wrapperClass
: `string` Additional classes for the code block wrapper. Default is `""`.\
e.g. `is-collapsed is-expanded line-nos-hidden line-wrapping`

| Class Name        | Description                                                                   |
| :---------------- | :---------------------------------------------------------------------------- |
| `is-collapsed`    | Control the code block wrapper is collapsed or not. (only for `classic` mode) |
| `is-expanded`     | Control the code block preview is expanded or not. (default is collapsed)     |
| `line-nos-hidden` | Control the line numbers is hidden or not.                                    |
| `line-wrapping`   | Control the line wrapping is enabled or not.                                  |

maxShownLines
: `int` The maximum number of lines to show in the code block preview. Default is `10`.

copyable
: `bool` Whether to enable code copy button. Default is `true`.

lineNosToggler
: `bool` Whether to enable line numbers toggle button in the code block header. Default is `true`. (Only available in `classic` mode)

lineWrapToggler
: `bool` Whether to enable toggle line wrapping button in the code block header. Default is `true`. (Only available in `classic` mode)

editable
: `bool` Whether to enable code edit button in the code block header. Default is `false`. (Only available in `classic` mode)

### jsonViewer

{{< version 0.4.0 >}}

`map` JSON Viewer Configuration, see [JSON Viewer Support][json-viewer].

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
: `bool` Whether to enable JSON Viewer. Default is `true`.
expandDepth
: `int` The depth to which the JSON structure is expanded by default. Default is `1`.
copyable
: `bool` Whether to show a copy button for copying JSON content. Default is `true`.
sort
: `bool` Whether to sort object keys alphabetically. Default is `false`.
boxed
: `bool` Whether to display the JSON content within a boxed layout. Default is `true`.

### customPartials

{{< version 0.3.12 >}}

`map` Custom partials Configuration. See [Open Custom Blocks][block].

### dev

{{< version 0.2.15 >}}

`map` Developer options.

Select the scope named `public_repo` to generate personal access token, Configure with environment variable `HUGO_PARAMS_GHTOKEN=xxx`, see <https://gohugo.io/functions/os/getenv/#examples>.

```toml
[params]

[params.dev]
enable = false
c4u = false
```

enable
: `bool` Whether to enable developer options. Default is `false`.

c4u
: `bool` Whether to check for updates. Default is `false`.

### page

`map` The configuration of each page.

```toml
[params]

[params.page]
# {{< version 0.2.18 >}} whether to enable the author's avatar of the post
authorAvatar = true
# whether to hide a page from home page
hiddenFromHomePage = false
# whether to hide a page from search results
hiddenFromSearch = false
# {{< version 0.3.0 >}} whether to hide a page from related posts
hiddenFromRelated = false
# {{< version 0.3.10 >}} whether to hide a page from RSS, Atom and JSON feed
hiddenFromFeed = false
# whether to enable twemoji
twemoji = false
# {{< version 0.2.18 changed >}} whether to enable lightgallery
# set to true, images in the content will be shown as the gallery if the image has a title, e.g. ![alt](src "title")
# set to "force", images in the content will be forced to shown as the gallery regardless of the image has a title or not, e.g. ![alt](src)
lightgallery = false
# whether to enable the ruby extended syntax
ruby = true
# whether to enable the fraction extended syntax
fraction = true
# whether to enable the fontawesome extended syntax
fontawesome = true
# license info (HTML format is supported)
license = '<a rel="license external nofollow noopener noreferrer" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>'
# whether to show link to Raw Markdown content of the post
linkToMarkdown = true
# {{< version 0.3.0 >}} whether to show link to view source code of the post
linkToSource = true
# {{< version 0.3.0 >}} whether to show link to edit the post
linkToEdit = true
# {{< version 0.3.0 >}} whether to show link to report issue for the post
linkToReport = true
# {{< version 0.3.20 >}} whether to show link to view the post in VSCode
linkToVscode = true
# {{< version 0.3.10 changed >}} Page style ["narrow", "normal", "wide", ...]
pageStyle = "normal"
# {{< version 0.2.17 changed >}} Auto Bookmark Support
# If true, save the reading progress when closing the page.
autoBookmark = false
# {{< version 0.4.0 >}} whether to show the last modified time
showLastmod = true
# {{< version 0.2.17 >}} whether to enable wordCount
wordCount = true
# {{< version 0.2.17 >}} whether to enable readingTime
readingTime = true
# {{< version 0.2.17 >}} end of post flag
endFlag = ""
# {{< version 0.2.18 >}} whether to enable instant.page
instantPage = false
# {{< version 0.3.0 >}} whether to enable collection list at the sidebar
collectionList = false
# {{< version 0.3.0 >}} whether to enable collection navigation at the end of the post
collectionNavigation = false

# {{< version 0.2.15 >}} Repost config
[params.page.repost]
enable = false
url = ""

# Table of the contents config
[params.page.toc]
# whether to enable the table of the contents
enable = true
# whether to keep the static table of the contents in front of the post
keepStatic = false
# whether to make the table of the contents in the sidebar automatically collapsed
auto = true
# {{< version 0.2.13 >}} position of TOC ["left", "right"]
position = "right"
# {{< version 0.3.12 >}} supersede `markup.tableOfContents` settings
ordered = false
startLevel = 2
endLevel = 6
# {{< version 0.4.0 >}} whether to decrease the H1 heading level in content
decreaseH1 = false

# {{< version 0.2.13 >}} Display a message at the beginning of an article to warn the reader that its content might be expired
[params.page.expirationReminder]
enable = false
# Display the reminder if the last modified time is more than 90 days ago
reminder = 90
# Display warning if the last modified time is more than 180 days ago
warning = 180
# If the article expires, close the comment or not
closeComment = false

# {{< version 0.3.0 >}} page heading config
[params.page.heading]
# {{< version 0.3.6 >}} whether to capitalize automatic text of headings
capitalize = false

# {{< version 0.3.12 changed >}} must set `params.page.toc.ordered` to true
[params.page.heading.number]
# whether to enable auto heading numbering
enable = false

[params.page.heading.number.format]
h1 = "{title}"
h2 = "{h2} {title}"
h3 = "{h2}.{h3} {title}"
h4 = "{h2}.{h3}.{h4} {title}"
h5 = "{h2}.{h3}.{h4}.{h5} {title}"
h6 = "{h2}.{h3}.{h4}.{h5}.{h6} {title}"

# {{< version 0.4.0 changed >}} mathematical formulas configuration
# See http://fixit.lruihao.cn/documentation/content-management/markdown-syntax/extended/#formula
[params.page.math]
enable = true
# mathematical formulas rendering engines, optional values: ["katex", "mathjax"]
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
# "\\f" = "#1f(#2)" # usage: $\f{a}{b}$

# MathJax server-side rendering (https://www.mathjax.org)
# MathJax config: https://docs.mathjax.org/en/latest/options/index.html
[params.page.math.mathjax]
cdn = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"

[params.page.math.mathjax.packages]
# "[+]" = ["configmacros"]

# custom macros map
# syntax: <macro> = <definition>
[params.page.math.mathjax.macros]
# "bold" = ["{\\bf #1}", 1]  # usage: $\bold{math}$

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

# {{< link "https://docs.mapbox.com/mapbox-gl-js" "Mapbox GL JS" >}} config (https://docs.mapbox.com/mapbox-gl-js)
[params.page.mapbox]
# access token of Mapbox GL JS
accessToken = ""
# style for the light theme
lightStyle = "mapbox://styles/mapbox/light-v11"
# style for the dark theme
darkStyle = "mapbox://styles/mapbox/dark-v11"
# whether to add {{< link "https://docs.mapbox.com/mapbox-gl-js/api#navigationcontrol" NavigationControl >}}
navigation = true
# whether to add {{< link "https://docs.mapbox.com/mapbox-gl-js/api#geolocatecontrol" GeolocateControl >}}
geolocate = true
# whether to add {{< link "https://docs.mapbox.com/mapbox-gl-js/api#scalecontrol" ScaleControl >}}
scale = true
# whether to add {{< link "https://docs.mapbox.com/mapbox-gl-js/api#fullscreencontrol" FullscreenControl >}}
fullscreen = true

# {{< version 0.3.0 >}} Related content config (https://gohugo.io/content-management/related/)
[params.page.related]
enable = false
count = 5
# {{< version 0.3.20 >}} position of related content, optional values: ["aside", "footer"]
position = [
  "aside",
  "footer"
]

# {{< version 0.2.17 >}} Donate (Sponsor) settings
[params.page.reward]
enable = false
animation = false
# position relative to post footer, optional values: ["before", "after"]
position = "after"
# comment = "Buy me a coffee"
# {{< version 0.2.18 >}} display mode of QR code images, optional values: ["static", "fixed"], default: `static`
mode = "static"

[params.page.reward.ways]
# wechatpay = "/images/wechatpay.png"
# alipay = "/images/alipay.png"
# paypal = "/images/paypal.png"
# bitcoin = "/images/bitcoin.png"

# Social share links in post page
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

# {{< version 0.2.15 changed >}} Comment config
[params.page.comment]
enable = false

# {{< version 0.2.13 >}} {{< link "https://artalk.js.org/" Artalk >}} comment config (https://artalk.js.org/)
[params.page.comment.artalk]
enable = false
server = "https://yourdomain"
site = "默认站点"
# {{< version 0.3.3 >}} whether use backend configuration
useBackendConf = false
placeholder = ""
noComment = ""
sendBtn = ""
editorTravel = true
flatMode = "auto"
maxNesting = 3
# {{< version 0.2.17 changed >}} enable lightgallery support
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

# {{< version 0.1.1 >}} {{< link "https://disqus.com/" Disqus >}} comment config (https://disqus.com)
[params.page.comment.disqus]
enable = false
# Disqus shortname to use Disqus in posts
shortname = ""

# {{< version 0.1.1 >}} {{< link "https://github.com/gitalk/gitalk" Gitalk >}} comment config (https://github.com/gitalk/gitalk)
[params.page.comment.gitalk]
enable = false
owner = ""
repo = ""
clientId = ""
clientSecret = ""

# {{< link "https://github.com/xCss/Valine" Valine >}} comment config (https://github.com/xCss/Valine)
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
# emoji data file name, default is "google.yml"
# ["apple.yml", "google.yml", "facebook.yml", "twitter.yml"]
# located in "themes/FixIt/assets/lib/valine/emoji/" directory
# you can store your own data files in the same path under your project:
# "assets/lib/valine/emoji/"
emoji = ""
commentCount = true

# {{< version 0.2.13 >}}
# {{< version 0.2.16 changed >}} {{< link "https://waline.js.org" Waline >}} comment config (https://waline.js.org)
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
# {{< link "https://developers.facebook.com/docs/plugins/comments" "Facebook comment" >}} config (https://developers.facebook.com/docs/plugins/comments)
[params.page.comment.facebook]
enable = false
width = "100%"
numPosts = 10
appId = ""
languageCode = ""

# {{< link "https://comments.app/" "Telegram comments" >}} config (https://comments.app)
[params.page.comment.telegram]
enable = false
siteID = ""
limit = 5
height = ""
color = ""
colorful = true
dislikes = false
outlined = false

# {{< link "https://commento.io/" "Commento" >}} comment config (https://commento.io)
[params.page.comment.commento]
enable = false

# {{< link "https://utteranc.es/" "Utterances" >}} comment config (https://utteranc.es)
[params.page.comment.utterances]
enable = false
# owner/repo
repo = ""
issueTerm = "pathname"
label = ""
lightTheme = "github-light"
darkTheme = "github-dark"

# {{< version 0.2.13 >}} {{< link "https://twikoo.js.org/" "Twikoo" >}} comment config (https://twikoo.js.org/)
[params.page.comment.twikoo]
enable = false
envId = ""
region = ""
path = ""
visitor = true
commentCount = true
# {{< version 0.2.17 changed >}} enable lightgallery support
lightgallery = false
# {{< version 0.2.17 >}} enable Katex support
katex = false

# {{< version 0.2.14 >}} {{< link "https://giscus.app/" "Giscus" >}} comments config
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

# Third-party library config
[params.page.library]

[params.page.library.css]
# someCSS = "some.css"
# located in "assets/"
# Or
# someCSS = "https://cdn.example.com/some.css"

[params.page.library.js]
# someJavascript = "some.js"
# located in "assets/"
# Or
# someJavascript = "https://cdn.example.com/some.js"

# Page SEO config
[params.page.seo]
# image URL
images = []

# Publisher info
[params.page.seo.publisher]
name = ""
logoUrl = ""
```

## Favicon Generation

It is recommended to put your own favicons, `browserconfig.xml` and `site.webmanifest` files into the `/static` directory.

- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- browserconfig.xml
- favicon-32x32.png
- favicon-16x16.png
- favicon.ico
- mstile-150x150.png
- safari-pinned-tab.svg

They're easily created via <https://realfavicongenerator.net/>.

![Complete configuration preview](full-configuration-preview.png "Complete configuration preview")

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
