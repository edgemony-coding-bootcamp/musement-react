// import React from 'react';
import React, { useState, useEffect } from 'react';

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
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > 133);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <>
      <HeaderWrapper scrolling={scrolling}>
        <LinkPage to='/'>
          <HeaderLogoWrapper scrolling={scrolling}>
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
