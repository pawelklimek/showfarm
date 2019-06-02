import React from "react"
import Layout from "../layout/layout";
import MenuWrapper from "../components/menu-wrapper/menu-wrapper";
import styled from "styled-components"
import puppyImg from "../images/dogs/puppy-4.jpg";
import bigImg from "../images/dogs/gallery-3.jpg";
import smallImage from "../images/dogs/gallery-4.jpg";
const ImageBackGroundStyle = styled.div`
  height:100%;
  width:100%; 
  display: flex;
  flex-direction: column;
  align-items: stretch;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;


const WrapperRow = styled.div`
    display: flex;
    height: 100%;
`;
const WrapperColumnLeft= styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   align-items: flex-end;
`;
const WrapperColumnRight= styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
`;

const HeaderStyle= styled.div`
      flex: 2;
      margin: 5px;
      width: 700px;
      background-color: gray;
      border-radius: 3px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      :hover{
         box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      }
      animation:slide-in-left .5s cubic-bezier(.25,.46,.45,.94) .3s both;
      @keyframes slide-in-left{0%{transform:translateX(-1000px);opacity:0}100%{transform:translateX(0);opacity:1}}
`;

const SmallImageStyle= styled.div`; 
      flex: 3;
      width: 700px;
      margin: 5px;
      background: url(${(smallImage)})  no-repeat;
      -webkit-background-size: cover;
      border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
       :hover{
         box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
       }
      animation:slide-in-bottom .5s cubic-bezier(.25,.46,.45,.94) .2s both};
      @keyframes slide-in-bottom{0%{transform:translateY(1000px);opacity:0}100%{transform:translateY(0);opacity:1}}
`;

const BigImageStyle= styled.div`
      flex: 2;
      width: 700px;
      margin: 5px;
      background: url(${(bigImg)})  no-repeat;
      -webkit-background-size: cover;
      border-radius: 3px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      :hover{
         box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      }
      animation:slide-in-right .5s cubic-bezier(.25,.46,.45,.94) both;
      @keyframes slide-in-right{0%{transform:translateX(1000px);opacity:0}100%{transform:translateX(0);opacity:1}}
`;

const DescriptionStyle= styled.div`
      flex: 2;
      width: 700px;
      margin: 5px;
      background: url(${(puppyImg)}) no-repeat;
      -webkit-background-size: cover;
      border-radius: 3px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      :hover{
         box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      }
      animation:slide-in-right .5s cubic-bezier(.25,.46,.45,.94) .1s both;
      @keyframes slide-in-right{0%{transform:translateX(1000px);opacity:0}100%{transform:translateX(0);opacity:1}}
`;
const IndexPage = () => (
  <Layout>
      <ImageBackGroundStyle>
      <MenuWrapper/>
        <WrapperRow>
            <WrapperColumnLeft>
                <HeaderStyle/>
                <SmallImageStyle/>
            </WrapperColumnLeft>
            <WrapperColumnRight>
                <BigImageStyle/>
                <DescriptionStyle/>
            </WrapperColumnRight>
        </WrapperRow>
      </ImageBackGroundStyle>
  </Layout>
);

export default IndexPage
