import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as CancellationSvg } from '../assets/img/free_cancellation_banner.svg';
import { ReactComponent as SafetySvg } from '../assets/img/safety-measures.svg';
import { ReactComponent as LogoTablet } from '../assets/img/logo-musement-tablet.svg';
import { ReactComponent as LogoMobile } from '../assets/img/logo-musement-mobile.svg';
import { ReactComponent as Hamburger } from '../assets/img/hamburger-icon.svg';
import { ReactComponent as NightLifeSvg } from '../assets/img/nightlife.svg';
import { ReactComponent as ToursAttractionsSvg } from '../assets/img/tours-attractions.svg';
import { ReactComponent as MuseumsArtSvg } from '../assets/img/Museums-art.svg';
import { ReactComponent as PerformancesSvg } from '../assets/img/performances.svg';
import { ReactComponent as FoodWineSvg } from '../assets/img/food-wine.svg';
import { ReactComponent as SportSvg } from '../assets/img/sport.svg';
import { ReactComponent as ActiveAdventureSvg } from '../assets/img/active-adventure.svg';
import { ReactComponent as ArrowSvg } from '../assets/img/arrow.svg';
import colosseoImg from '../assets/img/cover_hero_home_desktop_colosseo.png';

// mediaQuery
const size = { sm: '760px', md: '1024px', lg: '1350px' };
export const device = {
  tablet: `(min-width: ${size.sm})`,
  laptop: `(min-width: ${size.md})`,
  desktop: `(min-width: ${size.lg})`,
};

// section VARIABLES

export const stylesVar = {
  colorWhite: '#fff',
  colorOrange: '#fc6c4f',
  colorGray: '#9E9E9E',
  colorLightGray: '#bac5c3',
  colorSuperLightGray: '#edf1f2',
  colorBlack: '#333333',
  boxShadowLight: '0 2px 6px 0 rgb(0 0 0 / 10%)',
};

// section UTILITIES

export const Div = styled.div``;

export const P = styled.p``;

export const H2 = styled.h2`
  font-size: 1.75rem;
  margin-left: 7.5px;
`;

export const H3 = styled.h3``;

export const Span = styled.span``;

export const Svg = styled.svg``;

export const Main = styled.main`
  @media ${device.desktop} {
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
  console.log(query);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  @media ${device.desktop} {
    height: ${({ scrolling }) => (scrolling ? '70px' : '110px')};
    justify-content: center;
    box-shadow: ${({ scrolling }) =>
      scrolling && `${stylesVar.boxShadowLight}`};
    border-bottom: ${({ scrollInitial }) =>
      scrollInitial || `solid ${stylesVar.colorSuperLightGray} 1px`};
  }
`;

export const HeaderGoDown = styled(Div)`
  width: 100%;
  height: 70px;
  @media ${device.desktop} {
    height: ${({ scrolling }) => (scrolling ? '70px' : '110px')};
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

// why this overlay don't work?

// export const ModalHeaderOverlay = styled(Div)`
//   position: fixed;

//   height: 100vh;
//   width: 100vw;
//   z-index: 40;
// `;

export const ModalHeaderBody = styled(Div)`
  top: 0;
  width: 100%;
  margin-top: 70px;
  position: fixed;
  user-select: none;
  z-index: 90;
  letter-spacing: -1px;
  color: ${stylesVar.colorBlack};
  background-color: #f2f5f6;
  box-shadow: 0 10px 20px 0 rgb(51 51 51 / 50%);
  ${FlexRowWrap} {
    justify-content: space-between;
  }
  ${FlexColumnWrap} {
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
  @media ${device.desktop} {
    margin-top: ${({ scrolling }) => (scrolling ? '70px' : '110px')};
  }
`;

// section CATEGORIES NAV

export const CategoryWrap = styled(FlexRowWrap)`
  display: none;

  @media ${device.desktop} {
    min-height: 76px;
    margin: 0 40px;
    display: flex;
    flex-grow: 1;
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
  @media ${device.tablet} {
    min-height: 360px;
  }
  @media ${device.desktop} {
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

  @media ${device.tablet} {
    top: 30%;
    width: fit-content;
    font-size: 1.5rem;
    margin: 0 3rem;
    text-align: left;
    background: ${stylesVar.colorWhite};

    background-color: transparent;
  }
  @media ${device.desktop} {
    font-size: 2.2rem;
  }
`;

