---
title: Code Fences Extended - Timeline
linkTitle: Timeline support
date: 2024-07-20T19:25:31+08:00
description: This document will show you how to create a Timeline in FixIt using the code fences extended syntax.
categories:
  - Documentation
collections:
  - Content Management
tags:
  - Timeline
  - Diagram
  - Markdown
  - Content
resources:
  - name: featured-image
    src: featured-image.webp
---

<!--more-->

## Basic Usage

{{< version 0.3.9 >}}

Timeline can be split into multiple events in ascending or descending. Timestamp and content are required fields.

An example of a Timeline arranged in ascending order:

```timeline
events:
  - timestamp: 2024-07-11
    content: Success
  - timestamp: 2024-07-13
    content: Approved
  - timestamp: 2024-07-15
    content: Event start
```

{{< details "View source" false "center" >}}

````markdown {mode="mac", lineNos=false}
```timeline
events:
  - timestamp: 2024-07-11
    content: Success
  - timestamp: 2024-07-13
    content: Approved
  - timestamp: 2024-07-15
    content: Event start
```
````

{{< /details >}}

An example of a Timeline arranged in descending order:

```timeline {reverse=true}
events:
  - timestamp: 2024-07-11
    content: Success
  - timestamp: 2024-07-13
    content: Approved
  - timestamp: 2024-07-15
    content: Event start
```

{{< details "View source" false "center" >}}

````markdown {mode="mac", lineNos=false}
```timeline {reverse=true}
events:
  - timestamp: 2024-07-11
    content: Success
  - timestamp: 2024-07-13
    content: Approved
  - timestamp: 2024-07-15
    content: Event start
```
````

{{< /details >}}

## Animation Support

Timeline supports animation, and you can enable or disable it using the `animation` parameter.

```timeline {animation=true}
events:
  - timestamp: 2024-07-11
    content: Success
  - timestamp: 2024-07-13
    content: Approved
  - timestamp: 2024-07-15
    content: Event start
```

{{< details "View source" false "center" >}}

````markdown {mode="mac", lineNos=false}
```timeline {animation=true}
events:
  - timestamp: 2024-07-11
    content: Success
  - timestamp: 2024-07-13
    content: Approved
  - timestamp: 2024-07-15
    content: Event start
```
````

{{< /details >}}

## Custom node

Size, color, type and style can be customized in node.

```timeline
events:
  - timestamp: 2024-07-19 20:30
    content: Custom type and style
    type: primary
    node: dot
  - timestamp: 2024-07-19 20:30
    content: Custom color
    color: "#0CBD87"
  - timestamp: 2024-07-19 20:30
    content: Custom size
    size: large
  - timestamp: 2024-07-20 20:30
    content: Default node
```

{{< details "View source" false "center" >}}

````markdown {mode="mac", lineNos=false}
```timeline
events:
  - timestamp: 2024-07-19 20:30
    content: Custom type and style
    type: primary
    node: dot
  - timestamp: 2024-07-19 20:30
    content: Custom color
    color: "#0CBD87"
  - timestamp: 2024-07-19 20:30
    content: Custom size
    size: large
  - timestamp: 2024-07-20 20:30
    content: Default node
```
````

{{< /details >}}

## Custom timestamp

Timestamp can be placed on top of content when content is too high.

```timeline {placement=top}
events:
  - timestamp: 2024-07-19 20:30
    content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit magni soluta esse placeat facilis porro vitae facere explicabo. Architecto exercitationem accusamus omnis reiciendis beatae et inventore deserunt sequi recusandae.
  - timestamp: 2024-07-19 20:30
    content: Id amet sapiente quod temporibus molestiae? Quasi officia placeat magnam sapiente! Esse iure ipsam quia laboriosam dolorem at dolor est porro placeat, sequi magni maxime vel sint architecto. Placeat, laboriosam?
  - timestamp: 2024-07-19 20:30
    content: Expedita delectus rerum vitae consequuntur quam, tempore fugit debitis voluptatem praesentium maiores dolorem possimus illum adipisci facere veniam voluptatibus aliquam ipsa ducimus nam impedit cumque! Rerum molestias praesentium expedita! Itaque.
```

