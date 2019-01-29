<template>
  <div class="About">
    <div class="About__inner">
      <meta-tags :title="title" bodyClass="page-about"/>
      <div class="About__content">
        <div class="About__thumb">
          <c-avatar />
        </div>
        <div class="About__text">
          <h2>Quem sou eu?</h2>
          <p>Meu nome é <strong>Fernando Moreira Costa</strong> (muito prazer). Tenho <span>{{ age }}</span> anos, nasci e cresci em uma cidadezinha do interior de <strong>Rondônia</strong> chamada <strong>Ariquemes</strong>, sai de lá com 18 anos para me aventurar em <strong>Curitiba/PR</strong> onde moro atualmente.</p>
          <!-- ## O que estou fazendo agora?
          Uma página tirada da idéia de **Derek Sivers** em _Nownownow_, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo.
          Então, aqui é meu _Now_: **[O que estou fazendo agora](/about/now)** -->
        </div>
      </div>
      <div class="About__content">
        <div class="About__text">
          <h2>Histórico profissional</h2>
          <p>Eu comecei a <em>"brincar"</em> com códigos em meados de 2009 e trabalhar profissionalmente em uma agência de criação e desenvolvimento web no ano de 2011.</p>
          <p>Em 2010 comecei o curso de web design na Microcamp <strong>Curitiba</strong> e finalizei em 2012, nesta mesma época conclui o curso técnico em informática com ênfase em programação no <a href="http://www.cep.pr.gov.br/pagina-59.html" rel="nofollow" target="_blank">Colégio Estadual do Paraná (CEP)</a>.</p>
          <p>Desde então venho trabalhando com desenvolvimento web, <em>design</em>, <em>Front-end</em> e <em>UX Design</em>.</p>
          <p>Já passei por algumas tantas empresas, dentre elas <strike><a href="http://www.malapronta.com.br/" rel="nofollow" target="_blank">MalaPronta</a></strike>, <strong><a href="https://www.pipefy.com/" rel="nofollow" target="_blank">Pipefy</a></strong> e <strong><a href="https://www.lojaskd.com.br/" rel="nofollow" target="_blank">LojasKD</a></strong> se destacam por ter trabalhado em um único produto, onde acumulei skylls de <strong><em>Front-end</em></strong> e <strong><em>UX Design</em></strong>.</p>
          <!-- ## O que estou fazendo agora?
          Uma página tirada da idéia de **Derek Sivers** em _Nownownow_, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo.
          Então, aqui é meu _Now_: **[O que estou fazendo agora](/about/now)** -->
        </div>
      </div>
      <div class="About__content">
        <div class="About__text">
          <h2>E o que faço hoje?</h2>
          <p>Hoje sou especializado em desenvolvimento web usando <strong><em><a href="https://br.wordpress.org/" rel="nofollow" target="_blank">WordPress</a></em></strong> com foco em <strong><em><a href="https://pt.wikipedia.org/wiki/Front-end_e_back-end" rel="nofollow" target="_blank">front-end</a></em></strong> eu sempre cuido da usabilidade e performance de um site.</p>
          <p>Atualmente trabalho como desenvolvedor <strong><em>Front-end</em></strong> utilizando tecnologias sempre atualizadas como, HTML5/5.1, CSS3/4, SASS, ECMAScript 6/7/8, GulpJS e VueJS, nos tempos livres escrevo no meu Blog e contribuo com alguns códigos no <a href="https://github.com/nandomoreirame" target="_blank">Github</a>.</p>
        </div>
      </div>
      <div class="About__content">
        <div class="About__text">
          <h2>Sobre esse site</h2>
          <p>Esse projeto já foi reescrito várias vezes (como foi citado no blog do <a href="https://willianjusten.com.br/como-se-manter-atualizado-no-frontend/#em-portugu%C3%AAs" rel="nofollow" target="_blank">Willian Justem</a>, eu sou o cara que mais muda de layout para blog na face da Terra!), eu o uso para fazer meus experimentos malucos, geralmente quando estou a estudar uma tecnologia nova.</p>
          <p>Nele eu já utilizei o <strong><a href="https://br.wordpress.org/" rel="nofollow" target="_blank">WordPress</a></strong> (em PHP), <strong><a href="https://jekyllrb.com/" rel="nofollow" target="_blank">Jekyll</a></strong> (em Ruby), <strong><a href="https://middlemanapp.com/" rel="nofollow" target="_blank">Middleman</a></strong> (em Ruby), e atualmente está escrito em <strong><a href="https://vuejs.org/" rel="nofollow" target="_blank">VueJS</a></strong> (em JavaScript) utilizando <strong><a href="https://nuxtjs.org/" rel="nofollow" target="_blank">NuxtJS</a></strong> para gerar os arquivos estáticos e hospeda-los no <a href="https://www.netlify.com/" rel="nofollow" target="_blank">netlify.com</a>.</p>
          <p>O código é totalmente Open Source sob licença <a href="https://github.com/nandomoreirame/nandomoreira.me/blob/master/LICENSE">MIT</a> e você pode <em>"forcar"</em> ele <a href="https://github.com/nandomoreirame/nandomoreira.me">aqui</a>, fique à vontade para contribuir também :).</p>
        </div>
      </div>
      <div class="About__content">
        <div class="About__text">
          <h2>Quer mais?</h2>
          <p>Se você quiser atualizações aleatórias e regulares sobre o que eu ando fazendo da vida, você pode...</p>
          <ul>
            <li>... me seguir no Twitter em  <a href="https://twitter.com/oseunando" target="_blank">@oseunando</a></li>
            <li>Ou seguir no Instagram em  <a href="https://instagram.com/oseunando" target="_blank">@oseunando</a>.</li>
          </ul>
          <p>Mas... Se peferir um contato mais direto  pode me chamar no... </p>
          <ul>
            <li>... <a href="https://t.me/oseunando" target="_blank">Telegram</a> ou no <a href="https://api.whatsapp.com/send?text=Ol%C3%A1,%20Fernando!%20Encontrei%20seu%20n%C3%BAmero%20no%20site%20nandomoreira.me&phone=5541984401163" target="_blank">WhatsApp</a>.</li>
            <li>Ou se preferir pode enviar um email para <a href="mailto:nandomoreira.me@gmail.com" target="_blank">nandomoreira.me[arroba]gmail.com</a> que é sucesso!</li>
          </ul>
        </div>
      </div>
      <div class="About__social">
        <c-social-icons iconSize="18"/>
      </div>
    </div>
  </div>
</template>

<script>
const _date = new Date()
const _year = _date.getFullYear()
const _age = (_year - 1989)

export default {
  name: 'About',
  data: () => ({
    title: `Sobre ⎼ ${process.env.baseTitle}`,
    description: `Meu nome é Fernando Moreira Costa (muito prazer). Tenho ${_age} anos, nasci e cresci em uma cidadezinha do interior de Rondônia chamada Ariquemes, sai de lá com 18 anos para me aventurar em Curitiba/PR onde moro atualmente.`,
    age: _age
  }),
  components: {
    CSocialIcons: () => import('~/components/SocialIcons'),
    CAvatar: () => import('~/components/Avatar'),
    metaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus" scoped>
.About
  width 100%
  text-align center
  +above($tablet)
    display flex
    align-items center
    justify-content center
    text-align left
  &__inner
    max-width 62.5rem /* 1000/16 */
    padding 2.5rem /* 40/16 */ .9375rem /* 15/16 */
  &__content
    margin-bottom 1.875rem /* 30/16 */
    +above($tablet)
      display flex
      align-items center
  &__thumb
    padding-right 1.875rem /* 30/16 */
  &__social
    margin-bottom 30px
h2
  font-size 1.75rem /* 28/16 */
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
</style>
