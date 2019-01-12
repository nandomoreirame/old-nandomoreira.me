<template>
  <section class="hero">
    <brand/>
    <social-icons iconSize="18"/>
    <div class="hero__inner">
      <div class="hero__content">
        <h2 class="hero__title">
          <span class="hero__slide-in-top">Olá! Eu sou um</span> <strong class="hero__tracking-in-expand">{ desenvolvedor web }.</strong>
          <small class="hero__fade-in-bottom">
            <a href="http://agencia.nossacausa.com/" target="_blank">Ajudo ONGs</a> e
            <a href="https://onedev.studio/" target="_blank">pequenas empresas</a>
            a criar sites personalizados de alta qualidade.
            No meu tempo livre eu <a href="https://blog.nandomoreira.me" target="_blank">escrevo</a>
            e contribuo com projetos <a href="https://github.com/nandomoreirame" target="_blank">open source</a>.
          </small>
        </h2>
      </div>
    </div>
    <footer class="hero__footer">
      <p>© 2018 Copyright. Site desenvolvido com <a href="https://nuxtjs.org/" target="_blank">Nuxtjs</a> e hospedado no <a href="https://netlify.com/" target="_blank">Netlify</a>.</p>
    </footer>
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

<style lang="stylus">
.hero
  width 100%
  height 100%
  padding 30px
  .social,
  .brand
    text-align center
    width 100%
    display block
    margin 30px 0
    // animation slideInTop 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0ms both
    +above($tablet)
      width auto
      display inline-block
  +above($tablet)
    .brand,
    .social,
    &__footer
      position fixed
    .brand
      top 30px
      left 60px
    .social
      top 30px
      right 60px
  &__inner
    max-width 53.75rem /* 860/16 */
    text-align center
    margin-right auto
    margin-left auto
    padding 5rem /* 80/16 */ 0
    +above($tablet)
      height 100%
      padding 0
      display flex
      justify-content center
      align-items center
  &__title
    font-weight 800
    font-size 2.625rem /* 42/16 */
    line-height 1.1
    +above($tablet)
      font-size 3.875rem /* 62/16 */
    a
      text-decoration underline
    span, small
      font-weight 400
    small
      font-size 1.125rem /* 18/16 */
      display block
      line-height 1.5
      margin-top 1.875rem /* 30/16 */
      +above($tablet)
        font-size 1.25rem /* 20/16 */
      a
        font-weight 700
  &__slide-in-top
    animation slideInTop 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 500ms both
  &__tracking-in-expand
    display block
    animation trackingInExpand 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1500ms both
    font-weight 900
  &__fade-in-bottom
    animation fadeInBottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 3000ms both
  &__footer
    width 100%
    text-align center
    animation fadeInBottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 4000ms both
    +above($tablet)
      right 0
      bottom 0
      left 0
    p
      font-size 14px
      opacity 0.75

@keyframes slideInTop
  0%
    transform translateY(-1000px)
    opacity 0
  100%
    transform translateY(0)
    opacity 1

@keyframes trackingInExpand
  0%
    letter-spacing -0.5em
    opacity 0
  40%
    opacity 0.6
  100%
    opacity 1

@keyframes fadeInBottom
  0%
    transform translateY(50px)
    opacity 0
  100%
    transform translateY(0)
    opacity 1
</style>