{{< details "View source" false "center" >}}

````markdown {mode="mac", lineNos=false}
```timeline {placement=top}
events:
  - timestamp: 2024-07-19 20:30
    content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit magni soluta esse placeat facilis porro vitae facere explicabo. Architecto exercitationem accusamus omnis reiciendis beatae et inventore deserunt sequi recusandae.
  - timestamp: 2024-07-19 20:30
    content: Id amet sapiente quod temporibus molestiae? Quasi officia placeat magnam sapiente! Esse iure ipsam quia laboriosam dolorem at dolor est porro placeat, sequi magni maxime vel sint architecto. Placeat, laboriosam?
  - timestamp: 2024-07-19 20:30
    content: Expedita delectus rerum vitae consequuntur quam, tempore fugit debitis voluptatem praesentium maiores dolorem possimus illum adipisci facere veniam voluptatibus aliquam ipsa ducimus nam impedit cumque! Rerum molestias praesentium expedita! Itaque.
```
````

{{< /details >}}

## MD/HTML Support

Markdown or HTML format is supported in content.

```timeline {reverse=true}
events:
  - timestamp: 2021-12-18T16:15:22+08:00
    content: "Feat: [LoveIt](https://github.com/dillonzq/LoveIt) => [FixIt](https://github.com/hugo-fixit/FixIt)"
    type: primary
  - timestamp: 2021-12-19T19:48:23+08:00
    content: ":arrow_up: Chore: update 0.2.11"
  - timestamp: 2021-12-19T19:48:23+08:00
    content: "<span class=\"text-secondary\">:(fa-regular fa-comment-dots): Developed for a long time...</span>"
    hideTimestamp: true
    type: secondary
  - timestamp: 2024-01-01T14:54:19+08:00
    content: ":bookmark: Chore(release): 0.3.0"
    type: success
  - timestamp: 2024-05-20T14:54:19+08:00
    content: "<span class=\"text-secondary\">:(fa-regular fa-comment-dots): Half a year later...</span>"
    hideTimestamp: true
    type: secondary
  - timestamp: 2024-07-20T22:28:19+08:00
    content: ":tada: Feat: add timeline support for code blocks"
    type: danger
```

{{< details "View source" false "center" >}}

````markdown {mode="mac", lineNos=false}
```timeline {reverse=true}
events:
  - timestamp: 2021-12-18T16:15:22+08:00
    content: "Feat: [LoveIt](https://github.com/dillonzq/LoveIt) => [FixIt](https://github.com/hugo-fixit/FixIt)"
    type: primary
  - timestamp: 2021-12-19T19:48:23+08:00
    content: ":arrow_up: Chore: update 0.2.11"
  - timestamp: 2021-12-19T19:48:23+08:00
    content: "<span class=\"text-secondary\">{?:}(fa-regular fa-comment-dots): Developed for a long time...</span>"
    hideTimestamp: true
    type: secondary
  - timestamp: 2024-01-01T14:54:19+08:00
    content: ":bookmark: Chore(release): 0.3.0"
    type: success
  - timestamp: 2024-05-20T14:54:19+08:00
    content: "<span class=\"text-secondary\">{?:}(fa-regular fa-comment-dots): Half a year later...</span>"
    hideTimestamp: true
    type: secondary
  - timestamp: 2024-07-20T22:28:19+08:00
    content: ":tada: Feat: add timeline support for code blocks"
    type: danger
```
````

{{< /details >}}

## Multiple Formats

The Timeline data supports three formats: `JSON`, `YAML`, and `TOML`.

Example Timeline input in `JSON` format:

```timeline
{
  "events": [
    {
      "timestamp": "2024-07-11",
      "content": "Success"
    },
    {
      "timestamp": "2024-07-13",
      "content": "Approved"
    },
    {
      "timestamp": "2024-07-15",
      "content": "Event start"
    }
  ]
}
```

{{< details "View source" false "center" >}}

