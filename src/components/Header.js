import React from 'react';
import { HeaderWrapper, HeaderLogo, GoDown } from '../styles/styles';
import logo from '../Assets/img/favicon_m2 (7).png';

function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo src={logo} />
      </HeaderWrapper>
      <GoDown />
    </>
  );
}

export default Header;
