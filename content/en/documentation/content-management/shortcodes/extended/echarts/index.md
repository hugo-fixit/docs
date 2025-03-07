---
title: Extended Shortcode - echarts
linkTitle: Echarts Shortcode
date: 2023-02-24T22:40:40+08:00
aliases:
  - /extended-shortcode-echarts/
author:
  name: Lruihao
  link: https://lruihao.cn
description: The echarts shortcode supports data visualization in Hugo with ECharts library.
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

The `echarts` shortcode supports data visualization in Hugo with [ECharts][echarts] library.

<!--more-->

## Introduction

**ECharts** is a library helping you to generate interactive data visualization.

The basic chart types ECharts supports include [line series][line], [bar series][bar], [scatter series][scatter], [pie charts][pie], [candle-stick series][candlestick], [boxplot series][boxplot] for statistics, [map series][map], [heatmap series][heatmap], [lines series][lines] for directional information, [graph series][graph] for relationships, [treemap series][treemap], [sunburst series][sunburst], [parallel series][parallel] for multi-dimensional data, [funnel series][funnel], [gauge series][gauge]. And it's extremely easy to create a combinition of them with ECharts.

## How to Use

Just insert your ECharts option in `JSON`, `YAML` or `TOML` format in the `echarts` shortcode and that’s it.

Example `echarts` input in `JSON` format:

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

{{< details "View source" false "center" >}}

```markdown {data-open=true}
{{?{}< echarts >}}
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
{{?{}< /echarts >}}
```

{{< /details >}}

Example `echarts` input in `YAML` format:

{{< echarts >}}
title:
  text: Summary Line Chart
  top: 2%
  left: center
tooltip:
  trigger: axis
legend:
  data:
    - Email Marketing
    - Affiliate Advertising
    - Video Advertising
    - Direct View
    - Search Engine
  top: 10%
grid:
  left: 5%
  right: 5%
  bottom: 5%
  top: 20%
  containLabel: true
toolbox:
  feature:
    saveAsImage:
      title: Save as Image
xAxis:
  type: category
  boundaryGap: false
  data:
    - Monday
    - Tuesday
    - Wednesday
    - Thursday
    - Friday
    - Saturday
    - Sunday
yAxis:
  type: value
series:
  - name: Email Marketing
    type: line
    stack: Total
    data:
      - 120
      - 132
      - 101
      - 134
      - 90
      - 230
      - 210
  - name: Affiliate Advertising
    type: line
    stack: Total
    data:
      - 220
      - 182
      - 191
      - 234
      - 290
      - 330
      - 310
  - name: Video Advertising
    type: line
    stack: Total
    data:
      - 150
      - 232
      - 201
      - 154
      - 190
      - 330
      - 410
  - name: Direct View
    type: line
    stack: Total
    data:
      - 320
      - 332
      - 301
      - 334
      - 390
      - 330
      - 320
  - name: Search Engine
    type: line
    stack: Total
    data:
      - 820
      - 932
      - 901
      - 934
      - 1290
      - 1330
      - 1320
{{< /echarts >}}

{{< details "View source" false "center" >}}

```markdown {data-open=true}
{{?{}< echarts >}}
title:
  text: Summary Line Chart
  top: 2%
  left: center
tooltip:
  trigger: axis
legend:
  data:
    - Email Marketing
    - Affiliate Advertising
    - Video Advertising
    - Direct View
    - Search Engine
  top: 10%
grid:
  left: 5%
  right: 5%
  bottom: 5%
  top: 20%
  containLabel: true
toolbox:
  feature:
    saveAsImage:
      title: Save as Image
xAxis:
  type: category
  boundaryGap: false
  data:
    - Monday
    - Tuesday
    - Wednesday
    - Thursday
    - Friday
    - Saturday
    - Sunday
yAxis:
  type: value
series:
  - name: Email Marketing
    type: line
    stack: Total
    data:
      - 120
      - 132
      - 101
      - 134
      - 90
      - 230
      - 210
  - name: Affiliate Advertising
    type: line
    stack: Total
    data:
      - 220
      - 182
      - 191
      - 234
      - 290
      - 330
      - 310
  - name: Video Advertising
    type: line
    stack: Total
    data:
      - 150
      - 232
      - 201
      - 154
      - 190
      - 330
      - 410
  - name: Direct View
    type: line
    stack: Total
    data:
      - 320
      - 332
      - 301
      - 334
      - 390
      - 330
      - 320
  - name: Search Engine
    type: line
    stack: Total
    data:
      - 820
      - 932
      - 901
      - 934
      - 1290
      - 1330
      - 1320
{{?{}< /echarts >}}
```

{{< /details >}}

Example `echarts` input in `TOML` format:

{{< echarts >}}
[title]
text = "Summary Line Chart"
top = "2%"
left = "center"

[tooltip]
trigger = "axis"

