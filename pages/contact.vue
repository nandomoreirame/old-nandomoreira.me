<template>
  <div class="Contact">
    <div class="Contact__inner">
      <meta-tags :title="title" bodyClass="page-contact hasHero"/>
      <h1 class="animation animation--slide-in-top">Olá, terráqueo! 🖖🏼</h1>
      <p class="animation animation--fade-in">Para entrar em contato comigo basta me seguir em qualquer uma das minhas redes sociais e chamar por <abbr title="Mensagem Direta">DM</abbr>.</p>
      <p class="animation animation--fade-in-bottom">ou enviar um email para <a href="mailto:nandomoreira.me@gmail.com">nandomoreira.me[arroba]gmail.com</a> que é sucesso!</p>
      <div class="Contact__social animation animation--fade-in-bottom">
        <c-social-icons iconSize="18"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    title: `Contato ⎼ ${process.env.baseTitle}`
  }),
  components: {
    CSocialIcons: () => import('~/components/SocialIcons'),
    metaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus" scoped>
.Contact
  display flex
  align-items center
  justify-content center
  height 100%
  width 100%
  text-align center
  h1
    font-size 2rem /* 32/16 */
    animation-delay 500ms
    font-size 1.375rem /* 22/16 */
    line-height 1.1
    +above($tablet)
      font-size 2.375rem /* 38/16 */
    +above($desktop)
      font-size 2.875rem /* 46/16 */
  a
    text-decoration underline
  p
    opacity .75
    margin 0
    +above($tablet)
      font-size 1.375rem /* 22/16 */
    &.animation--fade-in
      animation-delay 1500ms
    &.animation--fade-in-bottom
      animation-delay 2000ms
  &__social
    margin-top 1.875rem /* 30/16 */
    &.animation
      animation-duration 2s
      animation-delay 4000ms
</style>
