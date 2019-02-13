<template>
  <c-hero>
    <c-meta-tags :title="title" bodyClass="page-contact hasHero"/>
    <div class="Error">
      <h1 class="Error__title" v-text="title"/>
      <h2 class="Error__description" v-text="description"/>
      <div class="Error__social-icons">
        <c-social-icons iconSize="18"/>
      </div>
      <nuxt-link to="/" class="Error__button button button--primary">
        <span>← Página inicial</span>
      </nuxt-link>
      <nuxt-link to="/contact" class="Error__button button button--secondary">
        <span>Entre em contato →</span>
      </nuxt-link>
    </div>
  </c-hero>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
      title: `Oops, nada por aqui! Erro 404.`,
      description: `Infelizmente a página que você está tentando acessar não foi localizada.`
    }
  },
  components: {
    CHero: () => import('~/components/Hero'),
    CSocialIcons: () => import('~/components/SocialIcons'),
    CMetaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus">
.Error
  &__title
    font-size 3rem /* 48/16 */
  &__description
    font-weight 400
    font-size 1.375rem /* 22/16 */
  &__social-icons
    margin-bottom 1.875rem /* 30/16 */
  &__button
    margin 0 .3125rem /* 5/16 */
</style>
