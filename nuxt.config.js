require('dotenv').config();
const contentful = require('contentful');
const contentfulClient = contentful.createClient({
  space: process.env.space,
  accessToken: process.env.accessToken
});

export default {
  //読み込むプラグイン一覧。appに挿入される
  plugins: [
    '~/plugins/contentful',
    '~/plugins/markdown-it',
    '~/plugins/prism',
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Yuuta',
    titleTemplate: '%s | Yuuta',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'og:title', property: 'og:title', content: 'Yuuta' },
      { hid: 'og:description', property: 'og:description', content: 'Yuutaはnuxt.jsで作られたQiitaのデザインをパクったなんでもブログです。' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/ogIcon.png' },
      { hid: 'description', name: 'description', content: 'Yuutaはnuxt.jsで作られたQiitaのデザインをパクったなんでもブログです。' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '80x80' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  generate: {
    fallback: '404.html',
      routes () {
        return contentfulClient.getEntries().then(({ items }) => {
          return items.map(post => `/${post.fields.slug}`)
      })
    }
  },
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/github-markdown.css',
    '@/assets/css/base.css',
    '@/assets/css/style.scss',
    '@/assets/css/module/label.scss',
  ],
  router: {
    scrollBehavior() {
      return { x: 0, y: 0 }
    },
    middleware: 'getCurrentUrl'
  },
  modules: [
    '@nuxtjs/dotenv',
  ],
  // styleResources: {
  //   scss: [
  //     '~/assets/css/setting.scss'
  //   ]
  // },
  env: {
    space: process.env.space,
    accessToken: process.env.accessToken,
  },
}
