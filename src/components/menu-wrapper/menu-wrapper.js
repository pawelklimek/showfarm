import React from "react"
import styled from "styled-components"
import MenuTitle from "../menu-title/menu-title";
import MenuNav from "../menu-navi/menu-navi";

const MenuWrapperStyle = styled.div`
display: flex;
width: 100%;
height: 40px;
opacity: 0.7;
background: #606362;
`;
const MenuWrapper = () => (
    <>
        <MenuWrapperStyle>
            <MenuTitle/>
            <MenuNav/>
        </MenuWrapperStyle>
    </>
);
export default MenuWrapper
