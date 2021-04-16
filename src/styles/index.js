import styled from 'styled-components';
import colosseoImg from '../Assets/img/cover_hero_home_desktop_colosseo.png';

import { ReactComponent as CancellationSvg } from '../Assets/img/free_cancellation_banner.svg';
import { ReactComponent as SafetySvg } from '../Assets/img/safety-measures.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as logoTablet } from '../Assets/img/logo-musement-tablet.svg';
import { ReactComponent as logoMobile } from '../Assets/img/logo-musement-mobile.svg';

// section VARIABLES

const stylesVar = {
  colorWhite: 'rgb(255, 255, 255)',
  colorOrange: '#fc6c4f',
  colorGray: '#9E9E9E',
  colorLightGray: '#DBDBDB',
  colorBlack: 'black',
  boxShadowLight: '0 2px 6px 0 rgb(0 0 0 / 10%)',
  tabletMediaQuery: 'min-width: 760px',
  desktopMediaQuery: 'min-width: 1000px',
};

// section UTILITIES

export const Main = styled.main`
  @media (${stylesVar.desktopMediaQuery}) {
    margin: 0 40px;
  }
`;
export const Span = styled.span``;

export const SpanOrange = styled.span`
  color: ${stylesVar.colorOrange};
`;

export const FlexRowWrap = styled.div`
  display: flex;
`;

export const LinkPage = styled(Link)`
  text-decoration: none;
`;

// HEADER LOGIC

// section HEADER

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${stylesVar.colorWhite};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media (${stylesVar.desktopMediaQuery}) {
    box-shadow: ${(p) =>
      p.scrolling ? `${stylesVar.boxShadowLight}` : 'none'};
  }
`;

export const HeaderLogoWrapper = styled.div`
  transition: all 0.35s;
  height: 65px;
  display: flex;
  flex-direction: column;
  color: ${stylesVar.colorLightGray};
  align-items: center;
  @media (${stylesVar.tabletMediaQuery}) {
    flex-direction: row;
  }
  @media (${stylesVar.desktopMediaQuery}) {
    height: ${(p) => (p.scrolling ? '65px' : '110px')};
    flex-direction: row;
  }
`;

export const HeaderLogoTablet = styled(logoTablet)`
  width: 200px;
`;

export const HeaderLogoMobile = styled(logoMobile)`
  width: 80px;
  & g {
    fill: ${stylesVar.colorGray};
  }
  & g #Group-3 {
    fill: ${stylesVar.colorOrange};
  }
`;

export const HeaderLogoTitle = styled.h5`
  margin: 0;

  color: ${stylesVar.colorGray};
  font-size: 1.2rem;
  font-weight: bold;

  @media (${stylesVar.tabletMediaQuery}) {
    justify-self: center;
    font-size: 2rem;
    padding-bottom: 2px;
    letter-spacing: -1px;
  }
`;

export const TitleNav = styled.h1`
  color: ${stylesVar.colorLightGray};
`;

export const GoDown = styled.div`
  width: 100%;
  height: 70px;
  height: 65px;
  @media (${stylesVar.desktopMediaQuery}) {
    height: ${(p) => (p.scrolling ? '65px' : '110px')};
    flex-direction: row;
  }
`;

// section CATEGORIES NAV

export const CategoryWrap = styled(FlexRowWrap)`
  display: none;

  @media (${stylesVar.desktopMediaQuery}) {
    display: flex;
    flex-grow: 1;
    /* when the carousel is ready add it here and remove the scroll */
    overflow-x: scroll;
    min-height: 76px;
    margin: 0 40px;
    justify-content: center;
  }
`;

export const CategoryLinkWrap = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  &:first-child > div {
    border-left: none;
  }
  &:hover {
    box-shadow: inset 0 -6px 0 ${stylesVar.colorOrange};
    cursor: pointer;
  }
`;

