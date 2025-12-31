---
title: Tips about algolia
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
description: Tips about using algolia in FixIt theme.
---

Find out how to use algolia in the FixIt theme and update index automatically.

<!--more-->

## Create algolia Application

1. Register [algolia](https://www.algolia.com/) account
2. Create an application in algolia, such as `fixit-blog`
3. Select the application `fixit-blog` => Click `Data Sources` => Click `Indices` => Click `Create Index`
4. Create an index, such as `index.en`
5. Click `Settings` => Click `API Keys` => Copy and save API Keys
    - `Application ID`
    - `Search-Only API Key`
    - `Admin API Key` (please do not disclose it)

`Application ID` and `Search-Only API Key` are used for search configuration, and `Admin API Key` is used to automatically update the index.

## Algolia in FixIt

Based on the API Keys obtained in the previous step, to configure the algolia search feature, you need to add the following content to the site configuration.

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
index = "index.en" # algolia index name
appID = "" # algolia Application ID
searchKey = "" # algolia Search-Only API Key
```

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

## Upload Index

Then, you need to upload `search.json` files to algolia to activate searching.
You could upload the `search.json` files by browsers but a CLI tool may be better.
[Algolia Atomic](https://github.com/chrisdmacrae/atomic-algolia) is a good choice.

{{< admonition tip "Is your site multilingual?" false >}}
To be compatible with Hugo multilingual mode,
you need to upload different `search.json` for each language to the different index of algolia, such as `zh-cn/search.json` or `fr/search.json`...
{{< /admonition >}}

### Preparation

Please make sure you have installed [Node.js](https://nodejs.org/en/).

### Algolia Atomic Installation

If there is no `package.json` file in your project, please create one first.

```bash
npm init
```

Then install Algolia Atomic.

```bash
npm install atomic-algolia
```

Add the following content to the `package.json` file.

```json
{
  "scripts": {
    "algolia": "atomic-algolia"
  }
}
```

### Usage

After you execute the `hugo` command to generate the site, you can use the following command to upload the `search.json` file to algolia to update the index.

```bash
ALGOLIA_APP_ID={{ YOUR_APP_ID }} ALGOLIA_ADMIN_KEY={{ YOUR_ADMIN_KEY }} ALGOLIA_INDEX_NAME={{ YOUR_INDEX_NAME }} ALGOLIA_INDEX_FILE={{ YOUR_FILE_PATH }} npm run algolia
```

- ALGOLIA_APP_ID: algolia Application ID
- ALGOLIA_ADMIN_KEY: algolia Admin API Key
- ALGOLIA_INDEX_NAME: algolia index name
- ALGOLIA_INDEX_FILE: local `search.json` file path

## Automation

One more thing, you can automate the process of uploading `search.json` to algolia by using [GitHub Actions](https://github.com/features/actions)

1. Add a `ALGOLIA_ADMIN_KEY` [secret](https://docs.github.com/en/actions/reference/encrypted-secrets) to your GitHub repository, the value is your algolia Admin API Key.
2. Add a `.github/workflows/algolia-atomic.yml` file to your GitHub repository, the content is as follows.

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

3. When you push your site to the `master` branch of the GitHub repository, GitHub Actions will automatically execute the `hugo` command to generate the site, and upload the `search.json` to algolia.

🎉 Now, everything is ready!
