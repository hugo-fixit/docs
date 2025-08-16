---
title: 内容加密解密测试
date: 2022-05-28T00:24:22+08:00
description: 内容加密解密测试
password: 1212
message: 密码是 1212
lightgallery: true
math: true
tags:
  - Tests
  - Encryption
categories:
  - Tests
menu:
  main:
    name: 加解密测试
    title: 内容加密解密测试
    parent: tests
    params:
      icon: fa-solid fa-vial text-success
---

我很害羞，所以我藏起来了哈哈。

<!--more-->

## emoji

咖啡 ☕

去露营啦！:tent: 很快就回来。

真开心！:joy:

## 盘古之白（中文排版）

```
當你凝視著bug，bug也凝視著你

不能信任那些Terminal或Editor用白底的人
```
<!-- autocorrect-disable -->
當你凝視著bug，bug也凝視著你

不能信任那些Terminal或Editor用白底的人

## admonition

{{< admonition info >}}
admonition 测试
{{< /admonition >}}

## images

![Hugo Theme FixIt](/images/apple-devices-preview.webp "A Clean, Elegant but Advanced Hugo Theme")

## table

| A   | B   |
| --- | --- |
| 1   | 2   |

## 公式

行内公式：

$c = \pm\sqrt{a^2 + b^2}$ 和 \(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\)

公式块：

$$
\begin{equation*}
  \rho \frac{\mathrm{D} \mathbf{v}}{\mathrm{D} t}=\nabla \cdot \mathbb{P}+\rho \mathbf{f}
\end{equation*}
$$

## mermaid

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## echarts

{{< echarts >}}
{
  "title": {
    "text": "Summary Line Chart",
    "top": "2%",
    "left": "center"
  },
  "tooltip": {
    "trigger": "axis"
  },
  "legend": {
    "data": ["Email Marketing", "Affiliate Advertising", "Video Advertising", "Direct View", "Search Engine"],
    "top": "10%"
  },
  "grid": {
    "left": "5%",
    "right": "5%",
    "bottom": "5%",
    "top": "20%",
    "containLabel": true
  },
  "toolbox": {
    "feature": {
      "saveAsImage": {
        "title": "Save as Image"
      }
    }
  },
  "xAxis": {
    "type": "category",
    "boundaryGap": false,
    "data": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "name": "Email Marketing",
      "type": "line",
      "stack": "Total",
      "data": [120, 132, 101, 134, 90, 230, 210]
    },
    {
      "name": "Affiliate Advertising",
      "type": "line",
      "stack": "Total",
      "data": [220, 182, 191, 234, 290, 330, 310]
    },
    {
      "name": "Video Advertising",
      "type": "line",
      "stack": "Total",
      "data": [150, 232, 201, 154, 190, 330, 410]
    },
    {
      "name": "Direct View",
      "type": "line",
      "stack": "Total",
      "data": [320, 332, 301, 334, 390, 330, 320]
    },
    {
      "name": "Search Engine",
      "type": "line",
      "stack": "Total",
      "data": [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}
{{< /echarts >}}

## typeit

{{< typeit >}}
This is a _paragraph_ with **typing animation** based on [TypeIt](https://typeitjs.com/)...
{{< /typeit >}}

## mapbox

{{< mapbox 113.953277 22.559102 11 >}}

## 部分加密

{{% fixit-encryptor "1212" "密码是 1212" %}}

`fixit-encryptor` shortcode 在版本 {{< version 0.2.15 >}} 得到支持。:tada:

<!-- autocorrect-disable -->
當你凝視著bug，bug也凝視著你

不能信任那些Terminal或Editor用白底的人

![Hugo Theme FixIt](/images/apple-devices-preview.webp "A Clean, Elegant but Advanced Hugo Theme")

| A   | B   |
| --- | --- |
| 1   | 2   |

行内公式：

$c = \pm\sqrt{a^2 + b^2}$ 和 \(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\)

公式块：

$$
\begin{equation*}
  \rho \frac{\mathrm{D} \mathbf{v}}{\mathrm{D} t}=\nabla \cdot \mathbb{P}+\rho \mathbf{f}
\end{equation*}
$$

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

{{< echarts >}}
{
  "title": {
    "text": "Summary Line Chart",
    "top": "2%",
    "left": "center"
  },
  "tooltip": {
    "trigger": "axis"
  },
  "legend": {
    "data": ["Email Marketing", "Affiliate Advertising", "Video Advertising", "Direct View", "Search Engine"],
    "top": "10%"
  },
  "grid": {
    "left": "5%",
    "right": "5%",
    "bottom": "5%",
    "top": "20%",
    "containLabel": true
  },
  "toolbox": {
    "feature": {
      "saveAsImage": {
        "title": "Save as Image"
      }
    }
  },
  "xAxis": {
    "type": "category",
    "boundaryGap": false,
    "data": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "name": "Email Marketing",
      "type": "line",
      "stack": "Total",
      "data": [120, 132, 101, 134, 90, 230, 210]
    },
    {
      "name": "Affiliate Advertising",
      "type": "line",
      "stack": "Total",
      "data": [220, 182, 191, 234, 290, 330, 310]
    },
    {
      "name": "Video Advertising",
      "type": "line",
      "stack": "Total",
      "data": [150, 232, 201, 154, 190, 330, 410]
    },
    {
      "name": "Direct View",
      "type": "line",
      "stack": "Total",
      "data": [320, 332, 301, 334, 390, 330, 320]
    },
    {
      "name": "Search Engine",
      "type": "line",
      "stack": "Total",
      "data": [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}
{{< /echarts >}}

{{< typeit >}}
This is a _paragraph_ with **typing animation** based on [TypeIt](https://typeitjs.com/)...
{{< /typeit >}}

{{< mapbox 113.953277 22.559102 11 >}}

{{< admonition success >}}
嵌套 `fixit-encryptor` shortcode 测试。
{{< /admonition >}}

{{% fixit-encryptor "1212" "密码是 1212" %}}
{{< version 0.3.3 >}} 部分加密支持无限级嵌套。:sparkles:
{{% /fixit-encryptor %}}

{{% /fixit-encryptor %}}
