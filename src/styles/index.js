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

// THEME

export const color = {
  primary: '#fff',
  primaryb: '#333333',
  secondary: '#fc6c4f',
  alternative: '#9E9E9E',
  alternativeb: '#bac5c3',
  alternativec: '#edf1f2',
  success: '#bac5c3',
  error: '#edf1f2',
};

export const bgColor = {
  primary: '#fff',
  primaryb: '#f2f5f6',
  secondary: '#9E9E9E',
  alternative: '#9E9E9E',
  success: '#00B74A',
  error: '#F93154',
  info: '#39C0ED',
};

export const svgColor = {
  primary: '#9E9E9E',
  secondary: '#fc6c4f',
  alternative: '#fff',
};

export const stylesVar = {
  colorWhite: '#fff',
  colorOrange: '#fc6c4f',
  colorGray: '#9E9E9E',
  colorLightGray: '#bac5c3',
  colorSuperLightGray: '#edf1f2',
  colorBlack: '#333333',
  // TODO
  boxShadowLight: '0 2px 6px 0 rgb(0 0 0 / 10%)',
  // TODO
};

// mediaQuery
const size = { sm: '760px', md: '1024px', lg: '1350px' };
export const device = {
  tablet: `(min-width: ${size.sm})`,
  laptop: `(min-width: ${size.md})`,
  desktop: `(min-width: ${size.lg})`,
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

export const CarouselSection = styled.section`
  background-color: #f2f5f6;
  padding: 0 40px;
`;

export const FlexRowWrap = styled(Div)`
  display: flex;
`;

export const FlexColumnWrap = styled(Div)`
  flex-direction: column;
`;

export const LinkPages = styled(Link)`
  text-decoration: none;
  color: ${color.primaryb};
  &:active {
    color: ${color.secondary};
  }
  &:hover {
    text-decoration: underline;
  }
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
  background-color: ${bgColor.primary};
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.35s;
  @media ${device.desktop} {
    height: ${({ scrolling }) => (scrolling ? '70px' : '110px')};
    justify-content: center;
    box-shadow: ${({ scrolling }) =>
      scrolling && `${stylesVar.boxShadowLight}`};
    border-bottom: ${({ scrollInitial }) =>
      scrollInitial || `solid ${color.alternativeb} 1px`};
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
  color: ${color.alternative};
`;

export const HeaderLogoDesktop = styled(LogoTablet)`
  width: 200px;
  height: 38px;
`;

export const HeaderLogoMobile = styled(LogoMobile)`
  width: 80px;
  height: 80px;

  & g {
    fill: ${color.alternative};
  }
  & g #Group-3 {
    fill: ${color.secondary};
  }
`;

// section MODAL HEADER

export const ModalHeaderOverlay = styled(Div)`
  position: fixed;

  height: 100vh;
  width: 100vw;
  z-index: 0;
`;

export const ModalHeaderBody = styled(Div)`
  color: ${color.primaryb};
  background-color: ${bgColor.primaryb};
  top: 0;
  width: 100%;
  margin-top: 70px;
  position: fixed;
  user-select: none;
  z-index: 90;
  letter-spacing: -1px;
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
    border-bottom: 1px solid ${color.alternativec};
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

export const CategoryLinkWrap = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${color.primaryb};
  text-decoration: none;
  ${({ pathIncludes }) =>
    pathIncludes ? `box-shadow: inset 0 -6px 0 ${color.secondary};` : ''};
  &:first-child > div {
    border-left: none;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 -6px 0 ${color.secondary};
  }
`;

export const CategoryLinkContainer = styled(FlexRowWrap)`
  width: 100%;
  flex-shrink: 0;
  justify-content: space-evenly;
  border-left: solid ${color.alternativec} 1px;
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
  border-left: solid ${color.alternativeb} 1px;
  background-color: ${color.alternativeb};
`;

export const CategoryLinkError = styled(CategoryLink)``;

export const CategoriesSvgIcon = styled.svg`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  fill: ${color.primary};
  stroke: ${color.alternative};
`;

// section HERO

export const HeroContainer = styled(Div)`
  background-image: url(${colosseoImg});
  position: relative;
  width: 100%;
  min-height: 274px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  background-color: ${color.primary};
  position: absolute;
  top: 0;
  width: 100%;
  padding: 0.5rem 0;
  text-align: center;
  font-size: 0.875rem;
  font-weight: bold;

  @media ${device.tablet} {
    background: ${color.primary};
    top: 30%;
    width: fit-content;
    font-size: 1.5rem;
    margin: 0 3rem;
    text-align: left;
    background-color: transparent;
    line-height: 1.2em;
  }
  @media ${device.desktop} {
    line-height: 1.2em;
    font-size: 2.2rem;
  }
`;

export const HeroSpan = styled.span((p) =>
  p.foo
    ? {
        '@media (max-width: 759px)': {
          color: `${color.secondary}`,
        },
        '@media (min-width: 760px)': {
          color: `${color.primary}`,
          background: `${color.secondary}`,
          paddingRight: '5px',
          boxShadow: ' 0 8px 20px 0 rgb(51 51 51 / 20%)',
        },
      }
    : p.bar
    ? {
        '@media (min-width: 760px)': {
          color: `${color.primaryb}`,
          background: `${color.primary}`,
          padding: '0 5px',
          marginTop: '10px',
          boxShadow: ' 0 8px 20px 0 rgb(51 51 51 / 20%)',
        },
      }
    : {
        '@media (min-width: 760px)': {
          color: `${color.primary}`,
          background: `${color.secondary}`,
          paddingLeft: '5px',
        },
      }
);

// section BANNER

export const BannerContainer = styled(FlexRowWrap)`
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
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

  background: ${bgColor.primary};
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

export const CarouselTitleContainer = styled.div`
  color: black;
  display: flex;
  min-height: 62px;
`;

export const CarouselCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-width: 350px;
  max-width: 100%;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding: 10px 0;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  @media ${device.tablet} {
    min-width: 760px;
    max-width: 100vw;
  }
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
  background-color: ${bgColor.primary};
  min-width: 290px;
  max-width: 290px;
  min-height: 365px;
  border-radius: 6px;
  box-sizing: content-box;
  box-shadow: 0 3px 10px -8px;
  margin: 0 10px;
  scroll-snap-align: start;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 25px -7px rgb(0 0 0 / 25%);
    cursor: pointer;
  }

  @media ${device.tablet} {
    max-width: 310px;
    min-height: 380px;
    display: flex;
    flex-direction: column;
  }

  @media ${device.laptop} {
    max-width: 310px;
    min-height: 380px;
    display: flex;
    flex-direction: column;
  }

  @media ${device.desktop} {
    max-width: 335px;
    min-height: 430px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 155px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  object-fit: fill;

  @media ${device.desktop} {
    object-fit: cover;
  }
`;

export const CardContentWrapper = styled.div`
  min-height: calc(365px - 155px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.tablet} {
    min-height: calc(380px - 155px);
  }

  @media ${device.desktop} {
    min-height: calc(430px - 155px);
  }
`;

export const CardSectionHeader = styled.section`
  height: fit-content;
  margin: 0 10px;
  margin-top: 5px;
  display: flex;
  text-align: left;
  flex-direction: column;
  min-height: 157px;
`;

export const CardSectionBody = styled.section`
  margin: 3px 10px 0 10px;
  display: flex;
  text-align: left;
  flex-direction: column;

  @media ${device.laptop} {
    margin-top: 0px;
  }
`;

export const CardSectionFooter = styled.section`
  margin: 10px 10px 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #bcd8eb;
`;

export const CardCategoryLabel = styled.span`
  width: fit-content;
  padding: 3px 7px;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  border-radius: 1px;
  align-items: center;
  color: ${color.primary};
  background-color: #ffb743;
`;

export const CardTitle = styled.h3`
  color: ${color.primaryb};
  font-size: 16px;
  line-height: 1.22;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardDescription = styled.p`
  position: relative;
  margin-top: -10px;
  display: none;
  font-family: 300;
  font-size: 12px;
  color: ${color.alternative};
  line-height: 20px;
  padding-top: 7px;
  max-height: 42px;
  overflow: hidden;
  -webkit-line-clamp: 2;

  @media ${device.laptop} {
    display: -webkit-box;
    padding-top: 5px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 30px;
    right: 0;
    height: 1em;
    width: 5em;
    background: #fff;
    background: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0),
      hsla(0, 0%, 100%, 0.75) 75%,
      #fff
    );
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
  font-weight: bold;
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
  font-weight: 400;
  color: black;
