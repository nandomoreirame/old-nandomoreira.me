<template>
  <section class="Portfolio">
    <c-meta-tags :title="title" :description="description" bodyClass="page-portfolio" :url="url" :image="shareImage"/>

    <header class="Portfolio__header">
      <h1 class="Portfolio__title">Portfolio</h1>
      <p class="Portfolio__lead" v-html="description"/>
      <c-projects-filter/>
    </header>

    <div class="Portfolio__projects" v-masonry transition-duration="1s" item-selector=".Portfolio__project">
      <article class="Portfolio__project" v-for="(project, k) in projects" :key="k" v-masonry-tile>
        <c-project :item="k" :project="project" />
      </article>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import opensource from '~/data/projects/opensource'
import clients from '~/data/projects/clients'

let allProjects = [...opensource, ...clients]

export default {
  name: 'Portfolio',
  data: () => ({
    url: `${process.env.baseUrl}/portfolio`,
    title: `Portfolio - ${process.env.baseTitle}`,
    description: `Alguns projetos de clientes e da comunidade/open-source que trabalhei em toda minha carreira - I ❤️ Open-source!`,
    shareImage: `${process.env.baseUrl}${require(`~/assets/images/projects/nandomoreira.me.png`)}`
  }),
  async asyncData ({ app, store }) {
    const _projects = await app.shuffleArray(allProjects)
    if (!store.state.projects.length) {
      store.commit('SET_PROJECTS', _projects)
      store.commit('SET_FILTERBY', 'all')
    }
  },
  computed: {
    ...mapState({
      projects: state => state.projects
    })
  },
  mounted () {
    this.toggleLazyImages(true)

    if (typeof this.$redrawVueMasonry === 'function') {
      setTimeout(() => {
        this.$redrawVueMasonry()
      }, 500)
    }
  },
  methods: {
    ...mapActions([
      'toggleLazyImages'
    ])
  },
  components: {
    CProject: () => import('~/components/Project'),
    CProjectsFilter: () => import('~/components/ProjectsFilter'),
    CMetaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus">
.Portfolio
  padding 3.75rem /* 60/16 */ 0
  &__header
    text-align center
    margin 0 0 .9375rem /* 15/16 */
    max-width 47.5rem /* 760/16 */
    margin-left auto
    margin-right auto
    padding 0 .9375rem /* 15/16 */
  &__title
    margin 0
    font-size 1.75rem /* 28/16 */
    +above($tablet)
      font-size 2.375rem /* 38/16 */
  &__lead
    +above($tablet)
      font-size 1.375rem /* 22/16 */
  &__projects
    // max-width 90%
    margin-left auto
    margin-right auto
    +above($tablet)
      display flex
      flex-flow row wrap
  &__project
    position relative
    min-height 1px
    padding 1.875rem /* 30/16 */
    +above($tablet)
      float left
      width percentage(1/2)
    +above($desktop)
      width percentage(1/3)
    +above($desktop-lg)
      width percentage(1/4)
</style>
