---
title: Extended Markdown Syntax
date: 2023-02-24T21:42:22+08:00
type: posts
author:
  name: Lruihao
  link: https://lruihao.cn
description: This article shows the extended Markdown syntax and format in FixIt theme.
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
reward: true
math: true
hiddenFromHomePage: true
---

**FixIt** theme has some extended syntax elements for you to write articles.

<!--more-->

## Emoji Support

This part is shown in the [emoji support page][emoji-support].

## Mathematical Formula

{{< version 0.2.16 changed >}}

**FixIt** theme supports mathematical formulas based on [$\KaTeX$][katex].

Set the property `enable = true` under `[params.math]` in your [theme configuration][theme-config]
and the property `math: true` of the article front matter to enable the automatic rendering of mathematical formulas.

{{< admonition tip >}}
Here is a list of [$\TeX$ functions supported by $\KaTeX$](https://katex.org/docs/supported.html).
{{< /admonition >}}

{{< admonition >}}
Since Hugo generates HTML documents according to the syntax such as `_`/`*`/`>>` when rendering Markdown documents,
and some text content in the form of escape characters
(such as `\(`/`\)`/`\[`/`\]`/`\\`) escape processing will be performed automatically,
therefore, additional escape character expressions are required for these places to achieve automatic rendering:

* `_` -> `\_`
* `*` -> `\*`
* `>>` -> `\>>`
* `\(` -> `\\(`
* `\)` -> `\\)`
* `\[` -> `\\[`
* `\]` -> `\\]`
* `\\` -> `\\\\`

**FixIt** theme supports [`raw` shortcode][raw-shortcode] to avoid these escape characters,
which helps you write raw mathematical formula content.

Example `raw` input:

```markdown
{?{}{?{}< raw >}}Inline Formula: \(\mathbf{E}=\sum_{i} \mathbf{E}_{i}=\mathbf{E}_{1}+\mathbf{E}_{2}+\mathbf{E}_{3}+\cdots\){?{}{?{}< /raw >}}

{?{}{?{}< raw >}}
Block Formula:
\[ a=b+c \\ d+e=f \]
{?{}{?{}< /raw >}}
```

The rendered output looks like this:

{{< raw >}}Inline Formula: \(\mathbf{E}=\sum_{i} \mathbf{E}_{i}=\mathbf{E}_{1}+\mathbf{E}_{2}+\mathbf{E}_{3}+\cdots\){{< /raw >}}

{{< raw>}}
Block Formula:
\[ a=b+c \\ d+e=f \]
{{< /raw >}}
{{< /admonition >}}

### Inline Formula

The default inline delimiters are:

* `$ ... $`
* `\( ... \)` (escaped: `\\( ... \\)`)

For example:

```tex
$c = \pm\sqrt{a^2 + b^2}$ and \\(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\\)
```

The rendered output looks like this:

$c = \pm\sqrt{a^2 + b^2}$ and \\(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\\)

### Block Formula

The default block delimiters are:

* `$$ ... $$`
* `\[ ... \]` (escaped: `\\[ ... \\]`)
* `\begin{equation} ... \end{equation}` (unnumbered: `\begin{equation*} ... \end{equation*}`)
* `\begin{align} ... \end{align}` (unnumbered: `\begin{align*} ... \end{align*}`)
* `\begin{alignat} ... \end{alignat}` (unnumbered: `\begin{alignat*} ... \end{alignat*}`)
* `\begin{gather} ... \end{gather}` (unnumbered: `\begin{gather*} ... \end{gather*}`)
* `\begin{CD} ... \end{CD}`

{{< admonition warning >}}
When there are newlines in the block formula, please turn on `goldmark.renderer.hardWraps` carefully, set it to true, Goldmark will render the newlines as `<br>` elements.
{{< /admonition >}}

For example:

```tex
$$ c = \pm\sqrt{a^2 + b^2} $$

\\[ f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi \\]

\begin{equation*}
  \rho \frac{\mathrm{D} \mathbf{v}}{\mathrm{D} t}=\nabla \cdot \mathbb{P}+\rho \mathbf{f}
\end{equation*}

\begin{equation}
  \mathbf{E}=\sum_{i} \mathbf{E}\_{i}=\mathbf{E}\_{1}+\mathbf{E}\_{2}+\mathbf{E}_{3}+\cdots
\end{equation}

\begin{align}
  a&=b+c \\\\
  d+e&=f
\end{align}

\begin{alignat}{2}
   10&x+&3&y = 2 \\\\
   3&x+&13&y = 4
\end{alignat}

\begin{gather}
   a=b \\\\
   e=b+c
\end{gather}

\begin{CD}
   A @>a\>> B \\\\
@VbVV @AAcA \\\\
   C @= D
\end{CD}
```

The rendered output looks like this:

$$ c = \pm\sqrt{a^2 + b^2} $$

\\[ f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi \\]

\begin{equation*}
  \rho \frac{\mathrm{D} \mathbf{v}}{\mathrm{D} t}=\nabla \cdot \mathbb{P}+\rho \mathbf{f}
\end{equation*}

\begin{equation}
  \mathbf{E}=\sum_{i} \mathbf{E}\_{i}=\mathbf{E}\_{1}+\mathbf{E}\_{2}+\mathbf{E}_{3}+\cdots
\end{equation}

\begin{align}
  a&=b+c \\\\
  d+e&=f
\end{align}

\begin{alignat}{2}
   10&x+&3&y = 2 \\\\
   3&x+&13&y = 4
\end{alignat}

\begin{gather}
   a=b \\\\
   e=b+c
\end{gather}

\begin{CD}
   A @>a\>> B \\\\
@VbVV @AAcA \\\\
   C @= D
\end{CD}

{{< admonition tip >}}
You can add more inline and block delimiters in your [theme configuration]({{< relref path="/documentation/basics#theme-configuration" >}}).
{{< /admonition >}}

### Copy-tex

**[Copy-tex][copy-tex]** is an extension for **$\KaTeX$**.

By the extension, when selecting and copying $\KaTeX$ rendered elements, copies their $\LaTeX$ source to the clipboard.

Set the property `copyTex = true` under `[params.math]` in your [theme configuration][theme-config] to enable Copy-tex.

Select and copy the formula rendered in the previous section, and you can find that the copied content is the LaTeX source code.

### mhchem

**[mhchem][mhchem]** is an extension for **$\KaTeX$**.

By the extension, you can write beautiful chemical equations easily in the article.

Set the property `mhchem = true` under `[params.math]` in your [theme configuration][theme-config] to enable mhchem.

```markdown
$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$
```

The rendered output looks like this:

$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$

## Ruby Annotation {#ruby}

An extended Markdown syntax for **ruby annotation** is supported in **FixIt** theme:

```markdown
[Hugo]{?^}(An open-source static site generator)
```

The rendered output looks like this:

[Hugo]^(An open-source static site generator)

## Fraction {#fraction}

{{< version 0.2.0 >}}

An extended Markdown syntax for **fraction** is supported in **FixIt** theme:

```markdown
[Light]{?/}[Dark]

[99]{?/}[100]
```

The rendered output looks like this:

[Light]/[Dark]

[90]/[100]

## Font Awesome {#fontawesome}

**FixIt** theme uses [Font Awesome][fontawesome] as the icon library.
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

## Custom attribute

> The premise is that you set `goldmark.parser.attribute.block` to `true`.

Enable custom attribute support for titles and blocks by adding attribute lists inside single curly brackets (`{.myclass class="class1 class2"}`) and placing it after the Markdown element it decorates, on the same line for titles and on a new line directly below for blocks.

Hugo supports adding attributes (e.g. CSS classes) to Markdown blocks, e.g. tables, lists, paragraphs etc.

A blockquote with a CSS class:

```md
> foo  
> bar
{.text-danger}
```

The rendered output looks like this:

> foo  
> bar
{.text-danger}

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

Note that attributes in [code fences][code-fences] must come after the opening tag, with any other highlighting processing instruction, e.g.:

```md
{?`}{?`}{?`}go {.myclass linenos=table,hl_lines=[8,"15-17"],linenostart=199}
// ... code
{?`}{?`}{?`}
```

## Code Fences Extended

### Diagrams Support

This part is shown in the [diagrams support page][diagrams-support].

[emoji-support]: {{< relref path="/guides/emoji-support" >}}
[katex]: https://katex.org/
[theme-config]: {{< relref path="/documentation/basics#theme-configuration" >}}
[raw-shortcode]: {{< relref path="/documentation/content-management/shortcodes/extended#raw" >}}
[copy-tex]: https://github.com/Khan/KaTeX/tree/master/contrib/copy-tex
[mhchem]: https://github.com/Khan/KaTeX/tree/master/contrib/mhchem
[fontawesome]: https://fontawesome.com/
[fontawesome-icons]: https://fontawesome.com/icons?d=gallery
[code-fences]: https://gohugo.io/content-management/syntax-highlighting/#highlighting-in-code-fences
[diagrams-support]: {{< relref path="/documentation/content-management/diagrams" >}}
