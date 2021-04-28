import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Common/Layout"
import Banner from "../components/Main/Banner/Banner"
import PostItem from "../components/Main/PostItem/PostItem"
import PostList from "../components/Main/PostList/PostList"
import "github-markdown-css"

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => (
    <Link
      to={node.fields.slug}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <PostItem
        title={node.frontmatter.title}
        desc={node.frontmatter.desc}
        profile={node.frontmatter.profile}
        key={node.id}
      />
    </Link>
  ))

  return (
    <Layout>
      <Banner />
      <PostList>{posts}</PostList>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: id, order: ASC }) {
      edges {
        node {
          frontmatter {
            profile
            title
            desc
          }
          id
          fields {
            slug
          }
        }
      }
    }
  }
`
