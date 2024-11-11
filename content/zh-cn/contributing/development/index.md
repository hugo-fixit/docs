---
title: 开发 FixIt 主题
date: 2024-04-25T20:30:43+08:00
categories:
  - Contributing
hiddenFromHomePage: true
related:
  enable: false
menu:
  main:
    parent: contributing
---

为 FixIt 的开发做贡献。

<!--more-->

## 简介

{{< gh-repo-card-container >}}
  {{< gh-repo-card repo="hugo-fixit/FixIt" >}}
{{< /gh-repo-card-container >}}

你可以通过以下方式为 FixIt 主题项目做出贡献：

- 在 [讨论][discussions] 页面上回答问题
- 消灭 [bugs][bugs]
- 开发 [新功能][features]

有关如何为 FixIt 做出贡献的完整指南，请参阅 [贡献指南][contribution-guide]。

## 先决条件

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/hugo-fixit/FixIt?style=flat)](https://github.com/hugo-fixit/FixIt/releases)
[![Hugo](https://img.shields.io/badge/Hugo-%5E{{< param docs.minHugoVersion >}}-ff4088?style=flat&logo=hugo)](https://gohugo.io/)
[![License](https://img.shields.io/github/license/hugo-fixit/FixIt?style=flat)](https://github.com/hugo-fixit/FixIt/blob/master/LICENSE)
{style="font-size: 1.25em;"}

给 FixIt 主题的开发做出贡献，你需要：

- 安装 [Hugo][hugo] 的扩展版本
- 安装 [Go][go]
- 安装 [Git][git]
- 安装 [Node.js][node] 版本大于 18.0.0

## API 参考
<!-- markdownlint-disable-file reference-links-images -->
前往 [API 参考][references] 页面获取更多信息。

<!-- link reference definition -->
[discussions]: https://github.com/orgs/hugo-fixit/discussions
[bugs]: https://github.com/hugo-fixit/FixIt/issues?q=is%3Aopen+is%3Aissue+label%3Abug
[features]: https://github.com/hugo-fixit/FixIt/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement
[contribution-guide]: https://github.com/hugo-fixit/FixIt/blob/master/CONTRIBUTING.md
[hugo]: https://gohugo.io/installation/
[go]: https://go.dev/doc/install
[git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[node]: https://nodejs.org/en/download/
[references]: {{< relref "/references" >}}
