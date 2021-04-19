import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as CancellationSvg } from '../Assets/img/free_cancellation_banner.svg';
import { ReactComponent as SafetySvg } from '../Assets/img/safety-measures.svg';
import { ReactComponent as LogoTablet } from '../Assets/img/logo-musement-tablet.svg';
import { ReactComponent as LogoMobile } from '../Assets/img/logo-musement-mobile.svg';
import { ReactComponent as Hamburger } from '../Assets/img/hamburger-icon.svg';
import { ReactComponent as NightLifeSvg } from '../Assets/img/nightlife.svg';
import { ReactComponent as ToursAttractionsSvg } from '../Assets/img/tours-attractions.svg';
import { ReactComponent as MuseumsArtSvg } from '../Assets/img/Museums-art.svg';
import { ReactComponent as PerformancesSvg } from '../Assets/img/performances.svg';
import { ReactComponent as FoodWineSvg } from '../Assets/img/food-wine.svg';
import { ReactComponent as SportSvg } from '../Assets/img/sport.svg';
import { ReactComponent as ActiveAdventureSvg } from '../Assets/img/active-adventure.svg';

import colosseoImg from '../Assets/img/cover_hero_home_desktop_colosseo.png';

// section VARIABLES

export const stylesVar = {
  colorWhite: '#fff',
  colorOrange: '#fc6c4f',
  colorGray: '#9E9E9E',
  colorLightGray: '#bac5c3',
  colorSuperLightGray: '#edf1f2',
  colorBlack: '#333333',
  boxShadowLight: '0 2px 6px 0 rgb(0 0 0 / 10%)',
  tabletMediaQuery: 'min-width: 760px',
  desktopMediaQuery: 'min-width: 1110px',
};

// section UTILITIES

export const Div = styled.div``;

export const P = styled.p``;

export const H3 = styled.h3``;

export const Span = styled.span``;

export const Svg = styled.svg``;

export const Main = styled.main`
  @media (${stylesVar.desktopMediaQuery}) {
    margin: 0 40px;
  }
`;

export const FlexRowWrap = styled(Div)`
  display: flex;
`;

export const FlexColumnWrap = styled(Div)`
  flex-direction: column;
`;

export const LinkPages = styled(Link)`
  text-decoration: none;
`;

// CUSTOM HOOKS

export function useMediaQuery(query) {
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

  return matches;
}

export function useScrolling(scrollPx) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollPx);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return scrolling;
}
// CATEGORIES ICONS

export const categoriesSvgIcons = {
  1: <MuseumsArtSvg />,
  2: <ToursAttractionsSvg />,
  3: <FoodWineSvg />,
  4: <PerformancesSvg />,
  5: <SportSvg />,
  6: <ActiveAdventureSvg />,
  7: <NightLifeSvg />,
};

// section HEADER

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.35s;
  background-color: ${stylesVar.colorWhite};
  @media (${stylesVar.desktopMediaQuery}) {
    height: ${(p) => (p.scrolling ? '70px' : '110px')};
    justify-content: center;
    box-shadow: ${(p) => p.scrolling && `${stylesVar.boxShadowLight}`};
    border-bottom: ${(p) =>
      p.scrollInitial || `solid ${stylesVar.colorSuperLightGray} 1px`};
  }
`;

export const HeaderGoDown = styled(Div)`
  width: 100%;
  height: 70px;
  @media (${stylesVar.desktopMediaQuery}) {
    height: ${(p) => (p.scrolling ? '70px' : '110px')};
  }
`;

export const HeaderHamburgerWrapper = styled(Div)`
  width: 3rem;
`;
export const HeaderHamburger = styled(Hamburger)`
  width: 30px;
  height: 30px;
  justify-items: flex-end;
  color: ${stylesVar.colorGray};
`;

export const HeaderLogoDesktop = styled(LogoTablet)`
  width: 200px;
  height: 38px;
`;

export const HeaderLogoMobile = styled(LogoMobile)`
  width: 80px;
  height: 80px;

  & g {
    fill: ${stylesVar.colorLightGray};
  }
  & g #Group-3 {
    fill: ${stylesVar.colorOrange};
  }
`;

// section MODAL HEADER

export const ModalHeaderOverlay = styled(Div)`
  position: fixed;

  height: 100vh;
  width: 100vw;
  z-index: 40;
`;

export const ModalHeaderBody = styled(Div)`
  top: 0;
  width: 100%;
  margin-top: 70px;
  position: fixed;

  z-index: 90;
  letter-spacing: -1px;
  color: ${stylesVar.colorBlack};
  background-color: #f2f5f6;
  box-shadow: 0 10px 20px 0 rgb(51 51 51 / 50%);
  ${FlexRowWrap} {
    justify-content: space-between;
  }
  ${FlexColumnWrap} {
    /* padding: 15px 20px 0; */
    height: 100%;
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;
  }
  ${H3} {
    margin: 24px 10px;
    font-size: 1rem;
  }
  ${P} {
    padding: 10px 20px;
    cursor: pointer;
    border-bottom: 1px solid #dce4e6;
  }
  @media (${stylesVar.desktopMediaQuery}) {
    margin-top: ${(p) => (p.scrolling ? '70px' : '110px')};
  }
