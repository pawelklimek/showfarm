import React from "react"
import styled from "styled-components"
import MenuNav from "../menu-navi/menu-navi";
import Logo from "../logo/logo";

const MenuWrapperStyle = styled.div`
  display: flex;
`;

const LogoWrapperStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const MenuWrapper = () => (
    <>
        <LogoWrapperStyle>
            <Logo/>
        </LogoWrapperStyle>
        <MenuWrapperStyle>
            <MenuNav/>
        </MenuWrapperStyle>
    </>
);
export default MenuWrapper
