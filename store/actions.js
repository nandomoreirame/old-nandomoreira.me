export const setPosts = ({ commit }, state) => {
  commit('SET_POSTS', state)
}

export const setProjects = ({ commit }, state) => {
  commit('SET_PROJECTS', state)
}

export const toggleLazyImages = ({ commit }, state) => {
  commit('TOGGLE_LAZY', state)
}

export const setfilterBy = ({ commit }, state) => {
  commit('SET_FILTERBY', state)
}
