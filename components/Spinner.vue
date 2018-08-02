<template>
  <span class="Spinner" v-if="isLoading" :class="{ 'Spinner--small': isSmall }">
    <svg class="Spinner__container" viewBox="0 0 52 52">
      <circle class="Spinner__path" cx="26px" cy="26px" r="20px" :stroke="color" fill="none" stroke-width="4px"></circle>
    </svg>
  </span>
</template>

<script>
  export default {
    name: 'Spinner',
    props: {
      color: {
        type: String,
        default: '#293241'
      },
      isLoading: {
        type: Boolean,
        default: false
      },
      isSmall: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus">
.Spinner
  position relative
  &, svg
    display inline-block
    vertical-align middle
    padding 0
    margin 0
  svg
    width 60px
    height 60px
    animation SpinnerRotate 2s linear infinite
  &__path
    animation SpinnerDash 1.5s ease-in-out infinite
  &--small svg
    width 28px
    height 28px

@keyframes SpinnerRotate
  100%
    transform rotate(360deg)

@keyframes SpinnerDash
  0%
    stroke-dasharray 1, 150
    stroke-dashoffset 0
  50%
    stroke-dasharray 90, 150
    stroke-dashoffset -35
  100%
    stroke-dasharray 90, 150
    stroke-dashoffset -124

</style>
