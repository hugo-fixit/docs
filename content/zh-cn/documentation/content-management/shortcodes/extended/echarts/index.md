---
title: 扩展 Shortcode - echarts
linkTitle: Echarts Shortcode
date: 2023-02-24T22:40:40+08:00
aliases:
  - /zh-cn/extended-shortcode-echarts/
author:
  name: Lruihao
  link: https://lruihao.cn
description: echarts shortcode 使用 ECharts 库提供数据可视化的功能。
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

`echarts` shortcode 使用 [ECharts][echarts] 库提供数据可视化的功能。

<!--more-->

## 简介

**ECharts** 是一个帮助你生成交互式数据可视化的库。

ECharts 提供了常规的 [折线图][line], [柱状图][bar], [散点图][scatter], [饼图][pie], [K 线图][candlestick], 用于统计的 [盒形图][boxplot], 用于地理数据可视化的 [地图][map], [热力图][heatmap], [线图][lines], 用于关系数据可视化的 [关系图][graph], [treemap][treemap], [旭日图][sunburst], 多维数据可视化的 [平行坐标][parallel], 还有用于 BI 的 [漏斗图][funnel], [仪表盘][gauge], 并且支持图与图之间的混搭。

## 如何使用

只需在 `echarts` shortcode 中以 `JSON`、`YAML` 或 `TOML` 格式插入 ECharts 选项即可。

一个 `JSON` 格式的 `echarts` 示例：

