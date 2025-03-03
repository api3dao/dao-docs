export default {
  title: 'DAO Documentation',
  description: 'API3 technical documentation',
  markdown: {
    lineNumbers: true,
    toc: ['h2', 'h3', 'h4', 'h5'],
  },
  appearance: true,
  ignoreDeadLinks: true,
  head: [
    /*[
      'script',
      {},
      "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PKWG7ZFR');",
    ],*/
    ['link', { rel: 'stylesheet', href: '/styles/api3.css' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/android-chrome-192x192.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/android-chrome-192x192.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/android-chrome-192x192.png',
      },
    ],
  ],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 },
          },
        },
      },
    },
    externalLinkIcon: true,
    logo: {
      light: '/img/api3-logo-light-theme.svg',
      dark: '/img/api3-logo-dark-theme.svg',
    },
    siteTitle: 'DAO Documentation',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/api3dao/dao-docs' },
      {
        icon: 'discord',
        link: 'https://discord.com/channels/758003776174030948/765618225144266793',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present API3',
    },
    sidebar: {
      '/': require('../sidebar.js'),
    },
    //nav: nav(),
  },
};

/*function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'DAO', link: '/dao/', activeMatch: '/dao/.*' },
  ];
}*/
