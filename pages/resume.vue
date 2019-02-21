<template>
  <main class="Resume" itemprop="text">
    <c-meta-tags :title="title" :description="description" bodyClass="page-about" :url="url"/>
    <div class="Resume__inner">
      <button class="Resume__print" role="button" type="button" @click="printResume">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-printer">
          <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
          <path d="M6 14h12v8H6z"/>
        </svg>
      </button>
      <header class="Resume__header">
        <nuxt-link class="Resume__avatar" to="/about">
          <c-avatar />
        </nuxt-link>
        <div class="Resume__data">
          <h1 class="Resume__title">
            <strong>Fernando Moreira Costa</strong>
            <small>webDeveloper</small>
          </h1>
          <p>
            Brazilian, {{ age }} years old.
            <br><strong>Phone</strong>: 41 98440-1163
            <br><strong>Address</strong>: Bigorrilho, Curitiba/PR - Brazil
            <br><strong>Email</strong>: <a href="mailto:nandomoreira.me@gmail.com">nandomoreira.me@gmail.com</a>
            <br><strong>Blog</strong>: <a href="https://blog.nandomoreira.me/?ref=resume">blog.nandomoreira.me</a>
          </p>
        </div>
      </header>

      <div class="Resume__content">
        <section class="Resume__section Resume__section--formation">
          <h3>Formation</h3>
          <ul>
            <li><strong>2010/2012</strong> - Microcamp Curitiba, Web Design and Developer.</li>
            <li><strong>2010/2011</strong> - Colégio Estadual do Paraná, IT Technician with emphasis on web programming and basic java programming.</li>
          </ul>
        </section>

        <section class="Resume__section Resume__section--skills">
          <h3>Skills</h3>
          <ul>
            <li>HTML/HTML5 and Template Engines (liquid, Pug/Jade, handlebars, Haml, Slim, Erb end others);</li>
            <li>CSS/CSS3 and CSS Preprocessors (SASS, Less and Stylus);</li>
            <li>CSS Frameworks (Bootstrap, Foundation and others);</li>
            <li>Responsive web design (Mobile First, Progressive Enhancement and others);</li>
            <li>Static site generators (Jekyll, Middleman, hexo and others);</li>
            <li>ECMAScript/Javascript (Vuejs, React, Angular and jQuery);</li>
            <li>Task runners (Gulp, Grunt, Rake);</li>
            <li>Generators (Yeoman and others);</li>
            <li>Package Managers (npm, bower, ruby bundler, composer);</li>
            <li>Cordova/Phonegap (ionic and others);</li>
            <li>Git (Github, Bitbucket, Gitlab and others);</li>
            <li>PHP and Frameworks PHP (Codeigniter, Laravel, Symfony and others);</li>
            <li>CMS PHP (WordPress, Joomla! e basic Drupal);</li>
            <li>MySQL and basic PostgreSQL;</li>
            <li>Agile (Scrum and Kanban);</li>
            <li>NodeJS;</li>
            <li>Ruby (Ruby on Rails, basic Sinatra);</li>
            <li>Tests (Unit/TDD and funcitonal/e2e);</li>
          </ul>
        </section>

        <section class="Resume__section Resume__section--experience">
          <h3>Experience</h3>
          <ul class="experience">
            <li class="experience__item"><a href="https://www.lojaskd.com.br/" rel="nofollow">LojasKD.com.br</a>
              <ul>
                <li><strong>Year:</strong> <em>2017</em> </li>
                <li><strong>Position:</strong> <em>Front-end Developer</em> </li>
                <li><strong>Activities:</strong> <em>Maintenance and development of new interfaces for <a href="https://www.lojaskd.com.br/" rel="nofollow">LojasKD's</a> e-commerce.</em> </li>
              </ul>
            </li>
            <li class="experience__item"><a href="http://pipefy.com" rel="nofollow">Pipefy.com</a>
              <ul>
                <li><strong>Year:</strong> <em>2016</em> </li>
                <li><strong>Position:</strong> <em>Front-end Developer</em> </li>
                <li><strong>Activities:</strong> <em>Front-end development of the <a href="http://app.pipefy.com" rel="nofollow">Pipefy's</a> new app interface</em> </li>
              </ul>
            </li>
            <li class="experience__item"><a href="http://malapronta.com.br/" rel="nofollow">MalaPronta.com</a>
              <ul>
                <li><strong>Year:</strong> <em>2015</em> </li>
                <li><strong>Position:</strong> <em>Front-end Developer</em> </li>
                <li><strong>Activities:</strong> <em>Improvements to the online hotel reservations website of <a href="http://malapronta.com.br/" rel="nofollow">MalaPronta.com</a>. I converted a 5 year old site with old code and plenty of legacy CSS and HTML into a 100% responsive site, I was idealizing new methodologies for front-end development like SASS, Gulp, Bower and others.</em> </li>
              </ul>
            </li>
            <li class="experience__item"><a href="http://agenciawx.com.br/" rel="nofollow">Agência WX</a>
              <ul>
                <li><strong>Year:</strong> <em>2014</em> </li>
                <li><strong>Position:</strong> <em>WordPress/Front-end Developer</em> </li>
                <li><strong>Activities:</strong> <em>Front end for WX 's own CMS using MVC technology and website development using WordPress.</em> </li>
              </ul>
            </li>
            <li class="experience__item"><a href="http://www.ibpt.org.br/" rel="nofollow">IBPT - Instituto Brasileiro de Planejamento Tributário</a>
              <ul>
                <li><strong>Year:</strong> <em>2013</em> </li>
                <li><strong>Position:</strong> <em>WordPress Developer</em> </li>
                <li><strong>Activities:</strong> <em>Developing proprietary tools using WordPress.</em> </li>
              </ul>
            </li>
          </ul>
        </section>

        <section class="Resume__section Resume__section--projects">
          <h3>Projects</h3>
          <p><nuxt-link class="button button--primary" to="/portfolio">nandomoreira.me/portfolio</nuxt-link></p>
        </section>

        <section class="Resume__section Resume__section--open-source">
          <h3>Projects Open Source</h3>
          <p><a class="button button--primary" href="https://github.com/nandomoreirame?utf8=%E2%9C%93&amp;tab=repositories&amp;q=&amp;type=public" target="_blank">github.com/nandomoreirame</a> </p>
        </section>

        <section class="Resume__section Resume__section--experiments">
          <h3>Experiments</h3>
          <p><a class="button button--primary" href="https://codepen.io/nandomoreirame/" target="_blank">codepen.io/nandomoreirame</a></p>
        </section>
      </div>
    </div>

    <aside class="Resume__social">
      <c-social-icons iconSize="18"/>
    </aside>

    <blockquote class="Resume__quote">
      <p>I have no special talent. I am only passionately curious.</p>
      <small>Albert Einstein</small>
    </blockquote>
  </main>
