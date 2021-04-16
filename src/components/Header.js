// import React from 'react';
import React, { useState, useEffect } from 'react';

import {
  HeaderWrapper,
  HeaderLogoWrapper,
  HeaderLogoTablet,
  HeaderLogoMobile,
  GoDown,
  LinkPage,
} from '../styles';

// import { ReactComponent as logoTablet } from '../Assets/img/logo-musement-tablet.svg';
// import { ReactComponent as logoMobile } from '../Assets/img/logo-musement-mobile.svg';

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

  function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);
    console.log(matches);

    return matches;
  }
  let isTablet = useMediaQuery('(min-width: 760px)');

  return (
    <>
      <HeaderWrapper scrolling={scrolling}>
        <LinkPage to='/'>
          <HeaderLogoWrapper scrolling={scrolling}>
            {isTablet ? <HeaderLogoTablet /> : <HeaderLogoMobile />}
            {/* <HeaderLogoTitle>musement</HeaderLogoTitle> */}
          </HeaderLogoWrapper>
        </LinkPage>
      </HeaderWrapper>
      <GoDown />
    </>
  );
}

export default Header;
