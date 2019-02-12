import Vue from 'vue'

const _shuffleArray = (arr) => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1])

Vue.prototype.$shuffleArray = _shuffleArray

export default ({ app }, inject) => {
  app.shuffleArray = (arr) => _shuffleArray(arr)
}
