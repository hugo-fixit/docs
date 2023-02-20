---
weight: 1
title: Getting Started
date: 2023-02-20T20:14:22+08:00
type: posts
author:
  name: Lruihao
  link: https://lruihao.cn
description: Learn to create a Hugo FixIt site in minutes.
resources:
  - name: featured-image
    src: featured-image.jpg
tags:
  - installation
categories:
  - documentation
lightgallery: true
toc:
  auto: false
menu:
  main:
    name: Getting Started
    title: Learn to create a Hugo FixIt site in minutes.
    parent: documentation
    weight: 1
    params:
      icon: fa-brands fa-readme
---

The following steps are here to help you initialize your new website. If you don’t know Hugo at all, we strongly suggest you learn more about it by following this [great documentation for beginners](https://gohugo.io/getting-started/). Or if you already know Hugo, you can start directly with a template:

- [A quick-start template base on Git submodule](https://github.com/hugo-fixit/hugo-fixit-blog-git)
- [A quick-start template base on Hugo Modules](https://github.com/hugo-fixit/hugo-fixit-blog-go)

<!--more-->

## Prerequisites

Thanks to the simplicity of Hugo, [Hugo](https://gohugo.io/) is the only dependency of this theme.

Just install latest version of [:(fa-regular fa-file-archive fa-fw): Hugo extended edition(>= 0.89.0)](https://gohugo.io/getting-started/installing/) for your machine (**macOS**, **Linux**, **Windows**, **BSD**, and any machine that can run the Go compiler tool chain).

## Create a Site

Hugo provides a `new` command to create a new website:

```bash
hugo new site my_website
cd my_website
```

## Install the Theme {#install-theme}

{{< link "https://github.com/hugo-fixit/FixIt" "The repository of FixIt theme" "" true >}}

Initialize an empty Git repository in the current directory.

Clone the [FixIt](https://github.com/hugo-fixit/FixIt) theme into the `themes` directory, adding it to your project as a [Git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

```bash
git init
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
```

## Basic Configuration {#basic-configuration}

The following is a basic configuration for the FixIt theme:

```toml
title = "My Hugo FixIt Site"
baseURL = "http://example.org/"
# determines default content language ["en", "zh-cn", "fr", "pl", ...]
defaultContentLanguage = "en"
# language code ["en", "zh-CN", "fr", "pl", ...]
languageCode = "en"

# Change the default theme to be use when building the site with Hugo
theme = "FixIt"

[params]
  # FixIt theme version
  version = "0.2.X"

[menu]
  [[menu.main]]
    identifier = "posts"
    name = "Posts"
    url = "/posts/"
    weight = 1
  [[menu.main]]
    identifier = "categories"
    name = "Categories"
    url = "/categories/"
    title = ""
    weight = 2
  [[menu.main]]
    identifier = "tags"
    name = "Tags"
    url = "/tags/"
    weight = 3

# Markup related configuration in Hugo
[markup]
  # Syntax Highlighting (https://gohugo.io/content-management/syntax-highlighting)
  [markup.highlight]
    # false is a necessary configuration (https://github.com/hugo-fixit/FixIt/issues/43)
    noClasses = false
```

## Add Content

Here is the way to create your first post:

```bash
hugo new posts/first_post.md
```

Hugo created the post file in the `content/posts` directory.

Open it with your editor and feel free to edit it by adding some sample content and replacing the title value in the beginning of the file.

```markdown
---
title: My First Post
date: 2023-02-20T20:14:22+08:00
draft: true
---

A blog (a truncation of "weblog") is an informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.
```

{{< admonition >}}
By default all posts and pages are created as a draft. If you want to render these pages, remove the property `draft: true` from the metadata, set the property `draft: false` or add `-D`/`--buildDrafts` parameter to `hugo` command in the following steps.
{{< /admonition >}}

## Launching the Site

Save the file, then launch the website locally by using the following command:

```bash
hugo server
```

{{< admonition tip >}}
When you run `hugo server`, when the contents of the files change, the page automatically refreshes with the changes.
{{< /admonition >}}

{{< admonition >}}
Since the theme use `.Scratch` in Hugo to implement some features,
it is highly recommended that you add `--disableFastRender` parameter to `hugo server` command for the live preview of the page you are editing.

```bash
hugo server --disableFastRender
```

{{< /admonition >}}

Go to `http://localhost:1313`.

![Basic configuration preview](basic-configuration-preview.png 'Basic configuration preview')

## Build the Site

When your site is ready to deploy, run the following command:

```bash
hugo
```

A `public` folder will be generated, containing all static content and assets for your website. It can now be deployed on any web server.

{{< admonition tip "Deploy" >}}
The website can be automatically published and hosted with [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Alternatively, you can use [AWS Amplify](https://gohugo.io/hosting-and-deployment/hosting-on-aws-amplify/), [Github pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/), [Render](https://gohugo.io/hosting-and-deployment/hosting-on-render/) and [more](https://gohugo.io/hosting-and-deployment/) ...

Related guides:

- [How to Deploy a Hugo Site with Vercel](https://vercel.com/guides/deploying-hugo-with-vercel)
- [Hugo on Netlify](https://docs.netlify.com/integrations/frameworks/hugo/)
{{< /admonition >}}

## Ask for help

All feedback is welcome! Head over to the [issues](https://github.com/hugo-fixit/FixIt/issues) or [discussions](https://github.com/hugo-fixit/FixIt/discussions) tracker.
