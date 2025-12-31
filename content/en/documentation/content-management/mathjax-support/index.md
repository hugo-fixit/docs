---
title: Mathematical formulas - MathJax support
linkTitle: MathJax support
date: 2025-06-29T19:30:55+08:00
categories:
  - Documentation
tags:
  - Markdown
  - Content
  - Math
description: This article shows how to use MathJax to render mathematical formulas in the FixIt theme.
resources:
  - name: featured-image
    src: featured-image.webp
math:
  type: mathjax
---

<!--more-->

$\text{MathJax}$ performs **client-side rendering** via JavaScript after page load, which is _slower_ but **more powerful** in functionality.

## Configuration {#configuration}

To enable $\text{MathJax}$ support in the FixIt theme, you need to configure it in the theme's configuration file `hugo.toml`.

```toml {title="hugo.toml"}
[markup]

[markup.goldmark]

[markup.goldmark.extensions]

[markup.goldmark.extensions.passthrough]
enable = true

[markup.goldmark.extensions.passthrough.delimiters]
block = [
  [
    '\[',
    '\]'
  ],
  [
    '$$',
    '$$'
  ]
]
inline = [
  [
    '\(',
    '\)'
  ],
  [
    '$',
    '$'
  ]
]

[params]

[params.page]

[params.page.math]
enable = true
type = "mathjax"

# MathJax server-side rendering (https://www.mathjax.org)
# MathJax config: https://docs.mathjax.org/en/latest/options/index.html
[params.page.math.mathjax]
cdn = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"

[params.page.math.mathjax.packages]
# '[+]' = ['configmacros']

# custom macros map
# syntax: <macro> = <definition>
[params.page.math.mathjax.macros]
# "bold" = ["{\\bf #1}", 1] # usage: $\bold{math}$

[params.page.math.mathjax.loader]
load = [ 'ui/safe' ]

[params.page.math.mathjax.loader.paths]
# custom = "https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/"

# more loader config e.g source, dependencies, provides etc.

[params.page.math.mathjax.options]
enableMenu = true
# HTML tags that won't be searched for math
skipHtmlTags = [
  "script",
  "noscript",
  "style",
  "textarea",
  "pre",
  "code",
  "math",
  "select",
  "option",
  "mjx-container"
]
# class that marks tags not to search
ignoreHtmlClass = "mathjax_ignore"

# HTML tags that can appear within math
[params.page.math.mathjax.options.includeHtmlTags]
# "#comment" = ""
# br = "\n"
# wbr = ""
```

## Inline Formulas

The default inline formula delimiters are:

- `$ ... $`
- `\( ... \)`

For example:

```tex
$c = \pm\sqrt{a^2 + b^2}$ and \(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\)
```

The rendered output is as follows:

$c = \pm\sqrt{a^2 + b^2}$ and \(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\)

## Formula Blocks

The default formula block delimiters are:

- `$$ ... $$`
- `\[ ... \]`

For example:

```tex
Quadratic formula:
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

Cauchy integral formula:
\[ f(a) = \frac{1}{2\pi i} \oint\frac{f(z)}{z-a}dz \]

Cosine angle addition formula:
$$
\cos(\theta+\phi)=\cos(\theta)\cos(\phi)−\sin(\theta)\sin(\phi)
$$

Gauss divergence theorem:
\[
\int_D ({\nabla\cdot} F)dV=\int_{\partial D} F\cdot ndS
\]

Curl of a vector field:
$$
\vec{\nabla} \times \vec{F} =
            \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \mathbf{i}
          + \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \mathbf{j}
          + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \mathbf{k}
$$

Standard deviation:
$$
\sigma = \sqrt{ \frac{1}{N} \sum_{i=1}^N (x_i -\mu)^2}
$$

Definition of Christoffel symbols:
$$
(\nabla_X Y)^k = X^i (\nabla_i Y)^k =
           X^i \left( \frac{\partial Y^k}{\partial x^i} + \Gamma_{im}^k Y^m \right)
$$
```

The rendered output is as follows:

Quadratic formula:
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

Cauchy integral formula:
\[ f(a) = \frac{1}{2\pi i} \oint\frac{f(z)}{z-a}dz \]

Cosine angle addition formula:
$$
\cos(\theta+\phi)=\cos(\theta)\cos(\phi)−\sin(\theta)\sin(\phi)
$$

