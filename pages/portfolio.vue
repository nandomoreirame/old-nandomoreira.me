<template>
  <section class="Portfolio">
    <c-meta-tags :title="title" :description="description" bodyClass="page-portfolio" :url="url" :image="require(`~/assets/images/projects/vovojuju.nandomoreira.me.png`)"/>

    <header class="Portfolio__header">
      <h1 class="Portfolio__title">Portfolio</h1>
      <p class="Portfolio__lead" v-html="description"/>
    </header>

    <div class="Portfolio__projects" v-masonry transition-duration="0.3s" item-selector=".Portfolio__project">
      <article class="Portfolio__project" v-for="(project, k) in projects" :key="k" v-masonry-tile>
        <c-project :item="k" :project="project" />
      </article>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import _projects from '~/data/projects'

export default {
  name: 'Portfolio',
  data: () => ({
    url: `${process.env.baseUrl}/portfolio`,
    title: `Portfolio ⎼ ${process.env.baseTitle}`,
    description: `Projetos de clientes e da comunidade/open-source que trabalhei em toda minha carreira - I ❤️ Open-source!`
  }),
  async asyncData ({ store }) {
    if (!store.state.projects.length) {
      store.commit('SET_PROJECTS', _projects)
    }
  },
  computed: {
    ...mapState({
      projects: state => state.projects
    })
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      setTimeout(() => {
        this.$redrawVueMasonry()
      }, 1500)
    }
  },
  methods: {
  },
  components: {
    CProject: () => import('~/components/Project'),
    CMetaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus">
.Portfolio
  padding-top 3.75rem /* 60/16 */
  &__header
    text-align center
    margin 0 0 .9375rem /* 15/16 */
    max-width 47.5rem /* 760/16 */
    margin-left auto
    margin-right auto
  &__title
    margin 0
    font-size 1.75rem /* 28/16 */
    +above($tablet)
      font-size 2.375rem /* 38/16 */
  &__lead
    +above($tablet)
      font-size 1.375rem /* 22/16 */
  &__projects
    max-width 78.125rem /* 1250/16 */
    margin-left auto
    margin-right auto
    +above($tablet)
      display flex
      flex-flow row wrap
  &__project
    position relative
    min-height 1px
    padding 1.5625rem /* 25/16 */
    +above($tablet)
      float left
      width percentage(1/2)
    +above($desktop)
      width percentage(1/3)
</style>