export const HeroSpan = styled.span((p) =>
  p.foo
    ? {
        '@media (max-width: 759px)': {
          color: `${stylesVar.colorOrange}`,
        },
        '@media (min-width: 760px)': {
          color: `${stylesVar.colorWhite}`,
          background: `${stylesVar.colorOrange}`,
        },
      }
    : p.bar
    ? {
        '@media (min-width: 760px)': {
          color: `${stylesVar.colorBlack}`,
          background: `${stylesVar.colorWhite}`,
        },
      }
    : {
        '@media (min-width: 760px)': {
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

  @media ${device.tablet} {
    min-width: 440px;
    padding: 1rem;
    flex-direction: row;
  }
  @media ${device.desktop} {
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

  @media ${device.tablet} {
    width: 80px;
    height: 100%;
  }
`;

export const SafetySvgIcon = styled(SafetySvg)`
  width: 56px;
  height: 63px;
  margin: 0.1rem 0.7rem;

  flex-shrink: 0;
  @media ${device.tablet} {
    width: 80px;
    height: 100%;
  }
`;

// section CAROUSEL

export const CarouselContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(80, 80, 80, 0.2);
`;

export const CarouselTitleContainer = styled.div`
  color: black;
  display: flex;
  min-width: 1400px;
  min-height: 62px;
`;

export const CarouselCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1400px;
  scroll-snap-type: x mandatory;
  overflow-x: hidden;
  overflow: hidden;
  overflow-y: hidden;
  position: relative;
`;

export const Card = styled.div`
  box-sizing: content-box;
  min-width: 335px;
  min-height: 430px;
  background-color: white;
  border-radius: 6px;
  margin: 10px 7.5px;
  transition: all ease-in-out 0.25s;

  ${({ current }) => current && `transform: translateX(${current * -350}px);`}
`;

export const Arrow = styled(ArrowSvg)`
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: calc(50% - 62px);
  cursor: pointer;
`;

export const ArrowRight = styled(Arrow)`
  right: calc(50% - 750px);

  :hover {
    transform: translateX(3px);
  }

  ${({ current, cardlength }) =>
    current === cardlength - 4 ? `display: none` : `display: block`}
`;

export const ArrowLeft = styled(Arrow)`
  transform: rotate(-180deg);
  left: calc(50% - 750px);

  :hover {
    transform: rotate(-180deg) translateX(3px);
  }

  ${({ current }) => !current && `display: none`}
`;

// section CARD

export const CardWrapper = styled.div`
  max-width: 290px;
  min-height: 365px;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0 3px 10px -8px;
  cursor: grab;

  &:hover {
    transform: translate(0px, -5px) scale(1.025);
    transition-duration: 450ms;
    box-shadow: 0 3px 10px -4px;
  }

  @media ${device.tablet} {
    max-width: 310px;
    min-height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media ${device.laptop} {
    max-width: 310px;
    min-height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media ${device.desktop} {
    max-width: 335px;
    min-height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 155px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;

export const CardSectionHeader = styled.section`
  height: fit-content;
  margin: 0 10px;
  margin-top: 5px;
  display: flex;
  text-align: left;
  flex-direction: column;
`;

export const CardSectionBody = styled.section`
  margin: 0 10px;
  margin-top: 3px;
  display: flex;
  text-align: left;
  flex-direction: column;

  @media ${device.laptop} {
    margin-top: 0px;
  }
`;

export const CardSectionFooter = styled.section`
  margin: 0 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #bcd8eb;

  @media ${device.laptop} {
    margin-top: 2px;
  }
`;

export const CardCategoryLabel = styled.span`
  width: fit-content;
  padding: 0px 7px;
  padding-top: 3px;
  text-transform: uppercase;
  font-size: 0.75rem;
  display: flex;
  border-radius: 1px;
  align-items: center;
  color: white;
  background-color: #ffc34e;
`;

export const CardTitle = styled.h3`
  margin: 0;
  margin-top: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

export const CardDescription = styled.p`
  margin: 0px;
  margin-top: 5px;
  font-size: 0.75rem;
  text-align: start;
  display: none;
  color: #aaaaaa;

  @media ${device.laptop} {
    margin-top: 2px;
    display: -webkit-box;
    line-height: 1.3;
    -webkit-line-clamp: 2;
    min-height: 30px;
    max-height: 28px;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const IconBodyCard = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  display: inline-block;
`;

export const CardCancellation = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #72ca74;
  fill: #72ca74;

  ${({ cancellation }) => (cancellation ? '' : `display: none;`)}
`;

export const CardPriceWrapper = styled.div`
  font-size: 0.75rem;
  text-align: right;
`;

export const CardDivRowDescription = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #aaaaaa;
`;

export const CardDivRowFooter = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardLanguage = styled.p`
  width: fit-content;
  height: fit-content;
  margin: 0 3px;
  text-transform: capitalize;
  font-size: 0.75rem;
  font-weight: 600;
  color: black;
`;

export const CardDurationValue = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardSpanPrice = styled(Span)`
  width: fit-content;
  font-size: 0.75rem;
  margin-left: auto;
  display: block;
`;

export const CardSpanRating = styled(Span)`
  width: fit-content;
  margin-left: 4px;
  display: inline-block;
  color: black;
`;

export const CardStarWrapper = styled.div`
  width: fit-content;
  height: 40px;
  margin-right: 4px;
  padding: 0;
  display: flex;
  align-items: center;
  margin-left: auto;
  color: #ffb743;
`;

export const PriceFirstNum = styled.span`
  font-size: 1rem;
  color: #fa6c50;
`;

export const PriceSecondNum = styled(PriceFirstNum)`
  font-size: 0.75rem;
  color: #fa6c50;
`;
