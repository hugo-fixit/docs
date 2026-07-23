---
title: 💥 升级到 FixIt v1
date: 2026-07-22T10:00:00+08:00
weight: 2
description: 从 FixIt v0.x 升级到 v1.0 的指南。
categories:
  - Guides
tags:
  - Upgrade
  - FixIt v1
  - Breaking Changes
---

本指南将引导你从 FixIt v0.x 升级到 v1.0。v1 版本引入了重大的破坏性更新，涉及配置结构、自定义资源等方面。请仔细阅读以确保顺利升级。

<!--more-->

## 前置要求

在升级之前，请确保你的环境满足以下要求：

| 要求      | 最低版本           |
| --------- | ------------------ |
| Hugo      | 0.161.0 (Extended) |
| Dart Sass | 1.99.0             |
| Node.js   | 22                 |
| FixIt     | v1.0.0             |

> [!note]
> Dart Sass 需要[单独安装](https://gohugo.io/functions/resources/tocss/#dart-sass)，如果未安装会在构建时报错。

## 配置键命名：camelCase 改为 snake_case

v1 中影响最大的变化是 `[params]` 下的**所有配置键已从 camelCase 重命名为 snake_case**。Hugo 自身的配置键（如 `[menu]`、`[markup]` 等）不受影响。

```toml {title="hugo.toml" group="snake-case" name="v0.x（旧）"}
[params]
defaultTheme = "auto"
dateFormat = "2006-01-02"
enablePWA = true
```

```toml {title="hugo.toml" group="snake-case" name="v1（新）"}
[params]
default_theme = "auto"
date_format = "2006-01-02"
```

### 弃用检测

主题内置了弃用检测系统。当你使用旧的 camelCase 键构建站点时，Hugo 会发出警告：

```
[FixIt] deprecation warnings (v1.0.0):
- params.defaultTheme is deprecated, use params.default_theme instead
```

这些警告会直接指向新的键名，使迁移变得简单明了。

### 常用顶层键重命名

| 旧（v0.x）               | 新（v1）                   |
| ------------------------ | -------------------------- |
| `defaultTheme`           | `default_theme`            |
| `dateFormat`             | `date_format`              |
| `withSiteTitle`          | `with_site_title`          |
| `disableThemeInject`     | `disable_theme_inject`     |
| `titleDelimiter`         | `title_delimiter`          |
| `indexWithSubtitle`      | `index_with_subtitle`      |
| `enableTranslationMerge` | `enable_translation_merge` |
| `capitalizeTitles`       | `capitalize_titles`        |
| `summaryPlainify`        | `summary_plainify`         |
| `tagCloud`               | `tag_cloud`                |
| `postChat`               | `post_chat`                |
| `postSummary`            | `post_summary`             |
| `gitInfo`                | `git_info`                 |
| `backToTop`              | `back_to_top`              |
| `readingProgress`        | `reading_progress`         |
| `githubCorner`           | `github_corner`            |
| `recentlyUpdated`        | `recently_updated`         |
| `jsonViewer`             | `json_viewer`              |
| `customPartials`         | `custom_partials`          |
| `taskList`               | `task_list`                |
| `repoVersion`            | `repo_version`             |

### 嵌套键重命名

子节同样遵循 snake_case 命名规范。例如：

```toml {title="hugo.toml" group="nested-keys" name="v0.x（旧）"}
[params.search]
contentLength = 200
absoluteUrl = true

[params.search.algolia]
appId = "xxx"
searchKey = "xxx"
```

```toml {title="hugo.toml" group="nested-keys" name="v1（新）"}
[params.search]
content_length = 200
absolute_url = true

[params.search.algolia]
app_id = "xxx"
search_key = "xxx"
```

其他常见的嵌套节变更：

| 节                              | 旧键名                                                      | 新键名                                                           |
| ------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------- |
| `[params.header]`               | `desktopMode`, `mobileMode`                                 | `desktop_mode`, `mobile_mode`                                    |
| `[params.footer]`               | `siteTime`                                                  | `site_time`                                                      |
| `[params.footer.powered]`       | `hugoLogo`, `themeLogo`                                     | `hugo_logo`, `theme_logo`                                        |
| `[params.home.profile]`         | `avatarUrl`, `gravatarEmail`, `avatarMenu`, `onlyFirstPage` | `avatar_url`, `gravatar_email`, `avatar_menu`, `only_first_page` |
| `[params.home.posts]`           | `imagePreview`                                              | `image_preview`                                                  |
| `[params.breadcrumb]`           | `showHome`                                                  | `show_home`                                                      |
| `[params.navigation]`           | `inSection`                                                 | `in_section`                                                     |
| `[params.watermark]`            | `rowSpacing`, `colSpacing`, `fontSize`, `fontFamily`        | `row_spacing`, `col_spacing`, `font_size`, `font_family`         |
| `[params.busuanzi]`             | `siteViews`, `pageViews`                                    | `site_views`, `page_views`                                       |
| `[params.mermaid]`              | `securityLevel`, `fontFamily`, `layoutLoaders`              | `security_level`, `font_family`, `layout_loaders`                |
| `[params.math.katex]`           | `copyTex`, `throwOnError`, `errorColor`                     | `copy_tex`, `throw_on_error`, `error_color`                      |
| `[params.math.mathjax.options]` | `enableMenu`, `skipHtmlTags`, `ignoreHtmlClass`             | `enable_menu`, `skip_html_tags`, `ignore_html_class`             |

## 配置结构：`[params.page]` 已移除

整个 `[params.page]` 节已被**扁平化到 `[params]`**。所有之前嵌套在 `[params.page]` 下的页面级参数现在直接位于 `[params]` 下。它们仍然可以通过 front matter 在每篇文章中单独覆盖。

```toml {title="hugo.toml" group="params-page" name="v0.x（旧）"}
[params.page]
lightgallery = true
wordCount = true
readingTime = true

[params.page.toc]
enable = true

[params.page.comment]
# ...
```

```toml {title="hugo.toml" group="params-page" name="v1（新）"}
[params]
lightgallery = true
word_count = true
reading_time = true

[params.toc]
enable = true

[params.comment]
# ...
```

### 页面级键迁移

| 旧（`[params.page]`）  | 新（`[params]`）        |
| ---------------------- | ----------------------- |
| `authorAvatar`         | `author_avatar`         |
| `hiddenFromHomePage`   | `hidden_from_home_page` |
| `hiddenFromSearch`     | `hidden_from_search`    |
| `hiddenFromRelated`    | `hidden_from_related`   |
| `hiddenFromFeed`       | `hidden_from_feed`      |
| `twemoji`              | `twemoji`               |
| `lightgallery`         | `lightgallery`          |
| `ruby`                 | `ruby`                  |
| `fraction`             | `fraction`              |
| `fontawesome`          | `fontawesome`           |
| `license`              | `license`               |
| `pageStyle`            | `page_style`            |
| `autoBookmark`         | `auto_bookmark`         |
| `showLastmod`          | `show_lastmod`          |
| `wordCount`            | `word_count`            |
| `readingTime`          | `reading_time`          |
| `endFlag`              | `end_flag`              |
| `instantPage`          | `instant_page`          |
| `collectionList`       | `collection_list`       |
| `collectionNavigation` | `collection_navigation` |
| `editUrl`              | `edit_url`              |
| `sourceUrl`            | `source_url`            |

### 子节提升至 `[params]` 层级

| 旧（v0.x）                         | 新（v1）                       |
| ---------------------------------- | ------------------------------ |
| `[params.page.toc]`                | `[params.toc]`                 |
| `[params.page.expirationReminder]` | `[params.expiration_reminder]` |
| `[params.page.heading]`            | `[params.heading]`             |
| `[params.page.math]`               | `[params.math]`                |
| `[params.page.mapbox]`             | `[params.mapbox]`              |
| `[params.page.reward]`             | `[params.reward]`              |
| `[params.page.share]`              | `[params.share]`               |
| `[params.page.comment]`            | `[params.comment]`             |
| `[params.page.library]`            | `[params.library]`             |
| `[params.page.seo]`                | `[params.seo]`                 |

### `linkTo*` 合并到 `[params.post_link]`

| 旧（v0.x `[params.page]`） | 新（v1 `[params.post_link]`）       |
| -------------------------- | ----------------------------------- |
| `linkToMarkdown`           | `markdown`                          |
| `linkToSource`             | `source`                            |
| `linkToEdit`               | `edit`                              |
| `linkToReport`             | `report`                            |
| `linkToVscode`             | `editor`（字符串，默认 `"vscode"`） |

### PWA 配置重构

| 旧（v0.x）                  | 新（v1）                     |
| --------------------------- | ---------------------------- |
| `[params]` `enablePWA`      | `[params.app]` `pwa`         |
| `[params.app]` `title`      | `[params.app]` `name`        |
| `[params.app]` `noFavicon`  | `[params.app]` `no_favicon`  |
| `[params.app]` `svgFavicon` | `[params.app]` `svg_favicon` |
| `[params.app]` `iconColor`  | `[params.app]` `mask_color`  |
| `[params.app]` `tileColor`  | `[params.app]` `tile_color`  |
| `[params.app.themeColor]`   | `[params.app.theme_color]`   |

### 其他结构性变更

- `params.externalIcon` 已移至 `[params.link]` `external_icon`（现在默认为 `true`）
- `[params.link]` 现在是页面级节（可通过 front matter 在每篇文章中覆盖）
- `[params.image]`、`[params.codeblock]`、`[params.json_viewer]`、`[params.filetree]` 现在是页面级节

## 自定义样式和脚本

自定义资源文件路径已变更，旧路径不再自动加载。

| 旧文件                       | 新文件                                         |
| ---------------------------- | ---------------------------------------------- |
| `assets/css/_custom.scss`    | `assets/scss/custom.scss`                      |
| `assets/css/_override.scss`  | **已移除** — 使用 `[params.appearance]` 代替   |
| `assets/css/_variables.scss` | `assets/scss/_variables.scss`                  |
| `assets/js/_custom.js`       | `assets/js/custom.ts` 或 `assets/js/custom.js` |

> [!tip]
> 主题附带了示例文件（`assets/scss/custom.scss.example` 和 `assets/js/custom.ts.example`），展示了新的使用模式。请参考这些文件获取指导。

### SCSS 架构变更

SCSS 架构已重构为按布局分包的结构，位于 `assets/scss/` 下：

- `assets/scss/core/` — 核心样式（布局、maps、mixins）
- `assets/scss/pages/` — 按页面类型的样式
- `assets/scss/widgets/` — 组件样式

SCSS 函数前缀已从 `fixit-` 更改为 `fi-`。如果你在自定义样式中使用了主题的 SCSS 函数或 mixin，请相应更新引用。

新的 `custom.scss` 使用 `@use` 代替 `@import`：

```scss {title="assets/scss/custom.scss"}
@use "core/mixins" as *;
```

## `[params.appearance]` — 配置驱动的样式定制

新的 `[params.appearance]` 节允许你直接在 Hugo 配置中自定义 SCSS 变量，取代了旧的 `assets/css/_override.scss` 方式。

```toml {title="hugo.toml"}
[params.appearance]
global_font_family = "Custom Font, sans-serif"
global_background_color = "#ffffff"
global_background_color_dark = "#1a1a1a"
code_font_family = "Fira Code, monospace"
```

每个变量都支持亮色和暗色模式变体，使用 `_dark` 后缀。这涵盖了整个主题的颜色、字体、尺寸等设置。完整的可用变量列表请参见默认的 `hugo.toml`。

## Front Matter 变更

| 旧（v0.x）         | 新（v1）                       |
| ------------------ | ------------------------------ |
| `link_guard: true` | `link.guard: true`（嵌套 map） |
|                    |                                |

`subtitle`、`featured_image`、`featured_image_preview`、`repost`、`weight` 和 `message` 字段现在是仅限 front matter 的参数（不再在 `hugo.toml` 中配置）。

## 内容加密

如果你使用了内容加密功能，该系统已被完全重写：

- 移除了旧的 Base64 混淆层
- 新的独立包 `@hugo-fixit/encrypt`，使用 AES-256-GCM 加密
- 移除了内置的 `crypto-js` 和 `xxhash-wasm` 依赖

在 v1 中使用加密功能，需要将加密命令添加到构建流程中：

```bash
npx @hugo-fixit/encrypt
```

## 布局 Partials 路径变更

如果你在自定义代码中引用了主题 partials，请更新路径：

| 旧路径                       | 新路径                    |
| ---------------------------- | ------------------------- |
| `layouts/_partials/layouts/` | `layouts/_partials/base/` |
|                              |                           |

例如，`layouts/_partials/layouts/header.html` 现在是 `layouts/_partials/base/header.html`。

## Hugo 配置更新

- 站点配置中的 `languageCode` 已弃用；请使用 `locale`（Hugo v0.158.0+）
- `.Language.LanguageName` 已弃用；请使用 `.Language.Label`（Hugo v0.158.0+）
- `[params.dev].debug` 已移除；调试模式现在根据 Hugo 环境自动检测

## 快速升级清单

- [ ] 更新 Hugo 到 >= 0.161.0（Extended 版本）
- [ ] 安装 Dart Sass >= 1.99.0
- [ ] 更新 FixIt 主题及相关主题组件到最新版本
- [ ] 将所有 camelCase 配置键重命名为 snake_case
- [ ] 扁平化 `[params.page]` — 将所有键和子节提升到 `[params]`
- [ ] 将 `linkTo*` 参数合并到 `[params.post_link]`
- [ ] 将 `enablePWA` 移至 `[params.app].pwa` 并重构 `[params.app]`
- [ ] 将 `externalIcon` 移至 `[params.link].external_icon`
- [ ] 将 `assets/css/_custom.scss` 移至 `assets/scss/custom.scss`
- [ ] 用 `[params.appearance]` 配置替代 `assets/css/_override.scss`
- [ ] 将 `assets/css/_variables.scss` 移至 `assets/scss/_variables.scss`
- [ ] 将 `assets/js/_custom.js` 移至 `assets/js/custom.ts` 或 `assets/js/custom.js`
- [ ] 更新 front matter：`link_guard` 改为 `link.guard`
- [ ] 更新自定义 partials 路径：`layouts/_partials/layouts/` 改为 `layouts/_partials/base/`
- [ ] 如果使用加密功能：在构建流程中添加 `npx @hugo-fixit/encrypt`
- [ ] 在语言配置中将 `languageCode` 更新为 `locale`

> [!tip]
> 弃用检测系统将指导你完成大部分变更。构建你的站点并查看 Hugo 警告以获取具体的迁移提示。

如果在升级过程中遇到问题，欢迎在 [GitHub Discussions](https://github.com/hugo-fixit/FixIt/discussions) 中寻求帮助。
