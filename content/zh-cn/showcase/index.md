---
title: 案例展示
subtitle: 记录一些使用 FixIt 主题的朋友们
layout: friends
aliases:
  - /zh-cn/friends/
description: FixIt 主题的友链模板 Demo
keywords:
  - Hugo
  - 友情链接
comment:
  giscus:
    mapping: number
    term: "120"
---

**最佳实践**
{.text-center}

{{< gh-repo-card-container >}}
  {{< gh-repo-card repo="hugo-fixit/docs" >}}
  {{< gh-repo-card repo="Lruihao/hugo-blog" >}}
{{< /gh-repo-card-container >}}

---

{{< admonition tip "添加你的 FixIt 网站" >}}
你可以通过 [创建 PR :(fa-solid fa-code-branch fa-fw):](https://github.com/hugo-fixit/docs/pulls) 或 [编辑数据 :(fa-regular fa-pen-to-square fa-fw):](https://github.com/hugo-fixit/docs/edit/main/data/friends.yml) 按 **nickname** 以字典顺序将你的 FixIt 网站添加到此页面，格式如下：

```yml
- nickname: <your nickname>
  avatar: <your avatar>
  url: <your site link>
  description: <description of your site>
```

> :(fa-solid fa-exclamation-triangle): _网站失效、停止维护、不当内容都可能被取消链接！_
{{< /admonition >}}
