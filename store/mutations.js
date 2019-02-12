export default {
  SET_POSTS (state, payload) {
    state.lastPosts = payload
  },
  SET_PROJECTS (state, payload) {
    state.projects = payload
  },
  TOGGLE_LAZY (state, payload) {
    state.lazyImages = payload
  },
  SET_FILTERBY (state, payload) {
    state.filterBy = payload
  }
}
