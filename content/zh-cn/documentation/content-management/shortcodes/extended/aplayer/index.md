---
title: 扩展 Shortcode - aplayer
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

这篇文档将向你展示如何在 FixIt 主题中使用 `aplayer` shortcode 来创建高级音频播放器。

<!--more-->

{{< version 0.4.0 >}}

如果你需要针对音乐播放器的更多自定义选项（如自定义歌单，迷你模式，自定义音乐类型以及更多...），你可以使用 `aplayer` shortcode 配合 `audio` shortcode 以发挥 [APlayer.js][aplayer] 的全部功能。

`aplayer` shortcode 用于创建一个 `APlayer` 播放器实例，`audio` shortcode 则用于设置音乐文件的相关信息。请查看 [APlayer.js 的文档][aplayer-docs] 来了解所有的可配置项。

一个 `aplayer` 和 `audio` 的示例：

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

呈现的输出效果如下：

{{< aplayer fixed=false mini=false autoplay=false theme="#b7daff" loop="all" order="list" preload="auto" volume=0.7 mutex=true lrcType=1 listFolded=false listMaxHeight="" storageName="aplayer-setting" >}}
  {{< audio name="Wavelength-1" artist="oldmanyoung" url="/music/Wavelength.mp3" cover="/images/Wavelength.webp" />}}
  {{< audio name="Wavelength-2" artist="oldmanyoung" url="/music/Wavelength.mp3" cover="/images/Wavelength.webp" >}}
    [00:00.00]APlayer audio2
    [00:04.01]is
    [00:08.02]amazing
  {{< /audio >}}
{{< /aplayer >}}

> [!NOTE]
> 需要注意的是，这两个 shortcodes 并不能单独使用，并且必须使用命名参数来设置它们的属性。
>
> 如果你将 LRC 放置于 `audio` shortcode 之中，它会通过 JS 字符串方式传递给 APlayer，所以你需要将 `lrcType` 设置为 1。如果你通过配置 `lrc` 参数的方式来设置 LRC 文件的链接，那么它将会被通过 LRC 文件方式传递给 APlayer，则 `lrcType` 需要被设置为 3。

<!-- link reference definition -->
[aplayer]: https://github.com/MoePlayer/APlayer
[aplayer-docs]: https://aplayer.js.org/#/home?id=options
