<template>
  <div>
    <meta-tags :title="title" bodyClass="page-about"/>
  </div>
</template>

<script>
export default {
  name: 'About',
  asyncData ({ params, error }) {
    error({ statusCode: 404, message: 'Oops, nada por aqui' })
  },
  data: () => ({
    title: `Sobre ⎼ ${process.env.baseTitle}`
  }),
  components: {
    metaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus" scoped>
div
  display flex
  align-items center
  justify-content center
  height 100%
  width 100%
p
  opacity .75
</style>
