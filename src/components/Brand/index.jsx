import React, { Component } from 'react'
import Link from 'gatsby-link'
// import PropTypes from 'prop-types'

import styles from './brand.module.styl'

class Brand extends Component {
  render() {
    return (
      <h1 className={styles.Brand}>
        <Link className={styles.Brand__link} to="/">
          <span>nando</span>moreira
        </Link>
      </h1>
    )
  }
}

Brand.defaultProps = {
  type: 'short'
}

export default Brand
