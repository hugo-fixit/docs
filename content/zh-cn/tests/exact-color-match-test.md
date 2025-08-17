---
title: 精确颜色匹配测试
date: 2025-08-17T17:20:00+08:00
tags:
  - Tests
  - Markdown
  - Content
  - Advanced
categories:
  - Tests
menu:
  main:
    name: 颜色匹配测试
    parent: tests
    params:
      icon: fa-solid fa-vial text-success
---

## 语法示例

- `` `#0969DA` ``
- `` `rgb(255, 0, 0)` ``
- `` `hsl(240, 100%, 50%)` ``

## 混合文本

GitHub 使用 `#0969DA` 作为主要链接颜色，背景是 `#ffffff`。

## ✅ 应该显示颜色预览的情况

纯颜色值（无前导/尾随字符）：

- `#0969DA`
- `#096`
- `#FF0000`
- `#00FF00`
- `rgb(255, 0, 0)`
- `rgb(0, 255, 0)`
- `hsl(240, 100%, 50%)`
- `hsl(120, 100%, 50%)`

## ❌ 应该显示为普通代码的情况

有前导或尾随字符的：

- `test #0969DA`
- `#0969DA test`
- `color: #0969DA`
- ` #0969DA` (前导空格)
- `#0969DA ` (尾随空格)
- `background-color: rgb(255, 0, 0)`
- `使用 hsl(240, 100%, 50%) 颜色`
