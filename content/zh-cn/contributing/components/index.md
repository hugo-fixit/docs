---
title: 开发组件
date: 2024-04-25T20:30:45+08:00
categories:
  - Contributing
hiddenFromHomePage: true
related:
  enable: false
menu:
  main:
    parent: contributing
---

如果你已经构建了一个 Hugo 主题组件，并希望贡献给 Hugo FixIt 社区，请与我们分享。

<!--more-->

## 简介

> Hugo 提供了对主题组件的高级支持。

自从 Hugo `0.42` 版本以来，项目可以将主题配置为所需的任意数量的主题组件的组合：

```toml
theme = [
  'base-theme',
  'my-shortcodes',
  'my-components',
]
```

甚至可以嵌套这个设置，并且让主题组件本身在其自己的 `hugo.toml` 文件中包含主题组件（主题继承）。

上面的 `hugo.toml` 文件中的主题定义示例创建了一个具有 3 个主题组件的主题，优先顺序为从左到右。

对于任何给定的文件、数据条目等，Hugo 会首先查找项目中的内容，然后是 `base-theme`、`my-shortcodes`，最后是 `my-components`。

Hugo 使用两种不同的算法来合并文件系统，取决于文件类型：

- 对于 `i18n` 和 `data` 文件，Hugo 通过使用文件中的翻译 ID 和数据键进行深度合并。
- 对于 `static`、`layouts`（模板）和 `archetypes` 文件，这些是在文件级别上合并的。因此会选择最左边的文件。

上面的 `theme` 定义中使用的名称必须与 `/your-site/themes` 目录中的文件夹名称匹配，例如 `/your-site/themes/my-shortcodes`。

还要注意，作为主题的一部分的组件可以有其自己的配置文件，例如 `hugo.toml`。目前存在一些限制，即主题组件可以进行的配置：

- `params`（全局和每种语言）
- `menu`（全局和每种语言）
- `outputformats` 和 `mediatypes`

这里也适用相同的规则：具有相同 ID 的最左边的参数/菜单等将获胜。上述内容中还存在一些隐藏的和实验性的命名空间支持，Hugo 将努力在未来改进，但鼓励主题作者创建自己的命名空间，以避免命名冲突。

要了解 Hugo 主题组件以及如何使用它们，请访问 <https://gohugo.io/hugo-modules/theme-components/>。

## 案例展示

访问 [此页面][components] 浏览由 Hugo FixIt 社区创建的主题组件合集。

## 开发教程

> 前往 [如何开发一个 Hugo 主题组件][dev-component] 页面查看详情。

如果你对组件有了一定的认知，并打算开启一个新的组件开发之旅，不妨试试用下面这个 GitHub 模板仓库创建你的组件骨架。

{{< gh-repo-card-container >}}
  {{< gh-repo-card repo="hugo-fixit/component-skeleton" >}}
{{< /gh-repo-card-container >}}

## API 参考

前往 [API 参考][references] 页面获取更多信息。

<!-- link reference definition -->
<!-- markdownlint-disable-file reference-links-images -->
[components]: {{< relref "/ecosystem" >}}
[references]: {{< relref "/references" >}}
[dev-component]: {{< relref "/ecosystem/dev-component" >}}
