import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import MenuWrapper from "../components/menu-wrapper/menu-wrapper"

const BackgroundStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`
const GalleryImage = styled.div``

const ContactPage = () => (
  <Layout>
    <BackgroundStyle>
      <MenuWrapper />
      <GalleryImage />
    </BackgroundStyle>
  </Layout>
)

export default ContactPage
