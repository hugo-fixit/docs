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
collections:
  - Markdown Syntax
math: true
---

**FixIt** 主题提供了一些扩展的语法便于你撰写文章。

<!--more-->

## 警示 {#alerts}

警示（Alerts）也被称为 **callouts** 或 **admonitions**，是用于强调关键信息的引用块。

### 基本语法 {#basic-syntax}

{{< version 0.3.10 >}}

使用基本的 Markdown 语法，每个警示的第一行是一个警示指示符，由一个感叹号和警示类型组成，用中括号括起来。

> Alert 基本语法与 [GitHub][github-alert]、[Obsidian][obsidian-callouts] 和 [Typora][typora-alert] 兼容。

以下是所有五种类型的示例：

```markdown {data-open=true}
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

使用扩展 Markdown 语法，你可以选择包含警示符号和警示标题。警示符号是 `+` 或 `-` 之一。通常用于指示警示是否可以图形折叠。

> Alert 扩展语法与 [Obsidian][obsidian-callouts] 和 Fixit [admonition shortcode][sc-admonition] 兼容。

> [!Tip]
> 扩展语法与 GitHub 或 Typora 不兼容。如果包含警示符号或警示标题，这些应用程序会将 Markdown 渲染为引用块。

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

#### 支持的类型 {#supported-types}

Alert 扩展语法支持 **13** 种类型的警示横幅，除非你 [自定义警示][customize-admonitions]，否则任何不支持的类型都会默认为 `note` 类型。类型标识不区分大小写。

## 下划线 {#inserted-text}

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

{{< admonition info "如何开启 Hugo 扩展语法" >}}
[下划线](#inserted-text)、[标记文本](#marked-text)、[下标](#subscript) 和 [上标](#superscript) 语法默认关闭，需更新 Hugo 版本到 `0.128.0` 以上且开启以下的配置：

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

## Emoji 支持

这部分内容在 [Emoji 支持页面][emoji-support] 中介绍。

## 数学公式

{{< version 0.2.16 changed >}}

**FixIt** 基于 [$\KaTeX$][katex] 提供数学公式的支持。

在你的 [主题配置][theme-config] 中的 `[params.math]` 下面设置属性 `enable = true`,
并在文章的 Front matter 中设置属性 `math: true`来启用数学公式的自动渲染。

{{< admonition tip >}}
有一份 [$\KaTeX$ 中支持的 $\TeX$ 函数](https://katex.org/docs/supported.html) 清单。
{{< /admonition >}}

{{< admonition note "关于转义字符相关的注意事项" false >}}
由于 Hugo 在渲染 Markdown 文档时会根据 `_`、`*`、`^`、`>>` 之类的语法生成 HTML 文档，
并且有些转义字符形式的文本内容 (如 `\(`、`\)`、`\[`、`\]`、`\\`) 会自动进行转义处理，
因此需要对这些地方进行额外的转义字符表达来实现自动渲染：

- `_` -> `\_`
- `*` -> `\*`
- `^` -> `\^` （如果你开启了[上标语法](#superscript)）
- `>>` -> `\>>`
- `\(` -> `\\(`
- `\)` -> `\\)`
- `\[` -> `\\[`
- `\]` -> `\\]`
- `\\` -> `\\\\`

如果你不想写这些转义字符，**FixIt** 主题支持 [`raw` shortcode]({{< relref path="/documentation/content-management/shortcodes/extended/introduction#raw" >}})，
它可以帮助你编写原始数学公式内容。

一个 `raw` 示例：

```markdown
{{?{}< raw >}}行内公式：\(\mathbf{E}=\sum_{i} \mathbf{E}_{i}=\mathbf{E}_{1}+\mathbf{E}_{2}+\mathbf{E}_{3}+\cdots\){{?{}< /raw >}}

{{?{}< raw >}}
公式块：
\[ a=b+c \\ d+e=f \]
\[ f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi \]
{{?{}< /raw >}}
```

呈现的输出效果如下：

{{< raw >}}行内公式：\(\mathbf{E}=\sum_{i} \mathbf{E}_{i}=\mathbf{E}_{1}+\mathbf{E}_{2}+\mathbf{E}_{3}+\cdots\){{< /raw >}}

{{< raw >}}
公式块：
\[ a=b+c \\ d+e=f \]
\[ f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi \]
{{< /raw >}}
{{< /admonition >}}

### 行内公式

默认的行内公式分割符有：

- `$ ... $`
- `\( ... \)` (转义的：`\\( ... \\)`)

例如：

```tex
$c = \pm\sqrt{a\^2 + b\^2}$ 和 \\(f(x)=\int_{-\infty}\^{\infty} \hat{f}(\xi) e\^{2 \pi i \xi x} d \xi\\)
```

呈现的输出效果如下：

$c = \pm\sqrt{a\^2 + b\^2}$ 和 \\(f(x)=\int_{-\infty}\^{\infty} \hat{f}(\xi) e\^{2 \pi i \xi x} d \xi\\)

### 公式块

默认的公式块分割符有：

- `$$ ... $$`
- `\[ ... \]` (转义的：`\\[ ... \\]`)
- `\begin{equation} ... \end{equation}` (不编号的：`\begin{equation*} ... \end{equation*}`)
- `\begin{align} ... \end{align}` (不编号的：`\begin{align*} ... \end{align*}`)
- `\begin{alignat} ... \end{alignat}` (不编号的：`\begin{alignat*} ... \end{alignat*}`)
- `\begin{gather} ... \end{gather}` (不编号的：`\begin{gather*} ... \end{gather*}`)
- `\begin{CD} ... \end{CD}`

{{< admonition warning >}}
当公式块中存在换行时，请谨慎开启 `goldmark.renderer.hardWraps`，设置为 true，Goldmark 会将换行符呈现为 `<br>` 元素。
{{< /admonition >}}

例如：

```tex
$$ c = \pm\sqrt{a\^2 + b\^2} $$

