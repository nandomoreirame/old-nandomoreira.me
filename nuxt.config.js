const webpack = require('webpack')

const {
  title,
  homepage,
  description,
  keywords
} = require('./package.json')

const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = isProduction ? homepage : 'http://localhost:3000'
const apiUrl = isProduction ? 'https://blog.nandomoreira.me/api.json' : 'http://127.0.0.1:4000/api.json'

module.exports = {
  dev: !isProduction,
  env: {
    apiUrl,
    baseUrl,
    baseTitle: title,
    baseDescription: description,
    baseKeywords: keywords
  },
  head: {
    title,
    htmlAttrs: {
      dir: 'ltr',
      lang: 'pt-br'
    },
    meta: [
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      // { hid: 'description', name: 'description', content: description },
      { name: 'og:locale', content: 'pt_BR' },
      { 'http-equiv': 'Content-Language', content: 'pt-br' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'country', content: 'Brazil' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'generator', content: 'Visual Studio Code - Insiders' }
    ],
    link: [
      { rel: 'author', href: `${baseUrl}/humans.txt` },
      { rel: 'index', href: `${baseUrl}/` },
      { rel: `shortcut icon`, href: `${baseUrl}/icon.png`, type: `image/png` },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Montserrat:400,700,800|Source+Sans+Pro:300,400' }
    ],
    script: [
      // { src: (isProduction ? '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5869919cdfa51391' : ''), async: true }
    ]
  },
  meta: {
    // ...
  },
  loading: {
    color: '#5bbc8f'
  },
  plugins: [
    { src: '~/plugins/browser.js', ssr: false },
    { src: '~/plugins/axios' }
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics']
  ],
  axios: {
    // proxyHeaders: false
  },
  workbox: {
    dev: !isProduction
  },
  build: {
    vendor: [],
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            use: [ require('rupture')() ],
            preferPathResolver: 'webpack',
            import: [
              '~assets/stylus/config.styl'
            ]
          },
          context: '/'
        }
      })
    ],
    extend (config, { isDev, isClient }) {
      config.devtool = 'source-map'

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  generate: {
    fallback: true
  },
  'google-analytics': {
    id: isProduction ? 'UA-125092358-1' : 'UA-00000000-1',
    debug: {
      enabled: !isProduction,
      track: !isProduction,
      sendHitTask: isProduction
    }
  }
}