export const CategoryLinkContainer = styled(FlexRowWrap)`
  flex-shrink: 0;
  width: 100%;
  justify-content: space-evenly;
  border-left: solid ${stylesVar.colorLightGray} 1px;
`;
export const CategoryLink = styled.div`
  margin: 0 0.7rem;
  padding: 0.2rem;
  height: 36px;
  display: flex;
  align-items: center;
`;

export const CategoryLinkLoader = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  border-left: solid ${stylesVar.colorLightGray} 1px;
  flex-grow: 1;
  background-color: ${stylesVar.colorLightGray};
`;

export const CategoryLinkError = styled(CategoryLink)``;

export const SvgIcon = styled.svg`
  height: 35px;
  width: 35px;
  margin-right: 10px;
  fill: ${stylesVar.colorWhite};
  stroke: ${stylesVar.colorGray};
`;

// section HERO

export const HeroWrap = styled(FlexRowWrap)`
  overflow: scroll;
  overflow-y: hidden;

  @media (${stylesVar.desktopMediaQuery}) {
    overflow: hidden;
  }
`;

export const HeroTitleMobile = styled.h4`
  margin: 1rem 0.5rem;
  text-align: center;

  @media (${stylesVar.tabletMediaQuery}) {
    display: none;
  }
`;

export const HeroTitleContainer = styled.section`
  position: relative;
  min-height: 200px;
  max-height: 400px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  letter-spacing: -1px;
  background-image: url(${colosseoImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (${stylesVar.tabletMediaQuery}) {
    min-height: 300px;
  }
  @media (${stylesVar.desktopMediaQuery}) {
    min-height: 400px;
  }
`;

export const HeroTitleOrange = styled.h2`
  display: none;
  @media (${stylesVar.tabletMediaQuery}) {
    background: ${stylesVar.colorOrange};
    color: ${stylesVar.colorWhite};
    margin: 0 2rem;
    padding: 0.2rem;
    display: block;
    width: fit-content;
  }
`;

export const HeroTitleWhite = styled(HeroTitleOrange)`
  background: ${stylesVar.colorWhite};
  color: ${stylesVar.colorBlack};
`;

export const HeroBanner = styled.div`
  background: ${stylesVar.colorWhite};
  display: flex;
  flex-direction: column;
  min-width: 17rem;
  max-width: 30rem;
  margin: 1rem;
  border-radius: 0.3rem;
  box-shadow: ${stylesVar.boxShadowLight};
  overflow: hidden;
  @media (${stylesVar.tabletMediaQuery}) {
    padding: 1rem;
    flex-direction: row;
    min-width: 30rem;
  }
  @media (${stylesVar.desktopMediaQuery}) {
    border: none;
    box-shadow: none;
    max-width: none;
  }
`;

export const HeroBannerImgCancellation = styled(CancellationSvg)`
  min-width: 3rem;
  margin: 0.2rem;
  flex-grow: 1;
  align-self: flex-start;
  margin: 1rem 1rem -4rem;
  /* @media (${stylesVar.tabletMediaQuery}) {
    height: 100%;
  } */
  @media (${stylesVar.tabletMediaQuery}) {
    margin: 0;
    min-width: 5rem;
  }
`;
export const HeroBannerImgSafety = styled(SafetySvg)`
  min-width: 4rem;
  height: 5rem;
  margin: 0.2rem;
  flex-grow: 1;
  align-self: flex-start;
  margin: 1rem 1rem -4rem;
  @media (${stylesVar.tabletMediaQuery}) {
    margin: 0;
    min-width: 5rem;
  }
`;

export const HeroBannerTitle = styled.h4`
  flex-grow: 1;
  font-weight: bold;
  align-self: flex-end;
  margin: 0 1rem 2rem 7rem;
  @media (${stylesVar.tabletMediaQuery}) {
    align-self: flex-start;
    margin: 0;
  }
`;

export const HeroBannerParagraph = styled.p``;

export const HeroBannerContent = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
