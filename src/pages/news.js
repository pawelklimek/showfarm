import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import MenuWrapper from "../components/menu-wrapper/menu-wrapper"
import News from "../components/news-cms/news-cms"

const BackgroundStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const NewsStyle = styled.div``

const NewsPage = () => (
  <Layout>
    <BackgroundStyle>
      <MenuWrapper />
      <News />
    </BackgroundStyle>
  </Layout>
)

export default NewsPage
