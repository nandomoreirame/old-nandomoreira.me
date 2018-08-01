const axios = require('axios')
const { resolve } = require('path')
const webpack = require('webpack')
const config = require('./config')

module.exports = {
  dev: !config.isProduction,
  env: {
    author: config.user,
    isProduction: config.isProduction,
    baseUrl: config.baseUrl,
    baseTitle: config.baseTitle,
    baseDescription: config.baseDescription,
    baseKeywords: config.baseKeywords,
    imageDefault: config.imageDefault
  },
  head: {
    title: config.baseTitle,
    htmlAttrs: {
      dir: 'ltr'
    },
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: `@${config.user.twitter}` },
      { name: 'country', content: 'Brazil' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: config.baseTitle },
      { name: 'generator', content: 'Visual Studio Code - Insiders' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'ICBM', content: '-25.4284,-49.2733' },
      { name: 'geo.position', content: 'latitude;longitude' },
      { name: 'geo.region', content: 'pt_BR-PR' },
      { name: 'geo.placename', content: 'Curitiba/Paraná' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${config.baseUrl}/icon.ico` },
      { rel: 'author', href: `${config.baseUrl}/humans.txt` },
      { rel: 'me', href: `${config.user.url}`, type: 'text/html' },
      { rel: 'me', href: `mailto:${config.user.email}` },
      { rel: 'me', href: `sms:${config.user.phone}` },
      { rel: 'index', href: `${config.baseUrl}/` },
      { rel: 'archives', href: `${config.baseUrl}/blog/` },
      { rel: 'dns-prefetch', href: `${config.baseUrl}/` },
      { rel: 'preconnect', href: `${config.baseUrl}/` },
      { rel: 'prefetch', href: `${config.baseUrl}/` },
      { rel: 'prerender', href: `${config.baseUrl}/` }
    ],
    script: [
      { src: (config.isProduction ? '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5869919cdfa51391' : ''), async: true }
    ]
  },
  manifest: {
    name: config.user.name,
    description: config.baseDescription,
    theme_color: config.themeColor,
    background_color: config.themeColor,
    lang: 'pt_BR'
  },
  css: [
    { src: '~assets/stylus/index.styl', lang: 'stylus' }
  ],
  // loading: { color: '#435466' },
  loading: '~/components/Preloader.vue',
  plugins: [
    // { src: '~/plugins/browser.js', ssr: false },
    { src: '~/plugins/plugins.js', ssr: false },
    { src: '~/plugins/moment.js' }
  ],
  modules: [
    ['@nuxtjs/google-analytics'],
    ['@nuxtjs/browserconfig', {
      TileColor: config.themeColor
    }],
    ['@nuxtjs/markdownit', {
      html: true,
      linkify: true,
      breaks: true
    }],
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }],
    '@nuxtjs/sitemap',
    '@nuxtjs/manifest',
    ['@nuxtjs/pwa', {
      meta: {
        'viewport': 'width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes',
        'theme_color': config.themeColor,
        'ogImage': config.imageDefault,
        'lang': 'pt_BR',
        'mobileApp': true,
        'mobileAppIOS': true
      }
    }],
    'nuxtent'
  ],
  build: {
    vendor: [
      'axios',
      'moment',
      'v-tooltip',
      'vue-moment'
    ],
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            use: [ require('rupture')() ],
            preferPathResolver: 'webpack',
            import: [
              '~assets/stylus/variables.styl',
              '~assets/stylus/mixins.styl',
              '~assets/stylus/placeholders.styl'
            ]
          },
          context: '/'
        }
      })
    ],
    extend (config, { isDev, isClient }) {
      config.devtool = 'source-map'

      config.resolve.alias['stylus'] = resolve(__dirname, 'stylus')
      config.resolve.alias['content'] = resolve(__dirname, 'content')

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
  'google-analytics': {
    id: config.GaUA,
    debug: {
      enabled: !config.isProduction,
      track: !config.isProduction,
      sendHitTask: config.isProduction
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: `${config.baseUrl}`,
    cacheTime: 1000 * 60 * 150,
    generate: true,
    routes () {
      return axios.get(`${config.baseUrl}/_nuxt/content/posts/_all.json`).then(res => {
        return res.data.map(post => post.permalink)
      })
    }
  }
}
