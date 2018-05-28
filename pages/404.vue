<template>
  <div class="error404">
    <div class="error404__inner">
      <h1>Oops, nada por aqui.</h1>
      <h2 role="presentation">
        Esse é o terrível erro <strong>404</strong>.
        <span>Infelizmente a página que você está tentando acessar não foi localizada.</span>
      </h2>
      <link-button buttonType="ghost-white" buttonPermalink="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
          <line x1="20" y1="12" x2="4" y2="12"/>
          <polyline points="10 18 4 12 10 6"/>
        </svg>
        <span>Voltar para home</span>
      </link-button>
      <div class="error404__social-icons">
        <social-icons/>
      </div>
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription"/>
  </div>
</template>

<script>
  export default {
    name: 'Error404',
    layout: 'blank',
    data () {
      return {
        pageTitle: `Oops, ocorreu um erro Ô.ô | Fernando Moreira`,
        pageDescription: `Infelizmente a página que você está tentando acessar não foi localizada.`
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags'),
      LinkButton: () => import('~/components/LinkButton'),
      SocialIcons: () => import('~/components/SocialIcons')
    }
  }
</script>

<style lang="stylus">
@import '~assets/stylus/layouts/_error.styl'
</style>
