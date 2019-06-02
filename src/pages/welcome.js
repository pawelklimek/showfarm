import React from "react"
import styled from "styled-components"
import welcomeImg from '../images/wellcomeJpg.jpg';

const WelcomeStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
font-size: 30px;
font-weight: ${({theme}) => theme.font.extraThin};
color: ${({theme}) => theme.colors.white};
`;


const WelcomeLogotyle = styled.div`
  background: url(${welcomeImg});
  background-size: cover;
  
   min-width: 700px;
  min-height: 400px;
`;


const WelcomePage = () => (
    <>
        <WelcomeStyle>
            TEST
<WelcomeLogotyle/>
        </WelcomeStyle>
    </>
);

export default WelcomePage
