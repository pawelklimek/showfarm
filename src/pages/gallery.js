import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout";
import MenuWrapper from "../components/menu-wrapper/menu-wrapper";
import img from "../images/dogs/5.jpg";

const ImageBackGroundStyle = styled.div`
  height:100%;
  width:100%;
  background: url(${img}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
const GalleryPage = () => (
    <Layout>
        <ImageBackGroundStyle>
            <MenuWrapper/>
            GALLERY
        </ImageBackGroundStyle>
    </Layout>
);

export default GalleryPage
