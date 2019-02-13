<template>
  <header class="Header">
    <c-brand/>
    <c-navbar/>
  </header>
</template>

<script>
export default {
  components: {
    CBrand: () => import('~/components/Brand'),
    CNavbar: () => import('~/components/Navbar')
  }
}
</script>

<style lang="stylus">
.Header
  text-align center
  width 100%
  display block
  background-color #fff
  // box-shadow 0 2px 3px 0 rgba(#000, .16)
  border-bottom 1px solid rgba(#000, .125)
  padding .9375rem /* 15/16 */
  position relative
  z-index 100
  +above($tablet)
    display flex
    align-items center
    justify-content space-between
    position fixed
    padding .9375rem /* 15/16 */ 1.875rem /* 30/16 */
    z-index 10000
    top 0
    left 0
    margin 0
</style>
