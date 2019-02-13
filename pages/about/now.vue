<template>
  <div class="Now">
    <div class="Now__inner">
      <c-meta-tags :title="title" :description="description" bodyClass="page-about page-now" :url="url"/>
      <header class="Now__header">
        <h1 class="Now__title">O que estou fazendo agora</h1>
        <p class="Now__description">Uma página tirada da idéia de <strong>Derek Sivers</strong> em <em>Nownownow</em>, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo.</p>
      </header>
      <section class="Now__content">
        <hr/>
        <div class="Now__text" v-for="(content, title) in now" :key="title">
          <h3 v-text="title"/>
          <ul><li v-for="(item, k) in content" :key="k" v-html="item"/></ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import now from '~/data/now'

export default {
  name: 'Now',
  data () {
    return {
      title: `O que estou fazendo agora - ${process.env.baseTitle}`,
      description: `Uma página tirada da idéia de Derek Sivers em Nownownow, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo.`,
      url: `${process.env.baseUrl}/about/now`,
      now
    }
  },
  components: {
    CMetaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus">
.Now
  width 100%
  text-align center
  padding 3.75rem /* 60/16 */ 0
  +above($tablet)
    display flex
    align-items center
    justify-content center
    text-align left
  h2
    font-size 2rem /* 32/16 */
    margin 0 0 .625rem /* 10/16 */
  h3
    font-size 1.375rem /* 22/16 */
    margin 0 0 .625rem /* 10/16 */
  ul
    list-style none
    padding 0
    margin-bottom 1.875rem /* 30/16 */
    li:before
      content '🖖🏼'
      display inline-block
      margin-right .3125rem /* 5/16 */
  a
    text-decoration underline
    &:hover,
    &:focus
      text-decoration none
  &__header
    text-align center
    margin 0 0 .9375rem /* 15/16 */
    max-width 47.5rem /* 760/16 */
    margin-left auto
    margin-right auto
    padding 1.875rem /* 30/16 */ .9375rem /* 15/16 */ 0
  &__title
    @extend .title
  &__description
    +above($tablet)
      font-size 1.375rem /* 22/16 */
</style>
