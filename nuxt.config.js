const webpack = require('webpack')

const {
  GA,
  env,
  baseTitle,
  htmlAttrs,
  metaTags,
  links,
  scripts,
  isProduction,
  loading,
  layoutTransition,
  workbox,
  // I18N,
  loaderOptions,
  AXIOS
} = require('./config')

module.exports = {
  dev: !isProduction,
  env,
  head: {
    title: baseTitle,
    htmlAttrs,
    meta: metaTags,
    link: links,
    script: scripts
  },
  loading,
  plugins: [
    { src: '~/plugins/i18n' },
    { src: '~/plugins/axios' },
    { src: '~/plugins/client.js', ssr: false }
  ],
  modules: [
    // ['nuxt-i18n', I18N],
    ['@nuxtjs/axios', AXIOS],
    ['@nuxtjs/google-analytics', GA],
    '@nuxtjs/pwa'
  ],
  workbox,
  build: {
    plugins: [
      new webpack.LoaderOptionsPlugin(loaderOptions)
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
