<template>
  <c-hero>
    <c-meta-tags title="Oops, um erro aconteceu" bodyClass="page-contact hasHero"/>
    <h1>Oops, um erro aconteceu</h1>
    <nuxt-link to="/">{ home }</nuxt-link>
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
