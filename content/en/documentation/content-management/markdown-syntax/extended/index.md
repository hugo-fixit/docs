---
title: Extended Markdown Syntax
date: 2023-02-24T21:42:22+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: This article shows the FixIt Flavored Markdown extended syntax.
resources:
  - name: featured-image
    src: featured-image.webp
tags:
  - Markdown
  - Content
  - HTML
  - Advanced
categories:
  - Documentation
collections:
  - Markdown Syntax
---

This article shows the **FixIt Flavored Markdown** extended syntax.

<!--more-->

## Alerts {#alerts}

Also known as callouts or admonitions, alerts are blockquotes used to emphasize critical information.

### Basic syntax

{{< version 0.3.10 >}}

With the basic Markdown syntax, the first line of each alert is an alert designator consisting of an exclamation point followed by the alert type, wrapped within brackets.

> The basic syntax is compatible with [GitHub][github-alert], [Obsidian][obsidian-callouts], and [Typora][typora-alert].

An example of all five types:

```markdown {data-open=true}
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

The rendered output looks like this:

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

### Extended syntax

{{< version 0.3.13 >}}

With the extended Markdown syntax, you may optionally include an alert sign and/or an alert title. The alert sign is one of `+` or `-`, typically used to indicate whether an alert is graphically foldable.

> The extended syntax is compatible with [Obsidian][obsidian-callouts] and Fixit [admonition shortcode][sc-admonition].

> [!Tip]
> The extended syntax is not compatible with GitHub or Typora. If you include an alert sign or an alert title, these applications render the Markdown as a blockquote.

#### Change the title

By default, the title of the alert is its type identifier in title case. You can change it by adding text after the type identifier:

```markdown
> [!NOTE] FixIt
> A Clean, Elegant but Advanced Hugo Theme.
```

> [!NOTE] FixIt
> A Clean, Elegant but Advanced Hugo Theme.

You can even omit the body to create title-only alerts:

```markdown
> [!TIP] Title-only alert
```

> [!TIP] Title-only alert

#### Foldable Alerts

You can make a Alert foldable by adding a plus (+) or a minus (-) directly after the type identifier.

```markdown
> [!WARNING]+ Radiation hazard
> Do not approach or handle without protective gear.

> [!QUESTION]- Are Alerts foldable?
> Yes! In a foldable Alert, the contents are hidden when collapsed.
```

> [!WARNING]+ Radiation hazard
> Do not approach or handle without protective gear.

> [!QUESTION]- Are Alerts foldable?
> Yes! In a foldable Alert, the contents are hidden when collapsed.

#### Nested alerts

You can nest alerts in multiple levels.

```markdown
> [!question] Can alerts be nested?
> > [!todo] Yes!, they can.
> > > [!example] You can even use multiple layers of nesting.
```

> [!question] Can alerts be nested?
> > [!todo] Yes!, they can.
> > > [!example] You can even use multiple layers of nesting.

#### Supported types

The extended alert syntax supports **13** types of [admonition][admonition-types] banners, Unless you [Customize admonitions][custom-admonitions], any unsupported type defaults to the `note` type. The type identifier is case-insensitive.

## Task lists {#task-lists}

{{< version 0.3.14 changed >}}

To create a task list, start each list item with a hyphen and space followed by `[ ]`.

```markdown
- [x] This is a completed task.
- [ ] This is an incomplete task.
```

The rendered output looks like this:

- [x] This is a completed task.
- [ ] This is an incomplete task.

You can use any character inside the brackets to mark it as completed or otherwise.

```markdown
- [ ] Unchecked
- [x] Checked
- [/] In Progress
- [-] Cancelled
- [<] Scheduled
- [>] Rescheduled
- [!] Important
- [?] Question
```

The rendered output looks like this:

- [ ] Unchecked
- [x] Checked
- [/] In Progress
- [-] Cancelled
- [<] Scheduled
- [>] Rescheduled
- [!] Important
- [?] Question

> [!TIP]
> If you want more types of task lists, please see the [Advanced - Custom Task Lists][custom-task-lists] section.

## Inserted Text {#inserted-text}

{{< admonition info "How to enable Hugo extended syntax" >}}

[Inserted Text](#inserted-text), [Marked Text](#marked-text), [Subscript](#subscript), and [Superscript](#superscript) syntax are disabled by default. You need to update Hugo to version `0.128.0` or later and enable the following configuration:

```toml {title="hugo.toml"}
[markup]
  [markup.goldmark]
    [markup.goldmark.extensions]
      strikethrough = false
      # https://gohugo.io/getting-started/configuration-markup/#extras
      [markup.goldmark.extensions.extras]
        [markup.goldmark.extensions.extras.delete]
          enable = true
        [markup.goldmark.extensions.extras.insert]
          enable = true
        [markup.goldmark.extensions.extras.mark]
          enable = true
        [markup.goldmark.extensions.extras.subscript]
          enable = true
        [markup.goldmark.extensions.extras.superscript]
          enable = true
