import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout";
import MenuWrapper from "../components/menu-wrapper/menu-wrapper";
import img8 from "../images/dogs/8.jpg";
import img9 from "../images/dogs/9.jpg";
import img10 from "../images/dogs/10.jpg";
import img11 from "../images/dogs/10.jpg";
import img12 from "../images/dogs/14.jpg";
import img13 from "../images/dogs/13.jpg";
import img14 from "../images/dogs/14.jpg";
import img15 from "../images/dogs/15.jpg";

const ImageBackGroundStyle = styled.div`
`;

const BOX = styled.div`
  background: url(${({imageUrl }) =>  imageUrl });
  background-size: cover;
  min-width: 700px;
  min-height: 400px;
  margin: 5px;

  }
`;
const WRAPPER = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-items: center;
    overflow-y: scroll;
`;

const GalleryPage = () => (
    <Layout>
        <ImageBackGroundStyle>
            <MenuWrapper/>
            <WRAPPER>
                <BOX imageUrl={img8}>FOTO</BOX>
                <BOX imageUrl={img9}>FOTO</BOX>
                <BOX imageUrl={img10}>FOTO</BOX>
                <BOX imageUrl={img11}>FOTO</BOX>
                <BOX imageUrl={img12}>FOTO</BOX>
                <BOX imageUrl={img13}>FOTO</BOX>
                <BOX imageUrl={img14}>FOTO</BOX>
                <BOX imageUrl={img15}>FOTO</BOX>
            </WRAPPER>
        </ImageBackGroundStyle>
    </Layout>
);

export default GalleryPage
