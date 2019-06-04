import React from "react"
import Layout from "../layout/layout";
import MenuWrapper from "../components/menu-wrapper/menu-wrapper";
import styled from "styled-components"
import puppyImg from "../images/welcome/puppy.jpg";
import bigImg from "../images/welcome/dogs.jpg";
import smallImage from "../images/welcome/dog.jpg";
import headerImage from "../images/welcome/puppyDark.jpg";

const BackgroundStyle = styled.div`
  height:100%;
  width:100%; 
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const WrapperRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: 100%;
`;

const WrapperColumn = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   align-items: ${({direction}) => direction};
   ${({theme}) => theme.media.tablet} {
         align-items: center};
    }
`;

const Panel = styled.div`
      margin: 5px;
      width: 700px;
      min-height: 300px;
      -webkit-background-size: cover;
      border-radius: 3px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      :hover{
         box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      }
`;

const HeaderTextStyle = styled.div`
      padding-left: 15px;
      padding-top: 3px;
      font-family: "Montserrat", serif;
      font-weight: ${({fontWeight}) => fontWeight};
      font-size: ${({fontSize}) => fontSize}px;
      color: white;
      animation:slide-in-left ${({showSpeed}) => showSpeed}s cubic-bezier(.25,.46,.45,.94) ${({showDelay}) => showDelay}s both;
      @keyframes slide-in-left{0%{transform:translateX(-1000px);opacity:0}100%{transform:translateX(0);opacity:1}}
`;

const HeaderStyle = styled(Panel)`
      flex: 1;
      display: flex;
      flex-direction: column;
      background: url(${(headerImage)})  no-repeat;
      -webkit-background-size: cover;
      animation:slide-in-left .5s cubic-bezier(.25,.46,.45,.94) .3s both;
      @keyframes slide-in-left{0%{transform:translateX(-1000px);opacity:0}100%{transform:translateX(0);opacity:1}}
`;

const SmallImageStyle = styled(Panel)`; 
      flex: 3;
      background: url(${(smallImage)})  no-repeat;
      -webkit-background-size: cover;
      animation:slide-in-bottom .5s cubic-bezier(.25,.46,.45,.94) .2s both};
      @keyframes slide-in-bottom{0%{transform:translateY(1000px);opacity:0}100%{transform:translateY(0);opacity:1}}
`;

const BigImageStyle = styled(Panel)`
      flex: 2;
      background: url(${(bigImg)})  no-repeat;
      -webkit-background-size: cover;
      animation:slide-in-right .5s cubic-bezier(.25,.46,.45,.94) both;
      @keyframes slide-in-right{0%{transform:translateX(1000px);opacity:0}100%{transform:translateX(0);opacity:1}}
`;

const DescriptionStyle = styled(Panel)`
      flex: 2;
      background: url(${(puppyImg)}) no-repeat;
      -webkit-background-size: cover;
      animation:slide-in-right .5s cubic-bezier(.25,.46,.45,.94) .1s both;
      @keyframes slide-in-right{0%{transform:translateX(1000px);opacity:0}100%{transform:translateX(0);opacity:1}}
`;

const IndexPage = () => (
    <Layout>
        <BackgroundStyle>
            <MenuWrapper/>
            <WrapperRow>
                <WrapperColumn direction={"flex-end"}>
                    <HeaderStyle>
                        <HeaderTextStyle showDelay={1.0} showSpeed={0.5} fontWeight={200} fontSize={35}>SHOWFARM FCI</HeaderTextStyle>
                        <HeaderTextStyle showDelay={1.2} showSpeed={0.5} fontWeight={200} fontSize={15}>Witam Serdecznie na stronie</HeaderTextStyle>
                        <HeaderTextStyle showDelay={1.4} showSpeed={0.5} fontWeight={200} fontSize={15}>Domowej hodowli owaczarków australijskich</HeaderTextStyle>
                        <HeaderTextStyle showDelay={1.6} showSpeed={0.5} fontWeight={100} fontSize={15}>Zapraszam do kontaku</HeaderTextStyle>
                        <HeaderTextStyle showDelay={1.8} showSpeed={1} fontWeight={100} fontSize={15}>Karolina Klimek</HeaderTextStyle>
                    </HeaderStyle>
                    <SmallImageStyle/>
                </WrapperColumn>
                <WrapperColumn direction={"flex-start"}>
                    <BigImageStyle/>
                    <DescriptionStyle/>
                </WrapperColumn>
            </WrapperRow>
        </BackgroundStyle>
    </Layout>
);
export default IndexPage
