import React from "react"
import Layout from "../layout/layout";
import MenuWrapper from "../components/menu-wrapper/menu-wrapper";
import WelcomePage from "./welcome";
import styled from "styled-components"
import img from '../images/dogs/allOne.jpg';



const ImageBackGroundStyle = styled.div`
  height:100%;
  width:100%;
  background: url(${img}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const IndexPage = () => (
  <Layout>
      <ImageBackGroundStyle>
      <MenuWrapper/>
      <WelcomePage/>
      </ImageBackGroundStyle>
  </Layout>
);

export default IndexPage
