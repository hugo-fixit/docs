---
title: Shortcodes Test
date: 2022-03-07T22:31:22+08:00
description: Test for shortcodes usages
tags:
  - Tests
  - Shortcodes
  - Content
categories:
  - Tests
lightgallery: true
menu:
  main:
    title: Test for shortcodes usages
    parent: tests
    params:
      icon: fa-solid fa-vial text-success
---

<!-- markdownlint-disable-file MD033 -->

normal content

> normal blockquote content

## Shortcodes without Markdown

{{< center-quote >}}
{{< raw >}}
**hello** _world_
this is a center-quote shortcode example.
{{< /raw >}}
{{< /center-quote >}}

## Shortcodes with Markdown

{{< center-quote >}}
**hello** _world_
this is a center-quote shortcode example.
{{< /center-quote >}}

{{< details "**Copyright** 2022. [Lruihao](https://lruihao.cn/)" >}}
_All pages and graphics on this web site are the property of [FixIt](/)._
{{< /details >}}

{{< admonition type=tip title="_This is a tip_" open=false >}}
A **tip** banner
{{< /admonition >}}

## Shortcodes with raw string parameters

{{< details `<b>Copyright</b> 2022. <em>Lruihao</em>` >}}
_All pages and graphics on this web site are the property of [FixIt](/)._
{{< /details >}}

## Nested Shortcodes

{{< version 0.3.0 changed >}} {{< link "https://katex.org/" KaTeX >}} mathematical formulas (https://katex.org)

```code
{{< version 0.3.0 changed >}} {{< link "https://katex.org/" KaTeX >}} mathematical formulas (https://katex.org)
```

## raw

```markdown
{{</* raw */>}}
render **raw** *markdown*
{{</* /raw */>}}

{{</* raw */>}}
render
<strong>raw</strong>
<em>html</em>
{{</* /raw */>}}
```

{{< raw >}}
render **raw** _markdown_
{{< /raw >}}

{{< raw >}}
render
<strong>raw</strong>
<em>html</em>
{{< /raw >}}

## image

![language-switch](/documentation/content-management/introduction/language-switch.gif)

```go-html-template
<!-- ![Lighthouse](/images/lighthouse.jpg "Lighthouse title") -->

{{</* image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" title="Lighthouse title" src_s="/images/lighthouse-small.jpg" src_l="/images/lighthouse-large.jpg" */>}}

{{</* image src="/images/lighthouse.jpg" width="50%" caption="Lighthouse (width=50%)" title="width=\"50%\"" */>}}

{{</* image src="/images/lighthouse.jpg" width="50%" height="200px" title="Lighthouse title" */>}}

{{</* image src="/images/lighthouse.jpg" height="200px" */>}}

{{</* image src="/images/lighthouse.jpg" height="100px" loading="eager" */>}}
```

<!-- ![Lighthouse](/images/lighthouse.jpg "Lighthouse title") -->

{{< image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" title="Lighthouse title" src_s="/images/lighthouse-small.jpg" src_l="/images/lighthouse-large.jpg" >}}

{{< image src="/images/lighthouse.jpg" width="50%" caption="Lighthouse (width=50%)" title="width=\"50%\"" >}}

{{< image src="/images/lighthouse.jpg" width="50%" height="200px" title="Lighthouse title" >}}

{{< image src="/images/lighthouse.jpg" height="200px" >}}

{{< image src="/images/lighthouse.jpg" height="100px" loading="eager" >}}

## reward

{{< reward >}}
{{< reward "/images/wechatpay.gif" >}}
