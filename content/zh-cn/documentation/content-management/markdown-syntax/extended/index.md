---
title: Markdown 扩展语法
shortTitle: 扩展语法
date: 2023-02-24T21:42:22+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: 这篇文章展示了 FixIt 风格的 Markdown 扩展语法。
resources:
  - name: featured-image
    src: featured-image.webp
tags:
  - Markdown
  - Content
  - HTML
  - Advanced
  - Math
categories:
  - Documentation
collections:
  - Markdown Syntax
---

这篇文章展示了 [**FixIt 风格的 Markdown**]^(FixIt Flavored Markdown) 扩展语法。

<!--more-->

## 警示 {#alerts}

警示（Alert）也被称为 **Callout** 或 **Admonition**，是用于强调关键信息的引用块。

### 基本语法 {#basic-syntax}

{{< version 0.3.10 >}}

使用基本的 Markdown 语法，每个警示的第一行是一个警示指示符，由一个感叹号和警示类型组成，用中括号括起来。

> [!note]~
> Alert 基本语法与 [GitHub][github-alert]、[Obsidian][obsidian-callouts] 和 [Typora][typora-alert] 兼容。

以下是所有五种类型的示例：

```markdown {.is-expanded}
> [!NOTE]
> 突出显示用户应考虑的信息，即使只是浏览也应考虑。

> [!TIP]
> 可选信息，可帮助用户取得更大的成功。

> [!IMPORTANT]
> 用户成功所需的关键信息。

> [!WARNING]
> 由于存在潜在风险，需要用户立即关注的关键内容。

> [!CAUTION]
> 操作的潜在负面后果。
```

呈现的输出效果如下：

> [!NOTE]
> 突出显示用户应考虑的信息，即使只是浏览也应考虑。

> [!TIP]
> 可选信息，可帮助用户取得更大的成功。

> [!IMPORTANT]
> 用户成功所需的关键信息。

> [!WARNING]
> 由于存在潜在风险，需要用户立即关注的关键内容。

> [!CAUTION]
> 操作的潜在负面后果。

### 扩展语法 {#extended-syntax}

{{< version 0.3.13 >}}

使用扩展 Markdown 语法，你可以选择包含警示符号或警示标题。警示符号是 `+` 或 `-` 之一。通常用于指示警示是否可以图形折叠。

> [!note]~
> Alert 扩展语法与 [Obsidian][obsidian-callouts] 和 Fixit [admonition shortcode][sc-admonition] 兼容。
>
> > [!WARNING]
> > 扩展语法与 GitHub 或 Typora 不兼容。如果包含警示符号或警示标题，这些应用程序会将 Markdown 渲染为引用块。

#### 更改标题

默认警示标题是其类型标识符的标题大小写。你可以通过在类型标识符后添加文本来更改它：

```markdown
> [!NOTE] FixIt
> 一个简洁、优雅且高效的 Hugo 主题。
```

> [!NOTE] FixIt
> 一个简洁、优雅且高效的 Hugo 主题。

你甚至可以省略正文来创建仅标题的警示：

```markdown
> [!TIP] 仅标题的警示
```

> [!TIP] 仅标题的警示

#### 可折叠警示

你可以通过在类型标识符后直接添加加号（+）或减号（-）来使警示可折叠。

```markdown
> [!WARNING]+ 辐射危害
> 请勿在没有防护装备的情况下接近或操作。

> [!QUESTION]- 警示可以折叠吗？
> 是的！在可折叠警示中，内容在折叠时被隐藏。
```

> [!WARNING]+ 辐射危害
> 请勿在没有防护装备的情况下接近或操作。

> [!QUESTION]- 警示可以折叠吗？
> 是的！在可折叠警示中，内容在折叠时被隐藏。

#### 嵌套警示

你可以在多个级别中嵌套警示。

```markdown
> [!question] 警示可以嵌套吗？
> > [!todo] 可以！它们可以。
> > > [!example] 你甚至可以使用多层嵌套。
```

> [!question] 警示可以嵌套吗？
> > [!todo] 可以！它们可以。
> > > [!example] 你甚至可以使用多层嵌套。

#### 仅内容警示

{{< version 0.4.2 >}}

你可以通过在类型标识符后直接添加波浪号（`~`）来创建仅内容警示。

> [!warning] 这是 FixIt 独有的扩展语法，与 Obsidian 或其他 Markdown 应用不兼容。

