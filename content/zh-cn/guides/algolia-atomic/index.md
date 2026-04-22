---
title: 关于 algolia 的使用技巧
date: 2023-12-01T10:20:16+08:00
categories:
  - Guides
  - Documentation
tags:
  - algolia
  - Advanced
resources:
  - name: featured-image
    src: cover.webp
description: 在 FixIt 主题中使用 algolia 的技巧。
---

了解如何在 FixIt 主题中使用 algolia，并自动化更新索引。

<!--more-->

## 创建 algolia 应用

1. 注册 [algolia](https://www.algolia.com/) 账号
2. 在 algolia 中创建一个应用（Application），例如 `fixit-blog`
3. 选中应用 `fixit-blog` => 点击 `Data Sources` => 点击 `Indices` => 点击 `Create Index`
4. 创建一个索引，例如 `index.zh-cn`
5. 点击 `Settings` => 点击 `API Keys` => 复制保存 API Keys
   - `Application ID`
   - `Search-Only API Key`
   - `Admin API Key` (请勿公开)

`Application ID` 和 `Search-Only API Key` 用于搜索配置，`Admin API Key` 用于自动化更新索引。

## FixIt 中的搜索配置

根据上一步获取到的 API Keys，配置 algolia 的搜索功能，你需要在站点配置中添加以下内容。

```toml
[params.search]
enable = true
type = "algolia"
contentLength = 4000
placeholder = ""
maxResultLength = 10
snippetLength = 30
highlightTag = "em"
absoluteURL = false

[params.search.algolia]
index = "index.zh-cn" # algolia 索引名称
appID = "" # algolia Application ID
searchKey = "" # algolia Search-Only API Key
```

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

## 上传索引

然后你需要上传 `search.json` 到 algolia 来激活搜索功能。你可以使用浏览器来上传 `search.json` 文件，但是一个自动化的脚本可能效果更好，[Algolia Atomic](https://github.com/chrisdmacrae/atomic-algolia) 是一个不错的选择。

> [!tip]- 你的站点是多语言模式？
> 为了兼容 Hugo 的多语言模式，你需要上传不同语言的 `search.json` 文件到对应的 algolia index, 例如 `zh-cn/search.json` 或 `fr/search.json`……

### 准备

请确保你已经安装了 [Node.js](https://nodejs.org/en/)。

### 安装 Algolia Atomic

如果你的项目中没有 `package.json` 文件，请先创建一个。

```bash
npm init
```

然后安装 Algolia Atomic。

```bash
npm install atomic-algolia
```

在 `package.json` 文件中添加以下内容。

```json
{
  "scripts": {
    "algolia": "atomic-algolia"
  }
}
```

### 使用

当你执行 `hugo` 命令生成站点后，你可以使用以下命令上传 `search.json` 文件到 algolia 来更新索引。

```bash
ALGOLIA_APP_ID={{ YOUR_APP_ID }} ALGOLIA_ADMIN_KEY={{ YOUR_ADMIN_KEY }} ALGOLIA_INDEX_NAME={{ YOUR_INDEX_NAME }} ALGOLIA_INDEX_FILE={{ YOUR_FILE_PATH }} npm run algolia
```

- ALGOLIA_APP_ID：algolia Application ID
- ALGOLIA_ADMIN_KEY：algolia Admin API Key
- ALGOLIA_INDEX_NAME：algolia 索引名称
- ALGOLIA_INDEX_FILE：本地 `search.json` 文件路径

## 自动化更新索引

One more thing，你可以使用 [GitHub Actions](https://github.com/features/actions) 自动执行将 `search.json` 上传到 algolia 的过程。

1. 在你的 GitHub 仓库中添加一个 `ALGOLIA_ADMIN_KEY` 的 [secret](https://docs.github.com/en/actions/reference/encrypted-secrets)，值为 algolia Admin API Key。
2. 在你的 GitHub 仓库中添加一个 `.github/workflows/algolia-atomic.yml` 文件，内容如下。

    ```yaml {title="algolia-atomic.yml"}
    name: Update Algolia Search Index

    on:
      push:
        branches:
          - master
        paths:
          - content
      workflow_dispatch:

    jobs:
      algolia-atomic:
        runs-on: ubuntu-latest
        steps:
          - name: Check out repository code
            uses: actions/checkout@v4
            with:
              submodules: recursive # Fetch Hugo themes (true OR recursive)
              fetch-depth: 0 # Fetch all history for .GitInfo and .Lastmod

          - name: Setup Hugo
            uses: peaceiris/actions-hugo@v2
            with:
              # use the environment variable HUGO_VERSION as the hugo version, if not set, use `latest`.
              hugo-version: ${{ vars.HUGO_VERSION || 'latest' }}
              extended: true

          - name: Build
            run: |
              npm install
              npm run build

          - name: Update Algolia Index (en)
            env:
              ALGOLIA_APP_ID: YKOxxxxLUY # algolia Application ID
              ALGOLIA_ADMIN_KEY: ${{ secrets.ALGOLIA_ADMIN_KEY }} # algolia Admin API Key
              ALGOLIA_INDEX_NAME: index.en # algolia index name
              ALGOLIA_INDEX_FILE: ./public/search.json # local search.json file path
            run: |
              npm run algolia

          - name: Update Algolia Index (zh-cn)
            env:
              ALGOLIA_APP_ID: YKOxxxxLUY
              ALGOLIA_ADMIN_KEY: ${{ secrets.ALGOLIA_ADMIN_KEY }}
              ALGOLIA_INDEX_NAME: index.zh-cn
              ALGOLIA_INDEX_FILE: ./public/zh-cn/search.json
            run: |
              npm run algolia
    ```

3. 当你将你的站点推送到 GitHub 仓库的 `master` 分支时，GitHub Actions 将自动执行 `hugo` 命令生成站点，并将 `search.json` 上传到 algolia。

🎉 现在，一切准备就绪了！
