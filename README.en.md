# FixIt Theme Documentation

[![Production environment](https://img.shields.io/github/deployments/hugo-fixit/docs/Production?style=flat&label=Production&logo=vercel)](https://fixit.lruihao.cn/)
[![Preview environment](https://img.shields.io/github/deployments/hugo-fixit/docs/Preview?style=flat&label=Preview&logo=vercel)](https://pre.fixit.lruihao.cn/)
[![Hugo](https://img.shields.io/badge/Hugo-%5E0.123.0-ff4088?style=flat&logo=hugo)](https://gohugo.io/)

👉 [中文](README.md) | English

[FixIt](https://github.com/hugo-fixit/FixIt) theme documentation is mainly divided into: [Documentation](https://fixit.lruihao.cn/documentation/), [Guides](https://fixit.lruihao.cn/guides/) two major sections, welcome everyone to initiate a PR to improve the theme documentation.

## System requirements

- [Node.js](https://nodejs.org/): >= 18.0.0
- [Go](https://go.dev/dl/)
- [Hugo](https://gohugo.io/installation/): >= 0.123.0 (extended version)

## Contributing

First, fork this repository by clicking the fork button.

Next, clone your forked repo.

```bash
git clone https://github.com/hugo-fixit/docs.git fixit-docs && cd fixit-docs
```

Then, install the dev dependencies.

```bash
npm install
```

And now you are ready to go!

Here are some useful commands.

```bash
# run a local debugging server with watch
npm run server
# run a local debugging server with watch in production environment
npm run server:production
# see Edit the theme section
npm run server:development
```

## Edit the theme

If you want to do docs-related theme changes, the simplest way is to have both `fixit-docs` and `FixIt` cloned as sibling directories, and then run:

```bash
HUGO_MODULE_WORKSPACE=hugo.work hugo server --ignoreVendorPaths "**"
```

Finally, create a new pull request at <https://github.com/hugo-fixit/docs/pulls> to submit your contribution 🎉
