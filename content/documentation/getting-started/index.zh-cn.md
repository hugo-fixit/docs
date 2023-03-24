---
weight: 1
title: 快速上手
date: 2023-02-20T20:14:22+08:00
type: posts
author:
  name: Lruihao
  link: https://lruihao.cn
description: 学习在几分钟内创建一个 Hugo FixIt 站点。
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
    name: 快速上手
    title: 学习在几分钟内创建一个 Hugo FixIt 站点。
    parent: documentation
    weight: 1
    params:
      icon: fa-brands fa-readme
---

学习在几分钟内创建一个 Hugo **FixIt** 站点。

<!--more-->

以下步骤可帮助您初始化新网站。如果您根本不了解 Hugo，我们强烈建议您通过阅读此 [快速入门文档](https://gohugo.io/getting-started/) 进一步了解它。或者如果你已经了解 Hugo，你也可以从一个模板直接开始：

- [基于 Git 子模块的快速入门模板](https://github.com/hugo-fixit/hugo-fixit-blog-git)
- [基于 Hugo 模块的快速入门模板](https://github.com/hugo-fixit/hugo-fixit-blog-go)

## 准备

由于 Hugo 提供的便利性，[Hugo](https://gohugo.io/) 本身是这个主题唯一的依赖。

只需为您的机器（**macOS**、**Linux**、**Windows**、**BSD**，以及任何可以运行 Go 编译器工具链的机器）安装最新版本的 [:(fa-regular fa-file-archive fa-fw): Hugo 扩展版 (>=0.109.0)](https://gohugo.io/getting-started/installing/) 即可。

## 创建网站

Hugo 提供了一个 `new` 命令来创建一个新的网站：

```bash
hugo new site my_website
cd my_website
```

## 安装主题 {#install-theme}

{{< link "https://github.com/hugo-fixit/FixIt" "FixIt 主题的仓库" "" true >}}

在当前目录中初始化一个空的 Git 存储库。

将 [FixIt](https://github.com/hugo-fixit/FixIt) 主题克隆到 `themes` 目录中，将其作为 [Git 子模块](https://git-scm.com/book/en/v2/Git-Tools-Submodules) 添加到您的项目中。

```bash
git init
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
```

之后，你可以在站点目录通过这条命令来将主题更新至最新版本：

```bash
git submodule update --remote --merge
```

## 基础配置 {#basic-configuration}

以下是 FixIt 主题的基本配置：

```toml
title = "我的 Hugo FixIt 网站"
baseURL = "http://example.org/"
# 设置默认的语言 ["en", "zh-cn", "fr", "pl", ...]
defaultContentLanguage = "zh-cn"
# 网站语言, 仅在这里 CN 大写 ["en", "zh-CN", "fr", "pl", ...]
languageCode = "zh-CN"
# 是否包括中日韩文字
hasCJKLanguage = true

# 更改使用 Hugo 构建网站时使用的默认主题
theme = "FixIt"

[params]
  # FixIt 主题版本
  version = "0.2.X"

[menu]
  [[menu.main]]
    identifier = "posts"
    name = "文章"
    url = "/posts/"
    weight = 1
  [[menu.main]]
    identifier = "categories"
    name = "分类"
    url = "/categories/"
    title = ""
    weight = 2
  [[menu.main]]
    identifier = "tags"
    name = "标签"
    url = "/tags/"
    weight = 3

# Hugo 解析文档的配置
[markup]
  # 语法高亮设置 (https://gohugo.io/content-management/syntax-highlighting)
  [markup.highlight]
    # false 是必要的设置 (https://github.com/hugo-fixit/FixIt/issues/43)
    noClasses = false
```

## 添加内容

以下是创建第一篇文章的方法：

```bash
hugo new posts/first_post.md
```

Hugo 在 `content/posts` 目录中创建了文章文件。

使用您的编辑器打开它，通过添加一些示例内容并替换文件开头的标题，你可以随意编辑文章。

```markdown
---
title: 我的第一篇文章
date: 2023-02-20T20:14:22+08:00
draft: true
---

博客（英语：Blog）是一种在线日记型式的个人网站，借由张帖子章、图片或视频来记录生活、抒发情感或分享信息。博客上的文章通常根据张贴时间，以倒序方式由新到旧排列。
```

{{< admonition >}}
默认情况下，所有文章和页面均作为草稿创建。如果想要渲染这些页面，请从元数据中删除属性 `draft: true`, 设置属性 `draft: false` 或者在以下步骤中为 `hugo` 命令添加 `-D`/`--buildDrafts` 参数。
{{< /admonition >}}

## 启动网站

保存文件后，使用以下命令在本地启动网站：

```bash
hugo server
```

{{< admonition tip >}}
当你运行 `hugo server` 时，当文件内容更改时，页面会随着更改自动刷新。
{{< /admonition >}}

{{< admonition >}}
由于本主题使用了 Hugo 中的 `.Scratch` 来实现一些特性，
非常建议你为 `hugo server` 命令添加 `--disableFastRender` 参数来实时预览你正在编辑的文章页面。

```bash
hugo server --disableFastRender
```
{{< /admonition >}}

去查看 `http://localhost:1313`。

![完整配置下的预览](basic-configuration-preview.zh-cn.png '完整配置下的预览')

## 构建网站

当你准备好部署你的网站时，运行以下命令：

```bash
hugo
```

会生成一个 `public` 目录，其中包含你网站的所有静态内容和资源。现在可以将其部署在任何 Web 服务器上。

我们的大多数用户使用 CI/CD 工作流程部署他们的网站，通过推送[^1]到他们的 GitHub 或 GitLab 存储库会触发构建和部署。流行的提供商包括 [Vercel][vercel][^2]、[Netlify][netlify][^3]、[AWS Amplify][amplify]、[CloudCannon][cloudcannon]、[Cloudflare Pages][cf-pages]、 [GitHub pages][gh-pages] 和 [GitLab pages][gl-pages]。

在 [托管和部署][hosting-and-deployment] 部分了解更多信息。

## 寻求帮助

所有的反馈都是欢迎的！详见 [议题][issues]、[讨论][discussions] 或者加入 QQ 群：`814031017`。

[getting-started]: https://gohugo.io/getting-started/
[hugo-fixit-blog-git]: https://github.com/hugo-fixit/hugo-fixit-blog-git
[hugo-fixit-blog-go]: https://github.com/hugo-fixit/hugo-fixit-blog-go
[hugo]: https://gohugo.io/
[hugo-installing]: https://gohugo.io/getting-started/installing/
[fixit]: https://github.com/hugo-fixit/FixIt
[git-submodule]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[vercel]: https://vercel.com/
[netlify]: https://www.netlify.com/
[amplify]: https://aws.amazon.com/cn/amplify/
[cloudcannon]: https://cloudcannon.com/
[cf-pages]: https://pages.cloudflare.com/
[gh-pages]: https://pages.github.com/
[gl-pages]: https://docs.gitlab.com/ee/user/project/pages/
[deploying-hugo-with-vercel]: https://vercel.com/guides/deploying-hugo-with-vercel
[hugo-on-netlify]: https://docs.netlify.com/integrations/frameworks/hugo/
[hosting-and-deployment]: https://gohugo.io/hosting-and-deployment/
[issues]: https://github.com/hugo-fixit/FixIt/issues
[discussions]: https://github.com/hugo-fixit/FixIt/discussions

[^1]: Git 存储库包含整个项目目录，通常不包括 public 目录，因为站点是在推送后构建的。
[^2]: [如何使用 Vercel 部署 Hugo 站点][deploying-hugo-with-vercel]
[^3]: [在 Netlify 上部署 Hugo][hugo-on-netlify]
