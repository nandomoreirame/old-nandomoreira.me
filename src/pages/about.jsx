import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'

const About = () => (
  <Layout>
    <Container>
      <p>about</p>
    </Container>
  </Layout>
)

About.propTypes = {
  route: PropTypes.object
}

export default About

export const aboutQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
