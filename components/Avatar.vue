<template>
  <c-image
    v-if="image"
    figureClass="Avatar"
    :imageSrc="image"
    imageAlt="Olá! Eu sou um { desenvolvedor web }."
    imageClass="Avatar__img"
    :imageWidth="width"
    :imageHeight="height"
  />
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: require('~/assets/images/avatar.png')
    },
    width: {
      type: String,
      default: '200'
    },
    height: {
      type: String,
      default: '200'
    }
  },
  components: {
    CImage: () => import('~/components/Image')
  }
}
</script>

<style lang="stylus">
.Avatar.Image
  margin 0 auto 1.875rem /* 30/16 */
  padding .9375rem /* 15/16 */
  img
    display inline-block
    border 4px solid #d20068
    border-radius 100%
    box-shadow 0 0 1px 11px rgba(210, 0, 104, 0.15), 0 0 1px 22px rgba(210, 0, 104, 0.1)
</style>
