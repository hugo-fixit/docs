---
title: Extended Shortcode - mermaid
shortTitle: Mermaid
linkTitle: Mermaid Shortcode
date: 2023-02-24T22:11:45+08:00
aliases:
  - /extended-shortcode-mermaid/
author:
  name: Lruihao
  link: https://lruihao.cn
description: The mermaid shortcode supports diagrams in Hugo with Mermaid library.
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

{{< version 0.2.15 changed >}}

The `mermaid` shortcode supports diagrams in Hugo with [Mermaid][mermaid] library.

<!--more-->

**Mermaid** is a library helping you to generate diagram and flowcharts from text, in a similar manner as Markdown.

## Usage

Just insert your mermaid code in the `mermaid` shortcode and that’s it.

> [!TIP] The **Code Fences extended syntax** ` ```mermaid` is recommended over the shortcode.
> You can find more examples and usage information on the [Diagrams Support - Mermaid][diagrams-support-mermaid] page.

### CDN

You can use `params.mermaid` in your configuration file to specify the version of Mermaid and ZenUML you want to use. For example:

```toml
[params]
  [params.mermaid]
    cdn = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs"
    zenuml = "https://cdn.jsdelivr.net/npm/@mermaid-js/mermaid-zenuml@0.2/dist/mermaid-zenuml.esm.min.mjs"
```

### Themes

Available themes are as follows:

1. [**default**][theme-default] - This is the default theme for all diagrams.
2. [**neutral**][theme-neutral] - This theme is great for black and white documents that will be printed.
3. [**dark**][theme-dark] - This theme goes well with dark-colored elements or dark-mode.
4. [**forest**][theme-forest] - This theme contains shades of green.
5. [**base**][theme-base] - This is the only theme that can be modified. Use this theme as the base for customizations.

Head to the [Theme Configuration | Mermaid][mermaid-theming] page to learn more about dynamic and integrated theme configuration.

#### Site-wide Themes

You can configure mermaid themes globally in `hugo.toml` via the `params.mermaid.themes` parameter.

```toml
[params]
  [params.mermaid]
    themes = ["default", "dark"]
```

#### Diagram-specific Themes

To customize the theme of an individual diagram, use the `init` directive.

Example of `init` directive setting the `theme` to `forest`:

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

## Flowchart {#flowchart}

Example **flowchart** `mermaid` input:

```markdown
{{</* mermaid */>}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{</* /mermaid */>}}
```

The rendered output looks like this:

{{< mermaid >}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}

## Sequence Diagram {#sequence-diagram}

Example **sequence diagram** `mermaid` input:

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

The rendered output looks like this:

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

## Class Diagram {#class-diagram}

Example **class diagram** `mermaid` input:

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

The rendered output looks like this:

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

## State Diagram {#state-diagram}

Example **state diagram** `mermaid` input:

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

The rendered output looks like this:

{{< mermaid >}}
stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
{{< /mermaid >}}

## Entity Relationship Diagram {#entity-relationship-diagram}

Example **entity-relationship diagram** `mermaid` input:

```markdown
{{</* mermaid */>}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{</* /mermaid */>}}
```

The rendered output looks like this:

{{< mermaid >}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{< /mermaid >}}

## User Journey {#user-journey}

Example **user journey** `mermaid` input:

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

The rendered output looks like this:

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

## Gantt {#gantt}

Example **Gantt** `mermaid` input:

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

The rendered output looks like this:

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

## Pie Chart {#pie-chart}

Example **pie chart** `mermaid` input:

```markdown
{{</* mermaid */>}}
pie
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
{{</* /mermaid */>}}
```

The rendered output looks like this:

{{< mermaid >}}
pie
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
{{< /mermaid >}}

## Requirement Diagram {#requirement-diagram}

Example **requirement diagram** `mermaid` input:

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

The rendered output looks like this:

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

## Git Graph {#git-graph}

Example **git graph** `mermaid` input:

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

The rendered output looks like this:

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
<!-- markdownlint-disable-file MD049 reference-links-images -->
[mermaid]: https://mermaid.js.org/
[theme-default]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-default.js
[theme-neutral]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-neutral.js
[theme-dark]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-dark.js
[theme-forest]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-forest.js
[theme-base]: https://github.com/mermaid-js/mermaid/blob/develop/packages/mermaid/src/themes/theme-base.js
[mermaid-theming]: https://mermaid.js.org/config/theming.html
[diagrams-support-mermaid]: {{< relref "/documentation/content-management/diagrams-support/mermaid" >}}
