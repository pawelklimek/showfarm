import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout";
import MenuWrapper from "../components/menu-wrapper/menu-wrapper";

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

const Image = styled.div`

`;

const GalleryPage = () => (
    <Layout>
        <BackgroundStyle>
            <MenuWrapper/>
            <WrapperRow>
            </WrapperRow>
        </BackgroundStyle>
    </Layout>
);

export default GalleryPage
