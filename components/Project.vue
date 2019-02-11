<template>
  <div v-if="project" :class="`Project Project--${(item%2) === 0 ? 'one' : 'two'}`">
    <c-image
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
        <span>Projeto Open-source</span> <c-open-source-icon v-if="(project.url !== '#')"/>
      </a>
      <a :class="`Project__button Project__button--${(project.url !== '#' ? 'primary' : 'disabled')}`" :href="project.url" :target="project.url !== '#' ? '_blank' : '_self'" rel="nofollow">
        <span v-if="project.opensource">Ver demonstração</span>
        <span v-else>
          <span v-if="(project.url !== '#')">Ver projeto online</span>
          <span v-else>Projeto fora do ar ou descontinuado</span>
        </span> <c-target-icon v-if="(project.url !== '#')"/>
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
  border-radius 1.25rem /* 20/16 */
  overflow hidden
  background-color #fff
  width 100%
  height 100%
  transition all .2s ease-out
  box-shadow 0 2px 43px -4px rgba(0,0,0,.19)
  &:hover
    transform: translateY(2px)
    box-shadow: 0 2px 5px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.05)
  &__header
    padding 1.5625rem /* 25/16 */
    h2
      margin 0

  .Project__image
    border-bottom 1px solid rgba(#000, .05)

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
