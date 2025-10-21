---
title: Extended Shortcode - aplayer
shortTitle: APlayer
linkTitle: APlayer Shortcode
date: 2025-10-21T06:46:37+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
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

This document will show you how to use the `aplayer` shortcode in FixIt to create advanced audio players.

<!--more-->

{{< version 0.4.0 >}}

If you need more advanced controls (custom playlist, mini mode, custom audio type...) over the music player, you can use the `aplayer` shortcode along with the `audio` shortcode to reach full power of [APlayer.js][aplayer].

The `aplayer` shortcode is used to create an `APlayer` instance, and the `audio` shortcode is used to store data about each music file. Please refer to [APlayer.js documentation][aplayer-docs] for all options.

Example `aplayer` and `audio` input:

```markdown
{{</* aplayer fixed=false mini=false autoplay=false theme="#b7daff" loop="all" order="list" preload="auto" volume=0.7 mutex=true lrcType=1 listFolded=false listMaxHeight="" storageName="aplayer-setting" */>}}
  {{</* audio name="Wavelength-1" artist="oldmanyoung" url="/music/Wavelength.mp3" cover="/images/Wavelength.webp" /*/>}}
  {{</* audio name="Wavelength-2" artist="oldmanyoung" url="/music/Wavelength.mp3" cover="/images/Wavelength.webp" */>}}
    [00:00.00]APlayer audio2
    [00:04.01]is
    [00:08.02]amazing
  {{</* /audio */>}}
{{</* /aplayer */>}}
```

Example `aplayer` and `audio` output:

{{< aplayer fixed=false mini=false autoplay=false theme="#b7daff" loop="all" order="list" preload="auto" volume=0.7 mutex=true lrcType=1 listFolded=false listMaxHeight="" storageName="aplayer-setting" >}}
  {{< audio name="Wavelength-1" artist="oldmanyoung" url="/music/Wavelength.mp3" cover="/images/Wavelength.webp" />}}
  {{< audio name="Wavelength-2" artist="oldmanyoung" url="/music/Wavelength.mp3" cover="/images/Wavelength.webp" >}}
    [00:00.00]APlayer audio2
    [00:04.01]is
    [00:08.02]amazing
  {{< /audio >}}
{{< /aplayer >}}

> [!NOTE]
> Note that these shortcodes cannot be used separately and only named parameters are supported.
>
> If you place the LRC inside the `audio` shortcode, it is passed to the APlayer as a JS string, so the `lrcType` needs to be set to 1. If you set the link to the LRC file through the `lrc` parameter, it will be passed as an LRC file, so the `lrcType` needs to be set to 3.

<!-- link reference definition -->
[aplayer]: https://github.com/MoePlayer/APlayer
[aplayer-docs]: https://aplayer.js.org/#/home?id=options