```markdown
> [!TIP]~
> 这是一个没有标题的仅内容警示。
```

> [!TIP]~
> 这是一个没有标题的仅内容警示。

#### 支持的类型 {#supported-types}

Alert 扩展语法支持 **13** 种类型的警示横幅，除非你 [自定义 Admonition][custom-admonitions]，否则任何不支持的类型都会默认为 `note` 类型。类型标识不区分大小写。

完整示例如下：

> [!note]+
>
> ```markdown {mode="simple", linenos=false}
> > [!note]+
> > The quick brown fox jumps over the lazy dog.
> ```

> [!abstract]-
>
> ```markdown {mode="simple", linenos=false}
> > [!abstract]-
> > The quick brown fox jumps over the lazy dog.
> ```
>
> 别名：`summary`, `tldr`

> [!info]-
>
> ```markdown {mode="simple", linenos=false}
> > [!info]-
> > The quick brown fox jumps over the lazy dog.
> ```

> [!todo]-
> {{< version 0.3.13 >}}
>
> ```markdown {mode="simple", linenos=false}
> > [!todo]-
> > The quick brown fox jumps over the lazy dog.
> ```

> [!tip]-
>
> ```markdown {mode="simple", linenos=false}
> > [!tip]-
> > The quick brown fox jumps over the lazy dog.
> ```
>
> 别名：`hint`, `important`

> [!success]-
>
> ```markdown {mode="simple", linenos=false}
> > [!success]-
> > The quick brown fox jumps over the lazy dog.
> ```
>
> 别名：`check`, `done`

> [!question]-
>
> ```markdown {mode="simple", linenos=false}
> > [!question]-
> > The quick brown fox jumps over the lazy dog.
> ```
>
> 别名：`help`, `faq`

> [!warning]-
>
> ```markdown {mode="simple", linenos=false}
> > [!warning]-
> > The quick brown fox jumps over the lazy dog.
> ```
>
> 别名：`caution`, `attention`

> [!failure]-
>
> ```markdown {mode="simple", linenos=false}
> > [!failure]-
> > The quick brown fox jumps over the lazy dog.
> ```
>
> 别名：`fail`, `missing`

> [!danger]-
>
> ```markdown {mode="simple", linenos=false}
> > [!danger]-
> > The quick brown fox jumps over the lazy dog.
> ```
>
> 别名：`error`

> [!bug]-
>
> ```markdown {mode="simple", linenos=false}
> > [!bug]-
> > The quick brown fox jumps over the lazy dog.
> ```

> [!example]-
>
> ```markdown {mode="simple", linenos=false}
> > [!example]-
> > The quick brown fox jumps over the lazy dog.
> ```

> [!quote]-
>
> ```markdown {mode="simple", linenos=false}
> > [!quote]-
> > The quick brown fox jumps over the lazy dog.
> ```
>
> 别名：`cite`

## 颜色预览 {#color-preview}

{{< version 0.4.0 >}}

在文章内容中，可以使用反引号在句子中标注颜色。反引号内支持的颜色模型将显示颜色的可视化效果。

```markdown
对于 `Light` 模式，背景色为`#ffffff`，对于 `Dark` 模式，背景颜色为`#000000`。
```

对于 `Light` 模式，背景色为`#ffffff`，对于 `Dark` 模式，背景颜色为`#000000`。

下面是当前支持的颜色模型。

| Color | 语法               | 示例                       | 输出                 |
| ----- | ------------------ | -------------------------- | -------------------- |
| HEX   | `` `#RRGGBB` ``    | `` `#0969DA` ``            | `#0969DA`            |
| RGB   | `` `rgb(R,G,B)` `` | `` `rgb(9, 105, 218)` ``   | `rgb(9, 105, 218)`   |
| HSL   | `` `hsl(H,S,L)` `` | `` `hsl(212, 92%, 45%)` `` | `hsl(212, 92%, 45%)` |

> [!NOTE]
>
> - 支持的颜色模型在反引号内不能有任何前导或尾随空格。
> - 颜色的可视化效果兼容 GitHub [支持的颜色模型][supported-color-models]。

## 任务列表 {#task-lists}

{{< version 0.3.14 changed >}}

要创建任务列表，请在每个列表项前添加一个短横线和空格，然后跟上 `[ ]`。

```markdown
- [x] 这是一个已完成的任务。
- [ ] 这是一个未完成的任务。
```

呈现的输出效果如下：

