<template>
  <aside class="Filter">

    <div v-if="false" class="Filter__control">
      <label for="">Ordernar por:</label>
      <select name="orderBy" id="orderBy" v-model="orderBy">
        <option value="opensource">Open Source</option>
        <option value="clients">Clientes</option>
      </select>
    </div>

    <div class="Filter__control">
      <label for="filterAll">Filtrar por:</label>
      <label class="Filter__radio" for="filterAll">
        <input type="radio" id="filterAll" value="all" @change="filter()" v-model="$store.state.filterBy" checked>
        <span>Todos <small>({{total}})</small></span>
      </label>
      <label class="Filter__radio" for="filterClients">
        <input type="radio" id="filterClients" value="clients" @change="filter()" v-model="$store.state.filterBy">
        <span>Clientes <small>({{totalClients}})</small></span>
      </label>
      <label class="Filter__radio" for="filterOpenSource">
        <input type="radio" id="filterOpenSource" value="opensource" @change="filter()" v-model="$store.state.filterBy">
        <span>Open source <small>({{totalOpensource}})</small></span>
      </label>
    </div>

  </aside>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import opensource from '~/data/projects/opensource'
import clients from '~/data/projects/clients'

const allProjects = [...opensource, ...clients]

export default {
  name: 'ProjectsFilter',
  data () {
    return {
      orderBy: 'opensource',
      total: allProjects.length,
      totalClients: clients.length,
      totalOpensource: opensource.length
    }
  },
  computed: {
    ...mapState({
      filterBy: state => state.filterBy
    })
  },
  methods: {
    ...mapActions([
      'setProjects',
      'setfilterBy',
      'toggleLazyImages'
    ]),
    order () {
    },
    filter () {
      let _projects = []
      let _filterBy = 'all'

      switch (this.filterBy) {
        case 'clients':
          _projects = this.$shuffleArray(clients)
          _filterBy = 'clients'
          break
        case 'opensource':
          _projects = this.$shuffleArray(opensource)
          _filterBy = 'opensource'
          break
        default:
          _projects = this.$shuffleArray(allProjects)
          break
      }

      this.toggleLazyImages(false)
      this.setfilterBy(_filterBy)
      this.setProjects(_projects)
    }
  }
}
</script>

<style lang="stylus" scoped>
$chbxSize = 18px

.Filter
  display flex
  align-items center
  justify-content center
  label
    cursor pointer
    display inline-block
    vertical-align middle
  &__radio
    span
      padding-left ($chbxSize + 10)
      position relative
      &:before,
      &:after
        content ''
        display inline-block
        cursor pointer
        border-radius 50%
        position absolute
        top 50%
        left 5px
      &:before
        width $chbxSize
        height $chbxSize
        border 1px solid $secondary-color
        transform translate3d(0, -50%, 0)
      &:after
        width ($chbxSize / 2)
        height ($chbxSize / 2)
        background-color transparent
        transform translate3d(50%, -50%, 0)
        transition opacity .2s ease-in-out
        opacity 0
    input
      display none
      &:checked ~ span:after
        background-color $secondary-color
        opacity 1
</style>
