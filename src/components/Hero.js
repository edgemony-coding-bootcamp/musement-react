import React from 'react';

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

function Hero({ translatedText }) {
  let isTablet = useMediaQuery(`${device.tablet}`);

  return (
    <>
      <HeroContainer>
        <HeroTitle>
          <HeroSpan>{translatedText.hero1}</HeroSpan>
          <HeroSpan foo> {translatedText.hero2}</HeroSpan>
          <br />
          <HeroSpan bar>{translatedText.hero3}</HeroSpan>
        </HeroTitle>
      </HeroContainer>
      <BannerContainer>
        <InfoBanner>
          {isTablet ? (
            <>
              <CancellationSvgIcon />
              <Div>
                <H3>{translatedText.freecancellation}</H3>
                <P>{translatedText.freecancellationmessage}</P>
              </Div>
            </>
          ) : (
            <>
              <FlexRowWrap>
                <CancellationSvgIcon />{' '}
                <H3>{translatedText.freecancellation}</H3>
              </FlexRowWrap>
              <P>{translatedText.freecancellationmessage}</P>
            </>
          )}
        </InfoBanner>
        <InfoBanner>
          {isTablet ? (
            <>
              <SafetySvgIcon />
              <Div>
                <H3>{translatedText.healthsafetymeasures}</H3>
                <P>{translatedText.healthsafetymessage}</P>
              </Div>
            </>
          ) : (
            <>
              <FlexRowWrap>
                <SafetySvgIcon /> <H3>{translatedText.healthsafetymeasures}</H3>
              </FlexRowWrap>
              <P>{translatedText.healthsafetymessage}</P>
            </>
          )}
        </InfoBanner>
      </BannerContainer>
    </>
  );
}

export default Hero;
