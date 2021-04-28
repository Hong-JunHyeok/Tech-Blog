import React from "react"
import styled from "styled-components"
import DEFAULT from "../../../assets/image/default_profile.svg"
import * as colors from "../../../styles/colors.json"
import * as sizes from "../../../styles/sizes.json"
import TimeCounting from 'time-counting'

export default function PostItem({ title, desc, createdAt, name, profile }) {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        <img src={profile} alt="" />
      </Header>
      <Description>{desc}</Description>
      <Meta>
        <span className="createdAt">
          {TimeCounting(createdAt, {
            lang: "ko",
            calculate: "day",
          })}
        </span>
        <span className="name">{name}</span>
      </Meta>
    </Container>
  )
}

const Container = styled.li`
  width: 100%;
  border-bottom: 1px solid #e1e4e6;
  padding: 8% 0;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    color: ${colors.black};
    font-size: 32px;
    font-weight: bold;
  }
  img {
    width: 68px;
    border-radius: 50%;
  }
`

const Description = styled.div`
  padding: 16px 100px 6px 0;
  text-overflow: ellipsis;
  color: #4d5256;
  line-height: 1.9;
`

const Meta = styled.div`
  color: ${colors.gray};
  .createdAt {
    &::after {
      content: "|";
      padding: 0 10px;
    }
  }
  .name {
    font-size: ${sizes.font_small};
  }
`

PostItem.defaultProps = {
  title: "기본 제목입니다.",
  desc: "이 포스트의 기본 요약본입니다.",
  createdAt: "2021-04-28",
  name: "홍길동",
  profile: DEFAULT,
}