- [x] 这是一个已完成的任务。
- [ ] 这是一个未完成的任务。

你可以在括号内使用任何字符来标记任务为已完成或其他状态。

```markdown
- [ ] 未完成
- [x] 已完成
- [/] 进行中
- [-] 已取消
- [<] 已计划
- [>] 已重新计划
- [!] 重要
- [?] 问题
```

呈现的输出效果如下：

- [ ] 未完成
- [x] 已完成
- [/] 进行中
- [-] 已取消
- [<] 已计划
- [>] 已重新计划
- [!] 重要
- [?] 问题

> [!TIP]
> 如果你想要更多类型的任务列表，请查看 [进阶篇 - 自定义任务列表][custom-task-lists] 章节。

## 下划线 {#inserted-text}

{{< admonition info "如何开启 Hugo 扩展语法" >}}
[下划线](#inserted-text)、[标记文本](#marked-text)、[下标](#subscript) 和 [上标](#superscript) 语法默认关闭，需更新 Hugo 版本到 `0.128.0` 以上且开启以下的配置：

```toml {title="hugo.toml"}
[markup]

[markup.goldmark]

[markup.goldmark.extensions]
strikethrough = false

# https://gohugo.io/configuration/markup/#extras
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

**Hugo** 支持一种 **下划线** Markdown 扩展语法：

```markdown
FixIt 主题的作者是 ++Lruihao++。
```

呈现的输出效果如下：

FixIt 主题的作者是 ++Lruihao++。

## 标记文本 {#marked-text}

**Hugo** 支持一种 **标记文本** Markdown 扩展语法：

```markdown
==FixIt== 是一个很棒的 Hugo 主题！
```

呈现的输出效果如下：

==FixIt== 是一个很棒的 Hugo 主题！

扩展的标记文本语法支持**6**种类型的标记文本。

> [!WARNING]
> {{< version 0.3.14 >}}\
> 这是标记文本的实验性语法高亮。

```markdown
==Primary==[primary]
==Secondary==[secondary]
==Success==[success]
==Info==[info]
==Warning==[warning]
==Danger==[danger]
```

呈现的输出效果如下：

==Primary==[primary]
==Secondary==[secondary]
==Success==[success]
==Info==[info]
==Warning==[warning]
==Danger==[danger]

除非你自定义标记文本，否则任何不支持的类型都会默认为 `default` 类型。

```markdown
==这是一个带有粉色的自定义类型。==[pink]
```

在你的项目目录 `assets/css/_custom.scss` 中添加以下 CSS 来自定义标记文本：

```scss {title="_custom.scss"}
.mark-pink {
  --fi-mark-background-color: pink;
}
```

呈现的输出效果如下：

==这是一个带有粉色的自定义类型。==[pink]
{style="--fi-mark-background-color: pink;"}

输出的 HTML 看起来像这样：

```html
<mark class="mark-pink">这是一个带有粉色的自定义类型。</mark>
```

## 下标 {#subscript}

**Hugo** 支持一种 **下标** Markdown 扩展语法：

```markdown
水的化学式是 H~2~O。
```

呈现的输出效果如下：

水的化学式是 H~2~O。

## 上标 {#superscript}

**Hugo** 支持一种 **上标** Markdown 扩展语法：

```markdown
2^10^ 等于 1024。
```

呈现的输出效果如下：

2^10^ 等于 1024。

## Emoji 支持

这部分内容在 [Emoji 支持页面][emoji-support] 中介绍。

## 数学公式 {#formula}

{{< version 0.4.0 changed >}}

**FixIt** 基于 [$\KaTeX$][katex] 或 [$\text{MathJax}$][mathjax] 提供数学公式的支持，默认引擎为 $\KaTeX$。

你可以在 [主题配置][theme-config] 中修改数学公式自动渲染的相关配置：

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
# "\\f" = "#1f(#2)" # usage: $\f{a}{b}$

# MathJax server-side rendering (https://www.mathjax.org)
# MathJax config: https://docs.mathjax.org/en/latest/options/index.html
[params.page.math.mathjax]
cdn = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"

[params.page.math.mathjax.packages]
# "[+]" = ['configmacros']

# custom macros map
# syntax: <macro> = <definition>
[params.page.math.mathjax.macros]
# "bold" = ["{\\bf #1}", 1] # usage: $\bold{math}$

[params.page.math.mathjax.loader]
load = [ "ui/safe" ]

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

### KaTeX

$\KaTeX$ 通过 Hugo 的 [`transform.ToMath`][tomath] 函数在 **服务器端渲染**，所以客户端加载 **速度更快**。

> [!tip]
> 有一份 [$\KaTeX$ 中支持的 $\TeX$ 函数](https://katex.org/docs/supported.html) 清单。

#### 行内公式

默认的行内公式分割符有：

- `$ ... $`
- `\( ... \)`

例如：

```tex
$c = \pm\sqrt{a^2 + b^2}$ 和 \(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\)
```

呈现的输出效果如下：

$c = \pm\sqrt{a^2 + b^2}$ 和 \(f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi\)

#### 公式块

默认的公式块分割符有：

- `$$ ... $$`
- `\[ ... \]`

例如：

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

呈现的输出效果如下：

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

#### 复制公式 {#copy-tex}

**[Copy-tex][copy-tex]** 是一个 **$\KaTeX$** 的插件。

通过这个扩展，在选择并复制 $\KaTeX$ 渲染的公式时，会将其 $\LaTeX$ 源代码复制到剪贴板。

在你的 [主题配置][theme-config] 中的 `[params.page.math.katex]` 下面设置属性 `copyTex = true` 来启用 Copy-tex。

选择并复制上一节中渲染的公式，可以发现复制的内容为 $\LaTeX$ 源代码。

#### 化学方程式 {#chemistry}

**[mhchem][mhchem]** 是一个 **$\KaTeX$** 的插件，提供了 `\ce` 和 `\pu` 函数。

通过这个扩展，你可以在文章中轻松编写漂亮的化学方程式。

```markdown
$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$

$$C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}$$
```

呈现的输出效果如下：

$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$

$$C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}$$

#### 自定义宏 {#custom-macros}

你可以在你的 [主题配置][theme-config] 中的 `[params.page.math.katex.macros]` 下面添加自定义宏。

例如：

```toml
[params.page.math.katex.macros]
"\\f" = "#1f(#2)" # usage: $\f{a}{b}$
```

然后在文章中使用：

```tex
$$
\f\relax{x} = \int_{-\infty}^\infty
    \f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
