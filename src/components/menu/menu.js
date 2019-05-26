import React from "react"
import styled from "styled-components"

const MenuDiv = styled.div`
  width: 100%;
  height: 50px;
`
const NavigationWrapper = styled.ul`
  padding-top: 10px;
  padding-right: 20px;
  list-style: none;
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 200;
  display: flex;
  justify-content: flex-end;
  color: white;
`
const NavigationItem = styled.li`
  margin-right: 20px;
  position: relative;
  transition: 0.4s;
  ::after {
    position: absolute;
    top: 0;
    right: -20px;
    height: 100%;
    content: '';
    display: block;
    width: 2px;
    background: white;
  }
  :last-child:after{
    display: none;
  }
:hover {
  color: #798CA5;
}
  padding-left: 20px;
`
const Menu = () => (
  <>
    <MenuDiv>
      <NavigationWrapper>
        <NavigationItem>Hodowla</NavigationItem>
        <NavigationItem>Aktualności</NavigationItem>
        <NavigationItem>Psy</NavigationItem>
        <NavigationItem>Szczeniaki</NavigationItem>
        <NavigationItem>Wystawy</NavigationItem>
        <NavigationItem>Linki</NavigationItem>
        <NavigationItem>Kontakt</NavigationItem>
      </NavigationWrapper>
    </MenuDiv>
  </>
)
export default Menu
