import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import styles from './footer.module.styl'

class Footer extends Component {
  render() {
    return (
      <footer className={styles.Footer}>
        <p>Desenvolvido em <address>Curitiba-PR, Brasil</address> com o ❤ por <strong>Fernando Moreira</strong>, usando <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a> e hospedado no <a href="https://netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>. Veja o <a href="https://netlify.com/" target="_blank" rel="noopener noreferrer">código-fonte</a>.</p>
      </footer>
    )
  }
}

Footer.defaultProps = {
  type: 'short'
}

export default Footer
