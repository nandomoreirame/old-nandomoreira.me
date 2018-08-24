<template>
  <section class="Hero">
    <div class="Hero__inner">
      <h1 class="Hero__brand">nando<span>moreira</span></h1>
      <h2 class="Hero__title">Olá! Eu sou um desenvolvedor web. Ajudo ONGs e pequenas empresas a criar sites personalizados de alta qualidade. <span>No meu tempo livre eu <a href="#" target="_blank">escrevo</a> e contribuo com projetos <a href="https://github.com/nandomoreirame" target="_blank">open source</a>.</span></h2>
      <footer class="Hero__footer">© 2018 Copyright. Site desenvolvido com <a href="https://nuxtjs.org/" target="_blank">Nuxtjs</a> e hospedado no <a href="https://netlify.com/" target="_blank">Netlify</a>.</footer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="stylus" scoped>
.Hero
  width 100%
  height 100%
  transition all 0.4s cubic-bezier(0.565, 1.65, 0.765, 0.88)
  display flex
  align-items center
  &__inner
    padding 1.875rem /* 30/16 */
    max-width 60rem /* 960/16 */
    +above($mobile)
      padding 5rem /* 80/16 */
  &__brand
    margin-bottom .9375rem /* 15/16 */
    +above($tablet)
      font-size 1.2rem
    span
      font-weight 400
      opacity 0.9
      color $primary-color
  &__title
    margin 0
    padding 0
    font-size 1.3rem
    font-weight 700
    line-height 1.3em
    letter-spacing -0.065rem
    animation-duration 1.2s
    animation-delay .6s
    +above($mobile)
      font-size 1.6rem
    +above($tablet)
      font-size 2.4rem
    span
      font-weight 400
      opacity 0.9
      margin-top .9375rem /* 15/16 */
      display none
      +above($tablet)
        display block
  &__footer
    position fixed
    bottom .625rem /* 10/16 */
    opacity 0.75
    font-size .875rem /* 14/16 */
</style>
