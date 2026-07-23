---
title: 💥 Upgrading to FixIt v1
date: 2026-07-22T10:00:00+08:00
weight: 2
description: Guide to upgrading from FixIt v0.x to v1.0.
categories:
  - Guides
tags:
  - Upgrade
  - FixIt v1
  - Breaking Changes
---

This guide walks you through upgrading from FixIt v0.x to v1.0. The v1 release introduces significant breaking changes to configuration structure, custom assets, and more. Read on to ensure a smooth upgrade.

<!--more-->

## Prerequisites

Before upgrading, make sure your environment meets the following requirements:

| Requirement | Minimum Version    |
| ----------- | ------------------ |
| Hugo        | 0.161.0 (Extended) |
| Dart Sass   | 1.99.0             |
| Node.js     | 22                 |
| FixIt       | v1.0.0             |

> [!note]
> Dart Sass must be [installed separately](https://gohugo.io/functions/resources/tocss/#dart-sass) — the build will fail if it is not available.

## Configuration: camelCase to snake_case

The most impactful change in v1 is that **all keys under `[params]` have been renamed from camelCase to snake_case**. Hugo's own configuration keys (e.g. `[menu]`, `[markup]`, etc.) are not affected.

```toml {title="hugo.toml" group="snake-case" name="v0.x (old)"}
[params]
defaultTheme = "auto"
dateFormat = "2006-01-02"
enablePWA = true
```

```toml {title="hugo.toml" group="snake-case" name="v1 (new)"}
[params]
default_theme = "auto"
date_format = "2006-01-02"
```

### Deprecation Detection

The theme includes a built-in deprecation detection system. When you build your site with old camelCase keys, Hugo will emit warnings like:

```
[FixIt] deprecation warnings (v1.0.0):
- params.defaultTheme is deprecated, use params.default_theme instead
```

These warnings point you directly to the new key names, making migration straightforward.

### Common Top-Level Key Renames

| Old (v0.x)               | New (v1)                   |
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

### Nested Key Renames

Sub-sections also follow the snake_case convention. For example:

```toml {title="hugo.toml" group="nested-keys" name="v0.x (old)"}
[params.search]
contentLength = 200
absoluteUrl = true

[params.search.algolia]
appId = "xxx"
searchKey = "xxx"
```

```toml {title="hugo.toml" group="nested-keys" name="v1 (new)"}
[params.search]
content_length = 200
absolute_url = true

[params.search.algolia]
app_id = "xxx"
search_key = "xxx"
```

Other commonly affected nested sections:

| Section                         | Old Keys                                                    | New Keys                                                         |
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

## Config Structure: `[params.page]` Eliminated

The entire `[params.page]` section has been **flattened into `[params]`**. All page-level parameters that were previously nested under `[params.page]` now live directly under `[params]`. They can still be overridden per-page via front matter.

```toml {title="hugo.toml" group="params-page" name="v0.x (old)"}
[params.page]
lightgallery = true
wordCount = true
readingTime = true

[params.page.toc]
enable = true

[params.page.comment]
# ...
```

```toml {title="hugo.toml" group="params-page" name="v1 (new)"}
[params]
lightgallery = true
word_count = true
reading_time = true

[params.toc]
enable = true

[params.comment]
# ...
```

### Page-Level Key Migration

| Old (`[params.page]`)  | New (`[params]`)        |
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

### Sub-Sections Moved to `[params]` Level

| Old (v0.x)                         | New (v1)                       |
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

### `linkTo*` Consolidated into `[params.post_link]`

| Old (v0.x `[params.page]`) | New (v1 `[params.post_link]`)         |
| -------------------------- | ------------------------------------- |
| `linkToMarkdown`           | `markdown`                            |
| `linkToSource`             | `source`                              |
| `linkToEdit`               | `edit`                                |
| `linkToReport`             | `report`                              |
| `linkToVscode`             | `editor` (string, default `"vscode"`) |

### PWA Config Restructured

| Old (v0.x)                  | New (v1)                     |
| --------------------------- | ---------------------------- |
| `[params]` `enablePWA`      | `[params.app]` `pwa`         |
| `[params.app]` `title`      | `[params.app]` `name`        |
| `[params.app]` `noFavicon`  | `[params.app]` `no_favicon`  |
| `[params.app]` `svgFavicon` | `[params.app]` `svg_favicon` |
| `[params.app]` `iconColor`  | `[params.app]` `mask_color`  |
| `[params.app]` `tileColor`  | `[params.app]` `tile_color`  |
| `[params.app.themeColor]`   | `[params.app.theme_color]`   |

### Other Structural Moves

- `params.externalIcon` has moved to `[params.link]` `external_icon` (now defaults to `true`)
- `[params.link]` is now a page-level section (can be overridden per-page via front matter)
- `[params.image]`, `[params.codeblock]`, `[params.json_viewer]`, `[params.filetree]` are now page-level sections

## Custom Styles and Scripts

The custom asset file paths have changed. Legacy paths are no longer loaded automatically.

| Old File                     | New File                                        |
| ---------------------------- | ----------------------------------------------- |
| `assets/css/_custom.scss`    | `assets/scss/custom.scss`                       |
| `assets/css/_override.scss`  | **Removed** — use `[params.appearance]` instead |
| `assets/css/_variables.scss` | `assets/scss/_variables.scss`                   |
| `assets/js/_custom.js`       | `assets/js/custom.ts` or `assets/js/custom.js`  |

> [!tip]
> The theme ships with example files (`assets/scss/custom.scss.example` and `assets/js/custom.ts.example`) that demonstrate the new patterns. Refer to them for guidance.

### SCSS Architecture Changes

The SCSS architecture has been restructured into per-layout bundles under `assets/scss/`:

- `assets/scss/core/` — core styles (layouts, maps, mixins)
- `assets/scss/pages/` — per-page-type styles
- `assets/scss/widgets/` — widget styles

The SCSS function prefix has changed from `fixit-` to `fi-`. If you use any theme SCSS functions or mixins in your custom styles, update the references accordingly.

The new `custom.scss` uses `@use` instead of `@import`:

```scss {title="assets/scss/custom.scss"}
@use "core/mixins" as *;
```

## `[params.appearance]` — Config-Driven Style Customization

The new `[params.appearance]` section allows you to customize SCSS variables directly in your Hugo config, replacing the old `assets/css/_override.scss` approach.

```toml {title="hugo.toml"}
[params.appearance]
global_font_family = "Custom Font, sans-serif"
global_background_color = "#ffffff"
global_background_color_dark = "#1a1a1a"
code_font_family = "Fira Code, monospace"
```

Each variable supports light and dark mode variants using the `_dark` suffix. This covers colors, fonts, sizes, and more across the entire theme. See the default `hugo.toml` for the full list of available variables.

## Front Matter Changes

| Old (v0.x)         | New (v1)                        |
| ------------------ | ------------------------------- |
| `link_guard: true` | `link.guard: true` (nested map) |

The `subtitle`, `featured_image`, `featured_image_preview`, `repost`, `weight`, and `message` fields are now front-matter-only parameters (no longer configurable in `hugo.toml`).

## Content Encryption

If you use the content encryption feature, the system has been completely rewritten:

- Removed legacy Base64 obfuscation layer
- New standalone package `@hugo-fixit/encrypt` with AES-256-GCM encryption
- Removed vendored `crypto-js` and `xxhash-wasm` dependencies

To use encryption in v1, add the encrypt command to your build pipeline:

```bash
npx @hugo-fixit/encrypt
```

## Layout Partials Path Change

If you reference theme partials in custom code, update the paths:

| Old Path                     | New Path                  |
| ---------------------------- | ------------------------- |
| `layouts/_partials/layouts/` | `layouts/_partials/base/` |

For example, `layouts/_partials/layouts/header.html` is now `layouts/_partials/base/header.html`.

## Hugo Config Updates

- `languageCode` in site config is deprecated; use `locale` instead (Hugo v0.158.0+)
- `.Language.LanguageName` is deprecated; use `.Language.Label` (Hugo v0.158.0+)
- `[params.dev].debug` has been removed; debug mode is now auto-detected from the Hugo environment

## Quick Upgrade Checklist

- [ ] Update Hugo to >= 0.161.0 (Extended)
- [ ] Install Dart Sass >= 1.99.0
- [ ] Update FixIt theme and related theme components to the latest version
- [ ] Rename all camelCase config keys to snake_case
- [ ] Flatten `[params.page]` — move all keys and sub-sections up to `[params]`
- [ ] Consolidate `linkTo*` params into `[params.post_link]`
- [ ] Move `enablePWA` to `[params.app].pwa` and restructure `[params.app]`
- [ ] Move `externalIcon` to `[params.link].external_icon`
- [ ] Move `assets/css/_custom.scss` to `assets/scss/custom.scss`
- [ ] Replace `assets/css/_override.scss` with `[params.appearance]` config
- [ ] Move `assets/css/_variables.scss` to `assets/scss/_variables.scss`
- [ ] Move `assets/js/_custom.js` to `assets/js/custom.ts` or `assets/js/custom.js`
- [ ] Update front matter: `link_guard` to `link.guard`
- [ ] Update custom partials paths from `layouts/_partials/layouts/` to `layouts/_partials/base/`
- [ ] If using encryption: add `npx @hugo-fixit/encrypt` to your build pipeline
- [ ] Update `languageCode` to `locale` in language config

> [!tip]
> The deprecation detection system will guide you through most of these changes. Build your site and check the Hugo warnings for specific migration hints.

If you run into issues during the upgrade, feel free to ask for help in the [GitHub Discussions](https://github.com/hugo-fixit/FixIt/discussions).
