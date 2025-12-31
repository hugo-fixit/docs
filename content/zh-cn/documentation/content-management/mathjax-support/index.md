---
title: 数学公式 - MathJax 支持
linkTitle: MathJax 支持
date: 2025-06-29T19:30:55+08:00
categories:
  - Documentation
tags:
  - Markdown
  - Content
  - Math
description: 这篇文章介绍了如何在 FixIt 主题中使用 MathJax 来渲染数学公式。
resources:
  - name: featured-image
    src: featured-image.webp
math:
  type: mathjax
---

<!--more-->

$\text{MathJax}$ 在页面加载后通过 JavaScript 进行 **客户端渲染**，_速度较慢_ 但 **功能更加强大**。

## 配置 {#configuration}

要在 FixIt 主题中启用 $\text{MathJax}$ 支持，需要在主题的配置文件 `hugo.toml` 中进行相应的配置。

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

## 行内公式

默认的行内公式分割符有：

- `$ ... $`
- `\( ... \)`

例如：

```tex
$c = \pm\sqrt{a^2 + b^2}$ 和 \(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\)
```

呈现的输出效果如下：

$c = \pm\sqrt{a^2 + b^2}$ 和 \(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\)

## 公式块

默认的公式块分割符有：

- `$$ ... $$`
- `\[ ... \]`

例如：

```tex
二次公式：
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

柯西积分公式：
\[ f(a) = \frac{1}{2\pi i} \oint\frac{f(z)}{z-a}dz \]

余弦的角度和公式：
$$
\cos(\theta+\phi)=\cos(\theta)\cos(\phi)−\sin(\theta)\sin(\phi)
$$

高斯散度定理：
\[
\int_D ({\nabla\cdot} F)dV=\int_{\partial D} F\cdot ndS
\]

向量场的旋度：
$$
\vec{\nabla} \times \vec{F} =
            \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \mathbf{i}
          + \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \mathbf{j}
          + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \mathbf{k}
$$

标准差：
$$
\sigma = \sqrt{ \frac{1}{N} \sum_{i=1}^N (x_i -\mu)^2}
$$

Christoffel 符号的定义：
$$
(\nabla_X Y)^k = X^i (\nabla_i Y)^k =
           X^i \left( \frac{\partial Y^k}{\partial x^i} + \Gamma_{im}^k Y^m \right)
$$
```

呈现的输出效果如下：

二次公式：
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

柯西积分公式：
\[ f(a) = \frac{1}{2\pi i} \oint\frac{f(z)}{z-a}dz \]

余弦的角度和公式：
$$
\cos(\theta+\phi)=\cos(\theta)\cos(\phi)−\sin(\theta)\sin(\phi)
$$

高斯散度定理：
\[
\int_D ({\nabla\cdot} F)dV=\int_{\partial D} F\cdot ndS
\]

向量场的旋度：
$$
\vec{\nabla} \times \vec{F} =
            \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \mathbf{i}
          + \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \mathbf{j}
          + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \mathbf{k}
$$

标准差：
$$
\sigma = \sqrt{ \frac{1}{N} \sum_{i=1}^N (x_i -\mu)^2}
$$

Christoffel 符号的定义：
$$
(\nabla_X Y)^k = X^i (\nabla_i Y)^k =
           X^i \left( \frac{\partial Y^k}{\partial x^i} + \Gamma_{im}^k Y^m \right)
$$

## 化学方程式 {#chemistry}

$\text{MathJax}$ 和 $\KaTeX$ 都支持化学方程式。例如：

```tex
$$C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}$$
```

呈现的输出效果如下：

$$C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}$$

## CDN {#cdn}

支持自定义 $\text{MathJax}$ CDN。可以在主题的配置文件中设置 $\text{MathJax}$ 的 CDN 地址。例如：

```toml
[params.page.math.mathjax]
cdn = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
```

## 自定义宏 {#custom-macros}

$\text{MathJax}$ 支持自定义宏。可以在主题的配置文件中添加自定义宏。例如：

```toml
[params.page.math.mathjax.macros]
KaTeX = "{K\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX}" # usage: $\KaTeX$
bold = [
  "{\\bf #1}",
  1
] # usage: $\bold{math}$
```

然后在文章中使用：

```tex
$\bold{Custom}$ macro $\KaTeX$ in $\text{MathJax}$
```

呈现的输出效果如下：

$\bold{Custom}$ macro $\KaTeX$ in $\text{MathJax}$

## 自定义扩展

$\text{MathJax}$ 支持自定义扩展。可以在主题的配置文件中添加自定义扩展。

例如，添加 [`physics`][physics] 和 [`xypic`][xyjax] 扩展包：

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

一个 `physics` 包示例：

```tex
$$
\mqty(a & b \\ c & d) = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$
```

呈现的输出效果如下：

$$
\mqty(a & b \\ c & d) = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$

一个 `xypic` 包示例：

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

呈现的输出效果如下：

$$
\begin{xy}
\xymatrix {
U \ar@/_/[ddr]_y \ar@{.>}[dr]|{\langle x,y \rangle} \ar@/^/[drr]^x \\
 & X \times_Z Y \ar[d]^q \ar[r]_p & X \ar[d]_f \\
 & Y \ar[r]^g & Z
}
\end{xy}
$$

## 错误信息 {#error-messages}

如果在渲染公式时遇到错误，$\text{MathJax}$ 会在页面上显示错误信息。

例如：

```tex
正确写法（$c = \pm\sqrt{a^2 + b^2}$）和错误写法（$c = \pm\sqrt{a\^2 + b^2}$）

正确写法：
$$
\begin{CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{CD}
$$

错误写法：
$$
\begin{cd}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{cd}
$$
```

呈现的输出效果如下：

正确写法 $c = \pm\sqrt{a^2 + b^2}$ 和错误写法 $c = \pm\sqrt{a\^2 + b^2}$

正确写法：
$$
\begin{CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{CD}
$$

错误写法：
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
