import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

const LogoWrapper = styled.div`
   display: flex; 
   text-decoration: none;
   color: ${({theme}) => theme.colors.darkGray};
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border: 2px solid ${({theme}) => theme.colors.darkGray};
   padding: 20px;
   margin: 20px;
   :hover{
    cursor: pointer;
   }
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 200;
  font-size: 3rem;
  font-family: Raleway;
`;

const SubTitle = styled.h4`
  margin: 0;
  font-weight: 200;
  font-family: Raleway;
`;

const Logo = () => (
    <>
        <LogoWrapper as={Link} to={"/"}>
            <Title>SHOWFARM</Title>
            <SubTitle>Hodowla Owczarków Australijskich</SubTitle>
        </LogoWrapper>
    </>
);
export default Logo
