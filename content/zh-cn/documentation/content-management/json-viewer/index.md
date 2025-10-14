---
title: 代码块扩展语法 - JSON
linkTitle: JSON 查看器支持
date: 2025-10-14T06:49:42+08:00
description: 本文档将向你展示如何在 FixIt 主题中使用代码块扩展语法创建 JSON 查看器。
categories:
  - Documentation
collections:
  - Content Management
tags:
  - JSON
  - Markdown
  - Content
resources:
  - name: featured-image
    src: featured-image.webp
---

<!--more-->

{{< version 0.4.0 >}}

**FixIt** 主题使用代码块扩展语法提供了一个交互式 JSON 查看器。

## 概述

JSON 查看器基于 [json-viewer-element](https://github.com/Lruihao/json-viewer-element) 项目，为你的文章提供了一种优雅的方式来展示和交互 JSON 数据。

## 使用方法

要创建 JSON 查看器，使用带有 `json` 语言标识符的代码围栏：

````markdown
```json
{
  "name": "FixIt",
  "version": "0.4.0",
  "description": "一个简洁、优雅且高效的 Hugo 博客主题",
  "keywords": ["Hugo", "主题", "FixIt"]
}
```
````

渲染输出将是一个具有可展开节点的交互式 JSON 查看器。

```json
{
  "name": "FixIt",
  "version": "0.4.0",
  "description": "一个简洁、优雅且高效的 Hugo 博客主题",
  "keywords": ["Hugo", "主题", "FixIt"]
}
```

## 功能特性

JSON 查看器提供以下功能：

- **展开/折叠**：点击节点以展开或折叠它们
- **语法高亮**：为键、值、字符串、数字等使用不同的颜色
- **复制支持**：一键复制 JSON 内容（如果启用）
- **排序**：按字母顺序排序对象键（如果启用）
- **边框显示**：在带边框的容器中显示 JSON（如果启用）

## 配置

你可以在站点配置文件中全局配置 JSON 查看器，或在单个页面中配置，也可以针对单个实例进行配置。

### 全局配置

在 `hugo.toml` 中添加以下内容（[配置选项][json-viewer-config]）：

```toml
[params]

[params.jsonViewer]
enable = true
expandDepth = 1
copyable = true
sort = false
boxed = true
```

### 页面级配置

你可以使用 front matter 覆盖单个页面的全局设置：

```yaml
---
title: 我的 JSON 数据
jsonViewer:
  expandDepth: 2
  sort: true
---
```

### 实例级配置

你还可以通过在代码围栏中直接添加选项来自定义单个实例的 JSON 查看器：

````markdown
```json {expandDepth=2, copyable=false, sort=true, boxed=false}
{
  "name": "FixIt",
  "version": "0.4.0",
  "description": "一个简洁、优雅且高效的 Hugo 博客主题",
  "keywords": ["Hugo", "主题", "FixIt"]
}
```
````

上述代码围栏将渲染为：

```json {expandDepth=2, copyable=false, sort=true, boxed=false}
{
  "name": "FixIt",
  "version": "0.4.0",
  "description": "一个简洁、优雅且高效的 Hugo 博客主题",
  "keywords": ["Hugo", "主题", "FixIt"]
}
```

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 -->
[json-viewer-config]: {{< relref path="/documentation/getting-started/configuration#jsonviewer" >}}
