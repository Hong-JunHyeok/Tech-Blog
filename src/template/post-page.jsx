import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Common/Layout'
import styled from 'styled-components'
import * as sizes from '../styles/sizes.json'

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <PageTemplate>
        <h1>{post.frontmatter.title}</h1>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </PageTemplate>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const PageTemplate = styled.article`
    max-width: ${sizes.large_width}px;
    margin: 0 auto;
    img{
        max-width: 100%;
    }
`