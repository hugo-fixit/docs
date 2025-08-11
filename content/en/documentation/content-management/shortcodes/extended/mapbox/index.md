---
title: Extended Shortcode - mapbox
shortTitle: Mapbox
linkTitle: Mapbox Shortcode
date: 2023-02-24T22:45:45+08:00
aliases:
  - /extended-shortcode-mapbox/
author:
  name: Lruihao
  link: https://lruihao.cn
description: The mapbox shortcode supports interactive maps in Hugo with Mapbox GL JS
  library.
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

The `mapbox` shortcode supports interactive maps in Hugo with [Mapbox GL JS][mapbox] library.

<!--more-->

## Parameters

[Mapbox GL JS][mapbox] is a JavaScript library that uses WebGL to render interactive maps from [vector tiles][vector-tiles] and [Mapbox styles][style-spec].

The `mapbox` shortcode has the following named parameters to use Mapbox GL JS:

- **lng** _[required]_ (**first** positional parameter)

    Longitude of the inital centerpoint of the map, measured in degrees.

- **lat** _[required]_ (**second** positional parameter)

    Latitude of the inital centerpoint of the map, measured in degrees.

- **zoom** _[optional]_ (**third** positional parameter)

    The initial zoom level of the map, default value is `10`.

- **marked** _[optional]_ (**fourth** positional parameter)

    Whether to add a marker at the inital centerpoint of the map, default value is `true`.

- **light-style** _[optional]_ (**fifth** positional parameter)

    Style for the light theme, default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

- **dark-style** _[optional]_ (**sixth** positional parameter)

    Style for the dark theme, default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

- **markers** _[optional]_ (**seventh** positional parameter) {{< version 0.3.11 >}}

    An array of map markers, each element in the array is an object that contains three properties: `lng`, `lat`, and `description`.

- **navigation** _[optional]_

    Whether to add [NavigationControl][navigationcontrol], default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

- **geolocate** _[optional]_

    Whether to add [GeolocateControl][geolocatecontrol], default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

- **scale** _[optional]_

    Whether to add [ScaleControl][scalecontrol], default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

- **fullscreen** _[optional]_

    Whether to add [FullscreenControl][fullscreencontrol], default value is the value set in the [front matter][front-matter] or the [theme configuration][theme-config].

- **width** _[optional]_

    Width of the map, default value is `100%`.

- **height** _[optional]_

    Height of the map, default value is `20rem`.

## Simple Example

Example simple `mapbox` input:

```markdown
{{</* mapbox 113.953277 22.559102 11 */>}}
Or
{{</* mapbox lng=113.953277 lat=22.559102 zoom=11 */>}}
```

The rendered output looks like this:

{{< mapbox 113.953277 22.559102 11 >}}

## Custom Style Example

Example `mapbox` input with the custom style:

```markdown
{{</* mapbox -122.252 37.453 10 false "mapbox://styles/mapbox/navigation-preview-day-v4" "mapbox://styles/mapbox/navigation-preview-night-v4" */>}}
Or
{{</* mapbox lng=-122.252 lat=37.453 zoom=10 marked=false light-style="mapbox://styles/mapbox/navigation-preview-day-v4" dark-style="mapbox://styles/mapbox/navigation-preview-night-v4" */>}}
```

The rendered output looks like this:

{{< mapbox -122.252 37.453 10 false "mapbox://styles/mapbox/navigation-preview-day-v4?optimize=true" "mapbox://styles/mapbox/navigation-preview-night-v4?optimize=true" >}}

## Multiple Markers Example

Example `mapbox` input with multiple markers:

```markdown
{{</* mapbox
  lng=113.953277
  lat=22.559102
  markers="[{\"lng\": 113.81841, \"lat\": 22.637524, \"description\": \"Bao'an International Airport\"},{\"lng\": 113.953386, \"lat\": 22.559052, \"description\": \"Marker 2\"},{\"lng\": 114.035746,\"lat\": 22.615667, \"description\": \"Shenzhen North railway station\"}]"
*/>}}
```

{{< mapbox
  lng=113.953277
  lat=22.559102
  markers="[{\"lng\": 113.81841, \"lat\": 22.637524, \"description\": \"Bao'an International Airport\"},{\"lng\": 113.953386, \"lat\": 22.559052, \"description\": \"Marker 2\"},{\"lng\": 114.035746,\"lat\": 22.615667, \"description\": \"Shenzhen North railway station\"}]"
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
