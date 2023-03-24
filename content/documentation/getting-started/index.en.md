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
    src: featured-image.png
tags:
  - Installation
  - Basics
categories:
  - Documentation
lightgallery: true
reward: true
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

Learn to create a Hugo **FixIt** site in minutes.

<!--more-->

The following steps are here to help you initialize your new website. If you don’t know Hugo at all, we strongly suggest you learn more about it by following this [great documentation for beginners][getting-started]. Or if you already know Hugo, you can start directly with a template:

- [A quick-start template base on Git submodule][hugo-fixit-blog-git]
- [A quick-start template base on Hugo Modules][hugo-fixit-blog-go]

## Prerequisites

Thanks to the simplicity of Hugo, [Hugo][hugo] is the only dependency of this theme.

Just install latest version of [:(fa-regular fa-file-archive fa-fw): Hugo extended edition(>= 0.109.0)][hugo-installing] for your machine (**macOS**, **Linux**, **Windows**, **BSD**, and any machine that can run the Go compiler tool chain).

## Create a Site

Hugo provides a `new` command to create a new website:

```bash
hugo new site my_website
cd my_website
```

## Install the Theme {#install-theme}

{{< link "https://github.com/hugo-fixit/FixIt" "The repository of FixIt theme" "" true >}}

Initialize an empty Git repository in the current directory.

Clone the [FixIt][fixit] theme into the `themes` directory, adding it to your project as a [Git submodule][git-submodule].

```bash
git init
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
```

And later you can update the submodule in your site directory to the latest commit using this command:

```bash
git submodule update --remote --merge
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

Most of our users deploy their sites using a CI/CD workflow, where a push[^1] to their GitHub or GitLab repository triggers a build and deployment. Popular providers include [Vercel][vercel][^2], [Netlify][netlify][^3], [AWS Amplify][amplify], [CloudCannon][cloudcannon], [Cloudflare Pages][cf-pages], [GitHub Pages][gh-pages] and [GitLab Pages][gl-pages].

Learn more in the [hosting and deployment][hosting-and-deployment] section.

## Ask for help

All feedback is welcome! Head over to the [issues][issues] or [discussions][discussions] tracker.

[getting-started]: https://gohugo.io/getting-started/
[hugo-fixit-blog-git]: https://github.com/hugo-fixit/hugo-fixit-blog-git
[hugo-fixit-blog-go]: https://github.com/hugo-fixit/hugo-fixit-blog-go
[hugo]: https://gohugo.io/
[hugo-installing]: https://gohugo.io/getting-started/installing/
[fixit]: https://github.com/hugo-fixit/FixIt
[git-submodule]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[vercel]: https://vercel.com/
[netlify]: https://www.netlify.com/
[amplify]: https://aws.amazon.com/amplify/
[cloudcannon]: https://cloudcannon.com/
[cf-pages]: https://pages.cloudflare.com/
[gh-pages]: https://pages.github.com/
[gl-pages]: https://docs.gitlab.com/ee/user/project/pages/
[deploying-hugo-with-vercel]: https://vercel.com/guides/deploying-hugo-with-vercel
[hugo-on-netlify]: https://docs.netlify.com/integrations/frameworks/hugo/
[hosting-and-deployment]: https://gohugo.io/hosting-and-deployment/
[issues]: https://github.com/hugo-fixit/FixIt/issues
[discussions]: https://github.com/hugo-fixit/FixIt/discussions

[^1]: The Git repository contains the entire project directory, typically excluding the public directory because the site is built after the push.
[^2]: [How to Deploy a Hugo Site with Vercel][deploying-hugo-with-vercel]
[^3]: [Hugo on Netlify][hugo-on-netlify]