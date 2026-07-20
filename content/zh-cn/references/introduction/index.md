---
title: 参考总览
shortTitle: 总览
date: 2026-07-20T15:07:58+08:00
description: FixIt 主题开放 API 参考概览。
collections:
  - References
keywords:
  - API
  - Reference
---

本页面提供 FixIt 主题开放 API 参考的概览，涵盖 JavaScript 公共 API、SCSS 定制 API 和 Hugo 模板扩展点。

<!--more-->

## JavaScript API

FixIt 主题通过 `window.fixit` 暴露了类型化的公共 API，供自定义脚本使用。包括服务模块、事件总线和配置类型。

[查看 JavaScript API 参考](/references/javascript/)

## SCSS API

FixIt 主题提供了 SCSS 函数、mixin、变量和 CSS 自定义属性，用于高级样式定制。在 `assets/scss/custom.scss` 中使用。

[查看 SCSS API 参考](/references/scss/)

## 开放的自定义块

FixIt 主题开放了自定义模板块，你可以使用它们扩展主题功能而无需修改核心文件。

[查看开放的自定义块参考]({{< relref "blocks" >}})

## Hugo Partials

> 即将推出。

FixIt Hugo partials（`layouts/_partials/`）的自动生成文档，涵盖模板函数、变量和扩展点。
