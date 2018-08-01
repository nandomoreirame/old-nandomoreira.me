import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VTooltip from 'v-tooltip'
import VueLazyload from 'vue-lazyload'
import WebFont from 'webfontloader'

Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  lazyComponent: true
})

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Montserrat:600,700,800']
  }
})
