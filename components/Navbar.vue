<template>
  <div>
    <navbar-toggle/>
    <nav class="Navbar" role="navigation" id="navigation" :class="{ 'Navbar--open': $store.state.showNavbar }">
      <ul class="Navbar__nav" role="menu">
        <li v-for="(item, key) in navItems" :key="key" class="Navbar__nav-item" role="menuitem" v-on:click="closeNavbar">
          <nuxt-link :to="item.link" :title="item.title" role="link" class="Navbar__nav-link">
            {{ item.title }}
          </nuxt-link>
          <ul v-if="item.subitems" class="Navbar__dropdown">
            <li v-for="(subitem, i) in item.subitems" :key="i" class="Navbar__dropdown-item" v-on:click="closeNavbar">
              <nuxt-link :to="subitem.link" :title="subitem.title" role="link" class="Navbar__dropdown-link">
                {{ subitem.title }}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    head () {
      return {
        bodyAttrs: {
          class: this.$store.state.showNavbar ? 'noscroll' : ''
        }
      }
    },
    data () {
      return {
        navItems: [
          {
            link: '/',
            title: 'nandomoreira.me'
          },
          {
            link: '/sobre',
            title: 'Sobre'
          },
          {
            link: '/sobre/apps',
            title: 'Apps'
          },
          {
            link: '/now',
            title: 'Now'
          },
          {
            link: '/blog',
            title: 'Blog'
          },
          {
            link: '/projetos',
            title: 'Projetos'
          },
          {
            link: '/projetos/open-source',
            title: 'Open Source'
          },
          {
            link: '/projetos/experimentos',
            title: 'Experimentos'
          }
        ]
      }
    },
    methods: {
      closeNavbar () {
        this.$store.commit('TOGGLE_NAVBAR', false)
      }
    },
    components: {
      NavbarToggle: () => import('~/components/NavbarToggle')
    }
  }
</script>

<style lang="stylus">
.Navbar
  +below(lg)
    position fixed
    z-index 1000
    width 100%
    height 100vh
    top 0
    left 0
    right 0
    bottom 0
    background-color rgba($baseColor, .95)
    display none
    &--open
      display flex
      align-items center
      justify-content center
      overflow-y auto
      ul
        padding-top 1.25rem
        padding-bottom 1.25rem
  +above(lg)
    display block
    position relative

  &__nav
    list-style none
    margin 0
    display table-cell
    vertical-align middle
    padding $spacingSmall
    +below(lg)
      .link-button__link
        color #fff
        border-color #fff
    +above(lg)
      padding 0
      display inline-block

  &__nav-item
    font-weight $fontWeightMedium
    line-height 1
    text-align center
    position relative
    margin 0
    +above(lg)
      text-align left
      display inline-block
    iframe
      display inline-block
      vertical-align middle
    &:not(:first-child)
      margin-left 1rem
    +above(lg)
      &:not(:last-child):after
        content '•'
        color rgba($baseColor, .9)
        opacity 0.75
        margin-left 15px
        top 3px
        position relative
    .Navbar__nav-link
      padding 5% 0
      +above(lg)
        padding 1.6rem 0
        &:focus
          outline none
    &:hover,
    &:focus
      .Navbar__dropdown
        display block
    &:hover .Navbar__nav-link,
    &:focus .Navbar__nav-link,
    .nuxt-link-exact-active
      color rgba($baseColor, .9)
      &:after
        width 50%
        left 0
        background $secondaryColor

  &__nav-link
    color $baseColor
    font-size 1.625rem
    text-decoration none
    position relative
    text-transform lowercase
    display block
    &.nuxt-link-exact-active,
    &:hover,
    &:focus
      opacity .75
      color rgba($baseColor, .9)
    +above(lg)
      font-size $fontSizeSmall
      display inline-block
      padding 0
      &:after
        z-index 3
        left 0
        transition all .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)
        content ''
        display block
        position absolute
        bottom 15px
        width 0
        height 3px
</style>
