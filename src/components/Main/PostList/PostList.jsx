import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import * as sizes from "../../../styles/sizes.json"

export default function PostList({ children, data }) {

  return <Container>{children}</Container>
}

const Container = styled.ul`
  max-width: ${sizes.large_width}px;
  margin: 0 auto;
`
