<template>
  <footer class="Footer">
    <p>© 2018/{{ year }} Copyright. Site desenvolvido com o ❤ usando <a href="https://nuxtjs.org/" target="_blank">Nuxtjs</a> e hospedado no <a href="https://netlify.com/" target="_blank">Netlify</a>.</p>
  </footer>
</template>

<script>
const _date = new Date()

export default {
  data () {
    return {
      year: _date.getFullYear()
    }
  }
}
</script>

<style lang="stylus" scoped>
.Footer
  width 100%
  padding .625rem /* 10/16 */ .9375rem /* 15/16 */
  background-color #fff
  border-top 1px solid rgba(#000, .125)
  text-align center
p
  font-size 14px
  opacity 0.75
a
  text-decoration underline
</style>

<style lang="stylus">
body.hasHero
  .Footer
    +above($tablet)
      position fixed
      z-index 100
      right 0
      bottom 0
      left 0
</style>
