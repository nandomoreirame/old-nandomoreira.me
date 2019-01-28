<template>
  <section class="hero">
    <meta-tags bodyClass="hasHero"/>
    <div class="hero__inner">
      <div class="hero__content">
        <span class="hero__avatar"><img :src="avatar" alt="Olá! Eu sou um { desenvolvedor web }."/></span>
        <h2 class="hero__title">
          <span>Olá! Eu sou um</span> <strong>{ desenvolvedor web }.</strong>
          <small>
            <a href="http://agencia.nossacausa.com/" target="_blank">Ajudo ONGs</a> e
            pequenas empresas a criar sites personalizados de alta qualidade.
            No meu tempo livre eu <a href="https://blog.nandomoreira.me" target="_blank">escrevo</a>
            e contribuo com projetos <a href="https://github.com/nandomoreirame" target="_blank">open source</a>.
          </small>
        </h2>
        <div class="hero__social">
          <c-social-icons iconSize="18"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const avatar = require('~/assets/images/avatar.png')
export default {
  name: 'Hero',
  data () {
    return {
      avatar
    }
  },
  components: {
    CFooter: () => import('~/components/Footer'),
    CSocialIcons: () => import('~/components/SocialIcons'),
    metaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus">
.hero
  width 100%
  height 100%
  padding 0
  background-color #f5f8fa
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
    strong
      display block
      font-weight 800
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
    margin-bottom 1.875rem /* 30/16 */
    img
      border 4px solid #d20068
      border-radius 100%
      box-shadow 0 0 1px 11px rgba(210, 0, 104, 0.15), 0 0 1px 22px rgba(210, 0, 104, 0.1)
      display inline-block
      height 130px
      width 130px
</style>