```

{{< /admonition >}}

**Hugo** supports an **inserted text** Markdown extension:

```markdown
The author of FixIt theme is ++Lruihao++.
```

The rendered output looks like this:

The author of FixIt theme is ++Lruihao++.

## Marked Text {#marked-text}

**Hugo** supports a **marked text** Markdown extension:

```markdown
==FixIt== is an awesome Hugo theme!
```

The rendered output looks like this:

==FixIt== is an awesome Hugo theme!

The extended marked text syntax supports **6** types of Marked Text.

> [!WARNING]
> {{< version 0.3.14 >}}\
> This is experimental syntax highlighting for the marked texts.

```markdown
==Primary==[primary]
==Secondary==[secondary]
==Success==[success]
==Info==[info]
==Warning==[warning]
==Danger==[danger]
```

The rendered output looks like this:

==Primary==[primary]
==Secondary==[secondary]
==Success==[success]
==Info==[info]
==Warning==[warning]
==Danger==[danger]

Unless you customize marked text, any unsupported type defaults to the `default` type.

```markdown
==This is a custom type with pink color.==[pink]
```

Customize the marked text by adding the following CSS in your project directory `assets/css/_custom.scss`:

```scss {title="_custom.scss"}
.mark-pink {
  --fi-mark-background-color: pink;
}
```

The rendered output looks like this:

==This is a custom type with pink color.==[pink]
{style="--fi-mark-background-color: pink;"}

The HTML looks like this:

```html
<mark class="mark-pink">This is a custom type with pink color.</mark>
```

## Subscript {#subscript}

**Hugo** supports a **subscript** Markdown extension:

```markdown
The chemical formula of water is H~2~O.
```

The rendered output looks like this:

The chemical formula of water is H~2~O.

## Superscript {#superscript}

**Hugo** supports a **superscript** Markdown extension:

```markdown
2^10^ equals 1024.
```

The rendered output looks like this:

2^10^ equals 1024.

## Emoji Support

This part is shown in the [emoji support page][emoji-support].

## Mathematical Formulas {#formula}

{{< version 0.4.0 changed >}}

**FixIt** supports mathematical formulas using [$\KaTeX$][katex] or [$\text{MathJax}$][mathjax], with $\KaTeX$ as the default engine.

You can modify the automatic rendering configuration for mathematical formulas in the [theme configuration][theme-config]:

```toml {title="hugo.toml"}
[markup]
  [markup.goldmark]
    [markup.goldmark.extensions]
      [markup.goldmark.extensions.passthrough]
        enable = true
        [markup.goldmark.extensions.passthrough.delimiters]
          block = [['\[', '\]'], ['$$', '$$']]
          inline = [['\(', '\)'], ['$', '$']]

[params]
  [params.page]
    [params.page.math]
      enable = true
      # mathematical formulas rendering engines, optional values: ["katex", "mathjax"]
      type = "katex"
      # KaTeX server-side rendering (https://katex.org)
      # KaTeX partial config: https://gohugo.io/functions/transform/tomath/#options
      [params.page.math.katex]
        # KaTeX extension copy-tex
        copyTex = true
        throwOnError = false
        errorColor = "#ff4949"
        # custom macros map
        # syntax: <macro> = <definition>
        [params.page.math.katex.macros]
          # "\\f" = "#1f(#2)"   # usage: $\f{a}{b}$
      # MathJax server-side rendering (https://www.mathjax.org)
      # MathJax config: https://docs.mathjax.org/en/latest/options/index.html
      [params.page.math.mathjax]
        cdn = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        [params.page.math.mathjax.packages]
          # "[+]" = ['configmacros']
        # custom macros map
        # syntax: <macro> = <definition>
        [params.page.math.mathjax.macros]
          # "bold" = ["{\\bf #1}", 1]   # usage: $\bold{math}$
        [params.page.math.mathjax.loader]
          load = ["ui/safe"]
          [params.page.math.mathjax.loader.paths]
            # custom = "https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/"
          # more loader config e.g source, dependencies, provides etc.
        [params.page.math.mathjax.options]
          enableMenu = true
          # more options e.g. skipHtmlTags, ignoreHtmlClass etc.
