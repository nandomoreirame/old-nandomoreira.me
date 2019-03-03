import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SEO from '../SEO'
import Header from '../Header'
import Footer from '../Footer'

import './base.styl'
import styles from './layout.module.styl'

class Default extends Component {
  render() {
    const { children } = this.props

    return (
      <div className={styles.Default}>
        <SEO />
        <Header />
        <main className={styles.Default__main} role="main">{children}</main>
        <Footer />
      </div>
    )
  }
}

Default.propTypes = {
  route: PropTypes.object
}

export default Default
