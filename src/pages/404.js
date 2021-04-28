import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import * as colors from "../styles/colors.json"
import * as sizes from "../styles/sizes.json"

export default function NotFound() {
  return (
    <NotFoundTemplate>
      <span className="code">404</span>
      <Link className="go-back" to="/">
        DEVLOG
      </Link>
      <div>요청하신 페이지를 찾을 수 없습니다.</div>
    </NotFoundTemplate>
  )
}

export const NotFoundTemplate = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & .code {
    font-size: 200px;
    font-weight: bold;
    color: ${colors.black};
  }
  & .go-back {
    margin: 20px 0;
    font-size: ${sizes.font_big}px;
    color: ${colors.main};
    text-decoration: none;
    text-align: center;
    &::before {
      display: block;
      content: "메인 페이지로 돌아가기";
      color: ${colors.black};
      font-size: ${sizes.font_small}px;
    }
  }
`
