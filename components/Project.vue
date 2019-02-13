<template>
  <div v-if="project" :class="`Project Project--${(item%2) === 0 ? 'one' : 'two'}`">
    <a class="Project__link" v-if="project.url !== '#'" :href="`${project.url}?ref=nandomoreira.me`" :target="project.url !== '#' ? '_blank' : '_self'" rel="nofollow">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="45" height="45" fill="currentColor">
          <path d="M12 11.874v4.357l7-6.69-7-6.572v3.983c-8.775 0-11 9.732-11 9.732 2.484-4.388 6.237-4.81 11-4.81z"/>
        </svg>

        <svg v-if="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="45" height="45" fill="currentColor">
          <path d="M10 4.4C3.439 4.4 0 9.232 0 10c0 .766 3.439 5.6 10 5.6 6.56 0 10-4.834 10-5.6 0-.768-3.44-5.6-10-5.6zm0 9.907c-2.455 0-4.445-1.928-4.445-4.307 0-2.379 1.99-4.309 4.445-4.309s4.444 1.93 4.444 4.309c0 2.379-1.989 4.307-4.444 4.307zM10 10c-.407-.447.663-2.154 0-2.154-1.228 0-2.223.965-2.223 2.154s.995 2.154 2.223 2.154c1.227 0 2.223-.965 2.223-2.154 0-.547-1.877.379-2.223 0z"/>
        </svg>
      </span>
      <c-image
        :lazy="$store.state.lazyImages"
        figureClass="Project__image"
        :imageSrc="require(`~/assets/images/projects/${project.image}`)"
        :imageAlt="project.description"
        imageWidth="988"
        imageHeight="590"
      />
    </a>
    <c-image
      v-else
      :lazy="$store.state.lazyImages"
      figureClass="Project__image"
      :imageSrc="require(`~/assets/images/projects/${project.image}`)"
      :imageAlt="project.description"
      imageWidth="988"
      imageHeight="590"
    />
    <header class="Project__header">
      <h2 v-text="project.name"/>
      <p v-text="project.description"/>
      <p class="Project__date" v-if="project.date">
        <strong>Data: </strong>
        <span>{{ project.date }}</span>
      </p>
      <p class="Project__tags">
        <strong>Tags: </strong>
        <a :href="encodeURI(`https://twitter.com/intent/tweet?text=Veja o projeto: ${project.name} feito por @oseunando em:&url=https://nandomoreira.me/projects/&hashtags=${hashtags(project.tags)}`)" target="_blank" v-for="(tag, i) in project.tags" :key="i" v-text="`#${tag} `"/>
      </p>
      <a v-if="project.opensource && project.repo !== '#'" class="Project__button Project__button--secondary" :href="project.repo" target="_blank" rel="nofollow">
        <span>Open-source</span> <c-open-source-icon v-if="(project.url !== '#')"/>
      </a>
      <a :class="`Project__button Project__button--${(project.url !== '#' ? 'primary' : 'disabled')}`" :href="`${project.url}?ref=nandomoreira.me`" :target="project.url !== '#' ? '_blank' : '_self'" rel="nofollow">
        <span v-if="(project.url !== '#')">Ver online</span>
        <span v-else>Projeto está fora do ar ou foi descontinuado</span>
        <c-target-icon v-if="(project.url !== '#')"/>
      </a>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      require: true
    },
    item: {
      type: Number,
      default: 0
    }
  },
  methods: {
    hashtags (tags) {
      return `${tags.join(',')},SouDev,Web,Webdesign`
    }
  },
  components: {
    CBrowser: () => import('~/components/Browser'),
    CImage: () => import('~/components/Image'),
    CTargetIcon: () => import('~/components/TargetIcon'),
    COpenSourceIcon: () => import('~/components/OpenSourceIcon')
  }
}
</script>

<style lang="stylus" scoped>
.Project
  overflow hidden
  background-color #fff
  width 100%
  height 100%
  &__header
    padding 1.5625rem /* 25/16 */
    h2
      margin 0

  // .Project__image.Image
  //   overflow hidden
  //   padding 1.25rem /* 20/16 */ 1.25rem /* 20/16 */ 1.25rem /* 20/16 */ 0
  // &--one
  //   .Project__image.Image
  //     background-color $primary-color
  // &--two
  //   .Project__image.Image
  //     background-color $secondary-color

  &__link
    position relative
    display block
    span,
    &:before
      position absolute
      z-index 10
      opacity 0
      transition all .2s ease-in-out
    &:before
      content ''
      top 0
      right 0
      bottom 0
      left 0
      background-color rgba($secondary-color, .8)
    span
      top 50%
      left 50%
      transform translate3d(-50%, -50%, 0)
      color #fff
      svg
        fill #fff
    &:hover
      +above($tablet)
        span,
        &:before
          opacity 1
    &:focus
      +bellow($tablet)
        span,
        &:before
          opacity 1

  &__button
    @extend .button
    font-size .875rem /* 14/16 */
    display block
    width 100%
    span,
    svg
      display inline-block
      margin 0
      vertical-align middle
    svg
      margin-left 4px
    &--primary
      @extend .button--primary
    &--secondary
      @extend .button--secondary
      margin-bottom .625rem /* 10/16 */
    &--disabled
      @extend .button--disabled
</style>
