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
    let subtitle = fixit.config?.version || 'unknown';

    if (subtitle.split('-').length > 2) {
      subtitle = subtitle.replace(/-.*$/, '*');
    }
    // set header subtitle with theme version (desktop and mobile)
    const headerSubtitles = document.querySelectorAll('.header-subtitle');
    headerSubtitles.forEach((el) => {
      el.textContent = subtitle;
    });
    return this;
  }

  /**
   * set santa hat for logo during Christmas
   * @returns {FixItDocs}
   */
  setSantaHat() {
    const now = new Date();
    const month = now.getMonth() + 1; // Months are zero-based
    const day = now.getDate();

    console.log(month, day);

    // Check if the date is between December 20th and December 26th
    if (month === 12 && day >= 20 && day <= 26) {
      console.log('Christmas')
      const logos = document.querySelectorAll('.header-wrapper .logo');
      logos.forEach((logo) => {
        const hat = document.createElement('img');
        hat.src = '/images/santa-hat.svg';
        hat.alt = 'Santa Hat';
        hat.classList.add('santa-hat');
        logo.parentNode.insertBefore(hat, logo);
      });
    }
    return this;
  }

  /**
   * initialize
   * @returns {FixItDocs}
   */
  init() {
    this.themeInfo()
      .setSantaHat();
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