```

### KaTeX

$\KaTeX$ uses Hugo's [`transform.ToMath`][tomath] function for **server-side rendering**, resulting in **faster client-side loading**.

> [!tip]
> There is a list of [$\TeX$ functions supported by $\KaTeX$](https://katex.org/docs/supported.html).

#### Inline Formulas

The default delimiters for inline formulas are:

- `$ ... $`
- `\( ... \)`

For example:

```tex
$c = \pm\sqrt{a^2 + b^2}$ and \(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\)
```

The rendered output is as follows:

$c = \pm\sqrt{a^2 + b^2}$ and \(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\)

#### Block Formulas

The default delimiters for formula blocks are:

- `$$ ... $$`
- `\[ ... \]`

For example:

```tex
$$ c = \pm\sqrt{a^2 + b^2} $$

\[f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\]

$$
\begin{equation*}
  \rho \frac{\mathrm{D} \mathbf{v}}{\mathrm{D} t}=\nabla \cdot \mathbb{P}+\rho \mathbf{f}
\end{equation*}
$$

$$
\begin{equation}
  \mathbf{E}=\sum_{i} \mathbf{E}\_{i}=\mathbf{E}\_{1}+\mathbf{E}\_{2}+\mathbf{E}_{3}+\cdots
\end{equation}
$$

$$
\begin{align}
  a&=b+c \\
  d+e&=f
\end{align}
$$

$$
\begin{alignat}{2}
   10&x+&3&y = 2 \\
   3&x+&13&y = 4
\end{alignat}
$$

$$
\begin{gather}
   a=b \\
   e=b+c
\end{gather}
$$

$$
\begin{CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{CD}
$$
```

The rendered output is as follows:

$$ c = \pm\sqrt{a^2 + b^2} $$

\[f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\]

$$
\begin{equation*}
  \rho \frac{\mathrm{D} \mathbf{v}}{\mathrm{D} t}=\nabla \cdot \mathbb{P}+\rho \mathbf{f}
\end{equation*}
$$

$$
\begin{equation}
  \mathbf{E}=\sum_{i} \mathbf{E}\_{i}=\mathbf{E}\_{1}+\mathbf{E}\_{2}+\mathbf{E}_{3}+\cdots
\end{equation}
$$

$$
\begin{align}
  a&=b+c \\
  d+e&=f
\end{align}
$$

$$
\begin{alignat}{2}
   10&x+&3&y = 2 \\
   3&x+&13&y = 4
\end{alignat}
$$

$$
\begin{gather}
   a=b \\
   e=b+c
\end{gather}
$$

$$
\begin{CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{CD}
$$

#### Copying Formulas {#copy-tex}

**[Copy-tex][copy-tex]** is an extension of **$\KaTeX$**.

With this extension, when you select and copy a $\KaTeX$-rendered formula, its $\LaTeX$ source code will be copied to the clipboard.

Enable Copy-tex by setting the `copyTex` attribute to `true` under `[params.page.math.katex]` in your [theme configuration][theme-config].

Select and copy the rendered formulas from the previous section, and you will find that the copied content is the $\LaTeX$ source code.

#### Chemical Equations {#chemistry}

**[mhchem][mhchem]** is an extension of **$\KaTeX$**, providing the `\ce` and `\pu` functions.

With this extension, you can easily write beautiful chemical equations in your articles.

```markdown
$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$

$$C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}$$
```

The rendered output is as follows:

$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$

$$C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}$$

#### Custom Macros {#custom-macros}

You can add custom macros in your [theme configuration][theme-config] under `[params.page.math.katex.macros]`.

For example:

```toml
[params.page.math.katex.macros]
  "\\f" = "#1f(#2)"   # usage: $\f{a}{b}$
