# FixIt Theme Documentation

[![Production environment](https://img.shields.io/github/deployments/hugo-fixit/docs/Production?style=flat&label=Vercel&logo=vercel)](https://fixit.lruihao.cn/)
[![Hugo](https://img.shields.io/badge/Hugo-%5E0.147.7-ff4088?style=flat&logo=hugo)](https://gohugo.io/)

👉 [中文](README.md) | English

[FixIt](https://github.com/hugo-fixit/FixIt) theme documentation is mainly divided into: [Documentation](https://fixit.lruihao.cn/documentation/), [Guides](https://fixit.lruihao.cn/guides/) two major sections, welcome everyone to initiate a PR to improve the theme documentation.

## System requirements

- [Node.js](https://nodejs.org/): >= 20.0.0
- [Go](https://go.dev/dl/)
- [Hugo](https://gohugo.io/installation/): >= 0.147.7 (extended version)

## Contributing

First, fork this repository by clicking the fork button.

Next, clone your forked repo.

```bash
git clone https://github.com/hugo-fixit/docs.git fixit-docs && cd fixit-docs
```

Then, install the dev dependencies.

```bash
pnpm install
```

And now you are ready to go!

Here are some useful commands.

```bash
# run a local debugging server with watch
pnpm run server
# run a local debugging server with watch in production environment
pnpm run server:production
# see Edit the theme section
pnpm run server:development
```

## Participate in translation

Documents containing the `missing-translation` shortcode indicate that this part has not been translated yet. Click to view [documents with missing translations](https://github.com/search?q=repo%3Ahugo-fixit%2Fdocs+missing-translation+path%3A%2F%5Econtent%5C%2F%2F&type=code).

## Edit the theme

If you want to do docs-related theme changes, the simplest way is to have both `fixit-docs` and `FixIt` cloned as sibling directories, and then run:

```bash
HUGO_MODULE_WORKSPACE=hugo.work hugo server --ignoreVendorPaths "**"
```

Finally, create a new pull request at <https://github.com/hugo-fixit/docs/pulls> to submit your contribution 🎉

## Thanks for sponsoring

[translate.js](https://github.com/xnx3/translate) sponsors enterprise translation channel.