$$
```

呈现的输出效果如下：

$$
\f\relax{x} = \int_{-\infty}^\infty
    \f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
$$

#### 错误信息 {#error-message}

如果在渲染公式时遇到错误，$\KaTeX$ 会在页面上显示错误信息。

例如：

```tex
$c = \pm\sqrt{a\^2 + b^2}$
```

呈现的输出效果如下，鼠标悬停在错误信息上可以查看详细的错误信息：

$c = \pm\sqrt{a\^2 + b^2}$

> [!CAUTION]
> 如果你设置 `params.page.math.katex.throwOnError` 为 `true`，则会抛出错误并停止渲染。

### MathJax

$\text{MathJax}$ 在页面加载后通过 JavaScript 进行 **客户端渲染**，_速度较慢_ 但 **功能更加强大**。

这部分内容在 [MathJax 支持][docs-mathjax] 页面中介绍。

## 字符注音或者注释 {#ruby}

**FixIt** 主题支持一种 **字符注音或者注释** Markdown 扩展语法：

```markdown
[FixIt]{?^}(一个简洁、优雅且高效的 Hugo 主题)
```

呈现的输出效果如下：

[FixIt]^(一个简洁、优雅且高效的 Hugo 主题)

## 分数 {#fraction}

**FixIt** 主题支持一种 **分数** Markdown 扩展语法：

```markdown
[浅色]{?/}[深色]

