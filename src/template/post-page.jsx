import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Common/Layout"
import styled from "styled-components"
import * as sizes from "../styles/sizes.json"
import * as colors from "../styles/colors.json"
import 'highlight.js/styles/github.css';

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <PageTemplate>
        <Header>
          <h1>{post.frontmatter.title}</h1>
          <img src={post.frontmatter.profile} alt="" />
        </Header>

        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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
        profile
      }
    }
  }
`

const PageTemplate = styled.article`
  max-width: ${sizes.large_width}px;
  margin: 0 auto;
  img {
    max-width: 100%;
  }
`
const Header = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: ${colors.black};
    font-size: 32px;
    font-weight: bold;
  }
  img {
    width: 68px;
    height: 68px;
    border-radius: 50%;
  }
`
