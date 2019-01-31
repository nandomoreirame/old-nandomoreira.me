const {
  title,
  homepage,
  description,
  keywords
} = require('../package.json')

const baseTitle = title
const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = isProduction ? homepage : 'http://localhost:3000'
const apiUrl = isProduction ? 'https://blog.nandomoreira.me/api.json' : 'http://127.0.0.1:4000/api.json'
const imageDefault = `${baseUrl}/share.jpg`

const env = {
  apiUrl,
  baseUrl,
  baseTitle,
  baseDescription: description,
  baseKeywords: keywords,
  isProduction,
  imageDefault
}

const en = require('../locale/en-US.js')
const pt = require('../locale/pt-BR.js')

const I18N = {
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

const workbox = {
  dev: !isProduction
}

const layoutTransition = {
  name: 'layout',
  mode: 'out-in'
}

const AXIOS = {
  baseURL: baseUrl
}

const GA = {
  id: isProduction ? 'UA-125092358-1' : 'UA-00000000-1',
  debug: {
    sendHitTask: isProduction
    // enabled: !isProduction,
    // track: !isProduction
  }
}

module.exports = {
  GA,
  env,
  baseUrl,
  apiUrl,
  baseTitle,
  imageDefault,
  description,
  keywords,
  workbox,
  layoutTransition,
  AXIOS,
  I18N
}