[legend]
data = [
  "Email Marketing",
  "Affiliate Advertising",
  "Video Advertising",
  "Direct View",
  "Search Engine"
]
top = "10%"

[grid]
left = "5%"
right = "5%"
bottom = "5%"
top = "20%"
containLabel = true

[toolbox]
[toolbox.feature]
[toolbox.feature.saveAsImage]
title = "Save as Image"

[xAxis]
type = "category"
boundaryGap = false
data = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

[yAxis]
type = "value"

[[series]]
name = "Email Marketing"
type = "line"
stack = "Total"
data = [
  120.0,
  132.0,
  101.0,
  134.0,
  90.0,
  230.0,
  210.0
]

[[series]]
name = "Affiliate Advertising"
type = "line"
stack = "Total"
data = [
  220.0,
  182.0,
  191.0,
  234.0,
  290.0,
  330.0,
  310.0
]

[[series]]
name = "Video Advertising"
type = "line"
stack = "Total"
data = [
  150.0,
  232.0,
  201.0,
  154.0,
  190.0,
  330.0,
  410.0
]

[[series]]
name = "Direct View"
type = "line"
stack = "Total"
data = [
  320.0,
  332.0,
  301.0,
  334.0,
  390.0,
  330.0,
  320.0
]

[[series]]
name = "Search Engine"
type = "line"
stack = "Total"
data = [
  820.0,
  932.0,
  901.0,
  934.0,
  1290.0,
  1330.0,
  1320.0
]
{{< /echarts >}}

{{< details "View source" false "center" >}}

```markdown {data-open=true}
{{?{}< echarts >}}
[title]
text = "Summary Line Chart"
top = "2%"
left = "center"

[tooltip]
trigger = "axis"

[legend]
data = [
  "Email Marketing",
  "Affiliate Advertising",
  "Video Advertising",
  "Direct View",
  "Search Engine"
]
top = "10%"

[grid]
left = "5%"
right = "5%"
bottom = "5%"
top = "20%"
containLabel = true

[toolbox]
[toolbox.feature]
[toolbox.feature.saveAsImage]
title = "Save as Image"

[xAxis]
type = "category"
boundaryGap = false
data = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

[yAxis]
type = "value"

[[series]]
name = "Email Marketing"
type = "line"
stack = "Total"
data = [
  120.0,
  132.0,
  101.0,
  134.0,
  90.0,
  230.0,
  210.0
]

[[series]]
name = "Affiliate Advertising"
type = "line"
stack = "Total"
data = [
  220.0,
  182.0,
  191.0,
  234.0,
  290.0,
  330.0,
  310.0
]

[[series]]
name = "Video Advertising"
type = "line"
stack = "Total"
data = [
  150.0,
  232.0,
  201.0,
  154.0,
  190.0,
  330.0,
  410.0
]

[[series]]
name = "Direct View"
type = "line"
stack = "Total"
data = [
  320.0,
  332.0,
  301.0,
  334.0,
  390.0,
  330.0,
  320.0
]

[[series]]
name = "Search Engine"
type = "line"
stack = "Total"
data = [
  820.0,
  932.0,
  901.0,
  934.0,
  1290.0,
  1330.0,
  1320.0
]
{{?{}< /echarts >}}
```

{{< /details >}}

## Parameters

The `echarts` shortcode has the following named parameters, and the positional parameters ordered from top to bottom:

| Parameter | Description                      | Type   | Default |
| :-------- | :------------------------------- | :----- | :------ |
| width     | Width of the data visualization  | string | `100%`  |
| height    | Height of the data visualization | string | `30rem` |

<!-- link reference definition -->
<!-- markdownlint-disable-file blanks-around-lists ul-indent -->
[echarts]: https://echarts.apache.org/
[line]: https://echarts.apache.org/en/option.html#series-line
[bar]: https://echarts.apache.org/en/option.html#series-bar
[scatter]: https://echarts.apache.org/en/option.html#series-scatter
[pie]: https://echarts.apache.org/en/option.html#series-pie
[candlestick]: https://echarts.apache.org/en/option.html#series-candlestick
[map]: https://echarts.apache.org/en/option.html#series-map
[boxplot]: https://echarts.apache.org/zh/option.html#series-boxplot
[heatmap]: https://echarts.apache.org/en/option.html#series-heatmap
[lines]: https://echarts.apache.org/en/option.html#series-lines
[graph]: https://echarts.apache.org/en/option.html#series-graph
[treemap]: https://echarts.apache.org/en/option.html#series-treemap
[sunburst]: https://echarts.apache.org/en/option.html#series-sunburst
[parallel]: https://echarts.apache.org/en/option.html#series-parallel
[funnel]: https://echarts.apache.org/en/option.html#series-funnel
[gauge]: https://echarts.apache.org/en/option.html#series-gauge
