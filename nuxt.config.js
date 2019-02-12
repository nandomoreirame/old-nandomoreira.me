const webpack = require('webpack')

const {
  GA,
  env,
  baseUrl,
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
    { src: '~/plugins/helpers' },
    { src: '~/plugins/i18n' },
    { src: '~/plugins/axios' },
    { src: '~/plugins/masonry', ssr: false },
    { src: '~/plugins/client.js', ssr: false }
  ],
  modules: [
    // ['nuxt-i18n', I18N],
    ['@nuxtjs/axios', AXIOS],
    ['@nuxtjs/google-analytics'],
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa'
  ],
  'google-analytics': GA,
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
  generate: { fallback: true },
  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
    cacheTime: 1000 * 60 * 15,
    generate: true,
    gzip: true,
    exclude: [],
    routes: []
  }
}
