import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'

const Portfolio = () => (
  <Layout>
    <Container>
      <p>Portfolio</p>
    </Container>
  </Layout>
)

Portfolio.propTypes = {
  route: PropTypes.object
}

export default Portfolio

export const portfolioQuery = graphql`
  query PortfolioQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
