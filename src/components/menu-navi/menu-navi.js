import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
`;
const StyledLink = styled.span`
  position: relative;
  text-decoration: none;
  margin-right: 2rem;
  font-size: 1.4em;
  font-weight: ${({ theme }) => theme.font.extraThin};
  color: ${({ theme }) => theme.colors.black};
  ::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.brown};
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  :hover::before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`

const MenuNav = () => (
  <>
    <NavigationWrapper>
      <StyledLink as={Link} to="/news">
        Aktualnosci
      </StyledLink>
      <StyledLink as={Link} to="/dogs">
        Psy
      </StyledLink>
      <StyledLink as={Link} to="/pupies">
        Szczeniaki
      </StyledLink>
      <StyledLink as={Link} to="/gallery">
        Galeria
      </StyledLink>
      <StyledLink as={Link} to="/dog-show">
        Wystawy
      </StyledLink>
      <StyledLink as={Link} to="/contact">
        Kontakt
      </StyledLink>
    </NavigationWrapper>
  </>
)
export default MenuNav
