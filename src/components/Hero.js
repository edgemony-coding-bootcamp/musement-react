import React from 'react';
import { useSelector } from 'react-redux';

import {
  HeroTitle,
  HeroSpan,
  HeroContainer,
  InfoBanner,
  FlexRowWrap,
  H3,
  P,
  CancellationSvgIcon,
  useMediaQuery,
  device,
  Div,
  SafetySvgIcon,
  BannerContainer,
} from '../styles';
import SearchBar from './SearchBar';

function Hero() {
  let isTablet = useMediaQuery(`${device.tablet}`);
  const { translatedTexts } = useSelector((state) => state.translations);

  return (
    <>
      <HeroContainer>
        <HeroTitle>
          <HeroSpan>{translatedTexts.hero1}</HeroSpan>
          <HeroSpan foo> {translatedTexts.hero2}</HeroSpan>
          <br />
          <HeroSpan bar>{translatedTexts.hero3}</HeroSpan>
          {isTablet && (
            <SearchBar
              placeholder={`${translatedTexts.searchplaceholderhero}`}
              isOnHero={true}
            />
          )}
        </HeroTitle>
      </HeroContainer>
      {isTablet || (
        <SearchBar
          placeholder={`${translatedTexts.searchplaceholderhero}`}
          mobile={true}
        />
      )}
      <BannerContainer>
        <InfoBanner>
          {isTablet ? (
            <>
              <CancellationSvgIcon />
              <Div>
                <H3>{translatedTexts.freecancellation}</H3>
                <P>{translatedTexts.freecancellationmessage}</P>
              </Div>
            </>
          ) : (
            <>
              <FlexRowWrap>
                <CancellationSvgIcon />{' '}
                <H3>{translatedTexts.freecancellation}</H3>
              </FlexRowWrap>
              <P>{translatedTexts.freecancellationmessage}</P>
            </>
          )}
        </InfoBanner>
        <InfoBanner>
          {isTablet ? (
            <>
              <SafetySvgIcon />
              <Div>
                <H3>{translatedTexts.healthsafetymeasures}</H3>
                <P>{translatedTexts.healthsafetymessage}</P>
              </Div>
            </>
          ) : (
            <>
              <FlexRowWrap>
                <SafetySvgIcon />{' '}
                <H3>{translatedTexts.healthsafetymeasures}</H3>
              </FlexRowWrap>
              <P>{translatedTexts.healthsafetymessage}</P>
            </>
          )}
        </InfoBanner>
      </BannerContainer>
    </>
  );
}

export default Hero;