````markdown {mode="mac", lineNos=false}
```timeline
{
  "events": [
    {
      "timestamp": "2024-07-11",
      "content": "Success"
    },
    {
      "timestamp": "2024-07-13",
      "content": "Approved"
    },
    {
      "timestamp": "2024-07-15",
      "content": "Event start"
    }
  ]
}
```
````

{{< /details >}}

Example Timeline input in `YAML` format:

```timeline
events:
  - timestamp: 2024-07-11
    content: Success
  - timestamp: 2024-07-13
    content: Approved
  - timestamp: 2024-07-15
    content: Event start
```

{{< details "View source" false "center" >}}

````markdown {mode="mac", lineNos=false}
```timeline
events:
  - timestamp: 2024-07-11
    content: Success
  - timestamp: 2024-07-13
    content: Approved
  - timestamp: 2024-07-15
    content: Event start
```
````

{{< /details >}}

Example Timeline input in `TOML` format:

```timeline
[[events]]
timestamp = "2024-07-11"
content = "Success"

[[events]]
timestamp = "2024-07-13"
content = "Approved"

[[events]]
timestamp = "2024-07-15"
content = "Event start"
```

{{< details "View source" false "center" >}}

````markdown {mode="mac", lineNos=false}
```timeline
[[events]]
timestamp = "2024-07-11"
content = "Success"

[[events]]
timestamp = "2024-07-13"
content = "Approved"

[[events]]
timestamp = "2024-07-15"
content = "Event start"
```
````

{{< /details >}}

## Site Data

{{< version 0.3.20 >}}

Support obtaining data from Hugo [site data][hugo-data], with data files defined in the `data/timeline` directory, and the format supports `JSON`, `YAML`, and `TOML`.

For example, if you have a file `data/timeline/example.yml`, you can use the `data` parameter to reference it:

````markdown
```timeline {data="example"}
```
````

The rendered output looks like this:

```timeline {data="example"}
```

## File Data

{{< version 0.3.20 >}}

Supports getting data from files in Hugo [page-resources] or `assets`, and the format supports `JSON`, `YAML` or `TOML` format.

For example, the current page structure is as follows:

```plain
timeline/
├── data/
│   └── example.yml
├── featured-image.webp
└── index.md
```

You can use the `file` parameter to get data from the file:

````markdown
```timeline {file="data/example.yml"}
```
````

The rendered output looks like this:

```timeline {file="data/example.yml"}
```

## Parameters

### Timeline

| Parameter | Description                                                       | Type    | Optional values        | Default |
| :-------- | :---------------------------------------------------------------- | :------ | :--------------------- | :------ |
| reverse   | whether the node is ascending or descending, default is ascending | boolean | -                      | false   |
| placement | position of timestamp                                             | string  | top / bottom           | bottom  |
| animation | whether to enable animation                                       | boolean | -                      | false   |
| size      | node size                                                         | string  | small / medium / large | medium  |
| node      | node style                                                        | string  | circle / dot           | circle  |
| width     | container width                                                   | string  | -                      | -       |
| height    | container height                                                  | string  | -                      | -       |
| class     | container classname                                               | string  | -                      | -       |

### Timeline Events

|          | Parameter     | Description               | Type    | Optional values                                         | Default |
| :------: | :------------ | :------------------------ | :------ | :------------------------------------------------------ | :------ |
| required | timestamp     | timestamp                 | string  | -                                                       | -       |
| required | content       | content                   | string  | -                                                       | -       |
| optional | hideTimestamp | whether to hide timestamp | boolean | -                                                       | false   |
| optional | placement     | position of timestamp     | string  | top / bottom                                            | bottom  |
| optional | color         | node color                | string  | hsl / hsv / hex / rgb                                   | -       |
| optional | type          | node type                 | string  | primary / secondary / success / info / warning / danger | -       |
| optional | size          | node size                 | string  | small / medium / large                                  | medium  |
| optional | node          | node style                | string  | circle / dot                                            | circle  |

<!-- link reference definition -->
[hugo-data]: https://gohugo.io/methods/site/data/
[page-resources]: https://gohugo.io/content-management/page-resources/
