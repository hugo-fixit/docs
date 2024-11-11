---
title: Improve documentation
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

Help us to improve the documentation by identifying issues and suggesting changes.

<!--more-->

## Introduction

{{< gh-repo-card-container >}}
  {{< gh-repo-card repo="hugo-fixit/docs" >}}
{{< /gh-repo-card-container >}}

We welcome corrections and improvements to the documentation. Please note that the documentation resides in its own repository, separate from the project repository.

For corrections and improvements to the current documentation, please submit issues and pull requests to the [documentation repository][docs].

You can also:
<!-- markdownlint-disable-file reference-links-images -->
- Submit [showcase][showcase] by editing the `data/friends.yml` file
- Submit [theme components][components] by editing the `data/projects.lang.yml` file

## Prerequisites

To contribute to the documentation, you need to:

- Install [Hugo][hugo] with the extended version
- Install [Go][go]
- Install [Git][git]
- Install [Node.js][node] above version 18.0.0

## Guidelines

First, fork this repository by clicking the fork button.

Next, clone your forked repo.

```bash
git clone https://github.com/hugo-fixit/docs.git fixit-docs && cd fixit-docs
```

Then, install the dev dependencies.

```bash
npm install
```

And now you are ready to go!

Here are some useful commands.

```bash
# run a local debugging server with watch
npm run server
# run a local debugging server with watch in production environment
npm run server:production
# see Edit the theme section
npm run server:development
```

## Edit the theme

If you want to do docs-related theme changes, the simplest way is to have both `fixit-docs` and `FixIt` cloned as sibling directories, and then run:

```bash
HUGO_MODULE_WORKSPACE=hugo.work hugo server --ignoreVendorPaths "**"
```

Finally, create a new pull request at <https://github.com/hugo-fixit/docs/pulls> to submit your contribution 🎉

<!-- link reference definition -->
[docs]: https://github.com/hugo-fixit/docs
[hugo]: https://gohugo.io/installation/
[go]: https://go.dev/doc/install
[git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[node]: https://nodejs.org/en/download/
[showcase]: {{< relref path="/showcase" >}}
[components]: {{< relref "/ecosystem" >}}
