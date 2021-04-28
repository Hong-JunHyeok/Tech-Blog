import React from "react"
import styled from "styled-components"
import MAIN from "../../../assets/image/banner_main.jpg"
import * as sizes from "../../../styles/sizes.json"
import * as colors from "../../../styles/colors.json"

export default function Banner() {
  return (
    <BannerDiv>
      <BannerContainer>
        <BannerContent>
          <p>
            개발자분들,
            <br />
            <Special>DEVLOG</Special>에 기여해주세요!
          </p>
          <button>기여하기</button>
        </BannerContent>
      </BannerContainer>
    </BannerDiv>
  )
}

const Special = styled.span`
    font-weight: bold;
    font-size: 28px;
`;

const BannerDiv = styled.section`
  width: 100%;
  height: 360px;
`

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${MAIN});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media(max-width : 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const BannerContent = styled.div`
  max-width: ${sizes.large_width}px;
  margin: 0 auto;
  padding-top: 120px;
  & p {
    font-size: ${sizes.font_big}px;
    color: ${colors.white};
  }
  & button {
    margin-top: 50px;
    width: 150px;
    height: 50px;
    border-radius: 40px;
    border: none;
    outline: none;
    font-weight: bold;
    color: ${colors.white};
    background-color: #4c80f1;
    -webkit-user-select: none;
    user-select: none;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
      &::after {
        padding-left: 10px;
        opacity: 1;
      }
    }
    &::after {
      position: absolute;
      transition: ease-in-out 0.2s;
      content: ">";
      padding-left: 5px;
      opacity: 0;
      font-weight: lighter;
    }
  }
`
