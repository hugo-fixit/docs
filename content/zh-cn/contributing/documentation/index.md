---
title: 完善文档
date: 2024-04-25T20:30:44+08:00
categories:
  - Contributing
hiddenFromHomePage: true
related:
  enable: false
menu:
  main:
    parent: contributing
---

通过发现问题并提出更改来帮助我们改进文档。

<!--more-->

## 简介

{{< gh-repo-card-container >}}
  {{< gh-repo-card repo="hugo-fixit/docs" >}}
{{< /gh-repo-card-container >}}

我们欢迎对文档的更正和改进。请注意，文档存储在单独的存储库中，与项目存储库分开。

对于当前文档的更正和改进，请提交问题和拉取请求到 [文档存储库][docs]。

你也可以：
<!-- markdownlint-disable-file reference-links-images -->
- 通过编辑 `data/friends.yml` 文件提交 [案例展示][showcase]
- 通过编辑 `data/projects.lang.yml` 文件提交 [主题组件][components]

## 先决条件

给文档做贡献，你需要：

- 安装 [Hugo][hugo] 扩展版本
- 安装 [Go][go]
- 安装 [Git][git]
- 安装 [Node.js][node] 版本大于 18.0.0

## 指南

首先，点击 fork 按钮 fork 本仓库。

然后，克隆你 fork 的仓库。

```bash
git clone https://github.com/hugo-fixit/docs.git fixit-docs && cd fixit-docs
```

接着，安装开发依赖。

```bash
npm install
```

最后，你就可以开始了！

这里有一些有用的命令。

```bash
# 运行带有监听文件变化的本地调试服务器
npm run server
# 运行带有监听文件变化的本地调试服务器（生产环境）
npm run server:production
# 查看编辑主题部分
npm run server:development
```

## 编辑主题

如果你想做与文档相关的主题更改，最简单的方法是将 `fixit-docs` 和 `FixIt` 克隆为兄弟目录，然后运行：

```bash
HUGO_MODULE_WORKSPACE=hugo.work hugo server --ignoreVendorPaths "**"
```

最后，在 <https://github.com/hugo-fixit/docs/pulls> 创建一个新的 pull request 来提交你的贡献 🎉

<!-- link reference definition -->
[docs]: https://github.com/hugo-fixit/docs
[hugo]: https://gohugo.io/installation/
[go]: https://go.dev/doc/install
[git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[node]: https://nodejs.org/en/download/
[showcase]: {{< relref path="/showcase" >}}
[components]: {{< relref "/ecosystem" >}}
