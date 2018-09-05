<template>
  <h1 class="Brand">
    <nuxt-link :to="$i18n.path('')" class="has-effect" exact>nando<span>moreira</span></nuxt-link>
  </h1>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.Brand
  margin-bottom .9375rem /* 15/16 */
  +above($tablet)
    font-size 1.2rem
  a
    color #000
  span
    font-weight 400
    opacity 0.9
    color $primary-color
</style>
