<template>
  <main class="default">
    <c-header/>
    <nuxt></nuxt>
    <c-footer/>
  </main>
</template>

<script>
export default {
  components: {
    CHeader: () => import('~/components/Header'),
    CFooter: () => import('~/components/Footer')
  }
}
</script>

<style lang="stylus">
html,
body,
#__nuxt,
#__layout,
#__layout > div
.default
  width 100%
  height 100%

html
  font-family sans-serif
  -webkit-text-size-adjust 100%
  -ms-text-size-adjust 100%
  box-sizing border-box
  overflow-x hidden

*,
*:before,
*:after
  box-sizing inherit

body
  font-family $font-family-base
  font-size 16px
  font-weight 400
  word-spacing 1px
  line-height 1.6
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  background-color #fff
  color $secondary-color

a
  color $primary-color
  transition color .12s ease-in-out,
    border-color .12s ease-in-out
  text-decoration none
  &:hover,
  &:focus
    color $secondary-color

code,
pre
  font-family monospace, serif
  font-size 1em

pre
  white-space pre
  white-space pre-wrap
  word-wrap break-word

small
  font-size 80%

button,
input,
select,
textarea
  font-family inherit
  font-size 100%
  margin 0

textarea
  vertical-align top

h1, h2, h3, h4
  font-family $font-family-heading
  line-height 1.3
  margin 0 0 30px
  letter-spacing -0.03rem

h1, h2
  font-weight 800

h3, h4
  font-weight 700

.default
  +above($tablet)
    padding-top 50px
</style>
