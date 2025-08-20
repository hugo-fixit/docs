---
title: 扩展 Shortcode - mermaid
shortTitle: Mermaid
linkTitle: Mermaid Shortcode
date: 2023-02-24T22:11:45+08:00
aliases:
  - /zh-cn/extended-shortcode-mermaid/
author:
  name: Lruihao
  link: https://lruihao.cn
description: mermaid shortcode 使用 Mermaid 库提供绘制图表和流程图的功能。
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

{{< version 0.4.0 changed >}}

`mermaid` shortcode 使用 [Mermaid][mermaid] 库提供绘制图表和流程图的功能。

<!--more-->

[Mermaid][mermaid] 是一个可以帮助你在文章中绘制图表和流程图的库，类似 Markdown 的语法。

## 用法

### 语法 {#syntax}

只需将你的 mermaid 代码插入 `mermaid` shortcode 中即可。

```markdown
{{</* mermaid */>}}
// mermaid diagram code here
{{</* /mermaid */>}}
```

> [!TIP] 推荐使用 **代码块扩展语法** `` ```mermaid `` 代替 shortcode。
> 你可以在 [图表支持 - Mermaid][diagrams-support-mermaid] 页面找到更多的例子和用法信息。

### 配置 {#configuration}

CDN
: 你可使用 `params.mermaid` 在配置文件中指定你想使用的 Mermaid 和 ZenUML 版本。例如：

```toml
[params]
  [params.mermaid]
    cdn = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs"
    zenuml = "https://cdn.jsdelivr.net/npm/@mermaid-js/mermaid-zenuml@0.2/dist/mermaid-zenuml.esm.min.mjs"
```

> [!TIP]
> 只有设置了 ZenUML CDN，才能使用 ZenUML 功能。

look
: Mermaid 图表在 FixIt 主题中默认是手绘样式，如果你更喜欢经典样式，可以在配置文件中修改：

```toml
[params]
  [params.mermaid]
    look = "classic"
```

### 主题 {#themes}

以下是可用的主题：

1. [**default**][theme-default] - 这是所有图表的默认主题。
2. [**neutral**][theme-neutral] - 这个主题非常适合黑白打印的文档。
3. [**dark**][theme-dark] - 这个主题适合与深色元素或暗模式搭配使用。
4. [**forest**][theme-forest] - 这个主题包含各种绿色。
5. [**base**][theme-base] - 这是唯一可以修改的主题。使用此主题作为自定义的基础。

请前往 [Theme Configuration | Mermaid][mermaid-theming] 页面，了解有关动态和集成主题配置的更多信息。

站点范围主题
: 你可以通过 `hugo.toml` 中的 `params.mermaid.themes` 参数全局配置 Mermaid 主题。

```toml
[params]
  [params.mermaid]
    themes = ["default", "dark"]
```

图表特定主题
: 要自定义单个图表的主题，请使用 frontmatter 配置。

以下是使用 frontmatter 配置将主题设置为 `forest` 的示例代码：

```markdown
{{</* mermaid */>}}
---
config:
  theme: 'forest'
---
  graph TD
    a --> b
{{</* /mermaid */>}}
```

{{< mermaid >}}
---
config:
  theme: 'forest'
---
  graph TD
    a --> b
{{< /mermaid >}}

## 流程图 {#flowchart}

一个 **流程图** `mermaid` 示例：

```markdown
{{</* mermaid */>}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{</* /mermaid */>}}
```

呈现的输出效果如下：

{{< mermaid >}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}

## 时序图 {#sequence-diagram}

一个 **时序图** `mermaid` 示例：

```markdown
{{</* mermaid */>}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{</* /mermaid */>}}
```

呈现的输出效果如下：

{{< mermaid >}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{< /mermaid >}}

## 类图 {#class-diagram}

一个 **类图** `mermaid` 示例：

```markdown
{{</* mermaid */>}}
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
{{</* /mermaid */>}}
```

呈现的输出效果如下：

{{< mermaid >}}
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
{{< /mermaid >}}

## 状态图 {#state-diagram}

一个 **状态图** `mermaid` 示例：

```markdown
{{</* mermaid */>}}
stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
{{</* /mermaid */>}}
```

呈现的输出效果如下：

{{< mermaid >}}
stateDiagram-v2
    [_] --> Still
    Still --> [_]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
{{< /mermaid >}}

## 实体关系图 {#entity-relationship-diagram}

一个 **实体关系图** `mermaid` 示例：

```markdown
{{</* mermaid */>}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{</* /mermaid */>}}
```

呈现的输出效果如下：

{{< mermaid >}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{< /mermaid >}}

## 用户体验旅程图 {#user-journey}

一个 **用户体验旅程图** `mermaid` 示例：

```markdown
{{</* mermaid */>}}
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
{{</* /mermaid */>}}
```

呈现的输出效果如下：

{{< mermaid >}}
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
{{< /mermaid >}}

## 甘特图 {#gantt}

一个 **甘特图** `mermaid` 示例：

```markdown
{{</* mermaid */>}}
gantt
dateFormat YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,   des1, 2014-01-06,2014-01-08
Active task               :active, des2, 2014-01-09, 3d
Future task               :        des3, after des2, 5d
Future task2              :        des4, after des3, 5d
{{</* /mermaid */>}}
```

呈现的输出效果如下：

{{< mermaid >}}
gantt
dateFormat YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,   des1, 2014-01-06,2014-01-08
Active task               :active, des2, 2014-01-09, 3d
Future task               :        des3, after des2, 5d
Future task2              :        des4, after des3, 5d
{{< /mermaid >}}

## 饼图 {#pie}

一个 **饼图** `mermaid` 示例：

```markdown
{{</* mermaid */>}}
pie
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
{{</* /mermaid */>}}
```

呈现的输出效果如下：

{{< mermaid >}}
pie
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
{{< /mermaid >}}

## 依赖图 {#requirement-diagram}

一个 **依赖图** `mermaid` 示例：

```markdown
{{</* mermaid */>}}
requirementDiagram

requirement test_req {
id: 1
text: the test text.
risk: high
verifymethod: test
}

element test_entity {
type: simulation
}

test_entity - satisfies -> test_req
{{</* /mermaid */>}}
```

呈现的输出效果如下：

{{< mermaid >}}
requirementDiagram

requirement test_req {
id: 1
text: the test text.
risk: high
verifymethod: test
}

element test_entity {
type: simulation
}

test_entity - satisfies -> test_req
{{< /mermaid >}}

## Git 图 {#git-graph}

一个 **Git 图** `mermaid` 示例：

```markdown
{{</* mermaid */>}}
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    commit
{{</* /mermaid */>}}
```

呈现的输出效果如下：

{{< mermaid >}}
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    commit
{{< /mermaid >}}

<!-- link reference definition -->
<!-- markdownlint-disable-file MD003 MD022 MD049 reference-links-images -->
[mermaid]: https://mermaid.js.org/
[theme-default]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-default.js
[theme-neutral]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-neutral.js
[theme-dark]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-dark.js
[theme-forest]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-forest.js
[theme-base]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-base.js
[mermaid-theming]: https://mermaid.js.org/config/theming.html
[diagrams-support-mermaid]: {{< relref "/documentation/content-management/diagrams-support/mermaid" >}}
