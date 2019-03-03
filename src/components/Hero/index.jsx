import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Nav from '../Nav'
import SocialIcons from '../SocialIcons'

import './hero.styl'
import styles from './hero.module.styl'

class Hero extends Component {
  render() {
    return (
      <main className={"Hero " + styles.Hero}>
        <div className={styles.Hero__inner} itemScope itemType="http://schema.org/Person">
          <h1
            className={styles.Hero__title}
            ref={el => {
              this.el = el
            }}
          >
            <span>Olá, eu me chamo </span> <br /> <strong itemProp="name">Fernando Moreira</strong>.
          </h1>
          <p className={styles.Hero__presentation} role="presentation" itemProp="description">
            Sou um <strong itemProp="jobTitle">desenvolvedor front-end</strong>. <a href="http://agencia.nossacausa.com/" target="_blank" rel="noopener noreferrer">Ajudo ONGs</a> e pequenas empresas a criar projetos web personalizados de alta qualidade. No meu tempo livre eu <a href="https://blog.nandomoreira.me" target="_blank" rel="noopener noreferrer">escrevo em meu blog</a> e contribuo com projetos <a href="https://github.com/nandomoreirame" target="_blank" rel="noopener noreferrer">open source</a>.
          </p>
          <Nav />
          <SocialIcons />
        </div>
      </main>
    )
  }
}

Hero.propTypes = {
  route: PropTypes.object
}

export default Hero
