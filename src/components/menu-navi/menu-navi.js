import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

const NavigationWrapper = styled.ul`
  display: flex;
  align-self: center;
  justify-self: self-end;
  flex: 1;
`;
const StyledLink = styled.span`
  position: relative;
  text-decoration: none;
  margin-right: 2rem;
  font-size: 1.4em;
  font-weight: ${({theme}) => theme.font.thin};
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
            <StyledLink as={Link} to="/">Aktualnosci</StyledLink>
            <StyledLink as={Link} to="/kontakt">Psy</StyledLink>
            <StyledLink as={Link} to="/kontakt">Szczeniaki</StyledLink>
            <StyledLink as={Link} to="/">Galeria</StyledLink>
            <StyledLink as={Link} to="/kontakt">Wystawy</StyledLink>
            <StyledLink as={Link} to="/kontakt">Kontakt</StyledLink>
            {/*<MenuLanguage/>*/}
        </NavigationWrapper>
    </>
)
export default MenuNav
