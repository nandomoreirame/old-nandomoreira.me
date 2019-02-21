<template>
  <main class="default">
    <c-header/>
    <transition name="layout" mode="out-in">
      <nuxt></nuxt>
    </transition>
    <c-footer/>
  </main>
</template>

<script>
export default {
  name: 'defaultLayout',
  components: {
    CHeader: () => import('~/components/Header'),
    CFooter: () => import('~/components/Footer')
  }
}
</script>

<style lang="stylus">
</style>
