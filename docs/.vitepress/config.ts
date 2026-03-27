import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/style-guide/',
  title: "Style Guide",
  description: "Style guide tools (ESLint 9, Stylelint) for web applications",
  head: [['link', { rel: 'icon', href: '/style-guide/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/installation' },
      { text: 'ESLint', link: '/eslint' },
      { text: 'Stylelint', link: '/stylelint' },
    ],

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'ESLint', link: '/eslint' },
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
