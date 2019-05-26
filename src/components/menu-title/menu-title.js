import React from "react"
import styled from "styled-components"

const MenuTitleStyle = styled.h4`
padding-left: 1rem;
    flex: 1;
    align-self: center;
    font-size: 1.4em;
    opacity: 1;
    font-weight: ${({theme}) => theme.font.regular};
`;

const MenuTitle = () => (
    <>
        <MenuTitleStyle>ShowFarm</MenuTitleStyle>
    </>
);
export default MenuTitle
