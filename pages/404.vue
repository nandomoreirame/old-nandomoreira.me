<template>
  <c-hero>
    <c-meta-tags title="Oops, um erro aconteceu" bodyClass="page-contact hasHero"/>
    <h1 class="Error__title">Oops, um erro aconteceu</h1>
    <nuxt-link to="/" class="Error__button button button--primary">Go to home</nuxt-link>
    <c-social-icons iconSize="18"/>
  </c-hero>
</template>

<script>
export default {
  name: 'Error',
  props: ['error'],
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
    font-size 2.625rem /* 42/16 */
  &__button
    margin-bottom 1.875rem /* 30/16 */
</style>
