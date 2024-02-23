/**
 * Custom JavaScript for FixIt documentation site.
 * @author @Lruihao https://lruihao.cn
 */
class FixItDocs {
  constructor() {
    this.author = {
      name: 'Lruihao',
      github: 'https://github.com/Lruihao',
      website: 'https://lruihao.cn',
    }
    this.site = 'FixIt';
    this.url = location.origin;
  }
  /**
   * print theme info with pretty style
   * @returns {FixItDocs}
   */
  themeInfo() {
    const themeVersion = fixit.config?.version || 'unknown';
    console.log(
      `%c FixIt ${themeVersion} %c https://github.com/hugo-fixit %c`,
      `background: #FF735A;border:1px solid #FF735A; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
      `border:1px solid #FF735A; padding: 1px; border-radius: 0 2px 2px 0; color: #FF735A;`,
      'background:transparent'
    );
    // set header subtitle with theme version (desktop and mobile)
    const headerSubtitles = document.querySelectorAll('.header-subtitle');
    headerSubtitles.forEach((subtitle) => {
      subtitle.textContent = `${themeVersion}`;
    });
    return this;
  }

  /**
   * initialize
   * @returns {FixItDocs}
   */
  init() {
    this.themeInfo();
    return this;
  }
}

/**
 * immediate execution
 */
(() => {
  window.fixitDocs = new FixItDocs();
  // it will be executed when the DOM tree is built
  document.addEventListener('DOMContentLoaded', () => {
    window.fixitDocs.init();
  });
})();
