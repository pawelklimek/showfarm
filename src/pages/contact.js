import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout";
import MenuWrapper from "../components/menu-wrapper/menu-wrapper";
import img from "../images/dogs/2.jpg";

const ImageBackGroundStyle = styled.div`
  display: flex;
  flex-direction: column;
  height:100%;
  width:100%;
  background: url(${img}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const ContentWrapper = styled.div`
flex: 1;
      border: 1px solid blue;
      display: flex;
      justify-content: center;
      align-items: center;
`;

const Content = styled.div`
display: flex;
      border: 1px solid red;
`;
const ContactPage = () => (
    <Layout>
      <ImageBackGroundStyle>
        <MenuWrapper/>
        <ContentWrapper>
              <Content>TEST</Content>
        </ContentWrapper>
      </ImageBackGroundStyle>
    </Layout>
);

export default ContactPage
