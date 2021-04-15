import React from 'react';

import {
  HeaderWrapper,
  HeaderLogoWrapper,
  HeaderLogo,
  HeaderLogoTitle,
  GoDown,
  LinkPage,
} from '../styles';
import logo from '../Assets/img/favicon_m2 (7).png';

function Header() {
  return (
    <>
      <HeaderWrapper>
        <LinkPage to='/'>
          <HeaderLogoWrapper>
            <HeaderLogo src={logo} />
            <HeaderLogoTitle>musement</HeaderLogoTitle>
          </HeaderLogoWrapper>
        </LinkPage>
      </HeaderWrapper>
      <GoDown />
    </>
  );
}

export default Header;
