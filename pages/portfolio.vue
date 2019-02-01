<template>
  <div class="Portfolio">
    <c-meta-tags :title="title" :description="description" bodyClass="page-portfolio" :url="url"/>

    <div class="Portfolio__projects" v-for="(project, k) in projects" :key="k">
      <c-project :item="k" :project="project" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _projects from '~/data/projects'

export default {
  name: 'Portfolio',
  data: () => ({
    url: `${process.env.baseUrl}/portfolio`,
    title: `Portfolio ⎼ ${process.env.baseTitle}`,
    description: ``
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
  methods: {
  },
  components: {
    CProject: () => import('~/components/Project'),
    CMetaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus">
// .Portfolio
  // &__projects
</style>
