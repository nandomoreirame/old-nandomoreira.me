<template>
  <c-hero>
    <c-meta-tags :title="title" :description="description" bodyClass="page-contact hasHero" :url="url"/>
    <h1>Olá, terráqueo! <br/> Nós viemos em paz 🖖🏼</h1>
    <p>Para entrar em contato comigo basta me seguir em qualquer uma das minhas redes sociais e chamar por <abbr title="Mensagem Direta">DM</abbr>
    <br/>ou enviar um email para <a href="mailto:nandomoreira.me@gmail.com" target="_blank">nandomoreira.me[arroba]gmail.com</a> que é sucesso!</p>
    <div class="Contact__social">
      <c-social-icons iconSize="18"/>
    </div>
  </c-hero>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      title: `Contato ⎼ ${process.env.baseTitle}`,
      description: `Olá, terráqueo! Nós viemos em paz 🖖🏼 Para entrar em contato comigo basta me seguir em qualquer uma das minhas redes sociais e chamar por DM ou enviar um email para nandomoreira.me[arroba]gmail.com que é sucesso!`,
      url: `${process.env.baseUrl}/contact`
    }
  },
  components: {
    CHero: () => import('~/components/Hero'),
    CSocialIcons: () => import('~/components/SocialIcons'),
    CMetaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus" scoped>
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
.Contact__social
  margin-top 1.875rem /* 30/16 */
</style>
