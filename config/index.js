const { title, homepage, description, keywords } = require('../package.json')

const en = require('../locale/en-US.js')
const pt = require('../locale/pt-BR.js')

export const baseTitle = title
export const isProduction = process.env.NODE_ENV === 'production'
export const baseUrl = isProduction ? homepage : 'http://localhost:3000'
export const apiUrl = isProduction ? 'https://blog.nandomoreira.me/api.json' : 'http://127.0.0.1:4000/api.json'
export const imageDefault = `${baseUrl}/share.jpg`

export const env = {
  apiUrl,
  baseUrl,
  baseTitle,
  baseDescription: description,
  baseKeywords: keywords,
  isProduction,
  imageDefault
}

export const I18N = {
  defaultLocale: 'pt',
  locales: [
    { code: 'pt', iso: 'pt-BR', name: 'Português' },
    { code: 'en', iso: 'en-US', name: 'English' }
  ],
  routes: {
    'about': { pt: '/sobre', en: '/about' }
  },
  vueI18n: {
    fallbackLocale: 'pt',
    messages: { pt, en }
  },
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    alwaysRedirect: true
  }
}

export const htmlAttrs = {
  dir: 'ltr',
  lang: 'pt-br'
}

export const metaTags = [
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
]

export const links = [
  { rel: 'author', href: `${baseUrl}/humans.txt` },
  { rel: 'index', href: `${baseUrl}/` },
  { rel: `shortcut icon`, href: `${baseUrl}/icon.png`, type: `image/png` }
  // { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Montserrat:400,700,800|Source+Sans+Pro:300,400' }
]

export const scripts = [
  { src: (isProduction ? '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5869919cdfa51391' : ''), async: true }
]

export const loading = {
  color: '#5bbc8f'
}

export const workbox = {
  dev: !isProduction
}

export const layoutTransition = {
  name: 'layout',
  mode: 'out-in'
}

export const AXIOS = {
  baseURL: baseUrl
}

export const GA = {
  id: isProduction ? 'UA-125092358-1' : 'UA-00000000-1',
  debug: {
    sendHitTask: isProduction,
    enabled: !isProduction,
    track: !isProduction
  }
}

export const loaderOptions = {
  options: {
    stylus: {
      use: [ require('rupture')() ],
      preferPathResolver: 'webpack',
      import: [
        '~assets/stylus/config.styl',
        '~assets/stylus/placeholders.styl',
        '~assets/stylus/mixins.styl',
        '~assets/stylus/animations.styl',
        '~assets/stylus/base.styl'
      ]
    },
    context: '/'
  }
}