{{< echarts >}}
{
  "title": {
    "text": "折线统计图",
    "top": "2%",
    "left": "center"
  },
  "tooltip": {
    "trigger": "axis"
  },
  "legend": {
    "data": ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
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
        "title": "保存为图片"
      }
    }
  },
  "xAxis": {
    "type": "category",
    "boundaryGap": false,
    "data": ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "name": "邮件营销",
      "type": "line",
      "stack": "总量",
      "data": [120, 132, 101, 134, 90, 230, 210]
    },
    {
      "name": "联盟广告",
      "type": "line",
      "stack": "总量",
      "data": [220, 182, 191, 234, 290, 330, 310]
    },
    {
      "name": "视频广告",
      "type": "line",
      "stack": "总量",
      "data": [150, 232, 201, 154, 190, 330, 410]
    },
    {
      "name": "直接访问",
      "type": "line",
      "stack": "总量",
      "data": [320, 332, 301, 334, 390, 330, 320]
    },
    {
      "name": "搜索引擎",
      "type": "line",
      "stack": "总量",
      "data": [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}
{{< /echarts >}}

{{< details "查看源码" false "center" >}}

```markdown {data-open=true}
{{?{}< echarts >}}
{
  "title": {
    "text": "折线统计图",
    "top": "2%",
    "left": "center"
  },
  "tooltip": {
    "trigger": "axis"
  },
  "legend": {
    "data": ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
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
        "title": "保存为图片"
      }
    }
  },
  "xAxis": {
    "type": "category",
    "boundaryGap": false,
    "data": ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "name": "邮件营销",
      "type": "line",
      "stack": "总量",
      "data": [120, 132, 101, 134, 90, 230, 210]
    },
    {
      "name": "联盟广告",
      "type": "line",
      "stack": "总量",
      "data": [220, 182, 191, 234, 290, 330, 310]
    },
    {
      "name": "视频广告",
      "type": "line",
      "stack": "总量",
      "data": [150, 232, 201, 154, 190, 330, 410]
    },
    {
      "name": "直接访问",
      "type": "line",
      "stack": "总量",
      "data": [320, 332, 301, 334, 390, 330, 320]
    },
    {
      "name": "搜索引擎",
      "type": "line",
      "stack": "总量",
      "data": [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}
{{?{}< /echarts >}}
```

{{< /details >}}

一个 `YAML` 格式的 `echarts` 示例：

{{< echarts >}}
title:
  text: 折线统计图
  top: 2%
  left: center
tooltip:
  trigger: axis
legend:
  data:
    - 邮件营销
    - 联盟广告
    - 视频广告
    - 直接访问
    - 搜索引擎
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
      title: 保存为图片
xAxis:
  type: category
  boundaryGap: false
  data:
    - 周一
    - 周二
    - 周三
    - 周四
    - 周五
    - 周六
    - 周日
yAxis:
  type: value
series:
  - name: 邮件营销
    type: line
    stack: 总量
    data:
      - 120
      - 132
      - 101
      - 134
      - 90
      - 230
      - 210
  - name: 联盟广告
    type: line
    stack: 总量
    data:
      - 220
      - 182
      - 191
      - 234
      - 290
      - 330
      - 310
  - name: 视频广告
    type: line
    stack: 总量
    data:
      - 150
      - 232
      - 201
      - 154
      - 190
      - 330
      - 410
  - name: 直接访问
    type: line
    stack: 总量
    data:
      - 320
      - 332
      - 301
      - 334
      - 390
      - 330
      - 320
  - name: 搜索引擎
    type: line
    stack: 总量
    data:
      - 820
      - 932
      - 901
      - 934
      - 1290
      - 1330
      - 1320
{{< /echarts >}}

{{< details "查看源码" false "center" >}}

```markdown {data-open=true}
{{?{}< echarts >}}
title:
  text: 折线统计图
  top: 2%
  left: center
tooltip:
  trigger: axis
legend:
  data:
    - 邮件营销
    - 联盟广告
    - 视频广告
    - 直接访问
    - 搜索引擎
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
      title: 保存为图片
xAxis:
  type: category
  boundaryGap: false
  data:
    - 周一
    - 周二
    - 周三
    - 周四
    - 周五
    - 周六
    - 周日
yAxis:
  type: value
series:
  - name: 邮件营销
    type: line
    stack: 总量
    data:
      - 120
      - 132
      - 101
      - 134
      - 90
      - 230
      - 210
  - name: 联盟广告
    type: line
    stack: 总量
    data:
      - 220
      - 182
      - 191
      - 234
      - 290
      - 330
      - 310
  - name: 视频广告
    type: line
    stack: 总量
    data:
      - 150
      - 232
      - 201
      - 154
      - 190
      - 330
      - 410
  - name: 直接访问
    type: line
    stack: 总量
    data:
      - 320
      - 332
      - 301
      - 334
      - 390
      - 330
      - 320
  - name: 搜索引擎
    type: line
    stack: 总量
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

一个 `TOML` 格式的 `echarts` 示例：

{{< echarts >}}
[title]
text = "折线统计图"
top = "2%"
left = "center"

[tooltip]
trigger = "axis"

[legend]
data = [
  "邮件营销",
  "联盟广告",
  "视频广告",
  "直接访问",
  "搜索引擎"
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
title = "保存为图片"

[xAxis]
type = "category"
boundaryGap = false
data = [
  "周一",
  "周二",
  "周三",
  "周四",
  "周五",
  "周六",
  "周日"
]

[yAxis]
type = "value"

[[series]]
name = "邮件营销"
type = "line"
stack = "总量"
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
name = "联盟广告"
type = "line"
stack = "总量"
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
name = "视频广告"
type = "line"
stack = "总量"
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
name = "直接访问"
type = "line"
stack = "总量"
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
name = "搜索引擎"
type = "line"
stack = "总量"
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

{{< details "查看源码" false "center" >}}

```markdown {data-open=true}
{{?{}< echarts >}}
[title]
text = "折线统计图"
top = "2%"
left = "center"

[tooltip]
trigger = "axis"

[legend]
data = [
  "邮件营销",
  "联盟广告",
  "视频广告",
  "直接访问",
  "搜索引擎"
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
title = "保存为图片"

[xAxis]
type = "category"
boundaryGap = false
data = [
  "周一",
  "周二",
  "周三",
  "周四",
  "周五",
  "周六",
  "周日"
]

[yAxis]
type = "value"

[[series]]
name = "邮件营销"
type = "line"
stack = "总量"
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
name = "联盟广告"
type = "line"
stack = "总量"
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
name = "视频广告"
type = "line"
stack = "总量"
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
name = "直接访问"
type = "line"
stack = "总量"
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
name = "搜索引擎"
type = "line"
stack = "总量"
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

## 参数配置

`echarts` shortcode 有以下命名参数，位置参数按照从上到下的顺序排列：

| 参数   | 类型   | 说明             | 默认值  |
| :----- | :----- | :--------------- | :------ |
| width  | string | 数据可视化的宽度 | `100%`  |
| height | string | 数据可视化的高度 | `30rem` |

<!-- link reference definition -->
<!-- markdownlint-disable-file blanks-around-lists ul-indent -->
[echarts]: https://echarts.apache.org/
[line]: https://echarts.apache.org/zh/option.html#series-line
[bar]: https://echarts.apache.org/zh/option.html#series-bar
[scatter]: https://echarts.apache.org/zh/option.html#series-scatter
[pie]: https://echarts.apache.org/zh/option.html#series-pie
[candlestick]: https://echarts.apache.org/zh/option.html#series-candlestick
[map]: https://echarts.apache.org/zh/option.html#series-map
[boxplot]: https://echarts.apache.org/zh/option.html#series-boxplot
[heatmap]: https://echarts.apache.org/zh/option.html#series-heatmap
[lines]: https://echarts.apache.org/zh/option.html#series-lines
[graph]: https://echarts.apache.org/zh/option.html#series-graph
[treemap]: https://echarts.apache.org/zh/option.html#series-treemap
[sunburst]: https://echarts.apache.org/zh/option.html#series-sunburst
[parallel]: https://echarts.apache.org/zh/option.html#series-parallel
[funnel]: https://echarts.apache.org/zh/option.html#series-funnel
[gauge]: https://echarts.apache.org/zh/option.html#series-gauge
