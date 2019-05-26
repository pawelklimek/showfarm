import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

const NavigationWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;
const StyledLink = styled.span`
  position: relative;
  text-decoration: none;
  margin-right: 2rem;
  font-size: 1.4em;
  font-weight: ${({theme, test}) =>  test ? theme.font.regular : theme.font.extraThin };
  color: ${({theme}) => theme.colors.white};
::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${({theme}) => theme.colors.blue};
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
`;

const MenuNav = () => (
    <>
        <NavigationWrapper>
            <StyledLink test as={Link} to="/">Showfarm</StyledLink>
            <StyledLink as={Link} to="/news">Aktualnosci</StyledLink>
            <StyledLink as={Link} to="/dogs">Psy</StyledLink>
            <StyledLink as={Link} to="/pupies">Szczeniaki</StyledLink>
            <StyledLink as={Link} to="/gallery">Galeria</StyledLink>
            <StyledLink as={Link} to="/dog-show">Wystawy</StyledLink>
            <StyledLink as={Link} to="/contact">Kontakt</StyledLink>
            {/*<MenuLanguage/>*/}
        </NavigationWrapper>
    </>
)
export default MenuNav
