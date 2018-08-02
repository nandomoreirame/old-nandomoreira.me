<template>
  <span role="button" :class="[
      buttonClass,
      `${buttonClass}--${buttonType ? `${buttonType}` : 'default'}`,
      buttonSize ? `${buttonClass}--${buttonSize}` : ''
    ]" :title="title ? title : ''">
    <nuxt-link v-if="nuxtLink" :class="`${buttonClass}__link`" :to="buttonPermalink" :target="linkTarget">
      <slot/>
    </nuxt-link>
    <a v-if="!nuxtLink" :class="`${buttonClass}__link`" :href="buttonPermalink" :target="linkTarget">
      <slot/>
    </a>
  </span>
</template>

<script>
  export default {
    name: 'LinkButton',
    props: {
      nuxtLink: {
        type: Boolean,
        default: true
      },
      buttonClass: {
        type: String,
        default: 'link-button'
      },
      linkTarget: {
        type: String,
        default: '_self'
      },
      buttonType: String,
      buttonSize: String,
      buttonPermalink: String,
      title: String
    }
  }
</script>

<style lang="stylus">
.link-button
  display inline-block
  text-align center
  margin 0
  vertical-align middle
  position relative
  &:not(:last-child)
    margin-right $spacingMini
  svg
    position relative
    top -2px
  svg, span
    margin-right 5px
    display inline-block
    vertical-align middle
    transition .1s fill $timingFunction, .1s color $timingFunction, .1s stroke $timingFunction
  &__link
  &--default &__link
    @extend $buttonDefault
  &--ghost &__link
    @extend $buttonGhost
  &--ghost-white &__link
    @extend $buttonGhostWhite
  &--large &__link
    @extend $buttonLarge
  &--small &__link
    @extend $buttonSmall
  &--whatsapp &__link
    background #33d16b
    background -moz-linear-gradient(45deg,  #33d16b 0%, lighten(#33d16b, 20%) 100%)
    background -webkit-linear-gradient(45deg,  #33d16b 0%, lighten(#33d16b, 20%) 100%)
    background linear-gradient(45deg,  #33d16b 0%, lighten(#33d16b, 20%) 100%)
    border none
    color #fff
    &:hover
      background #33d16b
      background -moz-linear-gradient(45deg,  lighten(#33d16b, 20%) 0%, #33d16b 100%)
      background -webkit-linear-gradient(45deg,  lighten(#33d16b, 20%) 0%, #33d16b 100%)
      background linear-gradient(45deg,  lighten(#33d16b, 20%) 0%, #33d16b 100%)
</style>