```

Then use it in your articles as follows:

```tex
$$
\f\relax{x} = \int_{-\infty}^\infty
    \f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
$$
```

The rendered output is as follows:

$$
\f\relax{x} = \int_{-\infty}^\infty
    \f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
$$

#### Error Messages {#error-message}

If an error occurs while rendering a formula, $\KaTeX$ will display an error message on the page.

For example:

```tex
$c = \pm\sqrt{a\^2 + b^2}$
```

The rendered output is as follows. Hovering the mouse over the error message will display detailed error information:

$c = \pm\sqrt{a\^2 + b^2}$

> [!CAUTION]
> If you set `params.page.math.katex.throwOnError` to `true`, an error will be thrown and rendering will be stopped.

### MathJax

$\text{MathJax}$ performs **client-side rendering** using JavaScript after the page is loaded. It is **slower** but **more powerful**.

This part is introduced on the [MathJax Support][docs-mathjax] page.

## Ruby Annotation {#ruby}

An extended Markdown syntax for **ruby annotation** is supported in **FixIt** theme:

```markdown
[FixIt]{?^}(A Clean, Elegant but Advanced Hugo Theme)
```

The rendered output looks like this:

[FixIt]^(A Clean, Elegant but Advanced Hugo Theme)

## Fraction {#fraction}

An extended Markdown syntax for **fraction** is supported in **FixIt** theme:

```markdown
[Light]{?/}[Dark]

[99]{?/}[100]
```

The rendered output looks like this:

[Light]/[Dark]

[90]/[100]

## Font Awesome {#fontawesome}

**FixIt** theme uses [Font Awesome V6][fontawesome] as the icon library.
You can easily use these icons in your articles.

Get the `class` of icons you wanted from the [Font Awesome website][fontawesome-icons].

```markdown
Gone camping! {?:}(fa-solid fa-campground fa-fw): Be back soon.

