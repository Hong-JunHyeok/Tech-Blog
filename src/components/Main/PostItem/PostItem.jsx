import React from "react"
import styled from "styled-components"
import DEFAULT from "../../../assets/image/default_profile.svg"
import * as colors from "../../../styles/colors.json"
import * as sizes from "../../../styles/sizes.json"
import TimeCounting from "time-counting"

export default function PostItem({ title, desc, createdAt, name, profile }) {
  console.log(title, desc, createdAt, name, profile)
  return (
    <Container>
      <Header>
        <h1>{title || "제목이 입력되지 않았습니다."}</h1>
        <img src={profile || DEFAULT} alt="" />
      </Header>
      <Description>
        {desc || "이 포스트의 요약이 입력되지 않았습니다."}
      </Description>
      <Meta>
        <span className="createdAt">
          {createdAt
            ? TimeCounting(createdAt, {
                lang: "ko",
                calculate: "day",
              })
            : "언제 작성했는지 입력해주세요"}
        </span>
        <span className="name">{name || "이름을 입력해주세요"}</span>
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
    height: 68px;
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
  title: "제목이 입력되지 않았습니다.",
  desc: "이 포스트의 요약이 입력되지 않았습니다.",
  createdAt: "언제 작성했는지 입력해주세요",
  name: "이름이 없습니다.",
  profile: DEFAULT,
}
