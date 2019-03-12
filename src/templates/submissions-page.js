import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import SubmissionsPageTemplate from '../components/SubmissionsPageTemplate'

const SubmissionsPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <SubmissionsPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
    />
  )
}

SubmissionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SubmissionsPage

export const pageQuery = graphql`
  query SubmissionsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
      }
    }
  }
`
