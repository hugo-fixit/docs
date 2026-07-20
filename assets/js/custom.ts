/**
 * Custom TypeScript for FixIt documentation site.
 *
 * Access the FixIt public API via `window.fixit`.
 * @author @Lruihao https://lruihao.cn
 * @see https://fixit.lruihao.cn
 */

const { fixit } = window as any

interface Author {
  name: string
  github: string
  website: string
}

class FixItDocs {
  author: Author
  site: string
  url: string

  constructor() {
    this.author = {
      name: 'Lruihao',
      github: 'https://github.com/Lruihao',
      website: 'https://lruihao.cn',
    }
    this.site = 'FixIt'
    this.url = location.origin
    this.init()
  }

  /**
   * print theme info with pretty style
   */
  themeInfo(): this {
    let subtitle: string = fixit.config?.version || 'unknown'

    if (subtitle.split('-').length >= 2) {
      subtitle = subtitle.replace(/-.*$/, '*')
    }
    // set header subtitle with theme version (desktop and mobile)
    const headerSubtitles = document.querySelectorAll<HTMLElement>('.header-subtitle')
    headerSubtitles.forEach((el) => {
      el.textContent = subtitle
    })
    return this
  }

  /**
   * initialize
   */
  init(): this {
    this.themeInfo()
    return this
  }
}

document.addEventListener('DOMContentLoaded', () => {
  void new FixItDocs()
})
