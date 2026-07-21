---
title: Hugo Partials 参考
shortTitle: Hugo Partials
date: 2026-07-20T21:20:13+08:00
description: FixIt 主题 Hugo Partials 参考文档，涵盖参数、返回值和用法示例。
collections:
  - References
---

本页面提供 FixIt 主题 Hugo partials（`layouts/_partials/`）的参考文档，涵盖模板函数、插件和布局组件。每个 partial 条目包含其参数、返回值和用法示例。

<!--more-->

<!-- Prompt: 根据英文版 partials 参考文档的更改和中文翻译规则帮我更新中文版 -->

<!--
翻译规则：

1. 翻译范围：`HUGO_FIXIT_PARTIALS:START` 到 `HUGO_FIXIT_PARTIALS:END` 之间的内容
2. 保留所有 Markdown 格式（标题、表格、代码块、列表、链接等）
3. 翻译后去掉内容开头的自动生成注释
4. 不翻译以下内容（原样保留）：
   - `## group/` 和 `### path/to/partial.html` 标题中的路径名
   - 表格中的参数名（Name 列）
   - 类型标记（Type 列）：`String`、`Boolean`、`Map`、`Page`、`Object`、`Array` 等
   - Hugo 模板代码块（``` ... ```）
   - Hugo/FixIt 专有名词（partial、shortcode、front matter 等）
   - 文件路径如 `layouts/_partials/xxx.html`
5. 翻译风格：
   - "> N partials" → "> N 个 partials"
   - "*No documentation.*" → "*暂无文档。*"
   - "**Parameters:**" → "**参数：**"
   - "**Returns:**" → "**返回值：**"
   - "**Example:**" → "**示例：**"
   - "The xxx" → 去掉冠词，直接翻译
   - 保持技术文档的简洁风格
6. pnpm lint 通过
-->

<!-- HUGO_FIXIT_PARTIALS:START -->

FixIt 主题提供 **92** 个 Hugo partials，分布在 **13** 个分组中。

## 分组

