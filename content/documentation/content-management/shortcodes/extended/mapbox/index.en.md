---
title: Extended Shortcode - mapbox
date: 2023-02-24T22:45:45+08:00
type: posts
aliases:
  - /extended-shortcode-mapbox/
author:
  name: Lruihao
  link: https://lruihao.cn
description: The mapbox shortcode supports interactive maps in Hugo with Mapbox GL JS
  library.
resources:
  - name: featured-image
    src: featured-image.jpg
tags:
  - Shortcodes
  - Content
categories:
  - Documentation
hiddenFromHomePage: true
---

{{< version 0.2.0 >}}

The `mapbox` shortcode supports interactive maps in Hugo with [Mapbox GL JS][mapbox] library.

<!--more-->

[Mapbox GL JS][mapbox] is a JavaScript library that uses WebGL to render interactive maps from [vector tiles][vector-tiles] and [Mapbox styles][style-spec].

The `mapbox` shortcode has the following named parameters to use Mapbox GL JS:

* **lng** *[required]* (**first** positional parameter)

    Longitude of the inital centerpoint of the map, measured in degrees.

* **lat** *[required]* (**second** positional parameter)

    Latitude of the inital centerpoint of the map, measured in degrees.

* **zoom** *[optional]* (**third** positional parameter)

    The initial zoom level of the map, default value is `10`.

* **marked** *[optional]* (**fourth** positional parameter)

    Whether to add a marker at the inital centerpoint of the map, default value is `true`.

* **light-style** *[optional]* (**fifth** positional parameter)

    Style for the light theme, default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

* **dark-style** *[optional]* (**sixth** positional parameter)

    Style for the dark theme, default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

* **navigation** *[optional]*

    Whether to add [NavigationControl][navigationcontrol], default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

* **geolocate** *[optional]*

    Whether to add [GeolocateControl][geolocatecontrol], default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

* **scale** *[optional]*

    Whether to add [ScaleControl][scalecontrol], default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

* **fullscreen** *[optional]*

    Whether to add [FullscreenControl][fullscreencontrol], default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

* **width** *[optional]*

    Width of the map, default value is `100%`.

* **height** *[optional]*

    Height of the map, default value is `20rem`.

Example simple `mapbox` input:

```go-html-template
{{</* mapbox 113.953277 22.559102 11 */>}}
Or
{{</* mapbox lng=113.953277 lat=22.559102 zoom=11 */>}}
```

The rendered output looks like this:

{{< mapbox 113.953277 22.559102 11 >}}

Example `mapbox` input with the custom style:

```go-html-template
{{</* mapbox -122.252 37.453 10 false "mapbox://styles/mapbox/navigation-preview-day-v4" "mapbox://styles/mapbox/navigation-preview-night-v4" */>}}
Or
{{</* mapbox lng=-122.252 lat=37.453 zoom=10 marked=false light-style="mapbox://styles/mapbox/navigation-preview-day-v4" dark-style="mapbox://styles/mapbox/navigation-preview-night-v4" */>}}
```

The rendered output looks like this:

{{< mapbox -122.252 37.453 10 false "mapbox://styles/mapbox/navigation-preview-day-v4?optimize=true" "mapbox://styles/mapbox/navigation-preview-night-v4?optimize=true" >}}

[mapbox]: https://docs.mapbox.com/mapbox-gl-js
[vector-tiles]: https://docs.mapbox.com/help/glossary/vector-tiles/
[style-spec]: https://docs.mapbox.com/mapbox-gl-js/style-spec/
[theme-config]: {{< relref path="/documentation/basics#theme-configuration" >}}
[front-matter]: {{< relref path="/documentation/content-management/introduction#front-matter" >}}
[navigationcontrol]: https://docs.mapbox.com/mapbox-gl-js/api#navigationcontrol
[geolocatecontrol]: https://docs.mapbox.com/mapbox-gl-js/api#geolocatecontrol
[scalecontrol]: https://docs.mapbox.com/mapbox-gl-js/api#scalecontrol
[fullscreencontrol]: https://docs.mapbox.com/mapbox-gl-js/api#fullscreencontrol