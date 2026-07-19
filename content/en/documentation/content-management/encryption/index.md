---
title: Content Encryption
date: 2023-02-24T22:32:41+08:00
aliases:
  - /theme-documentation-content-encryption/
description: Find out how to encrypt content in FixIt theme.
keywords:
  - Hugo Encryption
  - Content Encryption
  - FixIt
  - AES-256-GCM
  - PBKDF2
password: 1212
message: Password is 1212
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

Find out how to encrypt content in FixIt theme.

<!--more-->

## Implementation Details

FixIt theme provides two levels of content encryption:

- **Template processing**: Password protection based on Hugo template syntax. Content is stored in plaintext in the build output, offering no real encryption security.
- **fixit-encrypt (AES-256-GCM)**: Build-time encryption using AES-256-GCM with PBKDF2 key derivation (100,000 iterations). Provides strong cryptographic security for sensitive content.

> [!danger]~
> "The simplest password is enough to prevent 90% of people!"
>
> There is no trivial matter about privacy. Please do not upload important and private contents, and keep them properly!

## Page Encryption

The FixIt theme provides two front matters for page encryption.

- **password**: _[required]_ password of encrypted page content
- **message**: _[optional]_ encryption prompt

For example, the front matters in this article are as follows:

```yaml
title: Content Encryption
date: 2023-02-24T22:32:41+08:00
password: 1212
message: Password is 1212
# other front matter ...
```

> [!info]~
>
> 1. After entering the correct password each time, the password hash value will be cached locally by the user, and the pages will be unlocked automatically when accessed again within one day
> 2. A "Encrypt again" button is provided at the end of the article. Click it to immediately forget the password and re encrypt the content
> 3. Encrypted pages have been hidden from search
> 4. The Markdown output of encrypted pages has been disabled. To prevent password disclosure, **do not make encrypted pages public in any form**

## Partial Encryption {#partial-encryption}

{{< version 0.2.15 >}}

You can use `fixit-encryptor` shortcode to encrypt partial content.

The `fixit-encryptor` shortcode has the following named parameters:

- **password** _[required]_ (**first** positional parameter)

    Password of the partial encrypted content.

- **message** _[optional]_ (**second** positional parameter)

    Placeholder of the decryptor input.

Example `fixit-encryptor` input:

```go-template
{{%/* fixit-encryptor "1212" "Password is 1212" */%}}
The `fixit-encryptor` shortcode was supported in version {{</* version 0.2.15 */>}}.
{{%/* /fixit-encryptor */%}}
Or
{{%/* fixit-encryptor password="1212" message="Password is 1212" */%}}
The `fixit-encryptor` shortcode was supported in version {{</* version 0.2.15 */>}}.
{{%/* /fixit-encryptor */%}}
```

The rendered output looks like this:

{{% fixit-encryptor "1212" "Password is 1212" %}}
The `fixit-encryptor` shortcode was supported in version {{< version 0.2.15 >}}.
{{% /fixit-encryptor %}}

{{< version 0.3.3 >}} Support infinite nesting.

An example of nesting:

```md
{{%/* fixit-encryptor "1212" "Password is 1212" */%}}
{{</* typeit */>}}If you peel my heart layer by layer{{</* /typeit */>}}
{{%/* fixit-encryptor "1212" "Password is 1212" */%}}
{{</* typeit */>}}You will find you will be surprised{{</* /typeit */>}}
{{%/* fixit-encryptor "1212" "Password is 1212" */%}}
{{</* typeit */>}}You are my most suppressed deepest secret{{</* /typeit */>}}
{{%/* /fixit-encryptor */%}}
{{%/* /fixit-encryptor */%}}
{{%/* /fixit-encryptor */%}}
```

The rendered output looks like this:

{{% fixit-encryptor "1212" "Password is 1212" %}}
{{< typeit >}}If you peel my heart layer by layer{{< /typeit >}}
{{% fixit-encryptor "1212" "Password is 1212" %}}
{{< typeit >}}You will find you will be surprised{{< /typeit >}}
{{% fixit-encryptor "1212" "Password is 1212" %}}
{{< typeit >}}You are my most suppressed deepest secret{{< /typeit >}}
{{% /fixit-encryptor %}}
{{% /fixit-encryptor %}}
{{% /fixit-encryptor %}}

## fixit-encrypt Tool

{{< version 1.0.0 >}}

For enhanced security, FixIt provides a standalone [fixit-encrypt](https://github.com/hugo-fixit/FixIt/tree/main/packages/encrypt) tool that encrypts content at build time using AES-256-GCM with PBKDF2 key derivation. This provides significantly stronger encryption than the template-based approach.

Recommended: install as a dev dependency and configure scripts:

```bash
npm install -D @hugo-fixit/encrypt
```

Then in your `package.json`:

```json
{
  "scripts": {
    "build": "hugo --gc --minify --logLevel info",
    "postbuild": "fixit-encrypt && fixit-encrypt --verify"
  }
}
```

You can also run it directly:

```bash
npx @hugo-fixit/encrypt
```

See the [fixit-encrypt documentation](https://github.com/hugo-fixit/FixIt/tree/main/packages/encrypt) for more details.
