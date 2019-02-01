<template>
  <figure :class="figureClass">
    <img :src="imageSrc" :class="imageClass" :alt="imageAlt" :width="imageWidth" :height="imageHeight"/>
  </figure>
</template>

<script>
  export default {
    props: {
      figureClass: {
        type: String,
        default: 'Image'
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

<style lang="stylus" scoped>
figure
  display inline-block
  margin 0
  padding 0
  img
    display block
    max-width 100%
    height auto
</style>
