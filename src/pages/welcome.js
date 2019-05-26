import React from "react"


import styled from "styled-components"

const WelcomeStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
font-size: 30px;
font-weight: ${({theme}) => theme.font.extraThin};
color: ${({theme}) => theme.colors.white};
`;


const HeaderStyle = styled.p`
animation: tracking-in-expand 0.9s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
`;
const SubHeaderStyle = styled(HeaderStyle)`
animation: tracking-in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s both;
`;


const WelcomePage = () => (
    <>
        <WelcomeStyle>
            <HeaderStyle>SHOWFARM</HeaderStyle>
            <SubHeaderStyle>Hodowla Owczarków Australijskich</SubHeaderStyle>
        </WelcomeStyle>
    </>
);

export default WelcomePage
