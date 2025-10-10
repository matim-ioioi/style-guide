import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Style Guide",
  description: "Style guide tools (ESLint 9, Prettier, Stylelint) for web applications",
  head: [['link', { rel: 'icon', href: '/assets/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/installation' },
      { text: 'ESLint', link: '/eslint' },
      { text: 'Prettier', link: '/prettier' },
      { text: 'Stylelint', link: '/stylelint' },
    ],

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'ESLint', link: '/eslint' },
          { text: 'Prettier', link: '/prettier' },
          { text: 'Stylelint', link: '/stylelint' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/matim-ioioi/style-guide' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@timmio/style-guide' }
    ],

    outline: {
      level: [2, 3],
    },
  }
})
