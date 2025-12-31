---
title: 图表支持 - ECharts
shortTitle: ECharts
date: 2023-03-24T22:40:40+08:00
tags:
  - Diagram
  - ECharts
  - Markdown
  - Content
  - Advanced
categories:
  - Documentation
collections:
  - Diagrams Support
resources:
  - name: featured-image
    src: featured-image.webp
---

[**ECharts**][echarts] 是一个帮助你生成交互式数据可视化的库。

<!--more-->

ECharts 提供了常规的 [折线图][line], [柱状图][bar], [散点图][scatter], [饼图][pie], [K 线图][candlestick], 用于统计的 [盒形图][boxplot], 用于地理数据可视化的 [地图][map], [热力图][heatmap], [线图][lines], 用于关系数据可视化的 [关系图][graph], [treemap][treemap], [旭日图][sunburst], 多维数据可视化的 [平行坐标][parallel], 还有用于 BI 的 [漏斗图][funnel], [仪表盘][gauge], 并且支持图与图之间的混搭。

## 用法 {#usage}

### 语法 {#syntax}

要使用 ECharts，只需将 `JSON`、`YAML` 或 `TOML` 等格式的 ECharts 的选项放在代码块中，并将语言设置为 `echarts`。

````markdown
```echarts
// echarts option in formats such as JSON, YAML, or TOML here
```
````

> [!TIP]
> 你也可以直接在 Markdown 文件中使用 [`echarts` 短代码][sc-echarts]。

### 参数配置 {#parameters}

ECharts 的代码块扩展语法支持以下参数：

| 参数   | 说明                                                                       | 类型   | 默认值  |
| :----- | :------------------------------------------------------------------------- | :----- | :------ |
| width  | 数据可视化的宽度                                                           | string | `100%`  |
| height | 数据可视化的高度                                                           | string | `30rem` |
| js     | {{< version 0.3.19 >}} 是否使用 `JS` 格式                                  | bool   | `false` |
| async  | {{< version 0.3.20 >}} JS 代码是否异步执行                                 | bool   | `false` |
| data   | {{< version 0.3.20 >}} Hugo 站点数据键值（`echarts` 范围）                 | string | -       |
| file   | {{< version 0.3.20 >}} [页面资源][page-resources] 或 `assets` 中的数据文件 | string | -       |

---

下面是一些使用 ECharts 生成的 SVG 图表示例。

## JSON 格式 {#json-format}

一个 `JSON` 格式的 `echarts` 示例：

```echarts
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
    "left": "left",
    "feature": {
      "saveAsImage": {
        "title": "保存为图片"
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
```

{{< details "查看源码" false "center" >}}

````markdown {mode="mac", lineNos=false}
```echarts
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
    "left": "left",
    "feature": {
      "saveAsImage": {
        "title": "保存为图片"
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
```
````

{{< /details >}}

## YAML 格式 {#yaml-format}

一个 `YAML` 格式的 `echarts` 示例：

```echarts
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
  left: left
  feature:
    saveAsImage:
      title: 保存为图片
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
```

{{< details "查看源码" false "center" >}}

````markdown {mode="mac", lineNos=false}
```echarts
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
  left: left
  feature:
    saveAsImage:
      title: 保存为图片
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
```
````

{{< /details >}}

## TOML 格式 {#toml-format}

一个 `TOML` 格式的 `echarts` 示例：

```echarts
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
left = "left"
[toolbox.feature]
[toolbox.feature.saveAsImage]
title = "保存为图片"

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
```

{{< details "查看源码" false "center" >}}

````markdown {mode="mac", lineNos=false}
```echarts
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
left = "left"
[toolbox.feature]
[toolbox.feature.saveAsImage]
title = "保存为图片"

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
```
````

{{< /details >}}

## JS 对象字面量格式 {#js-object-literal-format}

{{< version 0.3.19 >}}

`js` 参数设置为 `true`，一个 [JS 对象字面量][object-literals] 格式的 `echarts` 示例：

```echarts {js=true}
{
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: 'Gradient Stacked Area Chart',
    top: '2%',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
    top: '10%'
  },
  toolbox: {
    left: 'left',
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '5%',
    top: '20%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
    {
      name: 'Line 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 282, 111, 234, 220, 340, 310]
    },
    {
      name: 'Line 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 132, 201, 334, 190, 130, 220]
    },
    {
      name: 'Line 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 402, 231, 134, 190, 230, 120]
    },
    {
      name: 'Line 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 302, 181, 234, 210, 290, 150]
    }
  ]
}
```

{{< details "查看源码" false "center" >}}

````markdown {mode="mac", lineNos=false}
```echarts {js=true}
{
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: 'Gradient Stacked Area Chart',
    top: '2%',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
    top: '10%'
  },
  toolbox: {
    left: 'left',
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '5%',
    top: '20%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
    {
      name: 'Line 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 282, 111, 234, 220, 340, 310]
    },
    {
      name: 'Line 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 132, 201, 334, 190, 130, 220]
    },
    {
      name: 'Line 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 402, 231, 134, 190, 230, 120]
    },
    {
      name: 'Line 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 302, 181, 234, 210, 290, 150]
    }
  ]
}
```
````

{{< /details >}}

