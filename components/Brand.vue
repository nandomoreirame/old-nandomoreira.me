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
  margin 0 0 .9375rem /* 15/16 */
  &:before
    content '{ '
    color $primary-color
  &:after
    content ' }'
    color $secondary-color
  +above($tablet)
    margin 0
  &, a
    span
      color $secondary-color
  a
    color $primary-color
    &:hover,
    &:focus
      color $secondary-color
      span
        color $primary-color
</style>