- [_debug/](#_debug) — 2 个 partials
- [base/](#base) — 7 个 partials
- [base/head/](#basehead) — 3 个 partials
- [feed/](#feed) — 1 个 partial
- [function/](#function) — 35 个 partials
- [gen/](#gen) — 2 个 partials
- [home/](#home) — 1 个 partial
- [init/](#init) — 8 个 partials
- [plugin/](#plugin) — 20 个 partials
- [section/](#section) — 1 个 partial
- [single/](#single) — 9 个 partials
- [store/](#store) — 2 个 partials
- [(root)](#root) — 1 个 partial

## _debug/

> 开发调试工具。

> 2 个 partials

### _debug/dump.html

调试用 partial，输出当前上下文。

**示例：**

```go-template
{{- partial "_debug/dump.html" . -}}
```

### _debug/template-call-stack.html

渲染模板调用栈，用于调试。

**示例：**

```go-template
{{- partial "_debug/template-call-stack.html" . -}}
```

## base/

> 核心布局 partials（header、footer、breadcrumb、paginator、comment、widgets、assets）。

> 7 个 partials

### base/assets.html

资源编排 partial —— 页面脚本和样式的资源管理。

收集功能标志和页面/站点参数，然后通过 store/style.html 和 store/script.html 注册所需的 CSS/JS 资源。

主要职责：

- 解析可选的第三方库和插件集成
- 构建每页运行时配置并输出 window.config
- 构建和注册核心 bundles（file-tree、mermaid、main、custom）
- 追加页面注入的 style/script 数组和分析钩子

调用自：layouts/baseof.html。

### base/breadcrumb.html

*暂无文档。*

### base/comment.html

*暂无文档。*

### base/footer.html

*暂无文档。*

### base/header.html

*暂无文档。*

### base/paginator.html

*暂无文档。*

### base/widgets.html

*暂无文档。*

## base/head/

> 3 个 partials

### base/head/css.html

CSS partial —— 基础和页面特定的 CSS 加载。

加载主样式表（每页），并根据 .Kind、.Layout 和 .RelPermalink 条件加载页面特定的 CSS。

调用自：`base/head/index.html`。

### base/head/index.html

*暂无文档。*

### base/head/twitter-cards.html

扩展 Hugo 内置的 twitter_cards partial：https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_partials/twitter_cards.html。

主要区别：

- 从站点参数（.Site.Params.social.twitter）生成 twitter:site / twitter:creator
- 参数可以是字符串或 map；当为 map 时读取 creator/id

## feed/

> RSS feed 生成。

> 1 个 partial

### feed/rss.html

*暂无文档。*

## function/

> 可复用的工具函数 partials。

> 35 个 partials

### function/camel-case-keys.html

递归地将 snake_case 配置键转换为 camelCase。

主要用于避免 Hugo 大小写不敏感的配置键解析导致的问题。配置键保持 snake_case，在此处转换以便在模板和 JS 中稳定访问。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.` | `Map\|Slice` | 包含 snake_case 键的输入 |

**返回值：** `Map|Slice` - 转换为 camelCase 键的新值

**示例：**

```go-template
// 简单 Map 转换
Input: dict "code_block" true "max_shown_lines" 10 "line_nos" false
Output: dict "codeBlock" true "maxShownLines" 10 "lineNos" false
```

```go-template
// 嵌套 Map 转换
Input: dict "code_block" (dict "enable_wrapper" true)
Output: dict "codeBlock" (dict "enableWrapper" true)
```

```go-template
// Map 数组转换
Input: slice (dict "user_name" "John") (dict "user_age" 30)
Output: slice (dict "userName" "John") (dict "userAge" 30)
```

```go-template
// 模板中的实际用法
{{- $siteParams := partial "function/camel-case-keys.html" .Site.Params -}}
```

### function/camel-case.html

将 snake_case 字符串转换为 camelCase。策略：按 "_" 分割，将每个部分的首字母大写（第一个除外），然后拼接。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.` | `String` | snake_case 字符串 |

**返回值：** `String` - camelCase 字符串

**示例：**

```go-template
// "max_shown_lines" -> "maxShownLines"
{{- partial "function/camel-case.html" "max_shown_lines" -}}
```

### function/code-copy-btn.html

非经典模式代码块的复制按钮。

### function/code-expand-btn.html

代码块的展开按钮。

### function/code-header.html

经典模式代码块的头部。

### function/color-preview.html

颜色预览渲染。为仅包含颜色值的代码元素添加颜色可视化。支持 HEX、RGB 和 HSL 颜色格式，类似 GitHub 的颜色预览功能。

示例：`#0969DA` -> 显示蓝色预览圆圈 `rgb(9, 105, 218)` -> 显示蓝色预览圆圈 `hsl(212, 92%, 45%)` -> 显示蓝色预览圆圈。

不包含的情况：`` `#0969DA` `` -> 渲染为普通代码（语法示例） `test #0969DA` -> 渲染为普通代码（有前导文本） ` #0969DA` -> 渲染为普通代码（有前导空格） `#0969DA ` -> 渲染为普通代码（有尾随空格）。

### function/content.html

*暂无文档。*

### function/dos2unix.html

统一换行符。

### function/escape.html

转义字符。

### function/escapeurl.html

将 URL 特殊字符转义为查询格式，例如：`#` -> `%23`。

详见：https://github.com/hugo-fixit/FixIt/issues/245.

### function/fontawesome.html

Font Awesome.

### function/format-number.html

格式化数字，当大于 1000 时添加 'k' 后缀。用法：{{ partial "function/format-number" (dict "PRECISION" 2 "NUMBER" 5201314) }} 示例输出：19980.52k。

### function/fraction.html

分数。

### function/get-author-map.html

以 map 格式获取作者。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.` | `String\|Map` | 作者名称或 map |

**示例：**

```go-template
{{- $author := partial "function/get-author-map.html" .Params.author -}}
```

### function/get-cover.html

获取页面的封面图片。

优先检查 front matter 参数，然后检查页面资源。支持远程 URL、内联 data URI 和本地页面/全局资源。

解析顺序：1. Front matter：featured_image_preview（如果 Preview=true）或 featured_image 2. 页面资源："featured-image-preview"（如果 Preview=true），然后 "featured-image" 3. 全局资源：将 front matter 值作为路径。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.` | `Map` | 配置 dict |
| `.Page` |  | {Page} 页面上下文（必填） |
| `.Preview` |  | {Boolean} 如果为 true，优先使用 featured_image_preview 而非 featured_image（默认：false） |
| `.Build` |  | {Boolean} 如果为 true，解析资源对象和永久链接；如果为 false，仅检查是否存在（默认：false） |

**返回值：** `Map` - 包含以下字段的 dict：

**示例：**

```go-template
{{- $cover := dict "Page" . | partial "function/get-cover.html" -}}
{{- with $cover.URL -}}<img src="{{ . }}">{{- end -}}
```

```go-template
{{- $cover := dict "Page" . "Preview" true | partial "function/get-cover.html" -}}
{{- dict "Src" $cover.URL "Resources" .Resources "Matches" $cover.Matches | partial "plugin/image.html" -}}
```

### function/get-file-tree.html

从文件系统构建结构化树数据，带根路径验证。

尝试相对于项目根目录解析路径。如果未找到匹配目录，将尝试相对于 contentDir 解析路径。前导路径分隔符（/）是可选的。

注意：出于性能原因，递归深度默认限制为 10 层。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `root` | `String` | 要扫描的根路径（相对于项目根目录或 contentDir） |
| `[path]` | `String` | 递归调用的目录路径 |
| `[level=10]` | `Int` | 仅向下遍历指定层数 |
| `[deep=0]` | `Int` | 递归调用的当前深度 |
| `[ignore_list]` | `Array` | 要忽略的文件或文件夹名称列表 |
| `[is_recursive=false]` | `Boolean` | 递归调用的内部标志 |
| `[name]` | `String` | 根节点的项目名称，如果设置为 `{path}`，则使用完整根路径 |
| `[lang]` | `String` | 多语言站点的页面语言 |
| `[log=false]` | `Boolean` | 是否记录警告 |

**返回值：** `Array` - 树项目数组，结构为：{name, type, children?}，如果根目录不存在则返回空数组

### function/get-gravatar.html

获取 Gravatar URL。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `Email` | `String` | 邮箱地址 |
| `Size` | `String` | 像素大小（可选，默认：200） |

**示例：**

```go-template
{{- $gravatar := dict "Email" "user@example.com" "Size" "32" | partial "function/get-gravatar.html" -}}
```

### function/get-remote-image.html

缓存远程图片到本地。

### function/get-remote-json.html

*暂无文档。*

### function/get-taxonomy-icon.html

通过 slot 解析分类图标，支持站点级覆盖。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Taxonomy` | `String` | 分类单数键，例如 "tag"、"category" |
| `.Slot` | `String` | 图标 slot："title"、"card"、"term" |

**返回值：** `String` - 图标 class

### function/id.html

ID。

### function/is-cjk.html

*暂无文档。*

### function/is-url-remote.html

*暂无文档。*

### function/js-build.html

构建和压缩 JS 资源，统一行为。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Resource` | `resource.Resource` | 要处理的 Hugo 资源 |
| `[.Build]` | `Object\|Boolean` | true 使用默认值，dict 自定义选项，false/省略跳过 js.Build |
| `[.Minify]` | `Boolean` | 额外压缩标志；最终压缩为 Minify 或 Build.minify |
| `[.Fingerprint]` | `String` | 指纹算法（例如 "sha256"） |

**返回值：** `resource.Resource`

### function/marked-text.html

标记文本渲染。这是标记文本的实验性语法高亮。嵌入类型：default、primary、secondary、success、warning、danger。

### function/param.html

获取页面级 section 参数，支持简写并合并站点默认值。

处理 front matter 中的简写布尔值（例如 `toc: true`），将其包装为带 "enable" 键的 dict，然后与站点级默认值合并。

对于页面级标量参数（例如 capitalize_titles、ruby、password），请直接使用 .Param "xxx" 而非此 partial。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.` | `Map` | 包含 "Page"、"Key" 和可选 "ToCamel" 字段的 dict |
| `.Page` |  | 页面上下文 |
| `.Key` |  | 参数键名（例如 "toc"、"reward"、"math"） |
| `.ToCamel` |  | 如果为 true，将结果键转换为 camelCase（默认：false） |

**返回值：** `Map` - 合并后的参数 map

**示例：**

```go-template
{{- $toc := dict "Page" . "Key" "toc" | partial "function/param.html" -}}
{{- $config := dict "Page" . "Key" "math" "ToCamel" true | partial "function/param.html" -}}
```

### function/path.html

https://discourse.gohugo.io/t/how-decode-urls-in-hugo/7549/4

### function/resource.html

*暂无文档。*

### function/ruby.html

Ruby 注音。

### function/scss-vars.html

构建传递给 toCSS 的 hugo:vars 完整 SCSS 变量 dict。两个类别：

- 内部：主题配置（base URL、logo、loading image）—— 最高优先级
- 外观：默认值 + 派生值 + 用户配置（[params.appearance]）

参考：assets/scss/_variables.scss 注意：颜色值必须使用十六进制格式（例如 "#ff0000"），不支持 CSS 命名颜色（例如 "red"），因为 Hugo 的 isTypedCSSValue 仅识别十六进制颜色、CSS 函数和 CSS 单位。

### function/suffix-validation.html

验证给定路径是否具有有效的后缀。

**示例：**

```go-template
{{- $suffixList := slice ".jpeg" ".jpg" ".png" ".gif" ".bmp" ".tif" ".tiff" ".webp" ".avif" ".svg" -}}
{{- $suffixValid := (dict "Path" .Path "Suffixes" $suffixList | partial "function/suffix-validation.html") -}}
```

### function/task-lists.html

任务列表渲染。

### function/to-css.html

通过 dartsass 将 SCSS 编译为 CSS，可选压缩和指纹。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Resource` | `resource.Resource` | SCSS 资源 |
| `[.ToCSS]` | `Object\|Boolean` | true 使用默认值，dict 自定义 toCSS 选项，false/省略跳过 |
| `[.Minify]` | `Boolean` | 是否压缩；使用 ToCSS 时默认为 hugo.IsProduction |
| `[.Fingerprint]` | `String` | 指纹算法（例如 "sha256"） |

**返回值：** `resource.Resource`

### function/trim.html

去除字符串首尾的空白字符。

### function/xml-content.html

*暂无文档。*

## gen/

> 生成或配置输出 partials。

> 2 个 partials

### gen/config.html

生成每页运行时配置的 window.config JS 内容。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Config` | `Object` | 组装好的配置 dict |

**返回值：** `string` - JS 内容字符串（window.config=&lt;JSON&gt;;）

### gen/mermaid-bootstrap.html

Mermaid 引导脚本生成器。返回 store/script.html 使用的内联模块 JS 源码。配置在运行时从 window.config.mermaid 读取。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.MermaidModuleURL` | `String` | Mermaid 模块 URL |

## home/

> 首页特定 partials。

> 1 个 partial

### home/profile.html

*暂无文档。*

## init/

> 主题初始化 partials（版本、环境检测、兼容性、全局设置）。

> 8 个 partials

### init/compatibility.html

*暂无文档。*

### init/detection-deprecated.html

已弃用参数检测。

### init/detection-encryption.html

*暂无文档。*

### init/detection-env.html

FixIt 主题环境检测。

### init/detection-pagefind.html

*暂无文档。*

### init/detection-version.html

*暂无文档。*

### init/global.html

*暂无文档。*

### init/index.html

*暂无文档。*

## plugin/

> 第三方插件集成 partials。

> 20 个 partials

### plugin/admonition.html

*暂无文档。*

### plugin/alert.html

alert 的基本语法兼容 GitHub、Obsidian 和 Typora。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Type` | `String` | alert 框的类型 |
| `.Text` | `String` | alert 框的内容 |
| `[.Attributes]` | `Map` | alert 框的属性 |

**示例：**

```go-template
{{- dict "Text" .Text "Type" .AlertType "Attributes" .Attributes | partial "plugin/alert.html" -}}
```

### plugin/analytics.html

分析脚本注入器。

- 从 Site Store 读取分析配置。
- 启用时条件渲染提供者代码片段。
- 支持的提供者包括 Google、Fathom、Baidu、Umami 等。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Site` | `Object` | Hugo 站点对象 |

### plugin/code-block-wrapper.html

高亮输出的代码块包装钩子。

- 根据 codeblock 配置应用包装 UI 功能。
- 支持经典/现代模式、复制按钮、展开按钮和行号状态。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Attributes` | `Object` | 代码块属性 |
| `.Options` | `Object` | 代码围栏选项 |
| `.Inner` | `String` | 原始代码内容 |
| `.Page` | `Object` | 当前页面上下文 |
| `.Type` | `String` | 当前块的语言/类型 |

### plugin/diagram-copy-btn.html

图表类插件的复制按钮。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `[.Label]` | `String` | 复制操作的 Aria 标签文本 |

### plugin/echarts.html

ECharts 渲染 partial，用于代码围栏扩展语法和 shortcode 用法。

- 当 MarkupScope 为 home 时跳过渲染。
- 支持从内联内容、数据键或资源文件获取图表选项。
- 支持通过 js/file 选项的 JavaScript 模板模式。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `[.Options]` | `Object` | 来自 shortcode 或代码围栏属性的渲染选项 |
| `[.Options.width]` | `String` | 图表容器宽度（默认：100%） |
| `[.Options.height]` | `String` | 图表容器高度（默认：30rem） |
| `[.Options.js]` | `Boolean` | 是否将内容视为 JS 选项构建器 |
| `[.Options.async]` | `Boolean` | JS 模板是否异步执行 |
| `[.Options.data]` | `String` | data/echarts 下的数据源键 |
| `[.Options.file]` | `String` | js/json/yaml/toml 源的本地资源路径 |
| `[.Inner]` | `String` | 内联图表选项内容 |
| `[.Page]` | `Object` | 当前页面上下文 |

### plugin/file-tree.html

从结构化数据递归渲染树的函数。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `items` | `Array` | 树项目数组 |
| `level` | `Int` | 树的展开级别（全部展开：-1，全部折叠：0） |
| `[depth=0]` | `Int` | 当前深度 |
| `[folder_slash=false]` | `Boolean` | 是否在文件夹名称后追加 "/" |
| `[ignore_list]` | `Array` | 要忽略的文件或文件夹名称列表 |
| `[highlight_list]` | `Array` | 要高亮的文件或文件夹名称列表 文件树项目结构：name: string - 文件或文件夹名称 type: string - 项目类型，"dir"（目录）或 "file" children?: array - （可选）子项目数组，仅对目录有效 |

### plugin/fixit-encryptor.html

加密内容渲染器。

- 渲染构建后 AES-256-GCM 加密的模板占位符。
- 支持全页模式和带隔离目标容器的局部模式。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Password` | `String` | 加密密码 |
| `.Content` | `String` | 明文内容（由构建后脚本加密） |
| `[.Message]` | `String` | 自定义输入占位符消息 |
| `[.IsPartial]` | `Boolean` | 当前渲染是否为局部模式 |
| `[.Page]` | `Object` | 当前页面上下文（IsPartial 为 true 时必填） |

### plugin/icon.html

Font Awesome 类名和 SVG 源的图标渲染器。

- 当提供 `.Class` 时渲染 `<i>` 元素。
- 解析本地 SVG 资源或外部 SVG URL 回退。
- 支持通过图标名称的 Simple Icons 简写。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `[.Class]` | `String` | `<i>` 的图标 class 名称 |
| `[.Src]` | `String` | SVG 源路径或 URL |
| `[.Simpleicons]` | `String` | Simple-icons 图标名称 |
| `[.Prefix]` | `String` | simple-icons 源路径的自定义前缀 |

### plugin/image.html

图片资源插件。处理页面资源、全局资源和远程图片。支持优化、srcset 生成、黑名单过滤和远程缓存。

当调用者需要页面级配置覆盖时传递 .Page（例如内容图片）。省略 .Page 用于装饰/站点级图片（例如 logo、头像、徽章）。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Src` | `String` | 图片路径（页面资源、全局资源或远程 URL） |
| `[.Resources]` | `Object` | 页面资源（.Resources），页面资源时必填 |
| `[.OptimConfig]` | `Array` | srcset 处理配置，例如：slice (dict "Process" "resize 800x webp" "descriptor" "800w") 详见 https://gohugo.io/content-management/image-processing/ |
| `[.Alt]` | `String` | Alt 文本 |
| `[.Title]` | `String` | Title 属性 |
| `[.Caption]` | `String` | lightgallery 的说明文字 |
| `[.Width]` | `Int` | 固有宽度（像素） |
| `[.Height]` | `Int` | 固有高度（像素） |
| `[.Loading]` | `String` | "eager" 或 "lazy"（默认："lazy"） |
| `[.Class]` | `String` | CSS class |
| `[.Sizes]` | `String` | srcset sizes 属性 |
| `[.Matches]` | `Array` | 资源匹配名称，例如 ["featured-image-preview", "featured-image"] |
| `[.Linked]` | `Boolean` | 包装为 lightgallery 链接 |
| `[.Rel]` | `Object` | rel 属性 |
| `[.Decoding]` | `String` | decoding 属性 |
| `[.Referrerpolicy]` | `String` | referrerpolicy 属性 |
| `[.Optimise]` | `Boolean` | 覆盖站点参数以启用优化 |
| `[.CacheRemote]` | `Boolean` | 覆盖站点参数以启用远程缓存 |
| `[.BlackList]` | `Array` | 覆盖站点参数黑名单 |
| `[.Page]` | `Object` | 用于页面级图片配置覆盖的页面上下文 |

**示例：**

```go-template
{{- dict "Src" "cover.jpg" "Resources" .Resources | partial "plugin/image.html" -}}
{{- dict "Src" "logo.png" "Class" "logo" "Width" 32 "Height" 32 | partial "plugin/image.html" -}}

Thanks @HEIGE-PCloud for the original code in the DoIt theme.
```

### plugin/link.html

常规和卡片式链接的链接渲染 partial。

- 自动检测外部链接并应用 target/rel 策略。
- 支持可选图标、下载提示和外部图标显示。
- 支持带 URL meta 和 favicon 回退的卡片模式。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Destination` | `String` | 目标 URL |
| `[.Content]` | `String` | 链接标签 HTML |
| `[.Title]` | `String` | Title 属性 |
| `[.Class]` | `String` | 自定义 CSS class |
| `[.Rel]` | `String` | Rel 属性值 |
| `[.Newtab]` | `Boolean` | 强制外部行为 |
| `[.Noreferrer]` | `Boolean` | 是否包含 noreferrer（默认：true） |
| `[.ExternalIcon]` | `Boolean` | 是否显示外部链接图标 |
| `[.Icon]` | `Object` | plugin/icon.html 的图标参数 |
| `[.Card]` | `Boolean` | 是否渲染卡片链接布局 |
| `[.CardIcon]` | `String` | 卡片图标 URL 或图标 class |
| `[.Download]` | `String` | Download 属性值 |
| `[.IsGuarded]` | `Boolean` | 显式启用或禁用链接防护 |
| `[.Page]` | `Object` | 用于页面级链接配置覆盖的页面上下文 |

### plugin/mermaid.html

Mermaid 渲染 partial，用于代码围栏扩展语法和 shortcode 用法。

- 当 MarkupScope 为 home 时跳过渲染。
- 支持带标签/操作的包装视图和纯图表模式。
- 支持每个图表的文件名用于代码/下载操作。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `[.Options]` | `Object` | 来自 shortcode 或代码围栏属性的渲染选项 |
| `[.Options.wrapper]` | `Boolean` | 是否启用包装图表 UI |
| `[.Options.filename]` | `String` | 图表/代码操作使用的文件名 |
| `[.Inner]` | `String` | 内联 Mermaid 源内容 |
| `[.Page]` | `Object` | 当前页面上下文 |

### plugin/pagefind-metadata.html

*暂无文档。*

### plugin/post-chat-ai.html

PostChat AI 服务。PostChat：https://ai.zhheo.com/docs/addCode.html PostSummary：https://ai.zhheo.com/docs/summary.html Podcast：https://ai.zhheo.com/docs/podcast.html TODO 重构并迁移到主题组件。

### plugin/reward.html

文章打赏面板渲染器。

- 渲染打赏开关按钮和打赏 QR/支付图片。
- 支持可选的作者前缀和动画模式。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Reward` | `Object` | 打赏配置对象 |
| `.Id` | `String` | 打赏切换的唯一 input id |
| `[.Author]` | `String` | 可选的作者名称，用于图片 alt 文本 |

### plugin/script.html

Script 标签渲染器。

- 接受直接的 script HTML、预构建资源或从源路径构建。
- 支持模板执行、minify/build/fingerprint 管道和额外属性。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `[.Source]` | `String` | Script 源 URL/路径；如果以 "<script" 开头则视为原始 HTML |
| `[.Resource]` | `resource.Resource` | 预构建资源（跳过构建管道） |
| `[.Content]` | `String` | 要写入为生成资源的内联内容 |
| `[.Path]` | `String` | 从 Content 创建的资源的目标路径 |
| `[.Template]` | `Object` | 从模板执行创建的资源的目标路径 |
| `[.Context]` | `Object` | ExecuteAsTemplate 的模板上下文 |
| `[.Minify]` | `Boolean` | 是否压缩资源 |
| `[.Build]` | `Object` | js.Build 选项（Build.minify 规范化为 .Minify 以适配路径语义） |
| `[.Fingerprint]` | `String` | 指纹算法 |
| `[.Async]` | `Boolean` | 是否添加 async 属性 |
| `[.Defer]` | `Boolean` | 是否添加 defer 属性 |
| `[.Crossorigin]` | `Boolean` | 是否添加 crossorigin=anonymous |
| `[.Integrity]` | `String` | SRI 哈希值 |
| `[.Attr]` | `String` | 额外属性 |

### plugin/share.html

社交分享按钮渲染器。

- 从合并的主题/页面参数读取分享开关。
- 为支持的平台输出提供者特定的分享属性。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `.Page` | `Object` | 当前页面上下文 |

### plugin/social.html

社交资料链接助手。

- 从显式 URL 或 Prefix/Template/Id 构建目标地址。
- 委托 plugin/link.html 进行最终渲染，带 rel=me。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `[.Url]` | `String` | 显式目标 URL |
| `[.Template]` | `String` | 包含一个 %%v 占位符的 URL 模板 |
| `[.Prefix]` | `String` | 用于构建 Template 的 URL 前缀 |
| `[.Id]` | `String` | Template 使用的账户 ID |

### plugin/style.html

样式表标签渲染器。

- 接受直接的 `<link>` HTML、预构建资源或从源路径构建。
- 支持模板执行、可选 toCSS、minify/fingerprint 和 preload 模式。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `[.Source]` | `String` | 样式表 URL/路径；如果以 "<link" 开头则视为原始 HTML |
| `[.Resource]` | `resource.Resource` | 预构建资源（跳过构建管道） |
| `[.Content]` | `String` | 要写入为生成资源的内联样式内容 |
| `[.Path]` | `String` | 从 Content 创建的资源的目标路径 |
| `[.Template]` | `Object` | 从模板执行创建的资源的目标路径 |
| `[.Context]` | `Object` | ExecuteAsTemplate 的模板上下文 |
| `[.ToCSS]` | `Object\|Boolean` | true 使用默认值，dict 自定义 toCSS 选项，false/省略跳过 toCSS |
| `[.Minify]` | `Boolean` | 是否压缩资源 |
| `[.Fingerprint]` | `String` | 指纹算法 |
| `[.Crossorigin]` | `Boolean` | 是否添加 crossorigin=anonymous |
| `[.Preload]` | `Boolean` | 是否输出 preload + noscript 回退 |
| `[.Integrity]` | `String` | SRI 哈希值 |
| `[.Attr]` | `String` | 额外属性 |

### plugin/timeline.html

时间线渲染 partial，用于代码围栏扩展语法和 shortcode 用法。

- 支持从内联内容、数据键、资源文件或直接 Events 输入获取事件。
- 支持排序、位置、动画、节点样式和大小选项。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|------|
| `[.Options]` | `Object` | 来自 shortcode 或代码围栏属性的渲染选项 |
| `[.Options.reverse]` | `Boolean` | 是否按降序排列事件 |
| `[.Options.placement]` | `String` | 默认时间戳位置 |
| `[.Options.animation]` | `Boolean` | 是否启用项目动画 |
| `[.Options.size]` | `String` | 时间线大小变体 |
| `[.Options.node]` | `String` | 时间线节点样式 |
| `[.Options.data]` | `String` | data/timeline 下的数据源键 |
| `[.Options.file]` | `String` | 时间线数据的本地资源路径 |
| `[.Inner]` | `String` | 内联时间线源内容 |
| `[.Events]` | `Array` | 直接事件数组覆盖 |
| `[.Page]` | `Object` | 当前页面上下文 |

## section/

> Section 级 partials。

> 1 个 partial

### section/recently-updated.html

归档、section 和 term 列表的最近更新页面。

## single/

> 单篇文章页面 partials。

> 9 个 partials

### single/collection-list.html

集合列表。

### single/collection-nav.html

集合导航。

### single/expiration-reminder.html

*暂无文档。*

### single/footer.html

Git 信息。

### single/post-author.html

*暂无文档。*

### single/post-included-in.html

*暂无文档。*

### single/related-aside.html

相关内容。

### single/related.html

相关内容。

### single/reward.html

*暂无文档。*

## store/

> 资源累积存储 partials。

> 2 个 partials

### store/script.html

*暂无文档。*

### store/style.html

*暂无文档。*

## (root)

> 1 个 partial

### custom.html

*暂无文档。*

<!-- HUGO_FIXIT_PARTIALS:END -->
