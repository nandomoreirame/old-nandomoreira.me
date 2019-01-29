<template>
  <div class="Blog">
    <div class="Blog__last-posts">
      <meta-tags :title="title" :description="description" bodyClass="page-contact hasHero"/>
      <!-- <div v-for="(post, k) in lastPosts" :key="k">
        {{ post }}
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Contact',
  data: () => ({
    // lastPosts: {},
    title: `Blog ⎼ ${process.env.baseTitle}`,
    description: ``
  }),
  async asyncData ({ store, $axios }) {
    // if (!store.state.lastPosts.length) {
    // const posts = await $axios.$get(process.env.apiUrl)
    // const posts = await $axios.$get('https://blog.nandomoreira.me/api.json')
    store.commit('SET_POSTS', { foo: 'bar' })
    // }
  },
  computed: {
    ...mapState({
      lastPosts: state => state.lastPosts
    })
    // parseRelaxedJSON: str => eval('(_ => (' + str + '))()') // eslint-disable-line
  },
  components: {
    metaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus" scoped>
// .Blog
</style>
