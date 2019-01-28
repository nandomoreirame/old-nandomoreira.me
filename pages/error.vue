<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Oops, a página não foi encontrada</h1>
    <h1 v-else>Oops, um erro aconteceu</h1>
    <nuxt-link to="/">{ home }</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
