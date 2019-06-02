import React from "react"
import Layout from "../layout/layout";
import MenuWrapper from "../components/menu-wrapper/menu-wrapper";
import styled from "styled-components"
import showFarmPanelImg from "../images/dogs/1.jpg";
import puppiesPanelImg from "../images/dogs/puppy-4.jpg";
import contactPanelImg from "../images/dogs/contact-4.jpg";
import galleryPanelImg from "../images/dogs/gallery-3.jpg";
import dogsPanelIng from "../images/panel-1.jpg";
import showsPanelImg from "../images/dogs/shows-1.jpg";

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
   align-items: flex-start;
`;

const PanelBackground= styled.div`
      flex: 1;
      margin: 10px;
      width: 600px;
      background: url(${({ImageUrl}) =>  ImageUrl });
      background-size: cover;
      border: 1px solid #ddd;
      border-radius: 10px;
      cursor: pointer;
`;
const IndexPage = () => (
  <Layout>
      <ImageBackGroundStyle>
      <MenuWrapper/>
        <WrapperRow>
            <WrapperColumnLeft>
                <PanelBackground ImageUrl={showFarmPanelImg}/>
                <PanelBackground ImageUrl={puppiesPanelImg}/>
                <PanelBackground ImageUrl={showsPanelImg}/>
            </WrapperColumnLeft>
            <WrapperColumnRight>
                <PanelBackground ImageUrl={dogsPanelIng}/>
                <PanelBackground ImageUrl={galleryPanelImg}/>
                <PanelBackground ImageUrl={contactPanelImg}/>
            </WrapperColumnRight>
        </WrapperRow>
      </ImageBackGroundStyle>
  </Layout>
);

export default IndexPage
