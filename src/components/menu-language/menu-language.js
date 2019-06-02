import React from "react"
import styled from "styled-components"
import polishFlag from "../../images/language/poland.svg"
import englishFlag from "../../images/language/united-kingdom.svg"
const MenuLanguageStyle = styled.div`
   display: flex;
   justify-content: center;
`;

const LanguageIconStyle = styled.svg`
  background: url(${({icon}) => icon});
  height: 20px;
  width: 20px;
`;

const MenuLanguage = () => (
    <>
        <MenuLanguageStyle>
            <LanguageIconStyle icon={polishFlag}/>
            <LanguageIconStyle icon={englishFlag}/>
        </MenuLanguageStyle>
    </>
);
export default MenuLanguage
