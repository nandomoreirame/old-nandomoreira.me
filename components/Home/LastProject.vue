<template>
  <section class="LastProject HomeSection">
    <div class="HomeSection__inner">
      <header class="HomeSection__header">
        <h2>Último Projeto</h2>
      </header>
      <div class="container">
        <project :project="project"/>
        <div class="HomeSection__button">
          <link-button buttonType="ghost-white" buttonPermalink="/projetos">mais projetos →</link-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'LastProject',
    props: {
      project: {
        require: true
      }
    },
    components: {
      Project: () => import('~/components/Project'),
      LinkButton: () => import('~/components/LinkButton')
    }
  }
</script>

<style lang="stylus">
.LastProject
  background-color #fff
  .HomeSection__button
    margin-bottom $spacingBase
    position relative
    bottom auto
  .HomeSection__header
    border-color $baseColor
    &:before
      border-top-color $baseColor
    h2
      color $baseColor
  .HomeSection__inner
    margin-bottom 0
    padding-bottom 0
  .project
    figure
      margin-bottom $spacingSmall
      +above(md)
        margin-bottom 0
    &.project--invert
      padding-top $spacingSmall
      padding-bottom $spacingSmall
      margin-top 0
      margin-bottom 0
      background-color transparent
    &, a
      color $baseColor
  .container
    padding-top $spacingBase
    padding-bottom 0
</style>
