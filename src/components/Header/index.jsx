import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import Brand from '../Brand'
import Nav from '../Nav'

import styles from './header.module.styl'

class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <div className={styles.Header__inner}>
          <Brand />
          <Nav />
        </div>
      </header>
    )
  }
}

Header.defaultProps = {
  type: 'short'
}

export default Header
