<template>
  <span class="avatar" v-if="image">
    <img class="avatar__img" :src="image" alt="Olá! Eu sou um { desenvolvedor web }." :width="width" :height="height"/>
  </span>
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
  }
}
</script>

<style lang="stylus" scoped>
.avatar
  display block
  margin-bottom 1.875rem /* 30/16 */
  padding .9375rem /* 15/16 */
  &__img
    border 4px solid #d20068
    border-radius 100%
    box-shadow 0 0 1px 11px rgba(210, 0, 104, 0.15), 0 0 1px 22px rgba(210, 0, 104, 0.1)
    display inline-block
</style>
