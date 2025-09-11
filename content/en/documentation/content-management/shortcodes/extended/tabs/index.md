---
title: Extended Shortcode - tabs
shortTitle: Tabs
linkTitle: Tabs Shortcode
date: 2025-09-11T13:53:54+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: The tabs shortcode allows you to create tabbed content with various styles and layouts.
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

The `tabs` shortcode allows you to create tabbed content with various styles and layouts.

<!--more-->

## Quick Start

{{< version 0.4.0 >}}

The `tabs` shortcode works together with the `tab` shortcode to create organized tabbed content. The `tabs` shortcode serves as the container, while individual `tab` shortcodes define each tab's content.

```markdown
{{</* tabs */>}}
{{%/* tab title="Tab 1" */%}}Content for tab 1{{%/* /tab */%}}
{{%/* tab title="Tab 2" */%}}Content for tab 2{{%/* /tab */%}}
{{%/* tab title="Tab 3" */%}}Content for tab 3{{%/* /tab */%}}
{{</* /tabs */>}}
```

The rendered output looks like this:

{{< tabs >}}
{{% tab title="Tab 1" %}}Content for tab 1{{% /tab %}}
{{% tab title="Tab 2" %}}Content for tab 2{{% /tab %}}
{{% tab title="Tab 3" %}}Content for tab 3{{% /tab %}}
{{< /tabs >}}

## Examples

{{< tabs >}}
{{% tab title="Underline Style" %}}

{{< tabs placement="bottom" defaultTab=1 >}}
{{% tab title="Tab 1" %}}Underline style tab 1 content{{% /tab %}}
{{% tab title="Tab 2" %}}Underline style tab 2 content, this is the **default selected** tab.{{% /tab %}}
{{% tab title="Tab 3" %}}Underline style tab 3 content{{% /tab %}}
{{< /tabs >}}

```markdown {title="View Source Code", data-open=false}
{{</* tabs placement="bottom" defaultTab=1 */>}}
{{%/* tab title="Tab 1" */%}}Underline style tab 1 content{{%/* /tab */%}}
{{%/* tab title="Tab 2" */%}}Underline style tab 2 content, this is the **default selected** tab{{%/* /tab */%}}
{{%/* tab title="Tab 3" */%}}Underline style tab 3 content{{%/* /tab */%}}
{{</* /tabs */>}}
```

{{% /tab %}}
{{% tab title="Pill Style" %}}

{{< tabs type="pill" placement="left" >}}
{{% tab title="Tab 1" %}}Pill style tab 1 content{{% /tab %}}
{{% tab title="Tab 2" %}}Pill style tab 2 content{{% /tab %}}
{{% tab title="Tab 3" %}}Pill style tab 3 content{{% /tab %}}
{{< /tabs >}}

```markdown {title="View Source Code", data-open=false}
{{</* tabs type="pill" placement="left" */>}}
{{%/* tab title="Tab 1" */%}}Pill style tab 1 content{{%/* /tab */%}}
{{%/* tab title="Tab 2" */%}}Pill style tab 2 content{{%/* /tab */%}}
{{%/* tab title="Tab 3" */%}}Pill style tab 3 content{{%/* /tab */%}}
{{</* /tabs */>}}
```

{{% /tab %}}
{{% tab title="Card Style" %}}

{{< tabs type="card" placement="right" >}}
{{% tab title="Tab 1" %}}Card style tab 1 content{{% /tab %}}
{{% tab title="Tab 2" %}}Card style tab 2 content{{% /tab %}}
{{% tab title="Tab 3" %}}Card style tab 3 content{{% /tab %}}
{{< /tabs >}}

```markdown {title="View Source Code", data-open=false}
{{</* tabs type="card" placement="right" */>}}
{{%/* tab title="Tab 1" */%}}Card style tab 1 content{{%/* /tab */%}}
{{%/* tab title="Tab 2" */%}}Card style tab 2 content{{%/* /tab */%}}
{{%/* tab title="Tab 3" */%}}Card style tab 3 content{{%/* /tab */%}}
{{</* /tabs */>}}
```

{{% /tab %}}
{{% tab title="Segment Style" %}}

{{< tabs type="segment" >}}
{{% tab title="Tab 1" %}}Segment style tab 1 content{{% /tab %}}
{{% tab title="Tab 2" %}}Segment style tab 2 content{{% /tab %}}
{{% tab title="Tab 3" %}}Segment style tab 3 content{{% /tab %}}
{{< /tabs >}}

```markdown {title="View Source Code", data-open=false}
{{</* tabs type="segment" */>}}
{{%/* tab title="Tab 1" */%}}Segment style tab 1 content{{%/* /tab */%}}
{{%/* tab title="Tab 2" */%}}Segment style tab 2 content{{%/* /tab */%}}
{{%/* tab title="Tab 3" */%}}Segment style tab 3 content{{%/* /tab */%}}
{{</* /tabs */>}}
```

{{% /tab %}}
{{< /tabs >}}

## Parameters

{{< tabs type="segment" >}}
{{% tab title="tabs shortcode" %}}

| Parameter   | Description                                                                        | Type      | Options                             | Default     |
| :---------- | :--------------------------------------------------------------------------------- | :-------- | :---------------------------------- | :---------- |
| `defaultTab` | Default active tab index                                                          | integer   | `0` ~ `count - 1`                   | `0`         |
| `type`       | Tab style type                                                                    | string    | `underline`, `pill`, `card`, `segment` | `underline` |
| `placement`  | Tab placement position relative to content, not effective for `segment` type tabs | string    | `top`, `bottom`, `left`, `right`      | `top`       |

{{% /tab %}}
{{% tab title="tab shortcode" %}}

| Parameter | Description                             | Type   | Options      | Default      |
| :-------- | :-------------------------------------- | :----- | :----------- | :----------- |
| `title`   | Title text displayed on the tab button  | string | any string   | `UntitledN`  |

{{% /tab %}}
{{< /tabs >}}
