import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Hero from '../components/Hero'

const Home = () => (
  <Fragment>
    <SEO />
    <Hero />
  </Fragment>
)

Home.propTypes = {
  route: PropTypes.object
}

export default Home

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
