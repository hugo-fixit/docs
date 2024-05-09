---
title: 开放的自定义块
date: 2024-05-09T10:28:58+08:00
type: posts
collections:
  - References
---

为了提升 FixIt 主题的可扩展性，我们提供了一些自定义块，你可以在你的项目中使用这些自定义块来实现更多的功能。

<!--more-->

## 入口文件

{{< version 0.3.7 >}}

FixIt 主题开放了统一的自定义模板入口文件 [`layouts/partials/custom.html`][custom-html]，你可以通过这个文件来实现自定义块或者更多的想法。

为了避免升级冲突并方便引用主题组件，我们强烈建议你将此文件从主题复制到你的项目中并重写。

```bash
cp themes/FixIt/layouts/partials/custom.html layouts/partials/custom.html
```

## 自定义块

你可以通过 `define` 来实现这些块。

| 块名称           | 描述           | 位置                                 |
| ---------------- | -------------- | ------------------------------------ |
| `custom-head`    | 头部自定义块   | `layouts/_default/baseof.html`       |
| `custom-profile` | 首页自定义块   | `layouts/partials/home/profile.html` |
| `custom-aside`   | 侧栏自定义块   | `layouts/posts/single.html`          |
| `custom-footer`  | 页脚自定义块   | `layouts/partials/footer.html`       |
| `custom-widgets` | 小部件自定义块 | `layouts/partials/widgets.html`      |
| `custom-assets`  | 资源自定义块   | `layouts/partials/assets.html`       |

## 如何使用

例如，FixIt 主题文档站点自定义了首页的 `custom-profile` 块。

首先，创建自定义模板入口文件：

```bash
cp themes/FixIt/layouts/partials/custom.html layouts/partials/custom.html
```

然后，在自定义模板中定义 `custom-profile` 块：

```go-html-template {title="layouts/partials/custom.html"}
<!-- ... -->

{{- define "custom-profile" -}}
  <div class="profile-custom">
    {{- if .Site.BuildDrafts -}}
      <a href="https://fixit.lruihao.cn" target="_blank" rel="external" title="Go to Production Environment">
        <img src="https://img.shields.io/github/deployments/hugo-fixit/docs/Production?style=flat&label=Production&logo=vercel" alt="Production environment">
      </a>
    {{- else -}}
      <a href="https://pre.fixit.lruihao.cn" target="_blank" rel="external" title="Go to Preview Environment">
        <img src="https://img.shields.io/github/deployments/hugo-fixit/docs/Preview?style=flat&label=Preview&logo=vercel" alt="Preview environment">
      </a>
    {{- end -}}
    <a href="https://demo.fixit.lruihao.cn" target="_blank" rel="external" title="FixIt Demo">
      <img src="https://img.shields.io/badge/Demo-orange" alt="FixIt Demo">
    </a>
  </div>
{{- end -}}

<!-- ... -->
```

<!-- link reference definition -->
[custom-html]: https://github.com/hugo-fixit/FixIt/blob/master/layouts/partials/custom.html
