---
title: 内容加密
date: 2023-02-24T22:32:41+08:00
description: 了解如何在 FixIt 主题中加密内容。
keywords:
  - Hugo 加密
  - 内容加密
  - FixIt
  - AES-256-GCM
  - PBKDF2
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

## 实现细节

FixIt 主题提供两个层次的内容加密：

- **模板处理**：基于 Hugo 模板语法的密码保护，内容以明文存储于构建产物中，不具备加密安全性。
- **fixit-encrypt (AES-256-GCM)**：构建后加密，使用 AES-256-GCM 和 PBKDF2 密钥派生（100,000 次迭代）。为敏感内容提供强加密安全性。

> [!danger]~
> “最简单的密码，就足以防住 90% 的人！”
>
> 隐私无小事，重要私密的内容请勿上传，各自妥善保管！

## 全文加密

FixIt 主题提供了两个 front matter 用于全文加密。

- **password**: _[必需]_ 加密页面内容的密码
- **message**: _[可选]_ 加密提示信息

例如，本文的 front matter 如下：

```yaml
title: 内容加密
date: 2023-02-24T22:32:41+08:00
password: 1212
message: 密码是 1212
# 其他 front matter ...
```

> [!info]~
>
> 1. 每次输入正确密码后，会在用户本地缓存密码 hash 值，一天之内再次访问时，将自动解锁文章
> 2. 文章最后提供有一个“重新加密”的按钮，点击即可立即忘记密码，并重新加密内容
> 3. 加密文章已从搜索中隐藏
> 4. 加密文章的 Markdown 输出已禁用，为了防止密码泄漏，**请勿将加密文章以任何形式公开**

## 部分加密 {#partial-encryption}

{{< version 0.2.15 >}}

你可以使用 `fixit-encryptor` shortcode 来加密部分内容。

`fixit-encryptor` shortcode 具有以下具名参数：

- **password** _[必需]_（**第一个**位置参数）

    部分加密内容的密码。

- **message** _[可选]_（**第二个**位置参数）

    解密输入框的提示信息。

一个 `fixit-encryptor` 示例：

```go-template
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

## fixit-encrypt 工具

{{< version 1.0.0 >}}

为了增强安全性，FixIt 提供了独立的加密工具，在 Hugo 构建后使用 AES-256-GCM 和 PBKDF2 密钥派生来加密内容。这比基于模板的方式提供了更强的加密安全性。

推荐安装为开发依赖并配置 scripts：

```bash
npm install -D @hugo-fixit/encrypt
```

然后在 `package.json` 中配置：

```json
{
  "scripts": {
    "build": "hugo --gc --minify --logLevel info",
    "postbuild": "fixit-encrypt"
  }
}
```

也可以使用 Go 版本 [fixit-encrypt.go](https://github.com/hugo-fixit/fixit-encrypt)，无需 Node.js 环境。

```bash
# 通过 Go 安装
go install github.com/hugo-fixit/fixit-encrypt@latest

# 或从 GitHub Releases 下载预编译二进制文件
# https://github.com/hugo-fixit/fixit-encrypt/releases
```

在 GitHub Actions 中，可以使用 [action-fixit-encrypt](https://github.com/hugo-fixit/action-fixit-encrypt) 快速安装：

```yaml
- name: Setup fixit-encrypt
  uses: hugo-fixit/action-fixit-encrypt@v1

- name: Build Hugo site
  run: hugo --gc --minify

- name: Encrypt content
  run: fixit-encrypt --input public
```

完整用法详见 [fixit-encrypt](https://github.com/hugo-fixit/FixIt/tree/main/packages/encrypt) 文档。
