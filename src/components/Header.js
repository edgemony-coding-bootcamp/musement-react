import React from 'react';
import {
  HeaderWrapper,
  HeaderLogoWrapper,
  HeaderLogo,
  HeaderLogoTitle,
  GoDown,
} from '../styles/styles';
import logo from '../Assets/img/favicon_m2 (7).png';

function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogoWrapper>
          <HeaderLogo src={logo} />
          <HeaderLogoTitle>musement</HeaderLogoTitle>
        </HeaderLogoWrapper>
      </HeaderWrapper>
      <GoDown />
    </>
  );
}

export default Header;
