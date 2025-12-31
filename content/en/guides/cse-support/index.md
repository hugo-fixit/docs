---
title: CSE Support
date: 2024-11-28T15:01:29+08:00
categories:
  - Guides
  - Documentation
tags:
  - CSE
  - Advanced
resources:
  - name: featured-image
    src: featured-image.webp
description: Guide to setup CSE in FixIt.
---

Find out how to setup Custom Search Engine in FixIt.

<!--more-->

## What is CSE?

**Custom Search Engine** (CSE) lets you create a search engine for your website, your blog, or a collection of websites. You can configure your search engine to search both web pages and images. You can fine-tune the ranking, customize the look and feel of the search results etc.

Common search engines have their own CSE services, such as:

- [Google Programmable Search Engine][google-cse]
- [Bing Custom Search][bing-cse]

## Configure CSE in FixIt

{{< version 0.3.16 >}}

First, manually create a search result display page:

```bash
hugo new content search/index.md
```

To configure Google or Bing CSE in the FixIt theme:

```toml
[params]

[params.search]
enable = true
type = "cse"

[params.cse]
# Search engine: ["google", "bing"]
engine = "google"
resultsPage = "/search/"

[params.cse.google]
cx = ""

[params.cse.bing]
# Unsupported yet
```

## Google CSE

Google CSE, also known as Google Programmable Search Engine, this section mainly introduces how to use Google CSE in FixIt. You can go to [Programmable Search Engine Tutorial][google-cse-tutorial] page to view the complete tutorial.

Follow the steps below to create a Google search engine:

```timeline {animation=true}
events:
  - content: "Create a new search engine in [Google Programmable Search Engine](https://programmablesearchengine.google.com/)."
  - content: "Enter your search engine name, for example: `FixIt`."
  - content: "Select to search specific sites or pages, and enter your site URL. e.g. `fixit.lruihao.cn`."
  - content: "Click the `Create` button."
  - content: 'After a moment, the page will prompt you: "A new search engine has been created", then click the `Customize` button to enter the search engine customization page.'
  - content: "**Click Appearance and Style => Layout => Select `Two-column`**. (==This step is crucial, do not ignore it!==)"
    type: warning
  - content: "Finally, click Overview and copy your search engine ID."
    type: info
  - content: "Paste the search engine ID into the `cx` field in the configuration file."
    type: primary
  - content: "🎉 Congratulations! Restart the Hugo server and try the search feature."
    type: success
```

## Bing CSE

> [!WARNING]
> Bing CSE is not supported in FixIt yet.

<!--
Bing Custom Search is similar to Google CSE, but the configuration is different. You can go to the [Bing Custom Search][bing-cse] page to view the complete tutorial.

Follow these steps to create a new custom search instance:
-->

<!-- link reference definition -->
[google-cse]: https://programmablesearchengine.google.com/
[bing-cse]: https://www.customsearch.ai/
[google-cse-tutorial]: https://programmablesearchengine.google.com/about/
