<template>
  <section class="Hero">
    <div class="Hero__inner">
      <div class="Hero__content">
        <slot/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="stylus">
.Hero
  width 100%
  padding 0
  background-color #f5f8fa
  +above($tablet)
    height 100%
  &__inner
    max-width 53.75rem /* 860/16 */
    text-align center
    margin-right auto
    margin-left auto
    padding 2.5rem /* 40/16 */ .9375rem /* 15/16 */
    +above($tablet)
      height 100%
      padding 0
      display flex
      justify-content center
      align-items center
</style>
