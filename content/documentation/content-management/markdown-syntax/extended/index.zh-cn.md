---
title: Markdown 扩展语法
date: 2023-02-24T21:42:22+08:00
type: posts
author:
  name: Lruihao
  link: https://lruihao.cn
description: 这篇文章展示了扩展的 Markdown 语法和格式。
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

**FixIt** 主题提供了一些扩展的语法便于你撰写文章。

<!--more-->

## Emoji 支持

这部分内容在 [Emoji 支持页面][emoji-support] 中介绍。

## 数学公式

{{< version 0.2.16 changed >}}

**FixIt** 基于 [$\KaTeX$][katex] 提供数学公式的支持。

在你的 [主题配置][theme-config] 中的 `[params.math]` 下面设置属性 `enable = true`,
并在文章的前置参数中设置属性 `math: true`来启用数学公式的自动渲染。

{{< admonition tip >}}
有一份 [$\KaTeX$ 中支持的 $\TeX$ 函数](https://katex.org/docs/supported.html) 清单。
{{< /admonition >}}

{{< admonition >}}
由于 Hugo 在渲染 Markdown 文档时会根据 `_`/`*`/`>>` 之类的语法生成 HTML 文档,
并且有些转义字符形式的文本内容 (如 `\(`/`\)`/`\[`/`\]`/`\\`) 会自动进行转义处理,
因此需要对这些地方进行额外的转义字符表达来实现自动渲染：

* `_` -> `\_`
* `*` -> `\*`
* `>>` -> `\>>`
* `\(` -> `\\(`
* `\)` -> `\\)`
* `\[` -> `\\[`
* `\]` -> `\\]`
* `\\` -> `\\\\`

**FixIt** 主题支持 [`raw` shortcode]({{< relref path="/documentation/content-management/shortcodes/extended/introduction#raw" >}}) 以避免这些转义字符，
它可以帮助您编写原始数学公式内容。

一个 `raw` 示例：

```markdown
{?{}{?{}< raw >}}行内公式：\(\mathbf{E}=\sum_{i} \mathbf{E}_{i}=\mathbf{E}_{1}+\mathbf{E}_{2}+\mathbf{E}_{3}+\cdots\){?{}{?{}< /raw >}}

{?{}{?{}< raw >}}
公式块：
\[ a=b+c \\ d+e=f \]
{?{}{?{}< /raw >}}
```

呈现的输出效果如下：

{{< raw >}}行内公式：\(\mathbf{E}=\sum_{i} \mathbf{E}_{i}=\mathbf{E}_{1}+\mathbf{E}_{2}+\mathbf{E}_{3}+\cdots\){{< /raw >}}

{{< raw >}}
公式块：
\[ a=b+c \\ d+e=f \]
{{< /raw >}}
{{< /admonition >}}

### 行内公式

默认的行内公式分割符有：

* `$ ... $`
* `\( ... \)` (转义的: `\\( ... \\)`)

例如:

```tex
$c = \pm\sqrt{a^2 + b^2}$ 和 \\(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\\)
```

呈现的输出效果如下：

$c = \pm\sqrt{a^2 + b^2}$ 和 \\(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\\)

### 公式块

默认的公式块分割符有：

* `$$ ... $$`
* `\[ ... \]` (转义的：`\\[ ... \\]`)
* `\begin{equation} ... \end{equation}` (不编号的：`\begin{equation*} ... \end{equation*}`)
* `\begin{align} ... \end{align}` (不编号的：`\begin{align*} ... \end{align*}`)
* `\begin{alignat} ... \end{alignat}` (不编号的：`\begin{alignat*} ... \end{alignat*}`)
* `\begin{gather} ... \end{gather}` (不编号的：`\begin{gather*} ... \end{gather*}`)
* `\begin{CD} ... \end{CD}`

{{< admonition warning >}}
当公式块中存在换行时，请谨慎开启 `goldmark.renderer.hardWraps`，设置为 true，Goldmark 会将换行符呈现为 `<br>` 元素。
{{< /admonition >}}

例如：

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

呈现的输出效果如下：

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
你可以在 [主题配置]({{< relref path="/documentation/basics#theme-configuration" >}}) 中自定义行内公式和公式块的分割符。
{{< /admonition >}}

### Copy-tex

**[Copy-tex][copy-tex]** 是一个 **$\KaTeX$** 的插件。

通过这个扩展，在选择并复制 $\KaTeX$ 渲染的公式时，会将其 $\LaTeX$ 源代码复制到剪贴板。

在你的 [主题配置][theme-config] 中的 `[params.math]` 下面设置属性 `copyTex = true` 来启用 Copy-tex。

选择并复制上一节中渲染的公式，可以发现复制的内容为 LaTeX 源代码。

### mhchem

**[mhchem][mhchem]** 是一个 **$\KaTeX$** 的插件。

通过这个扩展，你可以在文章中轻松编写漂亮的化学方程式。

在你的 [主题配置][theme-config] 中的 `[params.math]` 下面设置属性 `mhchem = true` 来启用 mhchem。

```markdown
$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$
```

呈现的输出效果如下：

$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$

## 字符注音或者注释 {#ruby}

**FixIt** 主题支持一种 **字符注音或者注释** Markdown 扩展语法：

```markdown
[Hugo]{?^}(一个开源的静态网站生成工具）
```

呈现的输出效果如下：

[Hugo]^(一个开源的静态网站生成工具)

## 分数 {#fraction}

{{< version 0.2.0 >}}

**FixIt** 主题支持一种 **分数** Markdown 扩展语法：

```markdown
[浅色]{?/}[深色]

[99]{?/}[100]
```

呈现的输出效果如下：

[浅色]/[深色]

[90]/[100]

## Font Awesome {#fontawesome}

**FixIt** 主题使用 [Font Awesome][fontawesome] 作为图标库。
你同样可以在文章中轻松使用这些图标。

从 [Font Awesome 网站][fontawesome-icons] 上获取所需的图标 `class`。

```markdown
去露营啦！{?:}(fa-solid fa-campground fa-fw): 很快就回来。

真开心！{?:}(fa-regular fa-grin-tears):
```

呈现的输出效果如下：

去露营啦！:(fa-solid fa-campground fa-fw): 很快就回来。

真开心！:(fa-regular fa-grin-tears):

## 转义字符 {#escape-character}

在某些特殊情况下 （编写这个主题文档时 :(fa-regular fa-grin-squint-tears):),
你的文章内容会与 Markdown 的基本或者扩展语法冲突，并且无法避免。

