import styled from 'styled-components';
import colosseoImg from '../Assets/img/cover_hero_home_desktop_colosseo.png';

import { ReactComponent as CancellationSvg } from '../Assets/img/free_cancellation_banner.svg';
import { ReactComponent as SafetySvg } from '../Assets/img/safety-measures.svg';
import { Link } from 'react-router-dom';
// section VARIABLES

const colors = {
  white: 'rgb(255, 255, 255)',
  orange: '#fc6c4f',
  gray: '#9E9E9E',
  lightGray: '#DBDBDB',
  black: 'black',
};

// section UTILITIES

export const FlexRowWrap = styled.div`
  display: flex;
`;

export const LinkPage = styled(Link)`
  text-decoration: none;
`;

// section HEADER

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;

  background-color: ${colors.white};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid ${colors.lightGray} 1px;
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.lightGray};
  align-items: center;
  @media (min-width: 760px) {
    flex-direction: row;
  }
`;

export const HeaderLogo = styled.img`
  height: 36px;
  padding: 0 5px;
`;

export const HeaderLogoTitle = styled.h5`
  margin: 0;

  color: ${colors.gray};
  font-size: 1.2rem;
  font-weight: bold;

  @media (min-width: 760px) {
    /* height: 28px; */
    justify-self: center;
    font-size: 2rem;
    padding-bottom: 2px;
    letter-spacing: -1px;
  }
`;

export const TitleNav = styled.h1`
  color: ${colors.lightGray};
`;

export const GoDown = styled.div`
  width: 100%;
  height: 70px;
`;

// section HERO

export const HeroWrap = styled(FlexRowWrap)`
  overflow: scroll;
  overflow-y: hidden;

  @media (min-width: 1024px) {
    overflow: hidden;
  }
`;

export const HeroContainer = styled.section`
  width: 100%;
  height: 400px;
  background-image: url(${colosseoImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroTitleOrange = styled.h2`
  background: ${colors.orange};
  color: ${colors.white};
  margin: 0 2rem;
  padding: 0.2rem;
  display: block;
  width: fit-content;
`;

export const HeroTitleWhite = styled(HeroTitleOrange)`
  background: ${colors.white};
  color: ${colors.black};
`;

export const HeroBanner = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  min-width: 17rem;
  max-width: 30rem;
  margin: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
  overflow-x: hidden;
  @media (min-width: 760px) {
    min-width: 30rem;
  }
  @media (min-width: 1024px) {
    border: none;
    box-shadow: none;
    max-width: none;
  }
`;

export const HeroBannerImgCancellation = styled(CancellationSvg)`
  width: 1.5rem;
  margin: 0.2rem;
  flex-grow: 1;
`;
export const HeroBannerImgSafety = styled(SafetySvg)`
  min-width: 3rem;
  height: 5rem;
  margin: 0.2rem;
  flex-grow: 1;
`;

export const HeroBannerTitle = styled.h4`
  flex-grow: 1;
  font-weight: bold;
`;

export const HeroBannerParagraph = styled.p``;

export const HeroBannerContent = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

// section CATEGORIES NAV

export const CategoryWrap = styled(FlexRowWrap)`
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  min-height: 76px;
  @media (max-width: 1150px) {
    display: none;
  }
`;

export const CategoryLinkWrap = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: inset 0 -6px 0 ${colors.orange};
    cursor: pointer;
  }
`;

export const CategoryLink = styled.div`
  padding: 0.2rem;
  height: 36px;

  display: flex;
  align-items: center;
`;

export const CategoryLinkContainer = styled(FlexRowWrap)`
  width: 100%;
  justify-content: space-evenly;
  border-left: solid ${colors.lightGray} 1px;
`;

export const CategoryLinkLoader = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  border-left: solid ${colors.lightGray} 1px;
  flex-grow: 1;
  background-color: ${colors.lightGray};
`;

export const CategoryLinkError = styled(CategoryLink)``;

export const SvgIcon = styled.svg`
  height: 35px;
  width: 35px;
  margin-right: 10px;
  fill: ${colors.white};
  stroke: ${colors.gray};
`;