</template>

<script>
const _date = new Date()
const _year = _date.getFullYear()
const _age = (_year - 1989)

export default {
  layout: 'blank',
  data () {
    return {
      title: `Resume - Fernando Moreira Costa {{ webDeveloper }}`,
      description: `Brazilian, ${_age} years old. Phone: 41 98440-1163 Address: Bigorrilho, Curitiba/PR - Brazil`,
      url: `${process.env.baseUrl}/resume`,
      age: _age
    }
  },
  methods: {
    printResume (event) {
      event.preventDefault()
      window.print()
    }
  },
  components: {
    CSocialIcons: () => import('~/components/SocialIcons'),
    CAvatar: () => import('~/components/Avatar'),
    CMetaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus">
.Resume
  max-width 50rem /* 800/16 */
  +above($tablet)
    margin-right auto
    margin-left auto
    padding 1.875rem /* 30/16 */ 0
  &__inner
    background-color #fff
    padding 1.875rem /* 30/16 */
    text-align center
    position relative
    +above($tablet)
      text-align left
  p, li
    +above($tablet)
      font-size 1.125rem /* 18/16 */
  ul
    list-style none
    padding 0
    margin 0
  &__print
    background transparent none
    border none
    padding 0
    margin 0 0 30px
    svg
      stroke rgba(#000, .4)
    +above($tablet)
      position absolute
      top 20px
      right 20px
      cursor pointer
      margin 0
  &__header
    +above($tablet)
      padding 0 30px
      display flex
      align-items center
  &__data
    +above($tablet)
      padding-left 40px
  &__avatar
    .Avatar.Image
      padding 0
      margin 0
      img
        width 180px
        height 180px
  &__title
    strong
      font-weight 800
      text-transform uppercase
      font-size 1.375rem /* 22/16 */
      +above($tablet)
        font-size 1.625rem /* 26/16 */
    small
      display block
      margin-top .1875rem /* 3/16 */
      font-size 1.125rem /* 18/16 */
      font-family $font-family-base
      opacity 0.75
      +above($tablet)
        font-size 1.5rem /* 24/16 */
      &:before,
      &:after
        display inline-block
      &:before
        content '{{'
        margin-right .625rem /* 10/16 */
      &:after
        content '}}'
        margin-left .625rem /* 10/16 */
  &__quote
    text-align center
    padding 0 1.875rem /* 30/16 */
    p
      font-size 1.375rem /* 22/16 */
      margin 0
  &__section
    padding .9375rem /* 15/16 */ 0 3.75rem /* 60/16 */
    &:not(:last-child)
      margin-bottom 3.75rem /* 60/16 */
      border-bottom 1px solid rgba(#000, 0.08)
    &--experience
      .experience
        &__item:not(:last-child)
          @extend .divider
          padding-bottom 10px
          margin-bottom 20px
    &--skills
      li
        &:before
          content '★'
          display inline-block
          margin-right 5px
          color $primary-color
    h3
      @extend .title
      margin-bottom 15px
      font-size 1.75rem /* 28/16 */
      text-transform lowercase
      &:before
        content '{{'
        margin-right .625rem /* 10/16 */
      &:after
        content '}}'
        margin-left .625rem /* 10/16 */
      +above($tablet)
        font-size 2rem /* 32/16 */
  &__social
    text-align center
    padding 3.75rem /* 60/16 */ 0
    +above($tablet)
      padding 3.75rem /* 60/16 */ 0 1.875rem /* 30/16 */

@media print
  .Resume__print,
  .Resume__section h3:before,
  .Resume__section h3:after,
  .Resume__section.Resume__section--projects,
  .Resume__section.Resume__section--open-source,
  .Resume__section.Resume__section--experiments,
  .Resume__social,
  .Resume__quote:before,
  .Resume__quote:after,
  .at-expanding-share-button
    display none !important
  .Resume__title
    strong
      font-size 18px !important
    small
      font-size 14px !important
  .Resume__section p,
  .Resume__section li,
  .Resume__data p
    font-size 12px !important
  .Resume__section h3,
  .Resume__quote p,
  .Resume__quote
    font-size 16px !important
  .Resume__section
    padding 10px 0 !important
    margin-bottom 10px !important
    border none !important
  .Resume__section.Resume__section--experience .experience__item
    padding-bottom 0 !important
    margin-bottom 0 !important
  .Resume__avatar
    .Avatar.Image img
      width 80px !important
      height 80px !important
      box-shadow none !important
      border none !important
</style>
