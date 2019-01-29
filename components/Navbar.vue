<template>
  <nav class="Navbar">
    <ul class="Navbar__nav">
      <li class="Navbar__item"><nuxt-link class="Navbar__link" to="/" title="Página inicial">home</nuxt-link></li>
      <li class="Navbar__item"><nuxt-link class="Navbar__link" to="/about" title="Sobre min">sobre mim</nuxt-link></li>
      <li class="Navbar__item"><nuxt-link class="Navbar__link" to="/contact" title="Mande uma mensagem">contato</nuxt-link></li>
      <li class="Navbar__item">
        <a class="Navbar__link" href="https://blog.nandomoreira.me/" target="_blank" title="Meus artigos">
          blog <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"> <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 16v-2.625s-5.619.005-9 3.625c1.588-6.916 9-8.292 9-8.292v-2.708l5 5.021-5 4.979z"></path> </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.Navbar
  &__nav
    list-style none
    margin 0
    padding 0
  &__item
    display inline-block
    margin 0 10px
  &__link
    position relative
    color $primary-color
    svg
      fill $primary-color
      transition fill 0.2s linear
      display inline-block
      vertical-align middle
    &:before,
    &:after
      color $primary-color
      position absolute
      top 50%
      display inline-block
      transition .3s transform $timingFunction, .3s opacity $timingFunction
      opacity 0
    &:before
      content "{"
      transform translate3d(0, -50%, 0)
      left 0
    &:after
      content "}"
      transform translate3d(0, -50%, 0)
      right 0
    &.nuxt-link-exact-active,
    &:hover
      color $secondary-color
      &:before,
      &:after
        color $secondary-color
        opacity 1
      &:before
        transform translate3d(-10px, -50%, 0)
      &:after
        transform translate3d(10px, -50%, 0)
</style>
