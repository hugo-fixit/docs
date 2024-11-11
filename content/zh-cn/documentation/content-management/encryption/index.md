---
title: 内容加密
date: 2023-02-24T22:32:41+08:00
aliases:
  - /zh-cn/theme-documentation-content-encryption/
author:
  name: Lruihao
  link: https://lruihao.cn
description: 了解如何在 FixIt 主题中加密内容。
keywords:
  - Hugo 加密
  - 内容加密
  - FixIt
password: 1212
message: 密码是 1212
resources:
  - name: featured-image
    src: featured-image.webp
tags:
  - Content
  - Encryption
  - Advanced
categories:
  - Documentation
collections:
  - Content Management
---

了解如何在 FixIt 主题中加密内容。

<!--more-->

## 全文加密

### Front matter

FixIt 主题提供了两个 front matter 用于全文加密。

- **password**: _[必需]_ 加密页面内容的密码
- **message**: _[可选]_ 加密提示信息

例如，本文的 front matter 如下：

```yaml
title: 主题文档 - 内容加密
date: 2022-05-28T11:51:41+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: 了解如何在 FixIt 主题中加密内容。
password: 1212
message: 密码是 1212
resources:
  - name: featured-image
    src: featured-image.png
tags:
  - Encryption
categories:
  - Documentation
```

{{< admonition info >}}

1. 每次输入正确密码后，会在用户本地缓存密码 hash 值，一天之内再次访问时，将自动解锁文章
2. 文章最后提供有一个“重新加密”的按钮，点击即可立即忘记密码，并重新加密内容
3. 加密文章已从搜索中隐藏
4. 加密文章的 Markdown 输出已禁用，为了防止密码泄漏，**请勿将加密文章以任何形式公开**

{{< /admonition >}}

### 进阶使用

FixIt Dcryptor 有两个生命周期钩子函数，详见 [Class FixItDecryptor API]({{< relref path="/references/fixIt-decryptor" lang="en" >}})。

例如在解锁文章后，输出文本：

```go-html-template
{{</* script */>}}
document.addEventListener('DOMContentLoaded', () => {
  fixit.theme.decryptor.addEventListener('decrypted', function() {
    console.log('after password decryption')
  })
  if (window.localStorage.getItem(`fixit-decryptor/#${location.pathname}`)) {
    console.log('after automatic decryption')
  }
});
{{</* /script */>}}
```

你可以在开发人员工具的控制台中看到输出。

{{< script >}}
document.addEventListener('DOMContentLoaded', () => {
  fixit.decryptor.addEventListener('decrypted', function() {
    console.log('after password decryption')
  })
  if (window.localStorage.getItem(`fixit-decryptor/#${location.pathname}`)) {
    console.log('after automatic decryption')
  }
});
{{< /script >}}

## 部分加密 {#partial-encryption}

{{< version 0.2.15 >}}

你可以使用 `fixit-encryptor` shortcode 来加密部分内容。

`fixit-encryptor` shortcode 具有以下命名参数：

- **password** _[必需]_（**第一个**位置参数）

    部分加密内容的密码。

- **message** _[可选]_（**第二个**位置参数）

    解密输入框的提示信息。

一个 `fixit-encryptor` 示例：

```md
{{%/* fixit-encryptor "1212" "密码是 1212" */%}}
`fixit-encryptor` shortcode 在版本 {{</* version 0.2.15 */>}} 得到支持。
{{%/* /fixit-encryptor */%}}
Or
{{%/* fixit-encryptor password="1212" message="密码是 1212" */%}}
`fixit-encryptor` shortcode 在版本 {{</* version 0.2.15 */>}} 得到支持。
{{%/* /fixit-encryptor */%}}
```

呈现的输出效果如下：

{{% fixit-encryptor "1212" "密码是 1212" %}}
`fixit-encryptor` shortcode 在版本 {{< version 0.2.15 >}} 得到支持。
{{% /fixit-encryptor %}}

{{< version 0.3.3 >}} 支持无限级嵌套。

一个嵌套的例子：

```md
{{%/* fixit-encryptor "1212" "密码是 1212" */%}}
{{</* typeit */>}}如果你愿意一层一层一层地剥开我的心{{</* /typeit */>}}
{{%/* fixit-encryptor "1212" "密码是 1212" */%}}
{{</* typeit */>}}你会发现 你会讶异{{</* /typeit */>}}
{{%/* fixit-encryptor "1212" "密码是 1212" */%}}
{{</* typeit */>}}你是我最压抑最深处的秘密{{</* /typeit */>}}
{{%/* /fixit-encryptor */%}}
{{%/* /fixit-encryptor */%}}
{{%/* /fixit-encryptor */%}}
```

呈现的输出效果如下：

{{% fixit-encryptor "1212" "密码是 1212" %}}
{{< typeit >}}如果你愿意一层一层一层地剥开我的心{{< /typeit >}}
{{% fixit-encryptor "1212" "密码是 1212" %}}
{{< typeit >}}你会发现 你会讶异{{< /typeit >}}
{{% fixit-encryptor "1212" "密码是 1212" %}}
{{< typeit >}}你是我最压抑最深处的秘密{{< /typeit >}}
{{% /fixit-encryptor %}}
{{% /fixit-encryptor %}}
{{% /fixit-encryptor %}}

## 结语

相比于通过 Golang/Python/JavaScript 等以脚本批处理的方式加密内容，FixIt 主题内置加密具有以下优缺点：

- **优点**：易用性高，开箱即用，无需进一步批处理
- **缺点**：安全性低，加密算法受限于 `go-html-template` 语法

> “最简单的密码，就足以防住 90% 的人！”
>
> 隐私无小事，重要私密的内容请勿上传，各自妥善保管！
