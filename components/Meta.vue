<template>
  <span v-if="false"></span>
</template>

<script>
import is from '@fdaciuk/is'

export default {
  name: 'MetaTags',
  props: {
    bodyClass: {
      type: String,
      default: 'page-home'
    },
    title: {
      type: String,
      default: process.env.baseTitle
    },
    description: {
      type: String,
      default: process.env.baseDescription
    },
    keywords: {
      type: [String, Array]
      // default: process.env.baseKeywords
    },
    url: {
      type: String,
      default: process.env.baseUrl
    },
    image: {
      type: String,
      default: process.env.imageDefault
    },
    ogType: {
      type: String,
      default: 'profile'
    }
  },
  head () { // eslint-disable-line
    return {
      title: this.title,
      bodyAttrs: {
        class: this.bodyClass
      },
      meta: [
        { hid: 'og:type', property: 'og:type', content: this.ogType },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:url', property: 'og:url', content: this.url },
        { hid: 'og:image', property: 'og:image', content: this.image },
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'keyword', name: 'keyword', content: is('array', this.keywords) ? this.keywords.join([',']) : this.keywords },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.description },
        { hid: 'twitter:image', name: 'twitter:image', content: this.image },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: this.title },
        { hid: 'canonical', rel: 'canonical', href: this.url }
      ]
    }
  }
}
</script>
