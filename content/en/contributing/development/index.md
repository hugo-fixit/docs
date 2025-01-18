---
title: Develop FixIt theme
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

Contribute to the development of FixIt.

<!--more-->

## Introduction

{{< gh-repo-card-container >}}
  {{< gh-repo-card repo="hugo-fixit/FixIt" >}}
{{< /gh-repo-card-container >}}

You can contribute to the FixIt theme project by:

- Answering questions on the [discussions][discussions] page
- Squashing [bugs][bugs]
- Developing [new features][features]

For a complete guide to contributing to FixIt, see the [Contribution Guide][contribution-guide].

## Prerequisites

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/hugo-fixit/FixIt?style=flat)](https://github.com/hugo-fixit/FixIt/releases)
[![Hugo](https://img.shields.io/badge/Hugo-%5E{{< param docs.minHugoVersion >}}-ff4088?style=flat&logo=hugo)](https://gohugo.io/)
[![License](https://img.shields.io/github/license/hugo-fixit/FixIt?style=flat)](https://github.com/hugo-fixit/FixIt/blob/main/LICENSE)
{style="font-size: 1.25em;"}

To contribute to the development of the FixIt theme, you need to:

- Install [Hugo][hugo] with the extended version
- Install [Go][go]
- Install [Git][git]
- Install [Node.js][node] above version 18.0.0

## References
<!-- markdownlint-disable-file reference-links-images -->
Head to the [References][references] page for more information.

<!-- link reference definition -->
[discussions]: https://github.com/orgs/hugo-fixit/discussions
[bugs]: https://github.com/hugo-fixit/FixIt/issues?q=is%3Aopen+is%3Aissue+label%3Abug
[features]: https://github.com/hugo-fixit/FixIt/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement
[contribution-guide]: https://github.com/hugo-fixit/FixIt/blob/main/CONTRIBUTING.md
[hugo]: https://gohugo.io/installation/
[go]: https://go.dev/doc/install
[git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[node]: https://nodejs.org/en/download/
[references]: {{< relref "/references" >}}
