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

> [!TIP] 推荐使用 **代码块扩展语法** `` ```mermaid `` 代替 shortcode。
> 你可以在 [图表支持 - Mermaid][diagrams-support-mermaid] 页面找到更多的例子和用法信息。

### 语法 {#syntax}

只需将你的 mermaid 代码插入 `mermaid` shortcode 中即可。

```markdown
{{</* mermaid */>}}
// mermaid diagram code here
{{</* /mermaid */>}}
```

### 配置 {#configuration}

有关详细的配置选项、主题，请参考 [图表支持 - Mermaid][diagrams-support-mermaid] 页面。

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
[diagrams-support-mermaid]: {{< relref "/documentation/content-management/diagrams-support/mermaid" >}}