Gauss divergence theorem:
\[
\int_D ({\nabla\cdot} F)dV=\int_{\partial D} F\cdot ndS
\]

Curl of a vector field:
$$
\vec{\nabla} \times \vec{F} =
            \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \mathbf{i}
          + \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \mathbf{j}
          + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \mathbf{k}
$$

Standard deviation:
$$
\sigma = \sqrt{ \frac{1}{N} \sum_{i=1}^N (x_i -\mu)^2}
$$

Definition of Christoffel symbols:
$$
(\nabla_X Y)^k = X^i (\nabla_i Y)^k =
           X^i \left( \frac{\partial Y^k}{\partial x^i} + \Gamma_{im}^k Y^m \right)
$$

## Chemical Equations {#chemistry}

Both $\text{MathJax}$ and $\KaTeX$ support chemical equations. For example:

```tex
$$C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}$$
```

The rendered output is as follows:

$$C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}$$

## CDN {#cdn}

Custom $\text{MathJax}$ CDN is supported. You can set the $\text{MathJax}$ CDN address in the theme configuration file. For example:

```toml
[params.page.math.mathjax]
cdn = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
```

## Custom Macros {#custom-macros}

$\text{MathJax}$ supports custom macros. You can add custom macros in the theme configuration file. For example:

```toml
[params.page.math.mathjax.macros]
KaTeX = "{K\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX}" # usage: $\KaTeX$
bold = [
  "{\\bf #1}",
  1
] # usage: $\bold{math}$
```

Then use them in your article:

```tex
$\bold{Custom}$ macro $\KaTeX$ in $\text{MathJax}$
```

The rendered output is as follows:

$\bold{Custom}$ macro $\KaTeX$ in $\text{MathJax}$

## Custom Extensions

$\text{MathJax}$ supports custom extensions. You can add custom extensions in the theme configuration file.

For example, to add the [`physics`][physics] and [`xypic`][xyjax] extension packages:

```toml
[params.page.math.mathjax.packages]
"[+]" = [
  "physics",
  "xypic"
]

[params.page.math.mathjax.loader]
load = [
  "ui/safe",
  "[tex]/physics",
  "[custom]/xypic.js"
]

[params.page.math.mathjax.loader.paths]
custom = "https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/"

[params.page.math.mathjax.tex]

[params.page.math.mathjax.tex.physics]
italicdiff = false
arrowdel = false
```

A `physics` package example:

```tex
$$
\mqty(a & b \\ c & d) = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$
```

The rendered output is as follows:

$$
\mqty(a & b \\ c & d) = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$

An `xypic` package example:

```tex
$$
\begin{xy}
\xymatrix {
U \ar@/_/[ddr]_y \ar@{.>}[dr]|{\langle x,y \rangle} \ar@/^/[drr]^x \\
 & X \times_Z Y \ar[d]^q \ar[r]_p & X \ar[d]_f \\
 & Y \ar[r]^g & Z
}
\end{xy}
$$
```

The rendered output is as follows:

$$
\begin{xy}
\xymatrix {
U \ar@/_/[ddr]_y \ar@{.>}[dr]|{\langle x,y \rangle} \ar@/^/[drr]^x \\
 & X \times_Z Y \ar[d]^q \ar[r]_p & X \ar[d]_f \\
 & Y \ar[r]^g & Z
}
\end{xy}
$$

## Error Messages {#error-messages}

If errors occur during formula rendering, $\text{MathJax}$ will display error messages on the page.

For example:

```tex
Correct syntax ($c = \pm\sqrt{a^2 + b^2}$) and incorrect syntax ($c = \pm\sqrt{a\^2 + b^2}$)

Correct syntax:
$$
\begin{CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{CD}
$$

Incorrect syntax:
$$
\begin{cd}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{cd}
$$
```

The rendered output is as follows:

Correct syntax $c = \pm\sqrt{a^2 + b^2}$ and incorrect syntax $c = \pm\sqrt{a\^2 + b^2}$

Correct syntax:
$$
\begin{CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{CD}
$$

Incorrect syntax:
$$
\begin{cd}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{cd}
$$

<!-- link reference definition -->
[physics]: https://docs.mathjax.org/en/latest/input/tex/extensions/physics.html
[xyjax]: https://github.com/sonoisa/XyJax-v3
