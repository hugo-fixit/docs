---
title: 扩展 Shortcode - mapbox
shortTitle: Mapbox
linkTitle: Mapbox Shortcode
date: 2023-02-24T22:45:45+08:00
aliases:
  - /zh-cn/extended-shortcode-mapbox/
author:
  name: Lruihao
  link: https://lruihao.cn
description: mapbox shortcode 使用 Mapbox GL JS 库提供互动式地图的功能。
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
mapbox:
  lightStyle: mapbox://styles/mapbox/light-zh-v1?optimize=true
  darkStyle: mapbox://styles/mapbox/dark-zh-v1?optimize=true
---

`mapbox` shortcode 使用 [Mapbox GL JS][mapbox] 库提供互动式地图的功能。

<!--more-->

## 参数

[Mapbox GL JS][mapbox] 是一个 JavaScript 库，它使用 WebGL, 以 [vector tiles][vector-tiles] 和 [Mapbox styles][style-spec] 为来源，将它们渲染成互动式地图。

`mapbox` shortcode 有以下命名参数来使用 Mapbox GL JS:

- **lng** _[必需]_（**第一个**位置参数）

    地图初始中心点的经度，以度为单位。

- **lat** _[必需]_（**第二个**位置参数）

    地图初始中心点的纬度，以度为单位。

- **zoom** _[可选]_（**第三个**位置参数）

    地图的初始缩放级别，默认值是 `10`。

- **marked** _[可选]_（**第四个**位置参数）

    是否在地图的初始中心点添加图钉，默认值是 `true`。

- **light-style** _[可选]_（**第五个**位置参数）

    浅色主题的地图样式，默认值是 [Front matter][front-matter] 或者 [主题配置][theme-config] 中设置的值。

- **dark-style** _[可选]_（**第六个**位置参数）

    深色主题的地图样式，默认值是 [Front matter][front-matter] 或者 [主题配置][theme-config] 中设置的值。

- **markers** _[可选]_ （**第七个**位置参数）{{< version 0.3.11 >}}

    地图标记的数组，数组元素是对象，对象包含 `lng`、`lat` 和 `description` 三个属性。

- **navigation** _[可选]_

    是否添加 [NavigationControl][navigationcontrol], 默认值是 [Front matter][front-matter] 或者 [主题配置][theme-config] 中设置的值。

- **geolocate** _[可选]_

    是否添加 [GeolocateControl][geolocatecontrol], 默认值是 [Front matter][front-matter] 或者 [主题配置][theme-config] 中设置的值。

- **scale** _[可选]_

    是否添加 [ScaleControl][scalecontrol], 默认值是 [Front matter][front-matter] 或者 [主题配置][theme-config] 中设置的值。

- **fullscreen** _[可选]_

   是否添加 [FullscreenControl][fullscreencontrol], 默认值是 [Front matter][front-matter] 或者 [主题配置][theme-config] 中设置的值。

- **width** _[可选]_

    地图的宽度，默认值是 `100%`。

- **height** _[可选]_

    地图的高度，默认值是 `20rem`。

## 简单示例

一个简单的 `mapbox` 示例：

```markdown
{{</* mapbox 113.953277 22.559102 11 */>}}
或者
{{</* mapbox lng=113.953277 lat=22.559102 zoom=11 */>}}
```

呈现的输出效果如下：

{{< mapbox 113.953277 22.559102 11 >}}

## 自定义样式

一个带有自定义样式的 `mapbox` 示例：

```markdown
{{</* mapbox -122.252 37.453 10 false "mapbox://styles/mapbox/streets-zh-v1" */>}}
或者
{{</* mapbox lng=-122.252 lat=37.453 zoom=10 marked=false light-style="mapbox://styles/mapbox/streets-zh-v1" */>}}
```

呈现的输出效果如下：

{{< mapbox -122.252 37.453 10 false "mapbox://styles/mapbox/streets-zh-v1?optimize=true" >}}

## 多标记示例

一个带有多个标记的 `mapbox` 示例：

```markdown
{{</* mapbox
  lng=113.953277
  lat=22.559102
  markers="[{\"lng\": 113.81841, \"lat\": 22.637524, \"description\": \"宝安国际机场\"},{\"lng\": 113.953386, \"lat\": 22.559052, \"description\": \"标记 2\"},{\"lng\": 114.035746,\"lat\": 22.615667, \"description\": \"深圳北站\"}]"
*/>}}
```

{{< mapbox
  lng=113.953277
  lat=22.559102
  markers="[{\"lng\": 113.81841, \"lat\": 22.637524, \"description\": \"宝安国际机场\"},{\"lng\": 113.953386, \"lat\": 22.559052, \"description\": \"标记 2\"},{\"lng\": 114.035746,\"lat\": 22.615667, \"description\": \"深圳北站\"}]"
>}}

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 -->
[mapbox]: https://docs.mapbox.com/mapbox-gl-js
[vector-tiles]: https://docs.mapbox.com/help/glossary/vector-tiles/
[style-spec]: https://docs.mapbox.com/mapbox-gl-js/style-spec/
[theme-config]: {{< relref path="/documentation/getting-started/configuration#theme-configuration" >}}
[front-matter]: {{< relref path="/documentation/content-management/introduction#front-matter" >}}
[navigationcontrol]: https://docs.mapbox.com/mapbox-gl-js/api#navigationcontrol
[geolocatecontrol]: https://docs.mapbox.com/mapbox-gl-js/api#geolocatecontrol
[scalecontrol]: https://docs.mapbox.com/mapbox-gl-js/api#scalecontrol
[fullscreencontrol]: https://docs.mapbox.com/mapbox-gl-js/api#fullscreencontrol
