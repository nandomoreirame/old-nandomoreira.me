<template>
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__content">
        <span class="hero__avatar"><img :src="avatar" alt="Olá! Eu sou um { desenvolvedor web }."/></span>
        <h2 class="hero__title">
          <span class="hero__slide-in-top">Olá! Eu sou um</span> <strong class="hero__tracking-in-expand">{ desenvolvedor web }.</strong>
          <small class="hero__fade-in-bottom">
            <a href="http://agencia.nossacausa.com/" target="_blank">Ajudo ONGs</a> e
            pequenas empresas a criar sites personalizados de alta qualidade.
            No meu tempo livre eu <a href="https://blog.nandomoreira.me" target="_blank">escrevo</a>
            e contribuo com projetos <a href="https://github.com/nandomoreirame" target="_blank">open source</a>.
          </small>
        </h2>
        <c-social-icons iconSize="18"/>
      </div>
    </div>
  </section>
</template>

<script>
const avatar = require('~/assets/images/avatar.jpg')
export default {
  name: 'Hero',
  data () {
    return {
      avatar,
      triangleOne: false,
      triangleTwo: false
    }
  },
  components: {
    CFooter: () => import('~/components/Footer'),
    CSocialIcons: () => import('~/components/SocialIcons')
  }
}
</script>

<style lang="stylus">
.hero
  width 100%
  height 100%
  padding 30px
  background-color rgb(245, 248, 250)
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
    font-size 1.375rem /* 22/16 */
    line-height 1.1
    +above($tablet)
      font-size 2.375rem /* 38/16 */
    +above($desktop)
      font-size 2.875rem /* 46/16 */
    a
      text-decoration underline
    span, small
      font-weight 400
    small
      font-size .875rem /* 14/16 */
      display block
      line-height 1.5
      margin-top 1.875rem /* 30/16 */
      +above($tablet)
        font-size 1rem /* 16/16 */
      +above($desktop)
        font-size 1.125rem /* 18/16 */
      a
        font-weight 700
  &__avatar
    display block
    animation slideInTop 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 500ms both
    margin-bottom 1.875rem /* 30/16 */
    img
      border 4px solid #d20068
      border-radius 100%
      box-shadow 0 0 1px 11px rgba(210, 0, 104, 0.15), 0 0 1px 22px rgba(210, 0, 104, 0.1)
      display inline-block
      height 130px
      width 130px
  &__slide-in-top
    animation slideInTop 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1500ms both
  &__tracking-in-expand
    display block
    animation trackingInExpand 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) 2500ms both
    font-weight 900
  &__fade-in-bottom
    animation fadeInBottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 4000ms both
  .Social
    animation fadeInBottom 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 5000ms both
</style>
