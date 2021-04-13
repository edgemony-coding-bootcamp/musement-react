import styled from 'styled-components';
import colosseoImg from '../Assets/img/cover_hero_home_desktop_colosseo.png';

import { ReactComponent as CancellationSvg } from '../Assets/img/free_cancellation_banner.svg';
import { ReactComponent as SafetySvg } from '../Assets/img/safety-measures.svg';

// section VARIABLES

const colors = {
  white: 'rgb(255, 255, 255)',
  orange: '#fd8067',
  gray: 'gray',
  black: 'black',
};

// section UTILITIES

export const FlexRowWrap = styled.div`
  display: flex;
  flex-direction: row;
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
  border-bottom: solid ${colors.gray} 1px;
`;

export const HeaderTitle = styled.h1`
  color: ${colors.gray};
`;

export const HeaderLogo = styled.img`
  height: 50px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const TitleNav = styled.h1`
  color: ${colors.gray};
`;

export const GoDown = styled.div`
  width: 100%;
  height: 70px;
`;

// section HERO

export const HeroWrap = styled(FlexRowWrap)`
  overflow: scroll;
`;

export const HeroContainer = styled.section`
  width: 100%;
  height: 400px;
  background-image: url(${colosseoImg});
  background-position: center;
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
  min-width: 20rem;
  margin: 1rem;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.79);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.79);
`;

export const HeroBannerImgCancellation = styled(CancellationSvg)`
  width: 5rem;
  margin: 0.2rem;
`;
export const HeroBannerImgSafety = styled(SafetySvg)`
  width: 10rem;
  height: 5rem;
  margin: 0.2rem;
`;
export const HeroBannerContent = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

// section CATEGORIES NAV

export const CategoryWarp = styled(FlexRowWrap)`
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 2rem 0 0;
  width: 100%;
  &:last-child {
    border-right: none;
  }
`;

export const CategoryLink = styled.div`
  padding: 0.5rem;
  border-right: solid ${colors.gray} 1px;
  border-left: solid ${colors.gray} 1px;
  font-weight: bold;

  &:hover {
    box-shadow: inset 0 -5px 0 ${colors.orange};
    cursor: pointer;
  }
`;
