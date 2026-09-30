import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CSES Solutions',
  description: 'Solutions and writeups for the CSES Problem Set',
  lang: 'en-US',
  base: '/cses/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Problems', link: '/problems/introductory/' },
      {
        text: 'CSES',
        link: 'https://cses.fi/problemset/',
      },
    ],

    sidebar: {
      '/problems/introductory/': [
        {
          text: 'Introductory Problems',
          items: [
            { text: 'Overview', link: '/problems/introductory/' },
            { text: 'Weird Algorithm', link: '/problems/introductory/weird-algorithm' },
          ],
        },
      ],
      '/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'About', link: '/about' },
            { text: 'Conventions', link: '/conventions' },
          ],
        },
        {
          text: 'Problem Set',
          collapsed: false,
          items: [
            { text: 'Introductory Problems', link: '/problems/introductory/' },
            { text: 'Sorting and Searching', link: '/problems/sorting-and-searching/' },
            { text: 'Dynamic Programming', link: '/problems/dynamic-programming/' },
            { text: 'Graph Algorithms', link: '/problems/graph-algorithms/' },
            { text: 'Range Queries', link: '/problems/range-queries/' },
            { text: 'Tree Algorithms', link: '/problems/tree-algorithms/' },
            { text: 'Mathematics', link: '/problems/mathematics/' },
            { text: 'String Algorithms', link: '/problems/string-algorithms/' },
            { text: 'Geometry', link: '/problems/geometry/' },
            { text: 'Advanced Techniques', link: '/problems/advanced-techniques/' },
            { text: 'Additional Problems', link: '/problems/additional-problems/' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/durgesh-k-sharma/cses' },
    ],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/durgesh-k-sharma/cses/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Solutions for learning — not a substitute for solving yourself.',
      copyright: 'Copyright © Durgesh Kumar Sharma',
    },

    outline: {
      level: [2, 3],
    },
  },
})
