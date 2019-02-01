<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 16v-2.625s-5.619.005-9 3.625c1.588-6.916 9-8.292 9-8.292v-2.708l5 5.021-5 4.979z"></path>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '16'
    }
  }
}
</script>

<style>
</style>