[99]{?/}[100]
```

呈现的输出效果如下：

[浅色]/[深色]

[90]/[100]

## Font Awesome {#fontawesome}

**FixIt** 主题使用 [Font Awesome V6][fontawesome] 作为图标库。
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

在某些特殊情况下（编写这个主题文档时 :(fa-regular fa-grin-squint-tears):),
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

## Markdown 属性 {#markdown-attributes}

{{< version 0.104.0 >}}

> 更新你的站点配置以启用块级元素的 [Markdown 属性][markdown-attributes]。

Hugo 支持图像和块元素上的 Markdown 属性，包括块引用、围栏代码块、标题、水平线、列表、段落和表格。

### 语法

```md
some Markdown content
{#id .class1 .class2 key1="value1" key2="value2"}
```

在大多数情况下，将属性列表放置在标记元素下方。对于标题和围栏代码块，将属性列表放在右侧。

| 标记元素          | 属性放置的位置 |
| :---------------- | :------------- |
| blockquote        | 底部           |
| fenced code block | 右侧           |
| heading           | 右侧           |
| horizontal rule   | 底部           |
| image             | 底部           |
| list              | 底部           |
| paragraph         | 底部           |
| table             | 底部           |

### 例子

#### 分割线

带有 CSS 类的分割线：

```md
---
{.awesome-hr}
```

呈现的输出如下所示：

---
{.awesome-hr}

#### 引用

带有 CSS 类的块引用：

```md
> The quick brown fox jumps over the lazy dog.
{.blockquote-center}
```

呈现的输出如下所示：

> The quick brown fox jumps over the lazy dog.
{.blockquote-center}

#### 表格 & 列表

目前有一些限制：对于表格，你目前只能将其应用于完整表格，而对于列表，仅适用于 `ul`/`ol` 节点，例如：

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

- 水果
  - 苹果
  - 橙子
  - 香蕉
  {.text-success}
- 乳制品
  - 牛奶
  - 奶酪
  {.text-warning}
{.text-primary}

## 代码块扩展语法 {#code-fences-extended}

**FixIt** 主题扩展了标准 Markdown 代码围栏，支持高级功能，包括图表、图形和交互式可视化。这些扩展的代码围栏使你能够直接在 Markdown 文件中创建丰富的动态内容。

### 语法 {#syntax}

扩展的代码围栏使用与标准 Markdown 相同的三重反引号语法，但使用特定语言标识符来触发特殊的渲染引擎：

````markdown
```LANG [OPTIONS]
// 在这里输入特定语言的内容
```
````

### 语言 {#languages}

这些功能在 FixIt 主题中自动启用，无需额外配置，只需在代码围栏中使用相应的语言标识符，内容就会使用相应的引擎进行渲染。

[**GoAT**][diagrams-support-goat]
: `goat` ASCII 艺术图表，渲染为可缩放的矢量图形。

[**Mermaid**][diagrams-support-mermaid]
: `mermaid` 专业图表，包括流程图、时序图等。

[**ECharts**][diagrams-support-echarts]
: `echarts` 交互式数据可视化图表和图形。

[**Timeline**][timeline-support]
: `timeline` 具有丰富格式的时间线事件显示。

[**JSON**][json-viewer]
: `json` 格式化和可折叠的 JSON 数据视图。

### 选项 {#options}

你可以通过 [Hugo 语法高亮选项][code-fences]、[主题代码块配置][codeblock-config]、[Markdown 属性](#markdown-attributes) 或者以下选项来自定义你的代码块：

| 选项    | 描述         | 类型     |
| :------ | :----------- | :------- |
| `title` | 代码块标题   | `string` |
| `name`  | 代码块文件名 | `string` |

例如：

````markdown
```vue {.line-wrapping, name="App.vue", title="Hello World", maxShownLines=11, linenos=false, hl_lines=[4,"8-9"]}
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>

<style lang="scss" scoped>
</style>
```
````

呈现的输出如下所示：

```vue {.line-wrapping, name="App.vue", title="Hello World", maxShownLines=11, linenos=false, hl_lines=[4,"8-9"]}
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>

<style lang="scss" scoped>
</style>
```

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 MD059 MD024 -->
[github-alert]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
[obsidian-callouts]: https://help.obsidian.md/Editing+and+formatting/Callouts
[typora-alert]: https://support.typora.io/Markdown-Reference/#callouts--github-style-alerts
[sc-admonition]: {{< relref path="/documentation/content-management/shortcodes/extended/admonition" >}}
[custom-admonitions]: {{< relref "/documentation/advanced#custom-admonitions" >}}
[supported-color-models]: https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#supported-color-models
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
[diagrams-support-goat]: {{< relref path="/documentation/content-management/diagrams-support/goat" >}}
[diagrams-support-mermaid]: {{< relref path="/documentation/content-management/diagrams-support/mermaid" >}}
[diagrams-support-echarts]: {{< relref path="/documentation/content-management/diagrams-support/echarts" >}}
[timeline-support]: {{< relref path="/documentation/content-management/timeline-support" >}}
[json-viewer]: {{< relref path="/documentation/content-management/json-viewer" >}}
[code-fences]: https://gohugo.io/content-management/syntax-highlighting/#highlighting-in-code-fences
[codeblock-config]: {{< relref path="/documentation/getting-started/configuration#codeblock" >}}
