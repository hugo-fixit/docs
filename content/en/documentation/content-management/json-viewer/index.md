---
title: Code Fences Extended - JSON
linkTitle: JSON viewer support
date: 2025-10-14T06:49:42+08:00
description: This document will show you how to create a JSON viewer in FixIt using the code fences extended syntax.
categories:
  - Documentation
collections:
  - Content Management
tags:
  - JSON
  - Markdown
  - Content
resources:
  - name: featured-image
    src: featured-image.webp
---

<!--more-->

{{< version 0.4.0 >}}

**FixIt** theme provides an interactive JSON viewer using code fences extended syntax.

## Overview

The JSON viewer is based on the [json-viewer-element](https://github.com/Lruihao/json-viewer-element) project, which provides an elegant way to display and interact with JSON data in your posts.

## Usage

To create a JSON viewer, use a code fence with the `json` language identifier:

````markdown
```json
{
  "name": "FixIt",
  "version": "0.4.0",
  "description": "A clean, elegant but advanced blog theme for Hugo",
  "keywords": ["Hugo", "theme", "FixIt"]
}
```
````

The rendered output will be an interactive JSON viewer with expandable nodes.

```json
{
  "name": "FixIt",
  "version": "0.4.0",
  "description": "A clean, elegant but advanced blog theme for Hugo",
  "keywords": ["Hugo", "theme", "FixIt"]
}
```

## Features

The JSON viewer provides the following features:

- **Expandable/Collapsible**: Click on nodes to expand or collapse them
- **Syntax Highlighting**: Different colors for keys, values, strings, numbers, etc.
- **Copy Support**: Copy JSON content with a single click (if enabled)
- **Sorting**: Sort object keys alphabetically (if enabled)
- **Boxed Display**: Display JSON in a bordered container (if enabled)

## Configuration

You can configure the JSON viewer globally in your site configuration file, per-page basis or per-instance basis.

### Global Configuration

Add the following to your `hugo.toml` ([Configuration Options][json-viewer-config]):

```toml
[params]

[params.jsonViewer]
enable = true
expandDepth = 1
copyable = true
sort = false
boxed = true
```

### Page-level Configuration

You can override global settings for individual pages using front matter:

```yaml
---
title: My JSON Data
jsonViewer:
  expandDepth: 2
  sort: true
---
```

### Instance-level Configuration

You can also customize the JSON viewer for individual instances by adding options directly in the code fence:

````markdown
```json {expandDepth=2, copyable=false, sort=true, boxed=false}
{
  "name": "FixIt",
  "version": "0.4.0",
  "description": "A clean, elegant but advanced blog theme for Hugo",
  "keywords": ["Hugo", "theme", "FixIt"]
}
```
````

The above code fence will render as:

```json {expandDepth=2, copyable=false, sort=true, boxed=false}
{
  "name": "FixIt",
  "version": "0.4.0",
  "description": "A clean, elegant but advanced blog theme for Hugo",
  "keywords": ["Hugo", "theme", "FixIt"]
}
```

<!-- link reference definition -->
<!-- markdownlint-disable-file MD052 -->
[json-viewer-config]: {{< relref path="/documentation/getting-started/configuration#jsonviewer" >}}
