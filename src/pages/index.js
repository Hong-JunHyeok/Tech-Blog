import React from "react"
import styled from "styled-components"
import Layout from "../components/Common/Layout"
import Banner from "../components/Main/Banner/Banner"
import PostItem from "../components/Main/PostItem/PostItem"
import PostList from "../components/Main/PostList/PostList"

export default function Home() {
  return (
    <Layout>
      <Banner />
      <PostList>
        <PostItem />
        <PostItem />
      </PostList>
    </Layout>
  )
}
