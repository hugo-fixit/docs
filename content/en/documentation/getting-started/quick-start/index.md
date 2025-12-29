---
weight: 1
title: Quick Start
date: 2024-03-01T15:18:19+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: Learn to create a Hugo FixIt site in minutes.
resources:
  - name: featured-image
    src: cover.webp
tags:
  - Installation
  - Basics
categories:
  - Documentation
collections:
  - Getting Started
lightgallery: true
toc:
  auto: false
  ordered: true
---

Learn to create a Hugo **FixIt** site in minutes.

<!--more-->

In this tutorial you will:

1. Create a site
2. Add content
3. Configure the site
4. Publish the site

## Prerequisites

{{< admonition tip >}}
If this is your first time using [Hugo](https://gohugo.io/), we strongly suggest you learn more about it by following this [great documentation for beginners](https://gohugo.io/getting-started/).
{{< /admonition >}}

Before you begin this tutorial you must:

1. [Install Hugo][hugo-installing] (extended edition, v{{< param docs.minHugoVersion >}} or later)
2. [Install Git][git-install]

You must also be comfortable working from the command line.

## Create a Site

> [!TIP]
> The following steps will guide you through creating a Hugo site step by step.\
> If you are already familiar with Hugo, you can skip these steps and use the [FixIt CLI][fixit-cli] to quickly create a site.

### Commands

Verify that you have installed Hugo v{{< param docs.minHugoVersion >}} or later.

```bash
hugo version
```

Run these commands to create a Hugo site with the [FixIt][fixit] theme. The next section provides an explanation of each command.

```bash
hugo new site my-blog
cd my-blog
git init
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
echo "theme = 'FixIt'" >> hugo.toml
hugo server
```

View your site at the URL displayed in your terminal. Press `Ctrl + C` to stop Hugo's development server.

### Explanation of commands

Create the [directory structure][directory-structure] for your project in the `my-blog` directory.

```bash
hugo new site my-blog
```

Change the current directory to the root of your project.

```bash
cd my-blog
```

Initialize an empty Git repository in the current directory.

```bash
git init
```

Clone the [FixIt][fixit] theme into the `themes` directory, adding it to your project as a [Git submodule][git-submodule].

```bash
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
```

Append a line to the site configuration file, indicating the current theme.

```bash
echo "theme = 'FixIt'" >> hugo.toml
```

Start Hugo's development server to view the site.

```bash
hugo server
```

Press `Ctrl + C` to stop Hugo's development server.

## Necessary Configuration

To fully utilize all the features of the FixIt theme, add the following content to the site configuration file.

```toml
[markup]
_merge = "shallow"

[outputs]
_merge = "shallow"

[taxonomies]
_merge = "shallow"
```

The above configuration inherits the `markup`, `outputs`, and `taxonomies` configurations of the FixIt theme.

> [!TIP]
> After reading this quick start guide, you can refer to the [configuration section][configuration] to learn about the complete theme configuration.

## Add Content

Add a new page to your site.

```bash
hugo new content posts/my-first-post.md
```

Hugo created the file in the `content/posts` directory. Open the file with your editor.

```markdown
---
title: My First Post
date: 2024-03-01T17:10:04+08:00
draft: true
# ...
---
```

Notice the `draft` value in the [front matter][front-matter] is `true`. By default, Hugo does not publish draft content when you build the site. Learn more about [draft, future, and expired content][draft-future-and-expired-content].

Add some [Markdown][commonmark] to the body of the post, but do not change the `draft` value.

```markdown
---
title: My First Post
date: 2024-03-01T17:10:04+08:00
draft: true
# ...
---

A blog (a truncation of "weblog") is an informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.
```

> [!TIP]
> Hugo's rendering engine conforms to the [CommonMark specification][commonmark-specification] for Markdown.\
> In addition, the FixIt theme supports some [extended Markdown syntax][extended-markdown-syntax].

Save the file, then start Hugo's development server to view the site. You can run either of the following commands to include draft content.

```bash
hugo server --buildDrafts
hugo server -D
hugo server -D --disableFastRender
```

Since the theme use `.Store` in Hugo to implement some features, it is highly recommended that you add `--disableFastRender` parameter.

![Simple preview](simple-preview.webp 'Simple preview')

View your site at the URL displayed in your terminal. Keep the development server running as you continue to add and change content.

When satisfied with your new content, set the front matter `draft` parameter to `false`.

> [!success]+ Congratulations! You have added your first post successfully :tada:
> You can now run `git add . && git commit -m "first commit"` to commit these changes.

## Publish the Site

In this step you will publish your site, but you will not _deploy_ it.

When you publish your site, Hugo creates the entire static site in the `public` directory in the root of your project. This includes the HTML files, and assets such as images, CSS files, and JavaScript files.

When you publish your site, you typically do not want to include [draft, future, or expired content][draft-future-and-expired-content]. The command is simple.

```bash
hugo
```

Most of our users deploy their sites using a CI/CD workflow, where a push[^1] to their GitHub or GitLab repository triggers a build and deployment. Popular providers include [Vercel][vercel][^2], [Netlify][netlify][^3], [AWS Amplify][amplify], [CloudCannon][cloudcannon], [Cloudflare Pages][cf-pages], [GitHub Pages][gh-pages] and [GitLab Pages][gl-pages].

To learn how to deploy your site, see the [hosting and deployment][hosting-and-deployment] section.

## Documentation Guide

We strongly recommend that you read the full documentation for the FixIt theme to better understand how to use it.

{{< fixit-docs-bookmark >}}

## Ask for help

if you encounter any problems or have any questions, please go to our [community][community] for help.

<!-- link reference definition -->
<!-- markdownlint-disable-file reference-links-images -->
[hugo-installing]: https://gohugo.io/installation/
[git-install]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[fixit]: https://github.com/hugo-fixit/FixIt
[git-submodule]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[directory-structure]: https://gohugo.io/getting-started/directory-structure/
[front-matter]: https://gohugo.io/content-management/front-matter/
[commonmark-specification]: https://spec.commonmark.org/
[extended-markdown-syntax]: {{< relref "/documentation/content-management/markdown-syntax/extended" >}}
[draft-future-and-expired-content]: https://gohugo.io/getting-started/usage/#draft-future-and-expired-content
[commonmark]: https://commonmark.org/help/
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
[fixit-cli]: {{< relref path="/documentation/installation#cli" >}}
[configuration]: {{< relref path="/documentation/getting-started/configuration" >}}
[community]: {{< relref path="/community" >}}

<!-- footnote reference definition -->
[^1]: The Git repository contains the entire project directory, typically excluding the public directory because the site is built after the push.
[^2]: [How to Deploy a Hugo Site with Vercel][deploying-hugo-with-vercel]
[^3]: [Hugo on Netlify][hugo-on-netlify]
