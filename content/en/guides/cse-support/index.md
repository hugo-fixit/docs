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
    src: cover.webp
description: Guide to setup CSE in FixIt.
---

Find out how to setup Custom Search Engine in FixIt.

<!--more-->

## What is CSE?

**Custom Search Engine** (CSE) lets you create a search engine for your website, your blog, or a collection of websites. You can configure your search engine to search both web pages and images. You can fine-tune the ranking, customize the look and feel of the search results etc.

Common search engines have their own CSE services, such as:

- [Google Programmable Search Engine][google-cse]
- [Bing Custom Search][bing-cse]

## Google CSE

Google CSE, also known as Google Programmable Search Engine, this section mainly introduces how to use Google CSE in FixIt. You can go to [Programmable Search Engine Tutorial][google-cse-tutorial] page to view the complete tutorial.

1. Create a new search engine in [Google Programmable Search Engine][google-cse].
2. Enter your search engine name, for example: `FixIt`.
3. Select to search specific sites or pages, and enter your site URL, for example: `fixit.lruihao.cn`.
4. Click the `Create` button.
5. After a moment, the page will prompt you: "A new search engine has been created", then click the `Customize` button to enter the search engine customization page.
6. Click Appearance and Style => Layout => Select `Two-column`. (**This step is crucial, do not ignore it!**)
7. Finally, click Overview and copy your search engine ID.

In FixIt theme, configure Google CSE:

```toml
[params]
  [params.search]
    enable = true
    type = "cse"
  [params.cse]
    engine = "google"
    resultsPage = "/search/"
    [params.cse.google]
      # Configure your search engine ID
      cx = ""
```

Then manually create a search result display page:

```bash
hugo new content search/index.md
```

🎉 Congratulations! You have successfully configured Google CSE in the FixIt theme, restart, and try the search feature.

## Bing CSE

Unsupported.

<!-- link reference definition -->
[google-cse]: https://programmablesearchengine.google.com/
[bing-cse]: https://www.customsearch.ai/
[google-cse-tutorial]: https://programmablesearchengine.google.com/about/
