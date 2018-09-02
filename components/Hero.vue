<template>
  <section :class="`Hero${(triangleOne) ? ' Hero--triangleOne' : ''}${(triangleTwo) ? ' Hero--triangleTwo' : ''}`">
    <div class="Hero__inner">
      <brand/>
      <h2 class="Hero__title">Olá! Eu sou um desenvolvedor web. <a class="has-effect" href="http://agencia.nossacausa.com/" @mouseover="triangleOne = true" @mouseleave="triangleOne = false" target="_blank">Ajudo ONGs</a> e <a class="has-effect" href="https://onedev.studio/" @mouseover="triangleTwo = true" @mouseleave="triangleTwo = false" target="_blank">pequenas empresas</a> a criar sites personalizados de alta qualidade. <span>No meu tempo livre eu <a class="has-effect" href="https://blog.nandomoreira.me" @mouseover="triangleOne = true" @mouseleave="triangleOne = false" target="_blank">escrevo</a> e contribuo com projetos <a class="has-effect" href="https://github.com/nandomoreirame" target="_blank" @mouseover="triangleTwo = true" @mouseleave="triangleTwo = false">open source</a>.</span></h2>
      <div class="Hero__social">
        <social-icons iconSize="26"/>
      </div>
      <footer class="Hero__footer">© 2018 Copyright. Site desenvolvido com <a href="https://nuxtjs.org/" target="_blank">Nuxtjs</a> e hospedado no <a href="https://netlify.com/" target="_blank">Netlify</a>.</footer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      triangleOne: false,
      triangleTwo: false
    }
  },
  components: {
    Brand: () => import('~/components/Brand'),
    SocialIcons: () => import('~/components/SocialIcons')
  }
}
</script>

<style lang="stylus" scoped>
.Hero
  width 100%
  height 100%
  transition all 0.4s timingFunction
  display flex
  align-items center
  &:before
    content ''
    display block
    width 60%
    height 60%
    background-color $primary-color
    animation polygonFrames 2s timingFunction forwards
    pointer-events none
    z-index 1
    transition all 0.5s timingFunction
    position fixed
    bottom 10%
    left 5%
    opacity 0.1
    clip-path polygon(100% 5%, 0 100%, 5% 0)
  &--triangleOne
    &:before
      clip-path polygon(100% 25%, 0 75%, 25% 0)
  &--triangleTwo
    &:before
      clip-path polygon(100% 35%, 0 100%, 35% 0)
  &__inner
    padding 1.875rem /* 30/16 */
    max-width 103.125rem /* 1650/16 */
    margin 0
    z-index 2
    +above($mobile)
      padding 5rem /* 80/16 */
  &__social
    margin-top .9375rem /* 15/16 */
  &__title
    margin 0
    padding 0
    font-size 1.3rem
    font-weight 900
    line-height 1.3em
    animation-duration 1.2s
    animation-delay .6s
    max-width 56.25rem /* 900/16 */
    text-align left
    +above($mobile)
      font-size 1.6rem
    +above($tablet)
      font-size 2.2rem
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
    a
      border-bottom 1px solid $primary-color

@keyframes polygonFrames
  0%
    transform rotate(0deg)
  100%
    transform rotate(20deg)
</style>