That is so funny! {?:}(fa-regular fa-grin-tears):
```

The rendered output looks like this:

Gone camping! :(fa-solid fa-campground fa-fw): Be back soon.

That is so funny! :(fa-regular fa-grin-tears):

## Escape character {#escape-character}

In some special cases (when writing this theme documentation :(fa-regular fa-grin-squint-tears):),
your content will conflict with basic or extended Markdown syntax, and it is inevitable.

The escape character syntax can help you build the content you wanted:

```markdown
{{??}X} -> X
```

For example, two `:` will enable emoji syntax, which is not the behavior you want. The escape character syntax is like this:

```markdown
{{??}:}joy:
```

The rendered output looks like this:

**{?:}joy{?:}** instead of **:joy:**

{{< admonition tip >}}
This is related to **[an issue for Hugo](https://github.com/gohugoio/hugo/issues/4978)**, which has not been resolved.
{{< /admonition >}}

Another example is:

```markdown
[link{{??}]}(#escape-character)
```

The rendered output looks like this:

**[link{?]}(#escape-character)** instead of **[link](#escape-character)**.

## Markdown attributes

> Update your site configuration to enable [Markdown attributes][markdown-attributes] for block-level elements.

Hugo supports Markdown attributes on images and block elements including blockquotes, fenced code blocks, headings, horizontal rules, lists, paragraphs, and tables.

### Syntax

```md
some Markdown content
{#id .class1 .class2 key1="value1" key2="value2"}
```

In most cases, place the attribute list beneath the markup element. For headings and fenced code blocks, place the attribute list on the right.

| Element           | Position of attribute list |
| :---------------- | :------------------------- |
| blockquote        | bottom                     |
| fenced code block | right                      |
| heading           | right                      |
| horizontal rule   | bottom                     |
| image             | bottom                     |
| list              | bottom                     |
| paragraph         | bottom                     |
| table             | bottom                     |

### Examples

#### horizontal rule

A horizontal rule with a CSS class:

```md
---
{.awesome-hr}
```

The rendered output looks like this:

---
{.awesome-hr}

#### blockquote

A blockquote with a CSS class:

```md
> The quick brown fox jumps over the lazy dog.
{.blockquote-center}
```

The rendered output looks like this:

> The quick brown fox jumps over the lazy dog.
{.blockquote-center}

#### table & list

There are some current limitations: For tables you can currently only apply it to the full table, and for lists the `ul`/`ol`-nodes only, e.g.:

```md
* Fruit
  * Apple
  * Orange
  * Banana
  {.text-success}
* Dairy
  * Milk
  * Cheese
  {.text-warning}
{.text-primary}
```

The rendered output looks like this:

- Fruit
  - Apple
  - Orange
  - Banana
  {.text-success}
- Dairy
  - Milk
  - Cheese
  {.text-warning}
{.text-primary}

#### code fences

Note that attributes in [code fences][code-fences] must come after the opening tag, with any other highlighting processing instruction, e.g.:

````markdown
```go {.myclass linenos=table,hl_lines=[8,"15-17"],linenostart=199}
// ... code
```
````

Add `title` attribute to a code block, for example:

````markdown
```js {title="test.js"}
console.log('hello FixIt!');
```
````

The rendered output looks like this:

```js {title="test.js"}
console.log('hello FixIt!');
```

{{< version 0.3.9 >}}

Add `no-header` class to a code block to hide the header, for example:

````markdown
```js {.no-header}
function forEach(elements, handler) {
  elements = elements || [];
  for (let i = 0; i < elements.length; i++) {
    handler(elements[i]);
  }
}
```
````

The rendered output looks like this:

```js {.no-header}
function forEach(elements, handler) {
  elements = elements || [];
  for (let i = 0; i < elements.length; i++) {
    handler(elements[i]);
  }
}
```

{{< version 0.3.9 >}}

Add `data-open` attribute to a code block to force expand or collapse the code block, for example:

````markdown
```js {data-open=false}
console.log('hello FixIt!');
```
````

The rendered output looks like this:

```js {data-open=false}
console.log('hello FixIt!');
```

## Code Fences Extended

### GoAT

This part is shown in the [diagrams support][diagrams-support-goat] page.

### Mermaid

This part is shown in the [diagrams support][diagrams-support-mermaid] page.

### ECharts

This part is shown in the [diagrams support][diagrams-support-echarts] page.

### Timeline

This part is shown in the [Timeline support][timeline-support] page.

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 MD059 -->
[github-alert]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
[obsidian-callouts]: https://help.obsidian.md/Editing+and+formatting/Callouts
[typora-alert]: https://support.typora.io/Markdown-Reference/#callouts--github-style-alerts
[sc-admonition]: {{< relref path="/documentation/content-management/shortcodes/extended/admonition" >}}
[admonition-types]: {{< relref path="/documentation/content-management/shortcodes/extended/admonition#supported-types" >}}
[custom-admonitions]: {{< relref "/documentation/advanced#custom-admonitions" >}}
[custom-task-lists]: {{< relref "/documentation/advanced#custom-task-lists" >}}
[emoji-support]: {{< relref path="/guides/emoji-support" >}}
[katex]: https://katex.org/
[mathjax]: https://www.mathjax.org/
[tomath]: https://gohugo.io/functions/transform/tomath/
[theme-config]: {{< relref path="/documentation/getting-started/configuration#theme-configuration" >}}
[copy-tex]: https://github.com/Khan/KaTeX/tree/master/contrib/copy-tex
[mhchem]: https://github.com/Khan/KaTeX/tree/master/contrib/mhchem
[docs-mathjax]: {{< relref path="/documentation/content-management/mathjax-support" >}}
[fontawesome]: https://fontawesome.com/
[fontawesome-icons]: https://fontawesome.com/icons?d=gallery
[markdown-attributes]: https://gohugo.io/content-management/markdown-attributes/
[code-fences]: https://gohugo.io/content-management/syntax-highlighting/#highlighting-in-code-fences
[diagrams-support-goat]: {{< relref path="/documentation/content-management/diagrams#goat" >}}
[diagrams-support-mermaid]: {{< relref path="/documentation/content-management/diagrams#mermaid" >}}
[diagrams-support-echarts]: {{< relref path="/documentation/content-management/diagrams#echarts" >}}
[timeline-support]: {{< relref path="/documentation/content-management/timeline-support" >}}
