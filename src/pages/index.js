import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Common/Layout"
import Banner from "../components/Main/Banner/Banner"
import PostItem from "../components/Main/PostItem/PostItem"
import PostList from "../components/Main/PostList/PostList"

export default function Home({ data }) {
  console.log(data.allMarkdownRemark.edges)
  const posts = data.allMarkdownRemark.edges.map(({ node }) => (
    <PostItem
      title={node.frontmatter.title}
      desc={node.frontmatter.desc}
      profile={node.frontmatter.profile}
      key={node.id}
    />
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
  allMarkdownRemark(sort: {fields: id, order: ASC}) {
    edges {
      node {
        frontmatter {
          profile
          title
          desc
        }
        id
      }
    }
  }
}

`
