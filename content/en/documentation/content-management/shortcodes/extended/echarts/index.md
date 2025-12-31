---
title: Extended Shortcode - echarts
shortTitle: Echarts
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

Simply insert the ECharts option in formats such as `JSON`, `YAML`, or `TOML` in the `echarts` shortcode.

```markdown
{{</* echarts */>}}
// echarts option in formats such as JSON, YAML, or TOML here
{{</* /echarts */>}}
```

> [!TIP] The **Code Fences extended syntax** `` ```echarts `` is recommended over the shortcode.
> You can find more examples and usage information on the [Diagrams Support - ECharts][diagrams-support-echarts] page.

### JSON Format

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
    "left": "left",
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

```markdown {mode="mac", lineNos=false}
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
    "left": "left",
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

### YAML Format

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
  left: left
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

```markdown {mode="mac", lineNos=false}
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
  left: left
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

### TOML Format

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
left = "left"
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

```markdown {mode="mac", lineNos=false}
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
left = "left"
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

### JS Object literal Format

{{< version 0.3.19 >}}

Set the `js` parameter to `true`, the example `echarts` input in [JS object literals][object-literals] format:

{{< echarts js=true >}}
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
{{< /echarts >}}

{{< details "View source" false "center" >}}

```markdown {mode="mac", lineNos=false}
{{?{}< echarts js=true >}}
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
{{?{}< /echarts >}}
```

{{< /details >}}

### JS Code

{{< version 0.3.20 >}}

When the `js` parameter is set to `true` and the content format is JS code, at this time the content is equivalent to a JS function, you must return the ECharts option or a `Promise` object with the `return` keyword. The function description is as follows:

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

Example `echarts` with JS code:

{{< echarts js=true >}}
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
{{< /echarts >}}

{{< details "View source" false "center" >}}

```markdown {mode="mac", lineNos=false}
{{?{}< echarts js=true >}}
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
{{?{}< /echarts >}}
```

{{< /details >}}

JS code can also use the `async` parameter to load data asynchronously, for example:

{{< echarts js=true async=true >}}
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
{{< /echarts >}}

{{< details "View source" false "center" >}}

```markdown {mode="mac", lineNos=false}
{{?{}< echarts js=true async=true >}}
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
{{?{}< /echarts >}}
```

{{< /details >}}

### Site Data

{{< version 0.3.20 >}}

Support obtaining data from Hugo [site data][hugo-data], with data files defined in the `data/echarts` directory, and the format supports `JSON`, `YAML`, and `TOML`.

For example, if you have a file `data/echarts/round-cap.json`, you can use the `data` parameter to reference it:

```markdown
{{?{}< echarts data="round-cap" />}}
```

The rendered output looks like this:

{{< echarts data="round-cap" />}}

### File Data

{{< version 0.3.20 >}}

Supports getting data from files in Hugo [page-resources] or `assets`, and the format supports `JSON`, `YAML`, `TOML` or `JS` format.

For example, the current page structure is as follows:

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

You can use the `file` parameter to get data from the file:

```markdown
{{?{}< echarts file="data/chart.yaml" />}}
```

The rendered output looks like this:

{{< echarts file="data/chart.yaml" />}}

An example of loading a `JS` file:

```markdown
{{?{}< echarts file="data/chart.js" />}}
```

The rendered output looks like this:

{{< echarts file="data/chart.js" />}}

## Parameters

The `echarts` shortcode has the following named parameters, and the positional parameters ordered from top to bottom:

| Parameter | Description                                                                      | Type   | Default |
| :-------- | :------------------------------------------------------------------------------- | :----- | :------ |
| width     | ==1== Width of the data visualization                                            | string | `100%`  |
| height    | ==2== Height of the data visualization                                           | string | `30rem` |
| js        | {{< version 0.3.19 >}} Whether to use JS code                                    | bool   | `false` |
| async     | {{< version 0.3.20 >}} Whether JS code executes asynchronously                   | bool   | `false` |
| data      | {{< version 0.3.20 >}} Hugo Site data key below `echarts` scope                  | string | -       |
| file      | {{< version 0.3.20 >}} Data file in [page resources][page-resources] or `assets` | string | -       |

<!-- link reference definition -->
<!-- markdownlint-disable-file MD032 MD007 MD037 MD052 -->
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
[diagrams-support-echarts]: {{< relref "/documentation/content-management/diagrams-support/echarts" >}}
