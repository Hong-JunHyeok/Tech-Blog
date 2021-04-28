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
        name={node.frontmatter.name}
        createdAt={node.frontmatter.createdAt}
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
    allMarkdownRemark(sort: { fields: frontmatter___createdAt, order: DESC }) {
      edges {
        node {
          frontmatter {
            profile
            title
            desc
            createdAt
            name
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
