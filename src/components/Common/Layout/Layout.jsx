import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import * as colors from "../../../styles/colors.json"
import * as sizes from "../../../styles/sizes.json"

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <HeaderContainer>
          <TitleContainer>
            <Link to="/" style={{
              textDecoration : 'none'
            }}>
              <h1>DEVLOG</h1>
            </Link>
          </TitleContainer>
        </HeaderContainer>
      </Header>
      <ContentDiv>{children}</ContentDiv>
      <Footer>© All rights reserved. Powered by GitHub Pages.</Footer>
    </>
  )
}

const Header = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${colors.light_gray};
`
const HeaderContainer = styled.div`
  max-width: ${sizes.large_width}px;
  margin: 0 auto;
  height: 100%;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  & h1 {
    color: ${colors.main};
    font-size: ${sizes.font_big}px;
    font-weight: bold;
  }
  &::after {
    margin-left: 10px;
    font-size: ${sizes.font_small}px;
    content: "여러분의 개발이야기를 들려주세요!";
    color: ${colors.gray};
  }
`

const ContentDiv = styled.article`
  /* max-width: ${sizes.large_width}px;
  margin: 0 auto; */
  min-height: 80vh;
`

const Footer = styled.footer`
  width: 100%;
  padding: 60px 0;
  color: ${colors.gray};
  text-align: center;
`