转义字符语法可以帮助你渲染出想要的内容：

```markdown
{{??}X} -> X
```

例如，两个 `:` 会启用 emoji 语法。但有时候这不是你想要的结果。可以像这样使用转义字符语法：

```markdown
{{??}:}joy:
```

呈现的输出效果如下：

**{?:}joy{?:}** 而不是 **:joy:**

{{< admonition tip >}}
这个方法可以间接解决一个还未解决的 **[Hugo 的 issue](https://github.com/gohugoio/hugo/issues/4978)**。
{{< /admonition >}}

另一个例子是：

```markdown
[link{{??}]}(#escape-character)
```

呈现的输出效果如下：

**[link{?]}(#escape-character)** 而不是 **[link](#escape-character)**。

## 自定义属性

> 前提是你设置了 `goldmark.parser.attribute.block` 为 `true`。

通过在一对花括号 (`{.myclass class="class1 class2"}`) 内添加属性列表并将其放在它装饰的 Markdown 元素之后，标题元素，在同一行其后添加即可，对于块语法，在其后新一行添加。

Hugo 支持向 Markdown 块添加属性（例如 CSS 类），例如 表格、列表、段落等。

带有 CSS 类的块引用：

```md
> foo  
> bar
{#test-id .text-danger}
```

呈现的输出如下所示：

> foo  
> bar
{#test-id .text-danger}

目前有一些限制：对于表格，您目前只能将其应用于完整表格，而对于列表，仅适用于 `ul`/`ol` 节点，例如：

```md
* 水果
  * 苹果
  * 橙子
  * 香蕉
  {.text-success}
* 乳制品
  * 牛奶
  * 奶酪
  {.text-warning}
{.text-primary}
```

呈现的输出如下所示：

* 水果
  * 苹果
  * 橙子
  * 香蕉
  {.text-success}
* 乳制品
  * 牛奶
  * 奶酪
  {.text-warning}
{.text-primary}

请注意，[code fences][code-fences] 中的属性必须位于开始标记之后，以及任何其他突出显示处理指令，例如：

```md
{?`}{?`}{?`}go {.myclass linenos=table,hl_lines=[8,"15-17"],linenostart=199}
// ... 代码
{?`}{?`}{?`}
```

## 代码块扩展语法

### 图表支持

这部分内容在 [图表支持页面][diagrams-support] 中介绍。

[emoji-support]: {{< relref path="/guides/emoji-support" >}}
[katex]: https://katex.org/
[theme-config]: {{< relref path="/documentation/basics#theme-configuration" >}}
[copy-tex]: https://github.com/Khan/KaTeX/tree/master/contrib/copy-tex
[mhchem]: https://github.com/Khan/KaTeX/tree/master/contrib/mhchem
[fontawesome]: https://fontawesome.com/
[fontawesome-icons]: https://fontawesome.com/icons?d=gallery
[code-fences]: https://gohugo.io/content-management/syntax-highlighting/#highlighting-in-code-fences
[diagrams-support]: {{< relref path="/documentation/content-management/diagrams" >}}
