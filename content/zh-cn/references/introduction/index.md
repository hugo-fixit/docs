---
title: 参考总览
shortTitle: 总览
date: 2024-05-08T02:56:39+08:00
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

FixIt 主题通过 `window.fixit` 暴露了类型化的公共 API，供自定义脚本使用。包括服务模块、事件总线和配置类型。详见 [JavaScript API 参考](/references/javascript/)。

## SCSS API

FixIt 主题提供了 SCSS 函数、mixin、变量和 CSS 自定义属性，用于高级样式定制。在 `assets/scss/custom.scss` 中使用。详见 [SCSS API 参考](/references/scss/)。

## 开放的自定义块

FixIt 主题开放了自定义模板块，你可以使用它们扩展主题功能而无需修改核心文件。详见 [开放的自定义块参考]({{< relref "blocks" >}})。

## Hugo Partials

FixIt 主题 Hugo partials（`layouts/_partials/`）的参考文档，涵盖模板函数、插件和布局组件的参数、返回值和用法示例。详见 [Hugo Partials 参考]({{< relref "partials" >}})。