`;

export const CardDurationValue = styled.div`
  font-weight: 300;
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
  font-weight: 400;
  font-size: 14px;
  width: fit-content;
  margin-left: 4px;
  display: inline-block;
  color: ${color.alternative};
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

// section PAGE'S CATEGORY

export const CategoryImgWrapper = styled.div`
  height: fit-content;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 479px) {
    height: 420px;
    margin: auto;
    margin-bottom: 50px;
  }
`;

export const CategoryImgBackground = styled.div`
  width: 100%;
  height: 260px;
  position: absolute;
  z-index: 1;
  opacity: 0.7;
  @media (max-width: 479px) {
    height: 450px;
    opacity: 1;
  }
  @media ${device.tablet} {
    height: 300px;
  }
  @media ${device.laptop} {
    height: 400px;
  }
  @media ${device.desktop} {
    height: 500px;
  }
`;

export const CategoryImgHover = styled.div`
  width: 188px;
  height: 250px;
  padding: 25px;
  position: relative;
  z-index: 3;
  box-shadow: 0 0 25px -2px;
  background-color: white;
  @media (max-width: 479px) {
    display: none;
  }
  @media ${device.tablet} {
    width: 230px;
    height: 290px;
  }
  @media ${device.laptop} {
    width: 300px;
    height: 390px;
  }
  @media ${device.desktop} {
    width: 380px;
    height: 510px;
  }
`;

export const CategoryImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CategoryImgTop = styled(CategoryImg)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CategoryGoHome = styled(Link)`
  margin-left: 30px;
  color: black;
`;

export const CategoryName = styled.span`
  margin-left: 8px;
  text-transform: capitalize;
`;

// Section FOOTER

export const FooterWrapper = styled.footer`
  padding: 25px 0;
  font-size: 16px;
  width: 100%;
  overflow: hidden;
  background-color: ${color.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    justify-content: flex-end;
  }
`;

export const FooterDropdownWrapper = styled.div``;

export const FooterDropdown = styled.div`
  width: 200px;
`;

export const LabelDropdown = styled.label`
  display: block;
  margin-bottom: 5px;
  margin-top: 15px;
`;

export const DropdownSelect = styled.select`
  font-size: 18px;
  background-color: ${color.primary};
  color: ${color.primaryb};
  border: 1px solid ${color.alternativeb};
  font-style: italic;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const DropdownOption = styled.option`
  display: inline-flex;
  justify-content: space-between;
  margin: 2px;
`;