\\[ f(x)=\int_{-\infty}\^{\infty} \hat{f}(\xi) e\^{2 \pi i \xi x} d \xi \\]

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

$$ c = \pm\sqrt{a\^2 + b\^2} $$

\\[ f(x)=\int_{-\infty}\^{\infty} \hat{f}(\xi) e\^{2 \pi i \xi x} d \xi \\]

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
你可以在 [主题配置]({{< relref path="/documentation/getting-started/configuration#theme-configuration" >}}) 中自定义行内公式和公式块的分割符。
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

$$ \ce{Hg\^2+ ->[I-] HgI2 ->[I-] [Hg\^{II}I4]\^2-} $$
```

呈现的输出效果如下：

$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg\^2+ ->[I-] HgI2 ->[I-] [Hg\^{II}I4]\^2-} $$

## 字符注音或者注释 {#ruby}

**FixIt** 主题支持一种 **字符注音或者注释** Markdown 扩展语法：

```markdown
[Hugo]{?^}(一个开源的静态网站生成工具）
```

呈现的输出效果如下：

[Hugo]^(一个开源的静态网站生成工具)

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

## Markdown 属性

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

#### 代码块

请注意，[code fences][code-fences] 中的属性和其他高亮处理指令必须位于开始标记之后，例如：

````markdown
```go {.myclass linenos=table,hl_lines=[8,"15-17"],linenostart=199}
// ... code
```
````

给代码块添加 `title` 属性，例如：

````markdown
```js {title="test.js"}
console.log('hello FixIt!');
```
````

呈现的输出效果如下：

```js {title="test.js"}
console.log('hello FixIt!');
```

{{< version 0.3.9 >}}

给代码块添加 `no-header` 类，隐藏代码块的标题，例如：

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

呈现的输出效果如下：

```js {.no-header}
function forEach(elements, handler) {
  elements = elements || [];
  for (let i = 0; i < elements.length; i++) {
    handler(elements[i]);
  }
}
```

{{< version 0.3.9 >}}

给代码块添加 `data-open` 属性，强制展开或者折叠代码块，例如：

````markdown
```js {data-open=false}
console.log('hello FixIt!');
```
````

呈现的输出效果如下：

```js {data-open=false}
console.log('hello FixIt!');
```

## 代码块扩展语法

### GoAT

这部分内容在 [图表支持][diagrams-support-goat] 页面中介绍。

### Mermaid

这部分内容在 [图表支持][diagrams-support-mermaid] 页面中介绍。

### Timeline

这部分内容在 [时间线支持][timeline-support] 页面中介绍。

<!-- link reference definition -->
<!-- markdownlint-disable-file reference-links-images -->
[github-alert]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
[obsidian-callouts]: https://help.obsidian.md/Editing+and+formatting/Callouts
[typora-alert]: https://support.typora.io/Markdown-Reference/#callouts--github-style-alerts
[customize-admonitions]: {{< relref path="/documentation/content-management/shortcodes/extended/admonition#customize-admonitions" >}}
[sc-admonition]: {{< relref path="/documentation/content-management/shortcodes/extended/admonition" >}}
[emoji-support]: {{< relref path="/guides/emoji-support" >}}
[katex]: https://katex.org/
[theme-config]: {{< relref path="/documentation/getting-started/configuration#theme-configuration" >}}
[copy-tex]: https://github.com/Khan/KaTeX/tree/master/contrib/copy-tex
[mhchem]: https://github.com/Khan/KaTeX/tree/master/contrib/mhchem
[fontawesome]: https://fontawesome.com/
[fontawesome-icons]: https://fontawesome.com/icons?d=gallery
[markdown-attributes]: https://gohugo.io/content-management/markdown-attributes/
[code-fences]: https://gohugo.io/content-management/syntax-highlighting/#highlighting-in-code-fences
[diagrams-support-goat]: {{< relref path="/documentation/content-management/diagrams#goat" >}}
[diagrams-support-mermaid]: {{< relref path="/documentation/content-management/diagrams#mermaid" >}}
[timeline-support]: {{< relref path="/documentation/content-management/timeline-support" >}}
