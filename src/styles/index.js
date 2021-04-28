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
import { ReactComponent as CloseSvg } from '../assets/img/close-x.svg';
import { ReactComponent as FreeCancellationSvg } from '../assets/img/freeCancellation.svg';
import { ReactComponent as LanguageActivitySvg } from '../assets/img/language-activity.svg';
import { ReactComponent as CalendarSvg } from '../assets/img/calendar.svg';
import { ReactComponent as MobileVoucherSvg } from '../assets/img/mobile_voucher.svg';
import { ReactComponent as DurationActivitySvg } from '../assets/img/duration-activity.svg';
import { ReactComponent as SafetyActivitySvg } from '../assets/img/safety.svg';
import { ReactComponent as IstantActivitySvg } from '../assets/img/istant.svg';
import { ReactComponent as SkipActivitySvg } from '../assets/img/skip.svg';
import { ReactComponent as AllMediaSvg } from '../assets/img/all_pictures.svg';
import { ReactComponent as LoaderSpinnerSvg } from '../assets/img/loader.svg';
import colosseoImg from '../assets/img/cover_hero_home_desktop_colosseo.png';
import { keyframes } from 'styled-components';

Link.defaultProps = { to: '/' };

// THEME

export const color = {
  primary: '#fff',
  primaryb: '#333333',
  secondary: '#fc6c4f',
  alternative: '#9E9E9E',
  alternativeb: '#bac5c3',
  alternativec: '#edf1f2',
  success: '#69bc6b;',
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
export const cardSize = { sm: 290, md: 310, lg: 335 };
const size = { sm: '760px', md: '1024px', lg: '1350px' };
export const device = {
  tablet: `(min-width: ${size.sm})`,
  laptop: `(min-width: ${size.md})`,
  desktop: `(min-width: ${size.lg})`,
};

// section UTILITIES

export const Div = styled.div``;

export const P = styled.p`
  ${({ bold }) => bold && `font-weight: 700; margin:0 5px;`}
`;

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const H4 = styled.h4``;

export const Span = styled.span``;

export const Svg = styled.svg``;

export const Main = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  @media ${device.desktop} {
    margin: 0 40px;
  }
`;

export const CarouselSection = styled.section`
  background-color: ${color.alternativec};
  @media ${device.desktop} {
    padding: 0 40px;
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
  color: ${color.primaryb};
  &:link,
  :visited,
  :hover,
  :active {
    text-decoration: none;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  margin: 10px auto;
  border-top: 2px solid ${color.alternativeb};
  border-right: 2px solid ${color.alternativeb};
  border-bottom: 2px solid ${color.alternativeb};
  border-left: 4px solid ${color.secondary};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const pulse = keyframes`
    0% {
      background-color: ${color.alternativec};
    }
    50% {
      background-color: ${color.alternativeb};
    }
    100% {
      background-color: ${color.alternativec};
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
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
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
  position: fixed;
  top: 0;
  width: 100vw !important;
  height: 70px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.35s;
  background-color: ${bgColor.primary};
  & > p {
    min-width: 290px;
    max-width: 330px;
    margin: 0 10px;
    align-self: center;
  }
  & > svg {
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }

  @media ${device.desktop} {
    height: ${({ scrolling }) => (scrolling ? '70px' : '110px')};
    justify-content: space-between;
    box-shadow: ${({ scrolling }) =>
      scrolling && `${stylesVar.boxShadowLight}`};
    border-bottom: ${({ scrollInitial }) =>
      scrollInitial || `solid ${bgColor.primaryb} 1px`};
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

export const ModalOverlay = styled(Div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

// section SEARCHBAR

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: ${({ mobile }) => mobile && '1rem'};
  font-size: 1rem;
  margin: auto;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &::placeholder {
    font-style: italic;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchBarContainer = styled(FlexRowWrap)`
  position: relative;
  min-width: ${({ mobile, onHero }) =>
    mobile ? '91%' : onHero ? '700px' : '290px'};
  max-width: ${({ onHero, mobile }) => (mobile || onHero ? '91%' : '800px')};
  height: ${({ onHero, mobile }) =>
    onHero ? '72px' : mobile ? '50px' : '35px'};
  border: 1px solid ${color.alternativec};
  margin: ${({ mobile, onHero }) =>
    mobile ? '20px ' : onHero ? '20px 0 0' : '0 10px'};
  border-radius: 6px;
  background: ${({ mobile, changeBackground, onHero }) =>
    mobile
      ? color.secondary
      : changeBackground
      ? bgColor.primary
      : onHero
      ? bgColor.primary
      : color.alternativec};
  box-shadow: ${({ onHero }) => onHero && '0 2px 8px 0 rgb(0 0 0 / 10%)'};
  & > svg {
    fill: ${({ mobile }) => mobile && color.primary};
    min-width: ${({ onHero, mobile }) => (onHero || mobile ? '20px' : '17px')};
    height: ${({ onHero, mobile }) => (onHero || mobile ? '20px' : '17px')};
    /* margin: auto 2px; */
    margin: ${({ onHero, mobile }) =>
      onHero || mobile ? 'auto 13px' : 'auto 8px'};
  }
  ${SearchInput} {
    background: ${({ onHero, mobile, changeBackground }) =>
      onHero || mobile
        ? bgColor.primary
        : changeBackground
        ? bgColor.primary
        : color.alternativec};
  }
`;
export const ModalOverlayMobile = styled(Div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  z-index: 0;
  background: ${bgColor.primaryb};

  ${FlexRowWrap} {
    margin: 20px;
    justify-content: space-between;
  }
  ${Div} {
    font-size: 14px;
  }
  & svg {
    width: 16px;
    height: 16px;
  }
  ${SearchBarContainer} {
    padding: 8px;
    background-color: ${bgColor.primary};
    border: 1px solid ${color.alternativec};
    ${SearchInput} {
      background-color: ${bgColor.primary};
    }
    & svg {
      display: none;
    }
  }
`;

export const ModalSearchBody = styled(Div)`
  @keyframes opacityAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  position: absolute;
  width: 100%;
  max-height: 300px;
  font-size: 15px;
  top: 100%;
  z-index: 90;
  letter-spacing: -1px;
  position: absolute;
  user-select: none;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
  color: ${color.primaryb};
  background-color: ${bgColor.primary};
  border-radius: 5px;
  overflow-y: scroll;
  animation: opacityAnimation 0.2s ease-in;
  ${FlexRowWrap} {
    justify-content: space-between;
    ${H2} {
      margin: 15px 5px 15px 25px;
      font-size: 1rem;
      font-weight: normal;
    }
    ${H4} {
      margin: 15px;
      font-size: 0.9rem;
      font-weight: normal;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  ${FlexColumnWrap} {
    height: 100%;
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;
  }
  ${H3} {
    color: ${color.secondary};
    margin: 24px 10px;
    font-size: 1rem;
  }
  ${P} {
    padding: 10px 20px;
    cursor: pointer;
    border-bottom: 1px solid ${color.alternativec};
    font-weight: normal;
  }
  ${Span} {
    color: ${color.alternative};
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
  ${({ pathincludes }) =>
    pathincludes ? `box-shadow: inset 0 -6px 0 ${color.secondary};` : ''};
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
  margin: 0 0.7rem;
  width: 140px;
  height: 42px;
  border-left: solid ${color.alternativeb} 1px;
  background-color: ${color.alternativec};
  animation: ${pulse} 1s infinite;
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
    min-height: 400px;
  }
  @media ${device.desktop} {
    min-height: 600px;
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

export const AllPicturesIcon = styled(AllMediaSvg)`
  width: 13px;
  height: 13px;
  margin-right: 10px;
`;
export const FreeCancellationIcon = styled(FreeCancellationSvg)`
  width: 25px;
  height: 25px;
`;
export const LanguageActivityIcon = styled(LanguageActivitySvg)`
  width: 25px;
  height: 25px;
`;

export const CalendarIcon = styled(CalendarSvg)`
  width: 25px;
  height: 25px;
`;
export const MobileVoucherIcon = styled(MobileVoucherSvg)`
  height: 25px;
  width: 25px;
`;
export const DurationActivityIcon = styled(DurationActivitySvg)`
  height: 25px;
  width: 25px;
`;
export const SafetyActivityIcon = styled(SafetyActivitySvg)`
  height: 25px;
  width: 25px;
`;
export const IstantActivityIcon = styled(IstantActivitySvg)`
  height: 33px;
  width: 33px;
`;
export const SkipActivityIcon = styled(SkipActivitySvg)`
  height: 33px;
  width: 33px;
`;
export const LoaderSpinner = styled(LoaderSpinnerSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 36px;
  height: 36px;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
// section CAROUSEL

export const CarouselWrapperArrow = styled.div`
  height: 100%;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const CarouselTitleContainer = styled.div`
  color: black;
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

// export const Arrow = styled(ArrowSvg)`
//   width: 24px;
//   height: 24px;
//   color: black;
//   cursor: pointer;
// `;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media ${device.tablet} {
    padding: 0 80px 0 0;
    justify-content: center;
  }
`;

export const MediaArrow = styled(ArrowSvg)`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  fill: white;
  z-index: 205;
  cursor: pointer;
`;

export const MediaArrowRight = styled(MediaArrow)`
  right: 40px;

  :hover {
    transform: translateX(3px);
  }
  ${({ current, mediaLength }) =>
    current === mediaLength - 1 ? `display: none` : `display: block`}
`;

export const MediaArrowLeft = styled(MediaArrow)`
  transform: rotate(-180deg);
  left: 40px;
  :hover {
    transform: rotate(-180deg) translateX(3px);
  }
  ${({ current }) => !current && `display: none`}
`;

// section CARD

export const DummyCardWrapper = styled.div`
  background-color: ${bgColor.primary};
  height: 365px;
  width: 290px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 3px 10px -8px;
`;

export const DummyCardImg = styled.div`
  height: 135px;
  width: 100%;
  background-color: ${color.alternativeb};
  margin-bottom: 10px;
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const DummyCardContent = styled.div`
  height: 40px;
  width: 80%;
  margin: 10px;
  background-color: ${color.alternativeb};
  animation: ${pulse} 2s ease-in-out infinite;
`;

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

export const CarouselCardWrapper = styled.div`
  padding: 10px 0;
  margin-right: -40px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;

  @media ${device.tablet} {
    overflow-x: hidden;
    min-width: 100%;
    ${CardWrapper} {
      ${({ current }) =>
        current
          ? `transform: translatex(-${current}px); 
  transition-duration: 300ms;`
          : ''}
    }
  }

  @media ${device.laptop} {
    overflow-x: hidden;
    min-width: 100%;
    /* max-width: ${cardSize.md * 2}px; */
    ${CardWrapper} {
      ${({ current }) =>
        current
          ? `transform: translatex(-${current}px); 
  transition-duration: 300ms;`
          : ''}
    }
  }

  @media ${device.desktop} {
    min-width: 100%;
    /* max-width: ${cardSize.lg * 3}px; */
    ${CardWrapper} {
      ${({ current }) =>
        current
          ? `transform: translatex(-${current}px); 
  transition-duration: 300ms;`
          : ''}
    }
  }
`;

export const ArrowRight = styled(Arrow)`
  margin-left: auto;
  display: none;
  @media ${device.tablet} {
    display: block;
    ${({ current, cardsnumber, maxwidth }) =>
      (cardsnumber < 4 && `display: none`) ||
      (current >= maxwidth && `display: none`)}
  }
  :hover {
    transform: translateX(3px);
  }
`;

export const ArrowLeft = styled(Arrow)`
  margin-right: auto;
  transform: rotate(-180deg);
  display: none;
  @media ${device.tablet} {
    display: block;

    ${({ current, cardsnumber }) =>
      (cardsnumber < 4 && `display: none`) || (current <= 0 && `display: none`)}
  }

  :hover {
    transform: rotate(-180deg) translateX(3px);
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

export const IconDiv = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  display: inline-block;
  ${({ md }) => md && 'width: 25px; height: 25px;'}
  ${({ lg }) => lg && 'width: 33px; height: 33px;'}
  ${({ xl }) => xl && 'width: 46px; height: 46px;'}
`;

export const CardCancellation = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 0.75rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${color.success};
  fill: ${color.success};

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

// Section ACTIVITY PAGE

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;

  @media ${device.desktop} {
    padding: 0 20px;
  }
`;

export const Jumbotron = styled.div`
  position: relative;
  width: 100%;
`;

export const BackdropImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const OpenMediaButton = styled.button`
  position: absolute;
  bottom: 35px;
  left: 60px;
  width: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${color.primary};
  height: 50px;
  border: 1px solid ${color.alternativeb};
  border-radius: 5px;
  color: #232323;
  text-indent: 0;
  font-size: 0.9375rem;
  & .cls-1 {
    fill: #333;
    stroke-width: 0.2;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  position: relative;
`;

export const ContentSectionContainer = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  @media ${device.laptop} {
    padding: 10px 60px;
  }
`;

export const ContentSectionHeader = styled.div`
  width: 100%;
`;
export const ContentSectionBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
  @media ${device.laptop} {
    margin-top: 20px;
    padding-right: 40px;
  }
  @media ${device.desktop} {
    padding: 60px;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 2rem;
`;

export const ContentUrl = styled.span``;

export const ContentFeaturesSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 25px;
  @media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const FeaturesDiv = styled.div`
  border: none;
  min-width: 90%;
  max-width: 90%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid ${color.alternativeb};
  padding: 10px 0;
  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }
  @media ${device.laptop} {
    min-width: 50%;
    max-width: 100%;
    :first-child {
      border-top: 1px solid ${color.alternativeb};
    }
    &:nth-child(2) {
      border-top: 1px solid ${color.alternativeb};
    }
    &:nth-last-child(-n + 3) {
      border-bottom: none;
    }
  }
  ${({ freeCancellation }) =>
    freeCancellation &&
    `color: ${color.success}; fill: ${color.success}; font-weight:700;`}
`;

export const GrayFeaturesDiv = styled.div`
  min-width: 80%;
  height: 60px;
  display: inline-flex;
  align-items: center;
  border: none;
  background-color: ${bgColor.primaryb};
  justify-content: flex-start;
  @media ${device.laptop} {
    min-width: 100%;
    max-width: 100%;
  }
  > span {
    margin-right: 25px;
  }
`;
export const ContentHighlights = styled.h3`
  font-size: 1.75rem;
`;

export const ContentHighlightsList = styled.ul`
  list-style: none;
  position: relative;
  display: block;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  font-size: 1.125rem;
  line-height: 1.5625rem;
`;

export const ContentHighlightsElements = styled.li`
  line-height: 1.6875rem;
  margin-top: 20px;
  position: relative;

  &:before {
    content: '\u2219';
    color: ${color.secondary};
    position: absolute;
    left: -30px;
    font-size: 3rem;
  }
`;

export const ContentDescription = styled.h3`
  font-size: 1.75rem;
`;

export const ContentAbout = styled.p`
  line-height: 1.6875rem;
  font-size: 1.125rem;
`;

// Section MEDIASLIDESHOW

export const JumbotronGalleryMobile = styled.div`
  height: 200px;
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
export const JumbotronMobileSlides = styled.img`
  width: 100vw;
  object-fit: cover;
  scroll-snap-align: start;
`;

export const IndexSlider = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  position: absolute;
  text-align: center;
  -webkit-transition: opacity 0.3s;
  -o-transition: 0.3s opacity;
  transition: opacity 0.3s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  z-index: 1;
`;
export const IndexSliderCounter = styled.span`
  margin: 0 4px;
  width: 8px;
  height: 8px;
  background-color: #dce4e6;
  border-radius: 50%;
  margin-right: 5px;
  display: inline-block;
  opacity: 1;
  cursor: pointer;
  transition: background-color 0.1s cubic-bezier(0.55, 0.06, 0.68, 0.19);
  ${({ active }) => active && `background-color: ${color.secondary};`};
`;
export const JumbotronGallery = styled.div`
  position: fixed;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;
  z-index: 205;
`;

export const SectionGallery = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 205;
`;

export const GalleryCarousel = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
`;

export const SlideContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  transition: transform 0.7s ease-in-out;

  ${({ isMoving }) =>
    isMoving ? `transform: translateX(-${isMoving}vw);` : ''}
`;

export const SlideImageContainer = styled.div`
  height: 70%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

export const SlideImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export const SlideText = styled.span`
  font-size: 18px;
  color: #fff;
  margin-top: 10px;
  align-self: flex-end;
`;
export const GalleryCloseBtn = styled.button`
  font-size: 2rem;
  position: absolute;
  border: none;
  background: none;
  right: 20px;
  width: 20px;
  top: 20px;
  z-index: 205;
  cursor: pointer;
  color: white;
`;

export const CloseXSvg = styled(CloseSvg)`
  fill: white;
  height: 20px;
  width: 20px;
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

export const FooterDropdownWrapper = styled.div`
  margin-right: 150px;
`;

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

// Section LOADER

export const LoaderBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(
    90deg,
    ${color.secondary},
    ${color.secondary} 50%,
    #fff 0,
    #fff
  );
  background-size: 200% 100%;
  z-index: 100000;
  -webkit-animation-name: loading-data-v-21fdaed0;
  animation-name: loading-data-v-21fdaed0;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;

  @keyframes loading-data-v-21fdaed0 {
    0% {
      background-position: 100%;
    }

    100% {
      background-position: -100%;
    }
  }
`;
