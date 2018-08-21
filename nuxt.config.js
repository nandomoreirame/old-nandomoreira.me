const webpack = require('webpack')

const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = isProduction ? 'https://nandomoreira.me' : 'http://localhost:3000'

module.exports = {
  dev: !isProduction,
  head: {
    title: 'Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR',
    htmlAttrs: {
      dir: 'ltr'
    },
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'country', content: 'Brazil' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'generator', content: 'Visual Studio Code - Insiders' }
    ],
    link: [
      { rel: 'author', href: `/humans.txt` },
      { rel: 'index', href: `${baseUrl}/` }
    ],
    script: [
      { src: (isProduction ? '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5869919cdfa51391' : ''), async: true }
    ]
  },
  loading: { color: '#3d5a80' },
  plugins: [
    { src: '~/plugins/browser.js', ssr: false }
  ],
  modules: [
    ['@nuxtjs/google-analytics']
  ],
  build: {
    vendor: [],
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
    id: 'UA-52446115-1',
    debug: {
      enabled: !isProduction,
      track: !isProduction,
      sendHitTask: isProduction
    }
  }
}
