---
title: Hugo FixIt Configuration Overview
linkTitle: Configuration Overview
shortTitle: Overview
date: 2024-03-07T15:37:59+08:00
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
  - Configuration
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

```toggle
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
[menus]

[[menus.main]]
identifier = "archives"
parent = ""
# You can add extra information before the name (HTML format is supported), such as icons.
pre = ""
# You can add extra information after the name (HTML format is supported), such as icons.
post = ""
name = ""
url = ""
# Title will be shown when you hover on this menu link.
title = ""
weight = 1

# Add user-defined content to menu items.
[menus.main.params]
# Add CSS class to a specific menu item.
class = ""
# Whether set as a draft menu item whose function is similar to a draft post/page.
draft = false
# Add FontAwesome icon to a specific menu item.
icon = ""
# Set menu item type.
# available values: ["mobile", "desktop"]
type = ""
# Whether to show the submenu item divider line.
divided = false
```

> [!TIP]
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

```toggle
[markup]

[markup.highlight]
codeFences = true
lineNos = true
lineNumbersInTable = true
noClasses = false
```

## Taxonomies Configuration

The FixIt theme has three built-in [taxonomies][configure-taxonomies]: categories, tags, and collections. The default `taxonomies` configuration of the theme is as follows:

```toggle
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

### Taxonomy icons

{{< version 1.0.0 >}}

`map` Taxonomy icon overrides for title/card/term slots.

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

Works with `[taxonomies]`. Configure `[taxonomies]` first, otherwise taxonomy icons will not take effect.

## Custom output formats

Hugo can output content in multiple formats. The **FixIt** theme takes advantage of this feature. In order to fully configure the theme, configure the following options into `hugo.toml`.

More details about the configuration of output formats can be found in the [Custom output formats][hugo-output-formats] page.

```toml
[outputFormats]

# Options to make output /archives/index.html file
[outputFormats.archives]
path = "archives"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

# Options to make output /offline/index.html file
[outputFormats.offline]
path = "offline"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

# Options to make output /link/index.html file
[outputFormats.link]
path = "link"
baseName = "index"
mediaType = "text/html"
isPlainText = false
isHTML = true
permalinkable = true

# Options to make output /manifest.webmanifest file
[outputFormats.manifest]
baseName = "manifest"
mediaType = "application/manifest+json"
isPlainText = true
isHTML = false

# Options to make output readme.md file
[outputFormats.readme]
baseName = "readme"
mediaType = "text/markdown"
isPlainText = true
isHTML = false

# Options to make output baidu_urls.txt file
[outputFormats.baidu_urls]
baseName = "baidu_urls"
mediaType = "text/plain"
isPlainText = true
isHTML = false

# Options to make output search.json file
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

If you want the `outputs` configuration to always be consistent with the theme, you can set `outputs._merge` to `shallow`.

## Theme Configuration {#theme-configuration}

See the [Theme Configuration][theme-configuration] page for all `[params]` configuration settings.

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 -->
[community]: {{< relref path="/community" >}}
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
