<template>
  <transition name="preloader">
    <div class="preloader" v-if="loading">
      <div class="preloader__inner">
        <p>
          <spinner :isLoading="loading" :isSmall="true" color="#fff"/>
          <span>Carregando...</span>
        </p>
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
      }, 800)
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
  display flex
  align-items flex-start
  justify-content center
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  text-align center
  &__inner
    padding 6px
    background rgba($primaryColor, .95)
    box-shadow $boxShadowBase
  p
    color #fff
    font-size $fontSizeSmall
    span
      display inline-block
      vertical-align middle
      margin 0 5px
  &-enter-active,
  &-leave-active
    transition all .35s ease-in-out
    transform translate3d(0, 0, 0)
  &-enter,
  &-leave-active
    opacity 0
    transform translate3d(0, -20%, 0)
</style>
