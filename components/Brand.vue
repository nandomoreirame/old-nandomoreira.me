<template>
  <h1 class="brand">
    <nuxt-link to="/">nando<span>moreira</span></nuxt-link>
  </h1>
</template>

<script>
export default {
  name: 'Brand'
}
</script>

<style lang="stylus">
.brand
  font-size 22px
  margin 0
  span
    color $secondary-color
</style>
