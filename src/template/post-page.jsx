import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Common/Layout"
import styled from "styled-components"
import * as sizes from "../styles/sizes.json"
import * as colors from "../styles/colors.json"
import DEFAULT from "../assets/image/default_profile.svg"
import "highlight.js/styles/github.css"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  console.log(post.frontmatter.createdAt)
  return (
    <Layout>
      <PageTemplate>
        <Header>
          <div className="info">
            <h1>{post.frontmatter.title || "제목이 입력되지 않았습니다."}</h1>
            <img src={post.frontmatter.profile || DEFAULT} alt="" />
          </div>
          <div className="meta">
            <Name>{post.frontmatter.name}</Name>
            <CreatedAt>
              {post.frontmatter.createdAt || "언제 작성했는지 입력해주세요"}
            </CreatedAt>
          </div>
        </Header>
        {post.html ? (
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        ) : (
          "내용을 입력해주세요"
        )}
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
        name
        createdAt
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
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${colors.light_gray};
  padding: 20px 0;
  margin-bottom: 50px;
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
  .info {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .meta {
    width: 100%;
  }
`

const Name = styled.div`
  font-weight: bold;
  padding-bottom: 5px;
  margin-bottom: 5px;
`
const CreatedAt = styled.div`
  font-weight: lighter;
  color: ${colors.gray};
`