## JS 代码 {#js-code}

{{< version 0.3.20 >}}

`js` 参数设置为 `true`，内容格式为 JS 代码时，此时的内容相当于一个 JS 函数，你必须通过 `return` 关键词返回 ECharts option 或者一个 `Promise` 对象，函数说明如下：

```js
/**
 * Get ECharts option
 * @param {object} fixit FixIt instance
 * @param {object} chart ECharts instance
 * @returns {object | Promise} ECharts option or Promise
 */
function _getOption(fixit, chart) {
  const option = {
    // your content
  }
  return option
}
```

一个包含 JS 代码的的 `echarts` 示例：

```echarts {js=true}
const data = [];
for (let i = 0; i <= 100; i++) {
  let theta = (i / 100) *360;
  let r = 5* (1 + Math.sin((theta / 180) * Math.PI));
  data.push([r, theta]);
}
const option = {
  title: {
    text: 'Two Value-Axes in Polar',
    top: 'bottom',
    left: 'center'
  },
  legend: {
    data: ['line']
  },
  polar: {},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  angleAxis: {
    type: 'value',
    startAngle: 0
  },
  radiusAxis: {},
  series: [
    {
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      data: data
    }
  ]
};
return option;
```

{{< details "查看源码" false "center" >}}

````markdown {mode="mac", lineNos=false}
```echarts {js=true}
const data = [];
for (let i = 0; i <= 100; i++) {
  let theta = (i / 100) * 360;
  let r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
  data.push([r, theta]);
}
const option = {
  title: {
    text: 'Two Value-Axes in Polar',
    top: 'bottom',
    left: 'center'
  },
  legend: {
    data: ['line']
  },
  polar: {},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  angleAxis: {
    type: 'value',
    startAngle: 0
  },
  radiusAxis: {},
  series: [
    {
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      data: data
    }
  ]
};
return option;
```
````

{{< /details >}}

JS 代码也可以使用 `async` 参数来异步加载数据，例如：

```echarts {js=true,async=true}
return fetch('/echarts/les-miserables.json')
  .then((response) => response.json())
  .then((graph) => {
    graph.nodes.forEach(function (node) {
      node.label = {
        show: node.symbolSize > 30
      };
    });
    const option = {
      title: {
        text: 'Les Miserables',
        subtext: 'Circular layout',
        top: 'bottom',
        left: 'right'
      },
      tooltip: {},
      legend: [
        {
          data: graph.categories.map(function (a) {
            return a.name;
          })
        }
      ],
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'circular',
          circular: {
            rotateLabel: true
          },
          data: graph.nodes,
          links: graph.links,
          categories: graph.categories,
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
          }
        }
      ]
    };
    return option;
});
```

{{< details "查看源码" false "center" >}}

````markdown {mode="mac", lineNos=false}
```echarts {js=true,async=true}
return fetch('/echarts/les-miserables.json')
  .then((response) => response.json())
  .then((graph) => {
    graph.nodes.forEach(function (node) {
      node.label = {
        show: node.symbolSize > 30
      };
    });
    const option = {
      title: {
        text: 'Les Miserables',
        subtext: 'Circular layout',
        top: 'bottom',
        left: 'right'
      },
      tooltip: {},
      legend: [
        {
          data: graph.categories.map(function (a) {
            return a.name;
          })
        }
      ],
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'circular',
          circular: {
            rotateLabel: true
          },
          data: graph.nodes,
          links: graph.links,
          categories: graph.categories,
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
          }
        }
      ]
    };
    return option;
});
```
````

{{< /details >}}

## Data 数据 {#site-data}

{{< version 0.3.20 >}}

支持从 Hugo [站点数据][hugo-data] 中获取数据，数据文件定义在 `data/echarts` 目录下，格式支持 `JSON`、`YAML`、`TOML` 格式。

例如，定义有 `data/echarts/round-cap.json` 文件，你可以 使用 `data` 参数来引用：

````markdown
```echarts {data="round-cap"}
```
````

The rendered output looks like this:

```echarts {data="round-cap"}
```

## File 数据 {#file-data}

{{< version 0.3.20 >}}

支持从 Hugo [页面资源][page-resources] 或 `assets` 中的文件获取数据，格式支持 `JSON`、`YAML`、`TOML` 或 `JS` 格式。

例如，当前页面结构如下：

```plain
echarts/
├── data/
│   ├── chart.js
│   ├── chart.json
│   ├── chart.toml
│   └── chart.yaml
├── featured-image.webp
└── index.md
```

你可以使用 `file` 参数来从文件中获取数据：

````markdown
```echarts {file="data/chart.yaml"}
```
````

呈现的输出效果如下：

```echarts {file="data/chart.yaml"}
```

一个加载 `JS` 文件的示例：

````markdown
```echarts {file="data/chart.js"}
```
````

呈现的输出效果如下：

```echarts {file="data/chart.js"}
```

<!-- link reference definition -->
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
[object-literals]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals
[hugo-data]: https://gohugo.io/methods/site/data/
[page-resources]: https://gohugo.io/content-management/page-resources/
<!-- markdownlint-disable-file reference-links-images -->
[sc-echarts]: {{< relref "/documentation/content-management/shortcodes/extended/echarts" >}}
