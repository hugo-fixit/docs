---
weight: 2
title: Basic Usage
date: 2023-02-23T16:04:22+08:00
type: posts
aliases:
  - /theme-documentation-basics/
author:
  name: Lruihao
  link: https://lruihao.cn
description: Discover the basics of the Hugo - FixIt theme and the core concepts behind it.
resources:
  - name: featured-image
    src: featured-image.png
tags:
  - Configuration
  - Installation
  - Basics
categories:
  - Documentation
lightgallery: true
reward: true
toc:
  auto: false
menu:
  main:
    title: Discover the basics of the Hugo - FixIt theme and the core concepts
      behind it.
    parent: documentation
    weight: 2
    params:
      icon: fa-brands fa-readme
---

Discover the basics of the Hugo - **FixIt** theme and the core concepts behind it.

<!--more-->

## Installation ways {#install-theme}

{{< link "https://github.com/hugo-fixit/FixIt" "The repository of FixIt theme" "" true >}}

In fact, there are many ways to quickly install the theme, just choose **one** of them ([Git Submodule](#git-submodule) or [Hugo Module](#hugo-module) is be recommended).

### Manual

You can download the [latest release :(fa-regular fa-file-archive fa-fw): .zip file][releases] of the theme and extract it in the `themes` directory.

### Git Clone

Or, clone the [FixIt][fixit] theme into the `themes` directory:

```bash
git clone https://github.com/hugo-fixit/FixIt.git themes/FixIt
```

### Git Submodule {#git-submodule}

{{< link "https://github.com/hugo-fixit/hugo-fixit-blog-git" "A Template base on Git Submodule" "" true >}}

Alternatively, initialize an empty Git repository and clone the [FixIt][fixit] theme into the `themes` directory, adding it to your project as a [Git submodule][git-submodule].

```bash
git init
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
```

If you want to use the version on the `dev` branch, you can use the following command:

```bash
git submodule add -b dev https://github.com/hugo-fixit/FixIt.git themes/FixIt
```

Or switch the submodule branch from `master` to `dev`:

```bash
git submodule set-branch -b dev themes/FixIt
```

### Hugo Module {#hugo-module}

{{< link "https://github.com/hugo-fixit/hugo-fixit-blog-go" "A Template base on Hugo Module" "" true >}}

> In this way, you don't need to configure `theme = "FixIt"` in `config.toml`.

The easiest way to use a [Module][hugo-modules] for a theme is to import it in the config. See [Use Hugo Modules][use-hugo-modules].

1. Initialize the hugo module system: `hugo mod init github.com/<your_user>/<your_project>`
2. Import the theme:

   ```toml
   [module]
     [[module.imports]]
       path = "github.com/hugo-fixit/FixIt"
   ```

## Full Configuration

Before starting configuration, it is recommended that you execute the following command to copy the default [config.toml][config] of theme to your project:

```bash
mv config.toml config.old.toml
cp themes/FixIt/config.toml config.toml
```

### Menu Configuration {#menu-configuration}

Hugo has a simple yet powerful [menu system][menu-system].

According to the interface provided by Hugo, FixIt theme only realizes some functions, it is enough to meet the needs of most people and make users easier to use.

The following is a complete menu item configuration:

```toml
[menu]
  [[menu.main]]
    identifier = ""
    # {{< version 0.2.14 >}} Identifier of the parent menu item
    parent = ""
    # you can add extra information before the name (HTML format is supported), such as icons
    pre = ""
    # you can add extra information after the name (HTML format is supported), such as icons
    post = ""
    name = ""
    url = ""
    # title will be shown when you hover on this menu link
    title = ""
    weight = 1
    # {{< version 0.2.14 >}} add user-defined content to menu items
    [menu.main.params]
      # add css class to a specific menu item
      class = ""
      # whether set as a draft menu item whose function is similar to a draft post/page
      draft = false
      # {{< version 0.2.16 >}} add fontawesome icon to a specific menu item
      icon = ""
      # {{< version 0.2.16 >}} set menu item type, optional values: ["mobile", "desktop"]
      type = ""
```

{{< admonition note "Sub Menu" >}}
In consideration of practicability and typesetting, the FixIt theme only supports two-tier nested menus, which can be configured through the `parent` field in the menu configuration.

The parent item of a menu item should be the `identifier` of another menu item, and the identifier should be unique in the menu.
{{< /admonition >}}

In addition, you can also add content to the menu through the `front matter` of the configuration page (i.e. the `.md`-file).

Here is a `yaml` example:

```yaml
---
title: Theme Documentation - Basics
author: Lruihao
menu:
  main:
    name: Basics
    title: Discover what the Hugo - FixIt theme is all about and the core-concepts behind it.
    parent: documentation
    params:
      icon: fa-brands fa-readme
# ...
---
```

### Theme Configuration {#theme-configuration}

In addition to [Hugo global configuration][hugo-config] and [menu configuration](#menu-configuration), **FixIt** lets you define the following parameters in your site configuration.

Please open the code block below to view the complete `config.toml` sample configuration :(fa-regular fa-hand-point-down fa-fw)::

```toml
[params]
  # {{< version 0.2.15 changed >}} FixIt theme version
  version = "0.2.X" # e.g. "0.2.X", "0.2.15", "v0.2.15" etc.
  # site description
  description = "This is my new Hugo FixIt site"
  # site keywords
  keywords = ["Hugo", "FixIt"]
  # site default theme ["light", "dark", "auto"]
  defaultTheme = "auto"
  # public git repo url only then enableGitInfo is true
  gitRepo = ""
  # {{< version 0.1.1 >}} which hash function used for SRI, when empty, no SRI is used
  # ["sha256", "sha384", "sha512", "md5"]
  fingerprint = ""
  # {{< version 0.2.0 >}} date format
  dateFormat = "2006-01-02"
  # website images for Open Graph and Twitter Cards
  images = ["/logo.png"]
  # {{< version 0.2.12 >}} enable PWA
  enablePWA = true
  # {{< version 0.2.14 >}} whether to add external Icon for external links automatically
  externalIcon = false
  # {{< version 0.2.14 >}} FixIt will, by default, inject a theme meta tag in the HTML head on the home page only.
  # You can turn it off, but we would really appreciate if you don’t, as this is a good way to watch FixIt's popularity on the rise.
  disableThemeInject = false

  # {{< version 0.2.0 >}} App icon config
  [params.app]
    # optional site title override for the app when added to an iOS home screen or Android launcher
    title = "FixIt"
    # whether to omit favicon resource links
    noFavicon = false
    # modern SVG favicon to use in place of older style .png and .ico files
    svgFavicon = ""
    # Safari mask icon color
    iconColor = "#5bbad5"
    # Windows v8-10 tile color
    tileColor = "#da532c"
    # {{< version 0.2.12 changed >}} Android browser theme color
    [params.app.themeColor]
      light = "#f8f8f8"
      dark = "#252627"

  # {{< version 0.2.0 >}} Search config
  [params.search]
    enable = true
    # type of search engine ["lunr", "algolia", "fuse"]
    type = "lunr"
    # max index length of the chunked content
    contentLength = 4000
    # placeholder of the search bar
    placeholder = ""
    # {{< version 0.2.1 >}} max number of results length
    maxResultLength = 10
    # {{< version 0.2.3 >}} snippet length of the result
    snippetLength = 30
    # {{< version 0.2.1 >}} HTML tag name of the highlight part in results
    highlightTag = "em"
    # {{< version 0.2.4 >}} whether to use the absolute URL based on the baseURL in search index
    absoluteURL = false
    [params.search.algolia]
      index = ""
      appID = ""
      searchKey = ""
    [params.search.fuse]
      # {{< version 0.2.17 >}} https://fusejs.io/api/options.html
      isCaseSensitive = false
      minMatchCharLength = 2
      findAllMatches = false
      location = 0
      threshold = 0.3
      distance = 100
      ignoreLocation = false
      useExtendedSearch = false
      ignoreFieldNorm = false

  # Header config
  [params.header]
    # {{< version 0.2.13 changed >}} desktop header mode ["sticky", "normal", "auto"]
    desktopMode = "sticky"
    # {{< version 0.2.13 changed >}} mobile header mode ["sticky", "normal", "auto"]
    mobileMode = "auto"
    # {{< version 0.2.0 >}} Header title config
    [params.header.title]
      # URL of the LOGO
      logo = "/fixit.min.svg"
      # title name
      name = "My Hugo FixIt Site"
      # you can add extra information before the name (HTML format is supported), such as icons
      pre = ""
      # you can add extra information after the name (HTML format is supported), such as icons
      post = ""
      # {{< version 0.2.5 >}} whether to use typeit animation for title name
      typeit = false
    # {{< version 0.2.12 >}} Header subtitle config
    [params.header.subtitle]
      # subtitle name
      name = ""
      # whether to use typeit animation for subtitle name
      typeit = false

  # {{< version 0.2.18 >}} Breadcrumb config
  [params.breadcrumb]
    enable = false
    sticky = false
    showHome = false

  # Footer config
  [params.footer]
    enable = true
    # {{< version 0.2.17 changed >}} Custom content (HTML format is supported)
    # For advanced use, see parameter `params.customFilePath.footer`
    custom = ""
    # {{< version 0.2.0 >}} whether to show Hugo and theme info
    hugo = true
    # {{< version 0.2.0 >}} whether to show copyright info
    copyright = true
    # {{< version 0.2.0 >}} whether to show the author
    author = true
    # Site creation year
    since = 2021
    # {{< version 0.2.14 >}} whether to show total word count of site content
    wordCount = true
    # {{< version 0.2.12 >}} Public network security only in China (HTML format is supported)
    gov = ""
    # ICP info only in China (HTML format is supported)
    icp = ""
    # license info (HTML format is supported)
    license = '<a rel="license external nofollow noopener noreferrer" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>'
    # {{< version 0.2.17 changed >}} Site creation time
    [params.footer.siteTime]
      enable = false
      animate = true
      icon = "fa-solid fa-heartbeat"
      pre = ""
      value = "" # e.g. "2021-12-18T16:15:22+08:00"
    # {{< version 0.2.17 >}} footer lines order, optional values: ["first", 0, 1, 2, 3, 4, 5, "last"]
    [params.footer.order]
      powered = 0
      copyright = 0
      statistics = 0
      visitor = 0
      beian = 0

  # {{< version 0.2.0 >}} Section (all posts) page config
  [params.section]
    # special amount of posts in each section page
    paginate = 20
    # date format (month and day)
    dateFormat = "01-02"
    # amount of RSS pages
    rss = 10
    # {{< version 0.2.13 >}} recently updated posts settings
    [params.section.recentlyUpdated]
      enable = false
      rss = false
      days = 30
      maxCount = 10

  # {{< version 0.2.0 >}} List (category or tag) page config
  [params.list]
    # special amount of posts in each list page
    paginate = 20
    # date format (month and day)
    dateFormat = "01-02"
    # amount of RSS pages
    rss = 10

  # {{< version 0.2.17 >}} TagCloud config for tags page
  [params.tagcloud]
    enable = false
    min = 14 # Minimum font size in px
    max = 32 # Maximum font size in px
    peakCount = 10 # Maximum count of posts per tag
    orderby = "name" # Order of tags, optional values: ["name", "count"]

  # Home page config
  [params.home]
    # {{< version 0.2.0 >}} amount of RSS pages
    rss = 10
    # Home page profile
    [params.home.profile]
      enable = true
      # Gravatar Email for preferred avatar in home page
      gravatarEmail = ""
      # URL of avatar shown in home page
      avatarURL = "/images/avatar.png"
      # {{< version 0.2.17 >}} identifier of avatar menu link
      avatarMenu = ""
      # {{< version 0.2.7 changed >}} title shown in home page (HTML format is supported)
      title = ""
      # subtitle shown in home page
      subtitle = "This is my new Hugo FixIt site"
      # whether to use typeit animation for subtitle
      typeit = true
      # whether to show social links
      social = true
      # {{< version 0.2.0 >}} disclaimer (HTML format is supported)
      disclaimer = ""
    # Home page posts
    [params.home.posts]
      enable = true
      # special amount of posts in each home posts page
      paginate = 6

  # {{< version 0.2.16 changed >}} Social config about the author
  [params.social]
    GitHub = "Lruihao"
    Linkedin = ""
    Twitter = ""
    Instagram = ""
    Facebook = ""
    Telegram = ""
    Medium = ""
    Gitlab = ""
    Youtubelegacy = ""
    Youtubecustom = ""
    Youtubechannel = ""
    Tumblr = ""
    Quora = ""
    Keybase = ""
    Pinterest = ""
    Reddit = ""
    Codepen = ""
    FreeCodeCamp = ""
    Bitbucket = ""
    Stackoverflow = ""
    Weibo = ""
    Odnoklassniki = ""
    VK = ""
    Flickr = ""
    Xing = ""
    Snapchat = ""
    Soundcloud = ""
    Spotify = ""
    Bandcamp = ""
    Paypal = ""
    Fivehundredpx = ""
    Mix = ""
    Goodreads = ""
    Lastfm = ""
    Foursquare = ""
    Hackernews = ""
    Kickstarter = ""
    Patreon = ""
    Steam = ""
    Twitch = ""
    Strava = ""
    Skype = ""
    Whatsapp = ""
    Zhihu = ""
    Douban = ""
    Angellist = ""
    Slidershare = ""
    Jsfiddle = ""
    Deviantart = ""
    Behance = ""
    Dribbble = ""
    Wordpress = ""
    Vine = ""
    Googlescholar = ""
    Researchgate = ""
    Mastodon = ""
    Thingiverse = ""
    Devto = ""
    Gitea = ""
    XMPP = ""
    Matrix = ""
    Bilibili = ""
    ORCID = ""
    Liberapay = ""
    Ko-Fi = ""
    BuyMeaCoffee = ""
    Linktree = ""
    QQ = ""
    QQGroup = "" # https://qun.qq.com/join.html
    Diaspora = ""
    CSDN = ""
    Discord = ""
    DiscordInvite = ""
    Lichess = ""
    Pleroma = ""
    Kaggle = ""
    MediaWiki= ""
    Plume = ""
    HackTheBox = ""
    RootMe = ""
    Feishu = ""
    TryHackMe = ""
    Phone = ""
    Email = ""
    RSS = true

  # {{< version 0.2.0 changed >}} Page config
  [params.page]
    # {{< version 0.2.18 >}} whether to enable the author's avatar of the post
    authorAvatar = true
    # {{< version 0.2.0 >}} whether to hide a page from home page
    hiddenFromHomePage = false
    # {{< version 0.2.0 >}} whether to hide a page from search results
    hiddenFromSearch = false
    # {{< version 0.2.0 >}} whether to enable twemoji
    twemoji = false
    # whether to enable lightgallery
    # {{< version 0.2.18 changed >}} if set to "force", images in the content will be forced to shown as the gallery.
    lightgallery = false
    # {{< version 0.2.0 >}} whether to enable the ruby extended syntax
    ruby = true
    # {{< version 0.2.0 >}} whether to enable the fraction extended syntax
    fraction = true
    # {{< version 0.2.0 >}} whether to enable the fontawesome extended syntax
    fontawesome = true
    # license info (HTML format is supported)
    license = '<a rel="license external nofollow noopener noreferrer" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>'
    # whether to show link to Raw Markdown content of the content
    linkToMarkdown = true
    # {{< version 0.2.4 >}} whether to show the full text content in RSS
    rssFullText = false
    # {{< version 0.2.13 >}} Page style ["narrow", "normal", "wide", ...]
    pageStyle = "normal"
    # {{< version 0.2.14 >}} {{< version 0.2.18 deleted >}} Gravatar is force-used as the author's avatar
    # gravatarForce = false
    # {{< version 0.2.17 changed >}} Auto Bookmark Support
    # If true, save the reading progress when closing the page.
    autoBookmark = false
    # {{< version 0.2.17 >}} whether to enable wordCount
    wordCount = true
    # {{< version 0.2.17 >}} whether to enable readingTime
    readingTime = true
    # {{< version 0.2.17 >}} end of post flag
    endFlag = ""
    # {{< version 0.2.18 >}} whether to enable instant.page
    instantPage = false

    # {{< version 0.2.15 >}} Repost config
    [params.page.repost]
      enable = false
      url = ""
    # {{< version 0.2.0 >}} Table of the contents config
    [params.page.toc]
      # whether to enable the table of the contents
      enable = true
      # {{< version 0.2.9 >}} whether to keep the static table of the contents in front of the post
      keepStatic = false
      # whether to make the table of the contents in the sidebar automatically collapsed
      auto = true
      # {{< version 0.2.13 >}} position of TOC ["left", "right"]
      position = "right"
    # {{< version 0.2.13 >}} Display a message at the beginning of an article to warn the reader that its content might be expired
    [params.page.expirationReminder]
      enable = false
      # Display the reminder if the last modified time is more than 90 days ago
      reminder = 90
      # Display warning if the last modified time is more than 180 days ago
      warning = 180
      # If the article expires, close the comment or not
      closeComment = false
    # {{< version 0.2.16 changed >}} {{< link "https://katex.org/" KaTeX >}} mathematical formulas (https://katex.org)
    [params.page.math]
      enable = true
      # default inline delimiter is $ ... $ and \( ... \)
      inlineLeftDelimiter = ""
      inlineRightDelimiter = ""
      # default block delimiter is $$ ... $$, \[ ... \], \begin{equation} ... \end{equation} and some other functions
      blockLeftDelimiter = ""
      blockRightDelimiter = ""
      # KaTeX extension copy_tex
      copyTex = true
      # KaTeX extension mhchem
      mhchem = true
    # {{< version 0.2.0 >}} Code config
    [params.page.code]
      # whether to show the copy button of the code block
      copy = true
      # {{< version 0.2.13 >}} whether to show the edit button of the code block
      edit = true
      # the maximum number of lines of displayed code by default
      maxShownLines = 10
    # {{< version 0.2.14 >}} Post edit
    [params.page.edit]
      enable = false
      # {{< version 0.2.15 changed >}} Link for fork & edit
      # url = "/edit/branch-name/subdirectory-name" # base on `params.gitRepo`
      # url = "https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name" # full url
      url = ""
    # {{< version 0.2.0 >}} {{< link "https://docs.mapbox.com/mapbox-gl-js" "Mapbox GL JS" >}} config (https://docs.mapbox.com/mapbox-gl-js)
    [params.page.mapbox]
      # access token of Mapbox GL JS
      accessToken = ""
      # style for the light theme
      lightStyle = "mapbox://styles/mapbox/light-v9"
      # style for the dark theme
      darkStyle = "mapbox://styles/mapbox/dark-v9"
      # whether to add {{< link "https://docs.mapbox.com/mapbox-gl-js/api#navigationcontrol" NavigationControl >}}
      navigation = true
      # whether to add {{< link "https://docs.mapbox.com/mapbox-gl-js/api#geolocatecontrol" GeolocateControl >}}
      geolocate = true
      # whether to add {{< link "https://docs.mapbox.com/mapbox-gl-js/api#scalecontrol" ScaleControl >}}
      scale = true
      # whether to add {{< link "https://docs.mapbox.com/mapbox-gl-js/api#fullscreencontrol" FullscreenControl >}}
      fullscreen = true
    # {{< version 0.2.17 >}} Donate (Sponsor) settings
    [params.page.reward]
      enable = false
      animation = false
      # position relative to post footer, optional values: ["before", "after"]
      position = "after"
      # comment = "Buy me a coffee"
      # {{< version 0.2.18 >}} display mode of QR code images, optional values: ["static", "fixed"], default: `static`
      mode = "static"
      [params.page.reward.ways]
        # wechatpay = "/images/wechatpay.png"
        # alipay = "/images/alipay.png"
        # paypal = "/images/paypal.png"
        # bitcoin = "/images/bitcoin.png"
    # {{< version 0.2.0 changed >}} social share links in post page
    [params.page.share]
      enable = true
      Twitter = true
      Facebook = true
      Linkedin = false
      Whatsapp = true
      Pinterest = false
      Tumblr = false
      HackerNews = false
      Reddit = false
      VK = false
      Buffer = false
      Xing = false
      Line = true
      Instapaper = false
      Pocket = false
      Digg = false
      Stumbleupon = false
      Flipboard = false
      Weibo = true
      Renren = false
      Myspace = true
      Blogger = true
      Baidu = false
      Odnoklassniki = false
      Evernote = true
      Skype = false
      Trello = false
      Mix = false
    # {{< version 0.2.15 changed >}} Comment config
    [params.page.comment]
      enable = false
      # {{< version 0.2.13 >}} {{< link "https://artalk.js.org/" Artalk >}} comment config (https://artalk.js.org/)
      [params.page.comment.artalk]
        enable = false
        server = "https://yourdomain/api/"
        site = "默认站点"
        placeholder = ""
        noComment = ""
        sendBtn = ""
        editorTravel = true
        flatMode = "auto"
        maxNesting = 3
        # {{< version 0.2.17 changed >}} enable lightgallery support
        lightgallery = false
        locale = "" # {{< version 0.2.15 >}}
        # {{< version 0.2.18 >}}
        emoticons = ""
        nestMax = 2
        nestSort = "DATE_ASC" # ["DATE_ASC", "DATE_DESC", "VOTE_UP_DESC"]
        vote = true
        voteDown = false
        uaBadge = true
        listSort = true
        imgUpload = true
        preview = true
        versionCheck = true
      # {{< version 0.1.1 >}} {{< link "https://disqus.com/" Disqus >}} comment config (https://disqus.com)
      [params.page.comment.disqus]
        enable = false
        # Disqus shortname to use Disqus in posts
        shortname = ""
      # {{< version 0.1.1 >}} {{< link "https://github.com/gitalk/gitalk" Gitalk >}} comment config (https://github.com/gitalk/gitalk)
      [params.page.comment.gitalk]
        enable = false
        owner = ""
        repo = ""
        clientId = ""
        clientSecret = ""
      # {{< link "https://github.com/xCss/Valine" Valine >}} comment config (https://github.com/xCss/Valine)
      [params.page.comment.valine]
        enable = false
        appId = ""
        appKey = ""
        placeholder = ""
        avatar = "mp"
        meta = ""
        requiredFields = ""
        pageSize = 10
        lang = ""
        visitor = true
        recordIP = true
        highlight = true
        enableQQ = false
        serverURLs = ""
        # {{< version 0.2.6 >}} emoji data file name, default is "google.yml"
        # ["apple.yml", "google.yml", "facebook.yml", "twitter.yml"]
        # located in "themes/FixIt/assets/lib/valine/emoji/" directory
        # you can store your own data files in the same path under your project:
        # "assets/lib/valine/emoji/"
        emoji = ""
        commentCount = true # {{< version 0.2.13 >}}
      # {{< version 0.2.16 changed >}} {{< link "https://waline.js.org" Waline >}} comment config (https://waline.js.org)
      [params.page.comment.waline]
        enable = false
        serverURL = ""
        pageview = false # {{< version 0.2.15 >}}
        emoji = ["//unpkg.com/@waline/emojis@1.1.0/weibo"]
        meta = ["nick", "mail", "link"]
        requiredMeta = []
        login = "enable"
        wordLimit = 0
        pageSize = 10
        imageUploader = false # {{< version 0.2.15 >}}
        highlighter = false # {{< version 0.2.15 >}}
        comment = false # {{< version 0.2.15 >}}
        texRenderer = false # {{< version 0.2.16 >}}
        search = false # {{< version 0.2.16 >}}
        recaptchaV3Key = "" # {{< version 0.2.16 >}}
        reaction = false # {{< version 0.2.18 >}}
      # {{< link "https://developers.facebook.com/docs/plugins/comments" "Facebook comment" >}} config (https://developers.facebook.com/docs/plugins/comments)
      [params.page.comment.facebook]
        enable = false
        width = "100%"
        numPosts = 10
        appId = ""
        languageCode = ""
      # {{< version 0.2.0 >}} {{< link "https://comments.app/" "Telegram comments" >}} config (https://comments.app)
      [params.page.comment.telegram]
        enable = false
        siteID = ""
        limit = 5
        height = ""
        color = ""
        colorful = true
        dislikes = false
        outlined = false
      # {{< version 0.2.0 >}} {{< link "https://commento.io/" "Commento" >}} comment config (https://commento.io)
      [params.page.comment.commento]
        enable = false
      # {{< version 0.2.5 >}} {{< link "https://utteranc.es/" "Utterances" >}} comment config (https://utteranc.es)
      [params.page.comment.utterances]
        enable = false
        # owner/repo
        repo = ""
        issueTerm = "pathname"
        label = ""
        lightTheme = "github-light"
        darkTheme = "github-dark"
      # {{< version 0.2.13 >}} {{< link "https://twikoo.js.org/" "Twikoo" >}} comment config (https://twikoo.js.org/)
      [params.page.comment.twikoo]
        enable = false
        envId = ""
        region = ""
        path = ""
        visitor = true
        commentCount = true
        # {{< version 0.2.17 changed >}} enable lightgallery support
        lightgallery = false
        # {{< version 0.2.17 >}} enable Katex support
        katex = false
      # {{< version 0.2.14 >}} {{< link "https://giscus.app/" "Giscus" >}} comments config
      [params.page.comment.giscus]
        enable = false
        repo = ""
        repoId = ""
        category = ""
        categoryId = ""
        mapping = ""
        strict = "0" # {{< version 0.2.18 >}}
        term = ""
        reactionsEnabled = "1"
        emitMetadata = "0"
        inputPosition = "bottom" # ["top", "bottom"]
        lightTheme = "light"
        darkTheme = "dark"
        lazyLoad = true
    # {{< version 0.2.7 >}} Third-party library config
    [params.page.library]
      [params.page.library.css]
        # someCSS = "some.css"
        # located in "assets/"
        # Or
        # someCSS = "https://cdn.example.com/some.css"
      [params.page.library.js]
        # someJavascript = "some.js"
        # located in "assets/"
        # Or
        # someJavascript = "https://cdn.example.com/some.js"
    # {{< version 0.2.10 changed >}} Page SEO config
    [params.page.seo]
      # image URL
      images = []
      # Publisher info
      [params.page.seo.publisher]
        name = ""
        logoUrl = ""

  # {{< version 0.2.5 >}} TypeIt config
  [params.typeit]
    # typing speed between each step (measured in milliseconds)
    speed = 100
    # blinking speed of the cursor (measured in milliseconds)
    cursorSpeed = 1000
    # character used for the cursor (HTML format is supported)
    cursorChar = "|"
    # cursor duration after typing finishing (measured in milliseconds, "-1" means unlimited)
    duration = -1
    # {{< version 0.2.18 >}} whether your strings will continuously loop after completing
    loop = false

  # {{< version 0.2.15 >}} Mermaid config
  [params.mermaid]
    # For values, see https://mermaid.js.org/config/theming.html#available-themes
    themes = ["default", "dark"]

  # {{< version 0.2.12 >}} PanguJS config
  [params.pangu]
    # For Chinese writing
    enable = false
    selector = "article" # {{< version 0.2.17 >}}

  # {{< version 0.2.12 >}} Watermark config
  # Detail config see https://github.com/Lruihao/watermark#readme
  [params.watermark]
    enable = false
    # watermark's text (HTML format is supported)
    content = ""
    # watermark's transparency
    opacity = 0.1
    # parent of watermark's container
    appendTo = ".wrapper>main"
    # watermark's width. unit: px
    width = 150
    # watermark's height. unit: px
    height = 20
    # row spacing of watermarks. unit: px
    rowSpacing = 60
    # col spacing of watermarks. unit: px
    colSpacing = 30
    # watermark's tangent angle. unit: deg
    rotate = 15
    # watermark's fontSize. unit: rem
    fontSize = 0.85
    # {{< version 0.2.13 >}} watermark's fontFamily
    fontFamily = "inherit"

  # {{< version 0.2.12 >}} Busuanzi count
  [params.ibruce]
    enable = true
    # Enable in post meta
    enablePost = false

  # Site verification code config for Google/Bing/Yandex/Pinterest/Baidu/360/Sogou
  [params.verification]
    google = ""
    bing = ""
    yandex = ""
    pinterest = ""
    baidu = ""
    so = ""
    sogou = ""

  # {{< version 0.2.10 >}} Site SEO config
  [params.seo]
    # image URL
    image = ""
    # thumbnail URL
    thumbnailUrl = ""

  # {{< version 0.2.0 >}} Analytics config
  [params.analytics]
    enable = false
    # Google Analytics
    [params.analytics.google]
      id = ""
      # whether to anonymize IP
      anonymizeIP = true
    # Fathom Analytics
    [params.analytics.fathom]
      id = ""
      # server url for your tracker if you're self hosting
      server = ""

  # {{< version 0.2.7 >}} Cookie consent config
  [params.cookieconsent]
    enable = true
    # text strings used for Cookie consent banner
    [params.cookieconsent.content]
      message = ""
      dismiss = ""
      link = ""

  # {{< version 0.2.7 changed >}} CDN config for third-party library files
  [params.cdn]
    # CDN data file name, disabled by default ["jsdelivr.yml", "unpkg.yml", ...]
    # located in "themes/FixIt/assets/data/cdn/" directory
    # you can store your own data files in the same path under your project: "assets/data/cdn/"
    # data = "unpkg.yml"

  # {{< version 0.2.8 >}} Compatibility config
  [params.compatibility]
    # whether to use Polyfill.io to be compatible with older browsers
    polyfill = false
    # whether to use object-fit-images to be compatible with older browsers
    objectFit = false

  # {{< version 0.2.14 >}} GitHub banner in the top-right or top-left corner
  [params.githubCorner]
    enable = false
    permalink = "https://github.com/hugo-fixit/FixIt"
    title = "View source on GitHub"
    position = "right" # ["left", "right"]

  # {{< version 0.2.14 >}} Gravatar config
  [params.gravatar]
    # {{< version 0.2.18 >}} Depends on the author's email, if the author's email is not set, the local avatar will be used
    enable = false
    # Gravatar host, default: "www.gravatar.com"
    host = "www.gravatar.com" # ["cn.gravatar.com", "gravatar.loli.net", ...]
    style = "" # ["", "mp", "identicon", "monsterid", "wavatar", "retro", "blank", "robohash"]

  # {{< version 0.2.16 >}} Back to top
  [params.backToTop]
    enable = true
    # Scroll percent label in b2t button
    scrollpercent = false

  # {{< version 0.2.16 >}} Reading progress bar
  [params.readingProgress]
    enable = false
    # Available values: ["left", "right"]
    start = "left"
    # Available values: ["top", "bottom"]
    position = "top"
    reversed = false
    light = ""
    dark = ""
    height = "2px"

  # {{< version 0.2.17 >}} Progress bar in the top during page loading
  # For more information: https://github.com/CodeByZach/pace
  [params.pace]
    enable = false
    # All available colors:
    # ["black", "blue", "green", "orange", "pink", "purple", "red", "silver", "white", "yellow"]
    color = "blue"
    # All available themes:
    # ["barber-shop", "big-counter", "bounce", "center-atom", "center-circle", "center-radar", "center-simple",
    # "corner-indicator", "fill-left", "flash", "flat-top", "loading-bar", "mac-osx", "material", "minimal"]
    theme = "minimal"

  # {{< version 0.2.17 >}} Define custom file paths
  # Create your custom files in site directory `layouts/partials/custom` and uncomment needed files below
  [params.customFilePath]
    # aside = "custom/aside.html"
    # profile = "custom/profile.html"
    # footer = "custom/footer.html"

  # {{< version 0.2.15 >}} Developer options
  [params.dev]
    enable = false
    # Check for updates
    c4u = false
    # Please do not expose to public!
    githubToken = ""
    # Mobile Devtools config
    [params.dev.mDevtools]
      enable = false
      # "vConsole", "eruda" supported
      type = "vConsole"

# Markup related configuration in Hugo
[markup]
  # {{< link "https://gohugo.io/content-management/syntax-highlighting" "Syntax Highlighting" >}} (https://gohugo.io/content-management/syntax-highlighting)
  [markup.highlight]
    ########## necessary configurations ##########
    # {{< link "https://github.com/hugo-fixit/FixIt/issues/43" >}}
    codeFences = true
    lineNos = true
    lineNumbersInTable = true
    noClasses = false
    ########## necessary configurations ##########
    guessSyntax = true
  # Goldmark is from Hugo 0.60 the default library used for Markdown
  [markup.goldmark]
    [markup.goldmark.extensions]
      definitionList = true
      footnote = true
      linkify = true
      strikethrough = true
      table = true
      taskList = true
      typographer = true
    [markup.goldmark.renderer]
      # whether to use HTML tags directly in the document
      unsafe = true
  # Table Of Contents settings
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 6

# Author config
[author]
  name = "xxxx"
  email = ""
  link = ""
  avatar = "/images/avatar.png" # {{< version 0.2.18 >}}

# Sitemap config
[sitemap]
  changefreq = "weekly"
  filename = "sitemap.xml"
  priority = 0.5

# {{< link "https://gohugo.io/content-management/urls#permalinks" "Permalinks config" >}} (https://gohugo.io/content-management/urls#permalinks)
[Permalinks]
  # posts = ":year/:month/:filename"
  posts = ":filename"

# {{< link "https://gohugo.io/about/hugo-and-gdpr/" "Privacy config" >}} (https://gohugo.io/about/hugo-and-gdpr/)
[privacy]
  [privacy.twitter]
    enableDNT = true
  [privacy.youtube]
    privacyEnhanced = true

# {{< version 0.2.15 changed >}}
[mediaTypes]
  # Options to make output .md files
  [mediaTypes."text/markdown"]
    suffixes = ["md"]
  # Options to make output .txt files
  [mediaTypes."text/plain"]
    suffixes = ["txt"]

# {{< version 0.2.15 changed >}}
[outputFormats]
  # Options to make output .md files
  [outputFormats.MarkDown]
    mediaType = "text/markdown"
    isPlainText = true
    isHTML = false
  # {{< version 0.2.15 >}} Options to make output baidu_urls.txt file
  [outputFormats.BaiduUrls]
    baseName = "baidu_urls"
    mediaType = "text/plain"
    isPlainText = true
    isHTML = false

# {{< version 0.2.15 changed >}} Options to make hugo output files
[outputs]
  home = ["HTML", "RSS", "JSON", "BaiduUrls"]
  page = ["HTML", "MarkDown"]
  section = ["HTML", "RSS"]
  taxonomy = ["HTML", "RSS"]
  taxonomyTerm = ["HTML"]
```

![Complete configuration preview](full-configuration-preview.png "Complete configuration preview")

#### CDN Configuration

```toml
[params.cdn]
  # CDN data file name, disabled by default ["jsdelivr.yml", "unpkg.yml", ...]
  data = ""
```

The default CDN data file is located in `themes/FixIt/assets/data/cdn/` directory.
You can store your own data file in the same path under your project: `assets/data/cdn/`.

#### Social Configuration

You can directly set your ID to get a default social link and its icon:

```toml
[params.social]
  Mastodon = "@xxxx"
```

The social link generated is `https://mastodon.technology/@xxxx`.

Or You can set more options through a dict:

```toml
[params.social]
  [params.social.Mastodon]
    # weight when arranging icons (the greater the weight, the later the icon is positioned)
    weight = 0
    # your social ID
    id = "@xxxx"
    # prefix of your social link
    prefix = "https://mastodon.social/"
    # content hovering on the icon
    title = "Mastodon"
```

The default data of all supported social links is located in `themes/FixIt/assets/data/social.yaml`,
which is you can refer to.

#### Search Configuration

Based on [Lunr.js][lunrjs], [algolia][algolia] or [Fuse.js][fusejs], searching is supported in **FixIt** theme.

In order to generate `index.json` for searching, add `JSON` output file type to the `home` of the `outputs` part in your site configuration, see `params.search` configuration in [Theme Configuration](#theme-configuration) for details.

```toml
[outputs]
  home = ["HTML", "RSS", "JSON"]
```

{{< admonition tip "Tips about algolia" >}}
You need to upload `index.json` files to algolia to activate searching.
You could upload the `index.json` files by browsers but a CLI tool may be better.
[Algolia Atomic](https://github.com/chrisdmacrae/atomic-algolia) is a good choice.
To be compatible with Hugo multilingual mode,
you need to upload different `index.json` for each language to the different index of algolia, such as `zh-cn/index.json` or `fr/index.json`...
{{< /admonition >}}

### Favicons, Browserconfig, Manifest

It is recommended to put your own favicons:

- apple-touch-icon.png (180x180)
- favicon-32x32.png (32x32)
- favicon-16x16.png (16x16)
- mstile-150x150.png (150x150)
- android-chrome-192x192.png (192x192)
- android-chrome-512x512.png (512x512)

into `/static`. They’re easily created via [https://realfavicongenerator.net/](https://realfavicongenerator.net/).

Customize `browserconfig.xml` and `site.webmanifest` to set `theme-color` and `background-color`.

### Multilingual and i18n

**FixIt** theme is fully compatible with Hugo multilingual mode, which provides in-browser language switching.

![Language Switch](language-switch.gif 'Language Switch')

#### Compatibility {#language-compatibility}

{{< version 0.2.10 changed >}}

| Language             | Hugo Code | HTML `lang` Attribute |              Theme Docs              |           Lunr.js Support            |
| :------------------- | :-------: | :-------------------: | :----------------------------------: | :----------------------------------: |
| English              |   `en`    |         `en`          | :(fa-regular fa-check-square fa-fw): | :(fa-regular fa-check-square fa-fw): |
| Simplified Chinese   |  `zh-cn`  |        `zh-CN`        | :(fa-regular fa-check-square fa-fw): | :(fa-regular fa-check-square fa-fw): |
| Traditional Chinese  |  `zh-tw`  |        `zh-TW`        |    :(fa-regular fa-square fa-fw):    | :(fa-regular fa-check-square fa-fw): |
| French               |   `fr`    |         `fr`          |    :(fa-regular fa-square fa-fw):    | :(fa-regular fa-check-square fa-fw): |
| Polish               |   `pl`    |         `pl`          |    :(fa-regular fa-square fa-fw):    |    :(fa-regular fa-square fa-fw):    |
| Brazilian Portuguese |  `pt-br`  |        `pt-BR`        |    :(fa-regular fa-square fa-fw):    | :(fa-regular fa-check-square fa-fw): |
| Italian              |   `it`    |         `it`          |    :(fa-regular fa-square fa-fw):    | :(fa-regular fa-check-square fa-fw): |
| Spanish              |   `es`    |         `es`          |    :(fa-regular fa-square fa-fw):    | :(fa-regular fa-check-square fa-fw): |
| German               |   `de`    |         `de`          |    :(fa-regular fa-square fa-fw):    | :(fa-regular fa-check-square fa-fw): |
| Serbian              |   `sr`    |         `sr`          |    :(fa-regular fa-square fa-fw):    |    :(fa-regular fa-square fa-fw):    |
| Russian              |   `ru`    |         `ru`          |    :(fa-regular fa-square fa-fw):    | :(fa-regular fa-check-square fa-fw): |
| Romanian             |   `ro`    |         `ro`          |    :(fa-regular fa-square fa-fw):    | :(fa-regular fa-check-square fa-fw): |
| Vietnamese           |   `vi`    |         `vi`          |    :(fa-regular fa-square fa-fw):    | :(fa-regular fa-check-square fa-fw): |

#### Basic Configuration

After learning [how Hugo handle multilingual websites][multilingual], define your languages in your site configuration.

For example with English, Chinese and French website:

```toml
# [en, zh-cn, fr, pl, ...] determines default content language
defaultContentLanguage = "en"

[languages]
  [languages.en]
    weight = 1
    title = "My Hugo FixIt Site"
    languageCode = "en"
    languageName = "English"
    [[languages.en.menu.main]]
      identifier = "posts"
      pre = ""
      post = ""
      name = "Posts"
      url = "/posts/"
      title = ""
      weight = 1
    [[languages.en.menu.main]]
      identifier = "tags"
      pre = ""
      post = ""
      name = "Tags"
      url = "/tags/"
      title = ""
      weight = 2
    [[languages.en.menu.main]]
      identifier = "categories"
      pre = ""
      post = ""
      name = "Categories"
      url = "/categories/"
      title = ""
      weight = 3

  [languages.zh-cn]
    weight = 2
    title = "我的 Hugo FixIt 网站"
    # language code, CN only here
    languageCode = "zh-CN"
    languageName = "简体中文"
    # whether to include Chinese/Japanese/Korean
    hasCJKLanguage = true
    [[languages.zh-cn.menu.main]]
      identifier = "posts"
      pre = ""
      post = ""
      name = "文章"
      url = "/posts/"
      title = ""
      weight = 1
    [[languages.zh-cn.menu.main]]
      identifier = "tags"
      pre = ""
      post = ""
      name = "标签"
      url = "/tags/"
      title = ""
      weight = 2
    [[languages.zh-cn.menu.main]]
      identifier = "categories"
      pre = ""
      post = ""
      name = "分类"
      url = "/categories/"
      title = ""
      weight = 3

  [languages.fr]
    weight = 3
    title = "Mon nouveau site Hugo FixIt"
    languageCode = "fr"
    languageName = "Français"
    [[languages.fr.menu.main]]
      identifier = "posts"
      pre = ""
      post = ""
      name = "Postes"
      url = "/posts/"
      title = ""
      weight = 1
    [[languages.fr.menu.main]]
      identifier = "tags"
      pre = ""
      post = ""
      name = "Balises"
      url = "/tags/"
      title = ""
      weight = 2
    [[languages.fr.menu.main]]
      identifier = "categories"
      name = "Catégories"
      pre = ""
      post = ""
      url = "/categories/"
      title = ""
      weight = 3
```

Then, for each new page, append the language code to the file name.

Single file `my-page.md` is split in three files:

- in English: `my-page.en.md`
- in Chinese: `my-page.zh-cn.md`
- in French: `my-page.fr.md`

{{< admonition >}}
Be aware that only translated pages are displayed in menu. It’s not replaced with default language content.
{{< /admonition >}}

{{< admonition tip >}}
Use [Front Matter parameter](https://gohugo.io/content-management/multilingual#translate-your-content) to translate urls too.
{{< /admonition >}}

#### Overwrite Translation Strings

Translations strings are used for common default values used in the theme. Translations are available in [some languages](#language-compatibility), but you may use another language or want to override default values.

To override these values, create a new file in your local i18n folder `i18n/<languageCode>.toml` and inspire yourself from `themes/FixIt/i18n/en.toml`.

By the way, as these translations could be used by other people, please take the time to propose a translation by [making a PR :(fa-solid fa-code-branch fa-fw):][pulls] to the theme!


[fixit]: https://github.com/hugo-fixit/FixIt
[releases]: https://github.com/hugo-fixit/FixIt/releases
[git-submodule]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[hugo-modules]: https://gohugo.io/hugo-modules/
[use-hugo-modules]: https://gohugo.io/hugo-modules/use-modules/
[config]: https://github.com/hugo-fixit/FixIt/blob/master/config.toml
[menu-system]: https://gohugo.io/content-management/menus/
[hugo-config]: https://gohugo.io/overview/configuration/
[lunrjs]: https://lunrjs.com/
[algolia]: https://www.algolia.com/
[fusejs]: https://fusejs.io/
[multilingual]: https://gohugo.io/content-management/multilingual
[pulls]: https://github.com/hugo-fixit/FixIt/pulls
