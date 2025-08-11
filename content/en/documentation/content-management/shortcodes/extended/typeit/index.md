---
title: Extended Shortcode - typeit
shortTitle: Typeit
linkTitle: Typeit Shortcode
date: 2023-02-24T22:59:50+08:00
aliases:
  - /extended-shortcode-typeit/
author:
  name: Lruihao
  link: https://lruihao.cn
description: The typeit shortcode provides typing animation based on TypeIt library.
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

The `typeit` shortcode provides typing animation based on [TypeIt](https://typeitjs.com/) library.

<!--more-->

Just insert your content in the `typeit` shortcode and that’s it.

The `typeit` shortcode has the following named parameters:

- **tag** _[optional]_

    HTML tag of the content container.

- **code** _[optional]_

    Specify the language type of the code content that will be highlighted.

- **code-link** _[optional]_

    Whether to parse Markdown links in code content, default: `false`.

- **group** _[optional]_

    Grouping of content, the content of the same group will start typing animation in order.

- **speed** _[optional]_

    {{< version 0.3.10 >}} Typing speed between each step (measured in milliseconds), default: `100`.

- **cursorSpeed** _[optional]_

    {{< version 0.3.10 >}} Blinking speed of the cursor (measured in milliseconds), default: `1000`.

- **cursorChar** _[optional]_

    {{< version 0.3.10 >}} Character used for the cursor (HTML format is supported), default: `|`.

- **duration** _[optional]_

    {{< version 0.3.10 >}} Cursor duration after typing finishing (measured in milliseconds, `-1` means unlimited), default: `-1`.

- **loop** _[optional]_

    {{< version 0.2.18 >}} Whether your content will continuously loop after completing.

## Simple Content {#simple-content}

Simple content is allowed in `Markdown` format and **without** rich block content such as images and more...

Example `typeit` input:

```markdown
{{</* typeit */>}}
This is a *paragraph* with **typing animation** based on [TypeIt](https://typeitjs.com/)...
{{</* /typeit */>}}
```

The rendered output looks like this:

{{< typeit >}}
This is a _paragraph_ with **typing animation** based on [TypeIt](https://typeitjs.com/)...
{{< /typeit >}}

Alternatively, you can use custom **HTML tags**.

Example `typeit` input with `h4` tag:

```markdown
{{</* typeit tag=h4 */>}}
This is a *paragraph* with **typing animation** based on [TypeIt](https://typeitjs.com/)...
{{</* /typeit */>}}
```

The rendered output looks like this:

{{< typeit tag=h4 >}}
This is a _paragraph_ with **typing animation** based on [TypeIt](https://typeitjs.com/)...
{{< /typeit >}}

## Code Content {#code-content}

Code content is allowed and will be highlighted by named parameter `code` for the type of code language.

Example `typeit` input with `code`:

```markdown
{{</* typeit code=java */>}}
public class HelloWorld {
    public static void main(String []args) {
        System.out.println("Hello World");
    }
}
{{</* /typeit */>}}
```

The rendered output looks like this:

{{< typeit code=java >}}
public class HelloWorld {
    public static void main(String []args) {
        System.out.println("Hello World");
    }
}
{{< /typeit >}}

## Group Content {#group-content}

All typing animations start at the same time by default.
But sometimes you may want to start a set of `typeit` contents in order.

A set of `typeit` contents with the same value of named parameter `group` will start typing animation in sequence.

Example `typeit` input with `group`:

```markdown
{{</* typeit group=paragraph */>}}
**First** this paragraph begins
{{</* /typeit */>}}

{{</* typeit group=paragraph */>}}
**Then** this paragraph begins
{{</* /typeit */>}}
```

The rendered output looks like this:

{{< typeit group=paragraph >}}
**First** this paragraph begins
{{< /typeit >}}

{{< typeit group=paragraph >}}
**Then** this paragraph begins
{{< /typeit >}}

## Loop Content {#loop-content}

By default, the typing animation will stop after completion.

Example `typeit` input with `loop`:

```markdown
{{</* typeit loop=true */>}}
This content will continue to loop after the typing animation is complete.
{{</* /typeit */>}}
```

The rendered output looks like this:

{{< typeit loop=true >}}
This content will continue to loop after the typing animation is complete.
{{< /typeit >}}
