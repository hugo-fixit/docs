---
title: 扩展 Shortcode - music
shortTitle: Music
linkTitle: Music Shortcode
date: 2023-02-24T22:50:50+08:00
aliases:
  - /zh-cn/extended-shortcode-music/
author:
  name: Lruihao
  link: https://lruihao.cn
description: music shortcode 基于 APlayer 和 MetingJS 库提供了一个内嵌的响应式音乐播放器。
resources:
  - name: featured-image
    src: featured-image.png
tags:
  - Shortcodes
  - Content
categories:
  - Documentation
collections:
  - Extended Shortcodes
---

`music` shortcode 基于 [APlayer][aplayer] 和 [MetingJS][metingjs] 提供了一个内嵌的响应式音乐播放器。

<!--more-->

有三种方式使用 `music` shortcode。

## 自定义音乐 URL {#custom-music-url}

支持 [本地资源引用][contents-organization] 的完整用法。

`music` shortcode 有以下命名参数来使用自定义音乐 URL:

- **server** _[必需]_

    音乐的链接。

- **type** _[可选]_

    音乐的名称。

- **artist** _[可选]_

    音乐的创作者。

- **cover** _[可选]_

    音乐的封面链接。

一个使用自定义音乐 URL 的 `music` 示例：

```markdown
{{</* music url="/music/Wavelength.mp3" name=Wavelength artist=oldmanyoung cover="/images/Wavelength.webp" */>}}
```

呈现的输出效果如下：

{{< music url="/music/Wavelength.mp3" name=Wavelength artist=oldmanyoung cover="/images/Wavelength.webp" >}}

## 音乐平台 URL 的自动识别 {#automatic-identification}

`music` shortcode 有一个命名参数来使用音乐平台 URL 的自动识别：

- **auto** _[必需]]_（**第一个**位置参数）

    用来自动识别的音乐平台 URL, 支持 `netease`, `tencent` 和 `xiami` 平台。

一个使用音乐平台 URL 的自动识别的 `music` 示例：

```markdown
{{</* music auto="https://music.163.com/#/playlist?id=60198" */>}}
或者
{{</* music "https://music.163.com/#/playlist?id=60198" */>}}
```

呈现的输出效果如下：

{{< music auto="https://music.163.com/#/playlist?id=60198" >}}

## 自定义音乐平台，类型和 ID {#custom-server}

`music` shortcode 有以下命名参数来使用自定义音乐平台：

- **server** _[必需]_（**第一个**位置参数）

    [`netease`, `tencent`, `kugou`, `xiami`, `baidu`]

    音乐平台。

- **type** _[必需]_（**第二个**位置参数）

    [`song`, `playlist`, `album`, `search`, `artist`]

    音乐类型。

- **id** _[必需]_（**第三个**位置参数）

    歌曲 ID, 或者播放列表 ID, 或者专辑 ID, 或者搜索关键词，或者创作者 ID。

一个使用自定义音乐平台的 `music` 示例：

```markdown
{{</* music server="netease" type="song" id="1868553" */>}}
或者
{{</* music netease song 1868553 */>}}
```

呈现的输出效果如下：

{{< music netease song 1868553 >}}

## 其它参数 {#other-parameters}

`music` shortcode 有一些可以应用于以上三种方式的其它命名参数：

- **theme** _[可选]_

    音乐播放器的主题色，默认值是 `#448aff`。

- **fixed** _[可选]_

    是否开启固定模式，默认值是 `false`。

- **mini** _[可选]_

    是否开启迷你模式，默认值是 `false`。

- **autoplay** _[可选]_

    是否自动播放音乐，默认值是 `false`。

- **volume** _[可选]_

    第一次打开播放器时的默认音量，会被保存在浏览器缓存中，默认值是 `0.7`。

- **mutex** _[可选]_

    是否自动暂停其它播放器，默认值是 `true`。

`music` shortcode 还有一些只适用于音乐列表方式的其它命名参数：

- **loop** _[可选]_

    [`all`, `one`, `none`]

    音乐列表的循环模式，默认值是 `none`。

- **order** _[可选]_

    [`list`, `random`]

    音乐列表的播放顺序，默认值是 `list`。

- **list-folded** _[可选]_

    初次打开的时候音乐列表是否折叠，默认值是 `false`。

- **list-max-height** _[可选]_

    音乐列表的最大高度，默认值是 `340px`。

<!-- link reference definition -->
<!-- markdownlint-disable-file reference-links-images -->
[aplayer]: https://github.com/MoePlayer/APlayer
[metingjs]: https://github.com/metowolf/MetingJS
[contents-organization]: {{< relref path="/documentation/content-management/introduction#contents-organization" >}}
