<template>
  <figure :class="`Image ${figureClass}`">
    <img v-lazy="imageSrc" :src="require('~/assets/images/default.png')" :class="`${imageClass}`" :alt="imageAlt" :width="imageWidth" :height="imageHeight"/>
  </figure>
</template>

<script>
  export default {
    props: {
      figureClass: {
        type: String,
        default: ''
      },
      imageSrc: {
        type: String,
        require: true
      },
      imageClass: {
        type: String,
        default: ''
      },
      imageAlt: {
        type: String,
        default: ''
      },
      imageWidth: {
        type: String,
        default: '200'
      },
      imageHeight: {
        type: String,
        default: '200'
      }
    }
  }
</script>

<style lang="stylus">
.Image
  display block
  width 100%
  margin 0
  padding 0
  text-align center
  img
    display block
    max-width 100%
    height auto
</style>
