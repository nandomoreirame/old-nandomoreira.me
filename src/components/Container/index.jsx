import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './container.module.styl'

class Container extends Component {
  render() {
    const { children } = this.props

    return (
      <div className={styles.Container}>
        <div className={styles.Container__inner}>
          {children}
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  route: PropTypes.object
}

export default Container
