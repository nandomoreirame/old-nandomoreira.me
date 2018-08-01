<template>
  <page-header :isHero="true" :image="`/images/uploads/hero-cover.jpg`">
    <div slot="inner" class="container" itemscope itemtype="http://schema.org/Person">
      <h1>Oi, eu sou o <span><nuxt-link title="Meu nome é Fernando Moreira Costa (muito prazer)" to="/sobre" itemprop="name">Fernando</nuxt-link></span>!</h1>
      <h2 role="presentation">
        Sou <strong itemprop="jobTitle">desenvolvedor web</strong> na <strong><a href="https://onedev.studio" target="_blank">Onedev.studio</a></strong> em <strong>Curitiba/PR</strong>.
        <small>Se você está em busca de um programador freelancer front-end, WordPress, PHP ou JavaScript entre em contato no email: <a href="mailto:fernando@onedev.studio">fernando@onedev.studio</a> ou através das redes sociais abaixo.</small>
      </h2>
      <div class="pageHeader__social-icons">
        <social-icons iconColor="#435466"/>
      </div>
    </div>
  </page-header>
</template>

<script>
  export default {
    name: 'HomeHero',
    components: {
      PageHeader: () => import('~/components/PageHeader'),
      SocialIcons: () => import('~/components/SocialIcons')
    }
  }
</script>

<style lang="stylus">
.pageHeader
  &.pageHeader--hero
    text-align center
    background-color #f7f9fb
    width 100%
    clip-path initial
    margin 0
    background-repeat no-repeat
    background-size cover
    .pageHeader__inner
      padding-top 3.75rem
      background none transparent
      &:before
        display none
    +above(md)
      display flex
      align-items center
      justify-content center
      min-height 70vh
      .pageHeader__inner
        padding-top 7.5rem
    h1, h2
      display block
      max-width 64rem
      padding-left $spacingSmall
      padding-right $spacingSmall
      margin $spacingSmall auto
      line-height 1.35
    h1
      font-size 2rem
      font-weight $fontWeightBolder
      +above(sm)
        font-size 4rem
      +above(md)
        font-size 5rem
      span
        color $primaryColor
    h2
      font-family $fontFamilyBase
      font-weight $fontWeightLight
      color $grayColor
      font-size 1.2rem
      +above(md)
        font-size 2rem
      a
        color $linkColor
        position relative
        &:after
          content ''
          display block
          width 100%
          position absolute
          top 100%
          left 0
          border 1px solid $linkColor
        &:hover:after,
        &:focus:after
          top 0
      small
        display none
        font-size 1rem
        margin-top  $spacingMini
        +above(md)
          display block
          font-size 1.2rem
  &__social-icons
    padding-top $spacingSmall
</style>
