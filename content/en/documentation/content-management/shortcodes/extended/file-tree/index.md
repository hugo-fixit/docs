---
title: Extended Shortcode - File Tree
shortTitle: File Tree
linkTitle: File Tree Shortcode
date: 2026-01-14T02:50:14+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: The file-tree shortcode is used to render an interactive file tree structure.
resources:
  - name: featured-image
    src: featured-image.webp
tags:
  - Shortcodes
  - Content
  - File Tree
categories:
  - Documentation
collections:
  - Extended Shortcodes
---

The `file-tree` shortcode is used to render interactive file tree structures in FixIt theme. It supports multiple data sources and formats.

<!--more-->
<!-- markdownlint-disable-file MD007 MD032 -->

## Overview

{{< version 0.4.2 >}}

The `file-tree` shortcode provides a visual representation of directory structures with collapsible folders and file icons. It can read data from (priority order from high to low):

1. Inline content (`.Inner`) - Parse tree data from shortcode body
2. Resources files (`file`) - Read data file from page bundle or asset
3. Data files (`data`) - Load data file from data/filetree/ directory
4. Actual Filesystem (`path`) - Scan actual directory structure (default)

## Usage

### Syntax

To use the `file-tree` shortcode, include it in your content as follows:

```markdown
{{</* file-tree [path] [level] [folderSlash] [file="filename"] [data="datafilename"] [ignoreList="item1,item2"] */>}}
<!-- Your tree data here (optional) -->
{{</* /file-tree */>}}
```

### Parameters

The `file-tree` shortcode has the following named parameters, and the positional parameters ordered from top to bottom:

| Parameter       | Type    | Default | Description                                                                   |
| :-------------- | :------ | :------ | :---------------------------------------------------------------------------- |
| `path`          | string  | `"/"`   | ==1== The path to scan in filesystem (relative to project root or contentDir) |
| `level`         | int     | `1`     | ==2== The expand level of the tree (expand all: -1, collapse all: 0)          |
| `folderSlash`   | boolean | `false` | ==3== Whether to append "/" to folder names                                   |
| `file`          | string  | -       | Path to data file in page resources or assets (JSON/YAML/TOML)                |
| `data`          | string  | -       | Name of data file in `data/filetree/` directory                               |
| `ignoreList`    | string  | -       | Comma-separated list of files/folders to ignore                               |
| `highlightList` | string  | -       | Comma-separated list of files/folders to highlight                            |
| `name`          | string  | -       | Name for the root node (if set to `{path}`, uses the full root path)          |

### Configuration

You can configure default behavior in your site configuration or page front matter:

```toml
[params]

[params.filetree]
level = 1
folderSlash = false
ignoreList = []
```

## Inline Content

You can provide the tree structure directly within the shortcode body in JSON, YAML, or TOML format.

For example:

{{< file-tree >}}
- name: src
  type: dir
  children:
    - name: index.ts
      type: file
    - name: app.ts
      type: file
- name: package.json
  type: file
{{< /file-tree >}}

{{< tabs type=segment >}}
{{% tab title=JSON %}}

```md {mode=simple}
{{</* file-tree */>}}
[
  {
    "name": "src",
    "type": "dir",
    "children": [
      {
        "name": "index.ts",
        "type": "file"
      },
      {
        "name": "app.ts",
        "type": "file"
      }
    ]
  },
  {
    "name": "package.json",
    "type": "file"
  }
]
{{</* /file-tree */>}}
```

{{% /tab %}}
{{% tab title=YAML %}}

```md {mode=simple}
{{</* file-tree */>}}
- name: src
  type: dir
  children:
    - name: index.ts
      type: file
    - name: app.ts
      type: file
- name: package.json
  type: file
{{</* /file-tree */>}}
```

{{% /tab %}}
{{% tab title=TOML %}}

> [!NOTE]
> TOML requires a root key `filetree` due to format limitations. Each item must be prefixed with `[[filetree]]` and children with `[[filetree.children]]`.

```md {mode=simple}
{{</* file-tree */>}}
[[filetree]]
name = "src"
type = "dir"

[[filetree.children]]
name = "index.ts"
type = "file"

[[filetree.children]]
name = "app.ts"
type = "file"

[[filetree]]
name = "package.json"
type = "file"
{{</* /file-tree */>}}
```

{{% /tab %}}
{{< /tabs >}}

Additionally, you can use **code fence syntax** with the `file-tree` language identifier for a more convenient writing experience.

````md {maxShownLines=11}
```file-tree
- name: src
  type: dir
  children:
    - name: index.ts
      type: file
    - name: app.ts
      type: file
- name: package.json
  type: file
```
````

## File Data

Supports getting data from files in Hugo [page-resources] or `assets`, and the format supports `JSON`, `YAML` or `TOML` format.

For example, the current page structure is as follows:

{{< file-tree path="documentation/content-management/shortcodes/extended/file-tree" level=-1 highlightList="tree.yml" />}}

You can use the `file` parameter to get data from the file:

```md
{{</* file-tree file="data/tree.yml" /*/>}}
```

The rendered output looks like this:

{{< file-tree file="data/tree.yml" />}}

## Site Data

Support obtaining data from Hugo [site data][hugo-data], with data files defined in the `data/filetree` directory, and the format supports `JSON`, `YAML`, and `TOML`.

For example, the data structure is as follows:

```file-tree {highlightList="example.yml" level=-1}
- name: fixit-docs
  type: dir
  children:
    - name: ...
      type: dir
    - name: data
      type: dir
      children:
        - name: filetree
          type: dir
          children:
            - name: example.yml
              type: file
    - name: ...
      type: dir
```

You can use the `data` parameter to reference it:

```markdown
{{</* file-tree data="example" /*/>}}
```

The rendered output looks like this:

{{< file-tree data="example" />}}

## Filesystem Mode

Filesystem mode scans your actual project directory and generates the tree structure automatically.

It attempts to resolve the `path` relative to the root of your project directory. If a matching directory is not found, it will attempt to resolve the `path` relative to the [contentDir]. A leading path separator (`/`) is optional.

By default, the `path` is `/`:

```markdown
{{</* file-tree /*/>}}
```

The rendered output looks like this:

{{< file-tree name="{path}" />}}

Use `ignoreList` parameter to exclude specific files or folders:

```markdown
{{</* file-tree level=0 ignoreList=".autocorrectignore,.autocorrectrc,.frontmatter,.vscode" name="{path}" /*/>}}
```

The rendered output looks like this:

{{< file-tree level=0 ignoreList=".autocorrectignore,.autocorrectrc,.frontmatter,.vscode" name="{path}" />}}

Use `path` parameter to scan a specific directory, e.g., `documentation` under the `content` directory:

```markdown
{{</* file-tree path="documentation" level=2 folderSlash=true name="{path}" /*/>}}
```

The rendered output looks like this:

{{< file-tree path="documentation" level=2 folderSlash=true name="{path}" />}}

<!-- link reference definition -->
[page-resources]: https://gohugo.io/content-management/page-resources/
[hugo-data]: https://gohugo.io/methods/site/data/
[contentdir]: https://gohugo.io/configuration/all/#contentdir
