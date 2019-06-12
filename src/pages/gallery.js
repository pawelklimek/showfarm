import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import MenuWrapper from "../components/menu-wrapper/menu-wrapper"
import pic1 from "../images/gallery/1.jpg"
import pic2 from "../images/gallery/2.jpg"
import pic3 from "../images/gallery/3.jpg"
import pic4 from "../images/gallery/4.jpg"
import pic5 from "../images/gallery/5.jpg"
import pic6 from "../images/gallery/6.jpg"
import pic7 from "../images/gallery/7.jpg"
import pic8 from "../images/gallery/8.jpg"
import pic9 from "../images/gallery/9.jpg"
import pic10 from "../images/gallery/10.jpg"
import pic11 from "../images/gallery/11.jpg"
import pic12 from "../images/gallery/12.jpg"
import pic13 from "../images/gallery/13.jpg"
import pic14 from "../images/gallery/14.jpg"
import pic15 from "../images/gallery/15.jpg"
import pic16 from "../images/gallery/16.jpg"
import pic17 from "../images/gallery/17.jpg"
import pic18 from "../images/gallery/18.jpg"
import pic19 from "../images/gallery/19.jpg"
import pic20 from "../images/gallery/20.jpg"

const BackgroundStyle = styled.div`
  height: 98%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const WrapperRow = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`

const Image = styled.div`
  width: 70px;
  height: 100%;
  margin: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
  background-position: center;
  border-radius: 5px;
  animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1)
    ${({ showDelay }) => showDelay}s both;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  transition: all 500ms;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  transition-delay: 2s;
  -webkit-transition: width 500ms;
  -moz-transition: width 500ms;
  :hover {
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    filter: grayscale(0%);
    width: 100%;
  }
`

const GalleryPage = () => (
  <Layout>
    <BackgroundStyle>
      <MenuWrapper />
      <WrapperRow>
        <Image showDelay={0.1} src={pic1} />
        <Image showDelay={0.2} src={pic2} />
        <Image showDelay={0.3} src={pic3} />
        <Image showDelay={0.4} src={pic4} />
        <Image showDelay={0.5} src={pic5} />
        <Image showDelay={0.6} src={pic6} />
        <Image showDelay={0.7} src={pic7} />
        <Image showDelay={0.8} src={pic8} />
        <Image showDelay={0.9} src={pic9} />
        <Image showDelay={1.0} src={pic10} />
        <Image showDelay={1.1} src={pic11} />
        <Image showDelay={1.2} src={pic12} />
        <Image showDelay={1.2} src={pic13} />
        <Image showDelay={1.3} src={pic14} />
        <Image showDelay={1.4} src={pic15} />
        <Image showDelay={1.5} src={pic16} />
        <Image showDelay={1.6} src={pic17} />
        <Image showDelay={1.7} src={pic18} />
        <Image showDelay={1.8} src={pic19} />
        <Image showDelay={1.9} src={pic20} />
      </WrapperRow>
    </BackgroundStyle>
  </Layout>
)

export default GalleryPage
