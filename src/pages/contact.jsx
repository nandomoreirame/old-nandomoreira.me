import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'

const Contact = () => (
  <Layout>
    <Container>
      <p>Contact</p>
    </Container>
  </Layout>
)

Contact.propTypes = {
  route: PropTypes.object
}

export default Contact

export const contactQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
