import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from '../components/header/header.js'
import Menu from '../components/menu/menu.js'
import backgroundImage from "../images/allTwo.jpg"

const GlobalStyle = createGlobalStyle`
body {
padding: 0;
margin: 0;
widows: 100vh;
height: 100vh;
background-image: url(${backgroundImage});
background-size: cover;                    
background-repeat: no-repeat;
background-position: center;

}
`
const IndexPage = () => (
  <>
    <GlobalStyle/>
    <Menu></Menu>
    <Header></Header>
  </>
)

export default IndexPage
