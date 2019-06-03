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

const PuppiesPage = () => (
    <Layout>
        <BackgroundStyle>
            <MenuWrapper/>
        </BackgroundStyle>
    </Layout>
);

export default PuppiesPage
