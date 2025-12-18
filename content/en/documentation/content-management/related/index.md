---
title: Related content
date: 2024-10-27T01:05:43+08:00
description: List related content in "Related content" sections.
tags:
  - Related
  - Content
  - Advanced
categories:
  - Documentation
collections:
  - Content Management
resources:
  - name: featured-image
    src: featured-image.webp
---

List related content in "Related content" sections.

<!--more-->

Hugo uses a set of factors to identify a page's related content based on front matter parameters. This can be tuned to the desired set of indices and parameters or left to Hugo's default [Related Content configuration](#configure-related-content).

## Enable related Content

To enable related content, set the `page.related.enable` parameter to `true` in the site configuration file.

```toml
[params]
# ...

[params.page]
# ...

[params.page.related]
enable = true
count = 5
position = [
  "aside",
  "footer"
]
```

> [!NOTE]
> If you want to hide a page from the related posts, set the `hiddenFromRelated` parameter to `true` in the page's front matter.

## Configure related content {#configure-related-content}

Hugo provides a sensible default configuration of Related Content, but you can fine-tune this in your configuration, on the global or language level if needed.

> This section may be outdated. Refer to the [Related content | Hugo][hugo-related] for the latest information.

### Default configuration

Without any `related` configuration set on the project, Hugo’s Related Content methods will use the following.

```toml
[related]
includeNewer = false
threshold = 80
toLower = false

[[related.indices]]
applyFilter = false
cardinalityThreshold = 0
name = 'keywords'
pattern = ''
toLower = false
type = 'basic'
weight = 100

[[related.indices]]
applyFilter = false
cardinalityThreshold = 0
name = 'date'
pattern = ''
toLower = false
type = 'basic'
weight = 10

[[related.indices]]
applyFilter = false
cardinalityThreshold = 0
name = 'tags'
pattern = ''
toLower = false
type = 'basic'
weight = 80
```

Custom configuration should be set using the same syntax.

> [!TIP]
> If you add a `related` configuration section, you need to add a complete configuration. It is not possible to just set, say, `includeNewer` and use the rest from the Hugo defaults.

### Top level configuration options

threshold
: (`int`) A value between 0-100. Lower value will give more, but maybe not so relevant, matches.

includeNewer
: (`bool`) Set to `true` to include **pages newer than the current page** in the related content listing. This will mean that the output for older posts may change as new related content gets added.

toLower
: (`bool`) Set to `true` to lower case keywords in both the indexes and the queries. This may give more accurate results at a slight performance penalty. Note that this can also be set per index.

### Configuration options per index

name
: (`string`) The index name. This value maps directly to a page parameter. Hugo supports string values (`author` in the example) and lists (`tags`, `keywords` etc.) and time and date objects.

type
: (`string`) One of `basic`(default) or `fragments`.

applyFilter
: (`string`) Apply a `type` specific filter to the result of a search. This is currently only used for the `fragments` type.

weight
: (`int`) An integer weight that indicates how important this parameter is relative to the other parameters. It can be `0`, which has the effect of turning this index off, or even negative. Test with different values to see what fits your content best.

cardinalityThreshold
: (`int`) If between 1 and 100, this is a percentage. All keywords that are used in more than this percentage of documents are removed. For example, setting this to `60` will remove all keywords that are used in more than 60% of the documents in the index. If `0`, no keyword is removed from the index. Default is `0`.

pattern
: (`string`) This is currently only relevant for dates. When listing related content, we may want to list content that is also close in time. Setting “2006” (default value for date indexes) as the pattern for a date index will add weight to pages published in the same year. For busier blogs, “200601” (year and month) may be a better default.

toLower
: (`bool`) See above.

<!-- link reference definition -->
[hugo-related]: https://gohugo.io/content-management/related/
