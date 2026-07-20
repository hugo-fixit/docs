---
title: PWA 支持
date: 2022-01-26T11:10:56+08:00
reward: false
description: 在 FixIt 中设置 PWA 的指南。
tags:
  - PWA
  - Advanced
categories:
  - Guides
  - Documentation
resources:
  - name: featured-image
    src: cover.webp
toc:
  auto: false
lightgallery: true
---

了解如何在 FixIt 主题中配置渐进式网络应用程序 (PWA)。

<!--more-->

## 什么是 PWA？

[**PWA**（Progressive Web Apps，渐进式 Web 应用）][pwas] 运用现代的 Web API 以及传统的渐进式增强策略来创建跨平台 Web 应用程序。这些应用无处不在、功能丰富，使其具有与原生应用相同的用户体验优势。

## 为什么要配置 PWA？

你并不需要将你的站点配置为一个 PWA. 传统的网站足以满足你想要分享的所有内容。但是，PWA 带来了一些可能有用的额外好处。

1. 在用户安装 PWA 后，页面将由 service worker 自动缓存，这使得从第二次访问开始页面将被快速加载。
2. 用户始终可以在离线时访问缓存的页面。

这些功能可能对某些网站（例如此文档站点）很有用，但是将个人博客配置为 PWA 就没有多少意义。当然一切都取决于你的选择，无论如何 FixIt 主题都将为你提供开启此功能的选项。

## 在 FixIt 中配置 PWA {#setup-in-fixit}

### 配置 manifest {#site.webmanifest}

FixIt 通过 `manifest` 输出格式自动生成 Web App Manifest。你可以在 `hugo.toml` 的 `[params.app]` 下配置应用信息：

```toml
[params.app]
pwa = true
name = "你的应用名称"
short_name = "应用简称"

# Web App Manifest 图标
[[params.app.icons]]
src = "/apple-touch-icon.png"
sizes = "180x180"
type = "image/png"
purpose = "any maskable"

[[params.app.icons]]
src = "/android-chrome-192x192.png"
sizes = "192x192"
type = "image/png"

[[params.app.icons]]
src = "/android-chrome-512x512.png"
sizes = "512x512"
type = "image/png"
```

如果你希望手动控制，也可以在 `/static/` 文件夹下创建 `site.webmanifest` 文件。

### 配置输出格式 {#output-formats}

你需要添加 `"offline"` 和 `"manifest"` 到 `outputs.home` 配置中：

```toml
[outputs]
home = [
  # others
  "offline",
  "manifest"
]
```

### 开启 PWA 选项 {#enable-pwa}

前往 `hugo.toml`, 添加/修改 `[params.app]` 配置项下 `pwa` 选项的值为 `true`。

```toml
[params.app]
pwa = true
```

## 安装并使用你的 PWA

如果一切顺利，现在当你访问你的网站时，浏览器将显示一个安装按钮，单击“安装”后，你的网站将被安装为一个本地的原生应用程序。

![Installed PWA](/guides/pwa-support/install-pwa.jpg "Installed PWA")

大功告成！你已成功将你的静态网站配置为了一个 PWA 🎉

如果你在配置过程中有任何问题，你可以通过浏览器调试工具中的 `Console` 与 `Application` 面板来进行调试。你也可以用 [PWA Builder][pwabuilder] 来检查你的网站以获得更多信息。你可以创建一个 [discussion][discussions] 来获得社区帮助或者提交 [issue][issues] 来报告你遇到的任何 bug。

[pwas]: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
[pwabuilder]: https://www.pwabuilder.com/
[discussions]: https://github.com/hugo-fixit/FixIt/discussions
[issues]: https://github.com/hugo-fixit/FixIt/issues
