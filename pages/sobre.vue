<template>
  <div class="About">
    <div class="About__inner">
      <brand/>
      <section class="About__section About__section--start">
        <h1>¿Quien soy yo? <br/>who am I? <br/>Quem sou eu?</h1>
        <a href="#" class="About__scrollplis">
          <small>
            scroll please
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
              <path d="M17.418 6.109a.697.697 0 0 1 .979 0 .68.68 0 0 1 0 .969l-7.908 7.83a.697.697 0 0 1-.979 0l-7.908-7.83a.68.68 0 0 1 0-.969.697.697 0 0 1 .979 0L10 13.25l7.418-7.141z"/>
            </svg>
          </small>
        </a>
      </section>
      <section class="About__section About__section--start">
        <h2>Fernando Moreira Costa</h2>
        <p></p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Brand: () => import('~/components/Brand'),
    SocialIcons: () => import('~/components/SocialIcons')
  }
}
</script>

<style lang="stylus" scoped>
.About
  &__inner
    padding 1.875rem /* 30/16 */
    max-width 103.125rem /* 1650/16 */
    margin 0 auto
    position relative
    z-index 2
    +above($mobile)
      padding 5rem /* 80/16 */
  &__section
    padding 15rem 0
    text-align center
    &--start
      h1
        font-size 2.625rem /* 42/16 */
  &__scrollplis
    margin 10rem auto 0
    padding 0 1.5em
    border-radius 50%
    border 1px solid rgba(#000, .1)
    display flex
    width 100px
    height 100px
    justify-content center
    align-items center
    small
      line-height 1
      display inline-block
</style>
