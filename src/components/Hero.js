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

function Hero() {
  let isTablet = useMediaQuery(`${device.tablet}`);

  return (
    <>
      <HeroContainer>
        <HeroTitle>
          <HeroSpan>BOOK TICKETS TO MUSEUMS,</HeroSpan>
          <HeroSpan foo> ATTRACTIONS AND FUN ACTIVITIES</HeroSpan>
          <HeroSpan bar>
            <br /> ALL OVER THE WORLD
          </HeroSpan>
        </HeroTitle>
      </HeroContainer>
      <BannerContainer>
        <InfoBanner>
          {isTablet ? (
            <>
              <CancellationSvgIcon />
              <Div>
                <H3>Free cancellation</H3>
                <P>
                  We understand how important flexibility is right now. That's
                  why we offer free cancellation on thousands of experiences. No
                  waiting, no stress, just one click and it's done!
                </P>
              </Div>
            </>
          ) : (
            <>
              <FlexRowWrap>
                <CancellationSvgIcon /> <H3>Free cancellation</H3>
              </FlexRowWrap>
              <P>
                We understand how important flexibility is right now. That's why
                we offer free cancellation on thousands of experiences. No
                waiting, no stress, just one click and it's done!
              </P>
            </>
          )}
        </InfoBanner>
        <InfoBanner>
          {isTablet ? (
            <>
              <SafetySvgIcon />
              <Div>
                <H3>Health & safety measures</H3>
                <P>
                  We want you to enjoy unforgettable experiences in the safest
                  way possible. So we've made sure all the necessary health
                  measures are in place, from sanitizing to social distancing.
                </P>
              </Div>
            </>
          ) : (
            <>
              <FlexRowWrap>
                <SafetySvgIcon /> <H3>Health & safety measures</H3>
              </FlexRowWrap>
              <P>
                We want you to enjoy unforgettable experiences in the safest way
                possible. So we've made sure all the necessary health measures
                are in place, from sanitizing to social distancing.
              </P>
            </>
          )}
        </InfoBanner>
      </BannerContainer>
    </>
  );
}

export default Hero;
