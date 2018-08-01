<template>
  <transition name="preloader">
    <div class="preloader" v-if="loading">
      <div class="preloader__inner">
        <spinner :isLoading="loading"/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Preloader',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      setTimeout(() => {
        this.loading = false
      }, 1200)
    }
  },
  components: {
    Spinner: () => import('~/components/Spinner')
  }
}
</script>

<style lang="stylus" scoped>
.preloader
  width 100%
  height 100%
  z-index 10000
  background rgba($primaryColor, .75)
  display flex
  align-items center
  justify-content center
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  text-align center
  &-enter-active,
  &-leave-active
    transition opacity .25s ease-in-out
  &-enter,
  &-leave-active
    opacity 0
</style>
