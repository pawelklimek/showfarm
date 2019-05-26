import React from "react"
import styled from "styled-components"
import MenuNav from "../menu-navi/menu-navi";

const MenuWrapperStyle = styled.div`
  display: flex;
  width: 100%;
  height: 40px;  background: rgba(33,33,33,0.7 );
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.2);
`;
const MenuWrapper = () => (
    <>
        <MenuWrapperStyle>
            <MenuNav/>
        </MenuWrapperStyle>
    </>
);
export default MenuWrapper
