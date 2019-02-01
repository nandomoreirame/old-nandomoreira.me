import Vue from 'vue'

import VueLazyload from 'vue-lazyload'
import WebFont from 'webfontloader'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  lazyComponent: true,
  error: require('~/assets/images/default.png'),
  loading: require('~/assets/images/default.png')
})

WebFont.load({
  google: {
    families: ['Montserrat:400,500,700,800', 'Source+Sans+Pro:300,400,500,800']
  }
})
