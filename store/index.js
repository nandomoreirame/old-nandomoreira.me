import Vuex from 'vuex'
import * as actions from './actions'
import state from './state'
import mutations from './mutations'

export default () =>
  new Vuex.Store({
    actions,
    state,
    mutations
  })
