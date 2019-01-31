const webpack = require('webpack')

const {
  GA,
  env,
  baseUrl,
  baseTitle,
  isProduction,
  layoutTransition,
  workbox,
  AXIOS,
  I18N
} = require('./config')

module.exports = {
  dev: !isProduction,
  env,
  head: {
    title: baseTitle,
    htmlAttrs: {
      dir: 'ltr',
      lang: 'pt-br'
    },
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
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
      { src: (isProduction ? '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5869919cdfa51391' : ''), async: true }
    ]
  },
  meta: {
    // ...
  },
  loading: {
    color: '#5bbc8f'
  },
  plugins: [
    { src: '~/plugins/i18n' },
    { src: '~/plugins/axios' },
    { src: '~/plugins/browser.js', ssr: false }
  ],
  modules: [
    ['nuxt-i18n', I18N],
    ['@nuxtjs/axios', AXIOS],
    ['@nuxtjs/google-analytics', GA],
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],
  workbox,
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
  layoutTransition,
  generate: { fallback: true }
}