`;

// section CATEGORIES NAV

export const CategoryWrap = styled(FlexRowWrap)`
  display: none;

  @media (${stylesVar.desktopMediaQuery}) {
    min-height: 76px;
    margin: 0 40px;
    display: flex;
    flex-grow: 1;
    /* when the carousel is ready add it here and remove the scroll */
    /* overflow-x: scroll; */
    justify-content: center;
  }
`;

export const CategoryLinkWrap = styled(Div)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  &:first-child > div {
    border-left: none;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 -6px 0 ${stylesVar.colorOrange};
  }
`;

export const CategoryLinkContainer = styled(FlexRowWrap)`
  width: 100%;
  flex-shrink: 0;
  justify-content: space-evenly;
  border-left: solid ${stylesVar.colorSuperLightGray} 1px;
`;
export const CategoryLink = styled.div`
  height: 36px;
  padding: 0.2rem;
  margin: 0 0.7rem;
  display: flex;
  align-items: center;
`;

export const CategoryLinkLoader = styled(Div)`
  padding: 0.5rem;
  margin: 0.5rem;
  flex-grow: 1;
  border-left: solid ${stylesVar.colorLightGray} 1px;
  background-color: ${stylesVar.colorLightGray};
`;

export const CategoryLinkError = styled(CategoryLink)``;

export const CategoriesSvgIcon = styled.svg`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  fill: ${stylesVar.colorWhite};
  stroke: ${stylesVar.colorGray};
`;

// section HERO

export const HeroContainer = styled(Div)`
  position: relative;
  width: 100%;
  min-height: 274px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${colosseoImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (${stylesVar.tabletMediaQuery}) {
    min-height: 360px;
  }
  @media (${stylesVar.desktopMediaQuery}) {
    min-height: 420px;
  }
`;

export const HeroTitle = styled(Div)`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 0.5rem 0;
  text-align: center;
  letter-spacing: -1px;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${stylesVar.colorWhite};

  @media (${stylesVar.tabletMediaQuery}) {
    top: 30%;
    width: fit-content;
    font-size: 1.5rem;
    margin: 0 3rem;
    text-align: left;
    background: ${stylesVar.colorWhite};

    background-color: transparent;
  }
  @media (${stylesVar.desktopMediaQuery}) {
    font-size: 2.2rem;
  }
`;

export const HeroSpan = styled.span((p) =>
  p.foo
    ? {
        '@media(max-width: 759px)': {
          color: `${stylesVar.colorOrange}`,
        },
        '@media(min-width: 760px)': {
          color: `${stylesVar.colorWhite}`,
          background: `${stylesVar.colorOrange}`,
        },
      }
    : p.bar
    ? {
        '@media(min-width: 760px)': {
          color: `${stylesVar.colorBlack}`,
          background: `${stylesVar.colorWhite}`,
        },
      }
    : {
        '@media(min-width: 760px)': {
          color: `${stylesVar.colorWhite}`,
          background: `${stylesVar.colorOrange}`,
        },
      }
);

// section BANNER

export const BannerContainer = styled(FlexRowWrap)`
  overflow-x: scroll;
`;

export const InfoBanner = styled(Div)`
  min-width: 260px;
  margin: 1rem;
  font-size: 12px;
  line-height: 22px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;

  background: ${stylesVar.colorWhite};
  border-radius: 0.3rem;
  box-shadow: ${stylesVar.boxShadowLight};
  & > ${FlexRowWrap} {
    align-items: center;
  }

  @media (${stylesVar.tabletMediaQuery}) {
    min-width: 440px;
    padding: 1rem;
    flex-direction: row;
  }
  @media (${stylesVar.desktopMediaQuery}) {
    width: 100%;
    border: none;
    box-shadow: none;
  }
`;

export const CancellationSvgIcon = styled(CancellationSvg)`
  width: 56px;
  height: 63px;
  margin: 0.1rem 0.7rem;
  flex-shrink: 0;

  @media (${stylesVar.tabletMediaQuery}) {
    width: 80px;
    height: 100%;
  }
`;

export const SafetySvgIcon = styled(SafetySvg)`
  width: 56px;
  height: 63px;
  margin: 0.1rem 0.7rem;

  flex-shrink: 0;
  @media (${stylesVar.tabletMediaQuery}) {
    width: 80px;
    height: 100%;
  }
`;
