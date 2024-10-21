---
title: Showcase
subtitle: Recording some friends who use FixIt theme
layout: friends
aliases:
  - /friends/
description: Friends template demo of FixIt theme
keywords:
  - Hugo
  - friends template
comment:
  giscus:
    mapping: number
    term: "120"
---

**Best Practices**
{.text-center}

{{< gh-repo-card-container >}}
  {{< gh-repo-card repo="hugo-fixit/docs" >}}
  {{< gh-repo-card repo="Lruihao/hugo-blog" >}}
{{< /gh-repo-card-container >}}

---

{{< admonition tip "Add your FixIt site" >}}
You could add your FixIt site to this page in **nickname** lexicographical order via [making a PR :(fa-solid fa-code-branch fa-fw):](https://github.com/hugo-fixit/docs/pulls) or [editing data :(fa-regular fa-pen-to-square fa-fw):](https://github.com/hugo-fixit/docs/edit/main/data/friends.yml), the format is as follows:

```yml
- nickname: <your nickname>
  avatar: <your avatar>
  url: <your site link>
  description: <description of your site>
```

> :(fa-solid fa-exclamation-triangle): _Website failure, stop maintenance and improper content may be unlinked!_
{{< /admonition >}}
