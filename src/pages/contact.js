import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import MenuWrapper from "../components/menu-wrapper/menu-wrapper"
import contactImageBlack from "../images/contact/contactBlack.jpg"
import contactImage from "../images/contact/contact-1.jpg"
import facebookIcon from "../images/icons/facebook.svg"
import instagramIcon from "../images/icons/instagram.svg"
import { Link } from "gatsby"

const BackgroundStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const WrapperColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

const Panel = styled.div`
  margin: 5px;
  width: 700px;
  min-height: 300px;
  -webkit-background-size: cover;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const BigImageStyle = styled(Panel)`
  flex: 2;
  background: url(${contactImage}) no-repeat center;
  -webkit-background-size: cover;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

const ContactStyle = styled(Panel)`
  flex: 2;
  background: url(${contactImageBlack}) no-repeat center;
  -webkit-background-size: cover;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-left {
    0% {
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

const HeaderTextStyle = styled.div`
  padding-left: 15px;
  padding-top: 3px;
  font-family: "Montserrat", serif;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize}px;
  color: white;
  animation: slide-in-left ${({ showSpeed }) => showSpeed}s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) ${({ showDelay }) => showDelay}s both;
  @keyframes slide-in-left {
    0% {
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

const IconStyle = styled.img`
  margin-left: 15px;
  padding-top: 10px;
  width: 1.5rem;
  height: 1.5rem;
  animation: slide-in-fwd-center 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.5s
    both;
  @keyframes slide-in-fwd-center {
    0% {
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }
  cursor: pointer;
`

const ContactPage = () => (
  <Layout>

    <BackgroundStyle>
      <MenuWrapper />
      <WrapperColumn>
        <ContactStyle>
          <HeaderTextStyle showDelay={1.0} showSpeed={0.5} fontWeight={200} fontSize={40}>
            Karolina Klimek
          </HeaderTextStyle>
          <HeaderTextStyle showDelay={1.2} showSpeed={0.5} fontWeight={200} fontSize={20}>
            Email: showfarm.kennel@gmail.com
          </HeaderTextStyle>
          <HeaderTextStyle showDelay={1.4} showSpeed={0.5} fontWeight={200} fontSize={20}>
            Telefon: +48 509 354 704
          </HeaderTextStyle>
          {/*<HeaderTextStyle showDelay={1.5} showSpeed={0.5} fontWeight={200} fontSize={15}>Facebook Messenger</HeaderTextStyle>*/}
          {/*<HeaderTextStyle showDelay={1.6} showSpeed={0.5} fontWeight={100} fontSize={15}>Poznan</HeaderTextStyle>*/}
            <a href="https://www.facebook.com/showfarm.kennel/" target={"_blank"}>
                <IconStyle showDelay={1.8} showSpeed={0.5} src={facebookIcon}/>
            </a>
            <a href="https://www.instagram.com/showfarm/" target={"_blank"}>
                <IconStyle showDelay={1.7} showSpeed={0.5} src={instagramIcon}/>
            </a>
        </ContactStyle>
        <BigImageStyle />
      </WrapperColumn>
    </BackgroundStyle>
  </Layout>
);
export default ContactPage
