import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
 height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 20vh;
`

const HeaderWrapper = styled.h1`
  font-family: "Montserrat";
  font-size: 48px;
  font-weight: 300;
  color: white;
  padding: 0;
  margin: 0;
`
const SubHeaderWrapper = styled.h1`
  font-family: "Montserrat";
  font-size: 44px;
  font-weight: 200;
  color: white;
  padding: 0;
`

const Header = () => (
  <>
    <Wrapper>
      <HeaderWrapper>Showfarm</HeaderWrapper>
      <SubHeaderWrapper>Hodowla owczarków australijskich</SubHeaderWrapper>
    </Wrapper>
  </>
)
export default Header
