---
title: PWA Support
date: 2022-01-26T09:32:56+08:00
reward: false
aliases:
  - /pwa-support/
description: Guide to setup PWA in FixIt.
tags:
  - PWA
  - Advanced
categories:
  - Guides
  - Documentation
resources:
  - name: featured-image
    src: cover.webp
toc:
  auto: false
lightgallery: true
repost:
  enable: true
  url: https://hugodoit.com/pwa-support/
---

Find out how to turn your FixIt site into a Progressive Web App.

<!--more-->

## What are PWAs?

[**Progressive Web Apps** (PWAs)][pwas] are web apps that use [service workers][service-workers], [manifests][manifest], and other web-platform features in combination with [progressive enhancement][progressive-enhancement] to give users an experience on par with native apps.

## Why bother?

Well, the straight answer to this questions is: "You don't need to turn your site into a PWA." A normal website is good enough for all the content you want to share. However, a PWA brings some extra benefits that might be useful.

1. Pages will be automatically cached by service workers when the app is installed, which enables a near-instantaneous loading from the second visit.
2. Users can always visit cached pages when they are offline.

These features may be useful for some websites, such as this documentation site. But it does not make much sense to turn a personal blog into a PWA. In the end, it all depends on your choice, and the FixIt theme will provide this feature for you anyway.

## How to turn your FixIt site into a PWA? {#setup-in-fixit}

### Configure `site.webmanifest` {#site.webmanifest}

Under the `/static/` folder, you need to create a file named `site.webmanifest`. This file provides information about your app and it is required for your app to be installable.

Here are the key values required.

- **name** _[required]_

    The name of your web app.

- **short_name** _[required]_

    A shorter name for your web app.

- **start_url** _[required]_

    The start URL of your web app. Please fill in `"/"` by default.

- **icons** _[required]_

    An array of objects representing image files will be served as application icons. You can reuse the favicon of your site as the icons.

There are other optional values you can set in the manifest file, check out this [documentation][manifest] for more information.

Here is a sample `site.webmanifest` file from this documentation site.

```json
{
  "name": "FixIt Theme Documentation",
  "short_name": "FixIt Docs",
  "start_url": "/",
  "description": "A Clean, Elegant but Advanced Hugo Theme",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "icons": [
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Configure the offline page {#offline-page}

The offline page will be served to your visitor when they are offline.

You only need to add "offline" in `outputs.home` as below:

```toml
[outputs]
home = [
  "html",
  "rss",
  "archives",
  "offline",
  "search"
]
```

{{< admonition type=tip title="I18n" open=true >}}
Currently, I18n is supported for the offline page, but only for English and Chinese. Of course, you can [Contribute with a new language](https://github.com/hugo-fixit/FixIt/pulls) to the theme!
{{< /admonition >}}

### Enable the `enablePWA` option {#enable-pwa}

Go to `hugo.toml`, add or change the option `enablePWA = true` under `[params]`.

```toml
[params]
# ...
enablePWA = true
```

## Install your PWA

Now, an install button should show up when you visit your website and you will be able to install your site as an app. After clicking "Install", your website should be installed as a native app.

![Installed PWA](install-pwa.jpg "Installed PWA")

Congratulation! You have successfully turned your static site into a PWA 🎉

If you have any issues during the setup process, you can check the `Console` and `Application` panels in your browser's DevTools for debugging. Alternatively, you can check your site on [PWA Builder][pwabuilder] for more information. You can also start a [discussion][discussions] if you have any questions or propose an [issue][issues] for any bugs you find.

[pwas]: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
[service-workers]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
[manifest]: https://developer.mozilla.org/en-US/docs/Web/Manifest
[progressive-enhancement]: https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement
[pwabuilder]: https://www.pwabuilder.com/
[discussions]: https://github.com/hugo-fixit/FixIt/discussions
[issues]: https://github.com/hugo-fixit/FixIt/issues
