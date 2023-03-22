---
title: 扩展 Shortcode - mermaid
date: 2023-02-24T22:11:45+08:00
type: posts
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
hiddenFromHomePage: true
---

{{< version 0.2.15 changed >}}

`mermaid` shortcode 使用 [Mermaid][mermaid] 库提供绘制图表和流程图的功能。

<!--more-->

[Mermaid][mermaid] 是一个可以帮助你在文章中绘制图表和流程图的库, 类似 Markdown 的语法。

只需将你的 mermaid 代码插入 `mermaid` shortcode 中即可。

## 流程图 {#flowchart}

一个 **流程图** `mermaid` 示例:

```markdown
{{</* mermaid */>}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{</* /mermaid */>}}
```

呈现的输出效果如下:

{{< mermaid >}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}

## 时序图 {#sequence-diagram}

一个 **时序图** `mermaid` 示例:

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

呈现的输出效果如下:

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

一个 **类图** `mermaid` 示例:

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

呈现的输出效果如下:

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
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
{{< /mermaid >}}

## 实体关系图 {#entity-relationship-diagram}

一个 **实体关系图** `mermaid` 示例:

```markdown
{{</* mermaid */>}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{</* /mermaid */>}}
```

呈现的输出效果如下:

{{< mermaid >}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{< /mermaid >}}

## 用户体验旅程图 {#user-journey}

一个 **用户体验旅程图** `mermaid` 示例:

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

呈现的输出效果如下:

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

一个 **甘特图** `mermaid` 示例:

```markdown
{{</* mermaid */>}}
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2              :         des4, after des3, 5d
{{</* /mermaid */>}}
```

呈现的输出效果如下:

{{< mermaid >}}
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2              :         des4, after des3, 5d
{{< /mermaid >}}

## 饼图 {#pie}

一个 **饼图** `mermaid` 示例:

```markdown
{{</* mermaid */>}}
pie
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
{{</* /mermaid */>}}
```

呈现的输出效果如下:

{{< mermaid >}}
pie
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
{{< /mermaid >}}

## 依赖图 {#requirement-diagram}

一个 **依赖图** `mermaid` 示例:

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

呈现的输出效果如下:

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

一个 **Git 图** `mermaid` 示例:

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

呈现的输出效果如下:

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

## C4 图 :warning: {#c4-diagrams}

> C4 图：目前这是一个实验性的图表。语法和属性可能会在未来的版本中发生变化。当语法稳定后，将会提供适当的文档说明。

Mermaid 的 C4 图语法与 PlantUML 兼容。以下是示例：

```markdown
{{</* mermaid */>}}
    C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, "BankBoundary0") {
        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
        Person(customerB, "Banking Customer B")
        Person_Ext(customerC, "Banking Customer C", "desc")

        Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

        Enterprise_Boundary(b1, "BankBoundary") {

          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

          System_Boundary(b2, "BankBoundary2") {
            System(SystemA, "Banking System A")
            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")
          }

          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

          Boundary(b3, "BankBoundary3", "boundary") {
            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")
            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
          }
        }
      }

      BiRel(customerA, SystemAA, "Uses")
      BiRel(SystemAA, SystemE, "Uses")
      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
      Rel(SystemC, customerA, "Sends e-mails to")

      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
{{</* /mermaid */>}}
```

{{< mermaid >}}
    C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, "BankBoundary0") {
        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
        Person(customerB, "Banking Customer B")
        Person_Ext(customerC, "Banking Customer C", "desc")

        Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

        Enterprise_Boundary(b1, "BankBoundary") {

          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

          System_Boundary(b2, "BankBoundary2") {
            System(SystemA, "Banking System A")
            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")
          }

          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

          Boundary(b3, "BankBoundary3", "boundary") {
            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")
            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
          }
        }
      }

      BiRel(customerA, SystemAA, "Uses")
      BiRel(SystemAA, SystemE, "Uses")
      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
      Rel(SystemC, customerA, "Sends e-mails to")

      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
{{< /mermaid >}}

## Mindmap :warning:

- [ ] Bump Mermaid from 9.x to 10.x

## Timeline Diagram :warning:

- [ ] Bump Mermaid from 9.x to 10.x

## Mermaid 主题

以下是可用的主题：

1. [**default**][theme-default] - 这是所有图表的默认主题。
2. [**neutral**][theme-neutral] - 这个主题非常适合黑白打印的文档。
3. [**dark**][theme-dark] - 这个主题适合与深色元素或暗模式搭配使用。
4. [**forest**][theme-forest] - 这个主题包含各种绿色。
5. [**base**][theme-base] - 这是唯一可以修改的主题。使用此主题作为自定义的基础。

请前往 [Theme Configuration | Mermaid][mermaid-theming] 页面，了解有关动态和集成主题配置的更多信息。

### 站点范围主题

您可以通过 `config.toml` 中的 `params.mermaid` 参数全局配置 Mermaid 主题。

### 图表特定主题

要自定义单个图表的主题，请使用 `init` 指令。

以下是使用 `init` 指令将主题设置为 `forest` 的示例代码：

```markdown
{{</* mermaid */>}}
%%{init: {'theme':'forest'}}%%
  graph TD
    a --> b
{{</* /mermaid */>}}
```

{{< mermaid >}}
%%{init: {'theme':'forest'}}%%
  graph TD
    a --> b
{{< /mermaid >}}

[mermaid]: https://mermaid.js.org/
[theme-default]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-default.js
[theme-neutral]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-neutral.js
[theme-dark]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-dark.js
[theme-forest]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-forest.js
[theme-base]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-base.js
[mermaid-theming]: https://mermaid.js.org/config/theming.html
