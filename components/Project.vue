<template>
  <article v-if="project" :class="`Project Project--${(item%2) === 0 ? 'one' : 'two'}`">
    <div class="Project__inner">
      <div class="Project__browser">
        <c-browser>
          <c-image
            figureClass="Project__image"
            :imageSrc="require(`~/assets/images/projects/${project.image}`)"
            :imageAlt="project.description"
            imageWidth="988"
            imageHeight="590"
          />
        </c-browser>
      </div>
      <header class="Project__content">
        <h2 v-text="project.name"/>
        <p v-text="project.description"/>
        <p class="Project__date" v-if="project.date">
          <strong>Data: </strong>
          <span>{{ project.date }}</span>
        </p>
        <p class="Project__url" v-if="(project.url !== '#')">
          <strong>URL: </strong>
          <a :href="project.url" target="_blank" rel="nofollow">
            <span>{{ project.url }}</span> <c-target-icon/>
          </a>
        </p>
        <p class="Project__tags">
          <strong>Tags: </strong>
          <a :href="`#${tag}`" v-for="(tag, i) in project.tags" :key="i" v-text="`#${tag} `"/>
        </p>
        <a class="Project__button" v-if="(project.url !== '#')" :href="project.url" target="_blank" rel="nofollow">
          <span>Ver projeto</span> <c-target-icon/>
        </a>
        <p v-else>Projeto fora do ar ou descontinuado</p>
      </header>
    </div>
  </article>
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
  components: {
    CBrowser: () => import('~/components/Browser'),
    CImage: () => import('~/components/Image'),
    CTargetIcon: () => import('~/components/TargetIcon')
  }
}
</script>

<style lang="stylus" scoped>
.Project
  &__inner
    padding 3.75rem /* 60/16 */ 1.875rem /* 30/16 */
    max-width 75rem /* 1200/16 */
    margin 0 auto
    +above($tablet)
      padding 6.25rem /* 100/16 */ 1.875rem /* 30/16 */
      display flex
      align-items center
      justify-content center

  &--one
    +above($tablet)
      .Project__content
        padding-left 3.75rem /* 60/16 */
      .Project__inner
        flex-direction row

  &--two
    background-color #fff
    +above($tablet)
      .Project__content
        text-align right
        padding-right 3.75rem /* 60/16 */
      .Project__inner
        flex-direction row-reverse

  &__content
    +above($tablet)
      width 45%
  &__browser
    margin-bottom 1.875rem /* 30/16 */
    +above($tablet)
      width 55%
      margin-bottom 0

  &__button
    @extend .button
    @extend .button--primary
    span,
    svg
      display inline-block
      margin 0
      vertical-align middle
    svg
      fill #fff
      margin-left 4px
</style>
