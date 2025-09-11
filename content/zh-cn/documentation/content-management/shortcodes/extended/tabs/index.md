---
title: 扩展 Shortcode - tabs
shortTitle: Tabs
linkTitle: Tabs Shortcode
date: 2025-09-11T13:53:46+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: tabs shortcode 允许你创建具有各种样式和布局的标签页内容。
resources:
  - name: featured-image
    src: featured-image.webp
tags:
  - Shortcodes
  - Content
categories:
  - Documentation
collections:
  - Extended Shortcodes
---

`tabs` shortcode 允许你创建具有各种样式和布局的标签页内容。

<!--more-->

## 快速开始

{{< version 0.4.0 >}}

`tabs` shortcode 与 `tab` shortcode 配合使用来创建有组织的标签页内容。`tabs` shortcode 作为容器，而各个 `tab` shortcode 定义每个标签页的内容。

```markdown
{{</* tabs */>}}
{{%/* tab title="标签页 1" */%}}标签页 1 的内容{{%/* /tab */%}}
{{%/* tab title="标签页 2" */%}}标签页 2 的内容{{%/* /tab */%}}
{{%/* tab title="标签页 3" */%}}标签页 3 的内容{{%/* /tab */%}}
{{</* /tabs */>}}
```

呈现的输出效果如下：

{{< tabs >}}
{{% tab title="标签页 1" %}}标签页 1 的内容{{% /tab %}}
{{% tab title="标签页 2" %}}标签页 2 的内容{{% /tab %}}
{{% tab title="标签页 3" %}}标签页 3 的内容{{% /tab %}}
{{< /tabs >}}

## 完整示例

{{< tabs >}}
{{% tab title="下划线样式" %}}

{{< tabs placement="bottom" defaultTab=1 >}}
{{% tab title="标签页 1" %}}下划线样式标签页 1 的内容{{% /tab %}}
{{% tab title="标签页 2" %}}下划线样式标签页 2 的内容，这个是**默认选中**的标签页。{{% /tab %}}
{{% tab title="标签页 3" %}}下划线样式标签页 3 的内容{{% /tab %}}
{{< /tabs >}}

```markdown {title="查看源码", data-open=false}
{{</* tabs placement="bottom" defaultTab=1 */>}}
{{%/* tab title="标签页 1" */%}}下划线样式标签页 1 的内容{{%/* /tab */%}}
{{%/* tab title="标签页 2" */%}}下划线样式标签页 2 的内容，这个是**默认选中**的标签页{{%/* /tab */%}}
{{%/* tab title="标签页 3" */%}}下划线样式标签页 3 的内容{{%/* /tab */%}}
{{</* /tabs */>}}
```

{{% /tab %}}
{{% tab title="胶囊样式" %}}

{{< tabs type="pill" placement="left" >}}
{{% tab title="标签页 1" %}}胶囊样式标签页 1 的内容{{% /tab %}}
{{% tab title="标签页 2" %}}胶囊样式标签页 2 的内容{{% /tab %}}
{{% tab title="标签页 3" %}}胶囊样式标签页 3 的内容{{% /tab %}}
{{< /tabs >}}

```markdown {title="查看源码", data-open=false}
{{</* tabs type="pill" placement="left" */>}}
{{%/* tab title="标签页 1" */%}}胶囊样式标签页 1 的内容{{%/* /tab */%}}
{{%/* tab title="标签页 2" */%}}胶囊样式标签页 2 的内容{{%/* /tab */%}}
{{%/* tab title="标签页 3" */%}}胶囊样式标签页 3 的内容{{%/* /tab */%}}
{{</* /tabs */>}}
```

{{% /tab %}}
{{% tab title="卡片样式" %}}

{{< tabs type="card" placement="right" >}}
{{% tab title="标签页 1" %}}卡片样式标签页 1 的内容{{% /tab %}}
{{% tab title="标签页 2" %}}卡片样式标签页 2 的内容{{% /tab %}}
{{% tab title="标签页 3" %}}卡片样式标签页 3 的内容{{% /tab %}}
{{< /tabs >}}

```markdown {title="查看源码", data-open=false}
{{</* tabs type="card" placement="right" */>}}
{{%/* tab title="标签页 1" */%}}卡片样式标签页 1 的内容{{%/* /tab */%}}
{{%/* tab title="标签页 2" */%}}卡片样式标签页 2 的内容{{%/* /tab */%}}
{{%/* tab title="标签页 3" */%}}卡片样式标签页 3 的内容{{%/* /tab */%}}
{{</* /tabs */>}}
```

{{% /tab %}}
{{% tab title="分段样式" %}}

{{< tabs type="segment" >}}
{{% tab title="标签页 1" %}}分段样式标签页 1 的内容{{% /tab %}}
{{% tab title="标签页 2" %}}分段样式标签页 2 的内容{{% /tab %}}
{{% tab title="标签页 3" %}}分段样式标签页 3 的内容{{% /tab %}}
{{< /tabs >}}

```markdown {title="查看源码", data-open=false}
{{</* tabs type="segment" */>}}
{{%/* tab title="标签页 1" */%}}分段样式标签页 1 的内容{{%/* /tab */%}}
{{%/* tab title="标签页 2" */%}}分段样式标签页 2 的内容{{%/* /tab */%}}
{{%/* tab title="标签页 3" */%}}分段样式标签页 3 的内容{{%/* /tab */%}}
{{</* /tabs */>}}
```

{{% /tab %}}
{{< /tabs >}}

## 详细参数

{{< tabs type="segment" >}}
{{% tab title="tabs shortcode" %}}

| 参数         | 说明                                                       | 类型    | 可选值                                 | 默认值      |
| :----------- | :--------------------------------------------------------- | :------ | :------------------------------------- | :---------- |
| `defaultTab` | 默认激活标签页的索引                                       | integer | `0` ~ `count - 1`                      | `0`         |
| `type`       | 标签页的样式类型                                           | string  | `underline`、`pill`、`card`、`segment` | `underline` |
| `placement`  | 标签页相对于内容的位置，对于 `segment` 类型的选项卡不生效 | string  | `top`、`bottom`、`left`、`right`       | `top`       |

{{% /tab %}}

{{% tab title="tab shortcode" %}}

| 参数    | 说明                         | 类型   | 可选值     | 默认值      |
| :------ | :--------------------------- | :----- | :--------- | :---------- |
| `title` | 在标签页按钮上显示的标题文字 | string | 任意字符串 | `UntitledN` |

{{% /tab %}}
{{< /tabs >}}
