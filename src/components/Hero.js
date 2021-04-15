import React from 'react';

import {
  HeroContainer,
  HeroTitleOrange,
  HeroTitleWhite,
  HeroBanner,
  HeroBannerContent,
  HeroWrap,
  HeroBannerImgCancellation,
  HeroBannerImgSafety,
  HeroBannerTitle,
  HeroBannerParagraph,
} from '../styles';

function Hero() {
  return (
    <>
      <HeroContainer>
        <HeroTitleOrange>
          BOOK TICKETS TO MUSEUMS, ATTRACTIONS AND FUN ACTIVITIES
        </HeroTitleOrange>
        <HeroTitleWhite>ALL OVER THE WORLD</HeroTitleWhite>
      </HeroContainer>
      <HeroWrap>
        <HeroBanner>
          <HeroBannerContent>
            <HeroBannerImgCancellation />
            <HeroBannerTitle>Free cancellation</HeroBannerTitle>
          </HeroBannerContent>
          <HeroBannerContent>
            <HeroBannerParagraph>
              We understand how important flexibility is right now. That's why
              we offer free cancellation on thousands of experiences. No
              waiting, no stress, just one click and it's done!
            </HeroBannerParagraph>
          </HeroBannerContent>
        </HeroBanner>
        <HeroBanner>
          <HeroBannerContent>
            <HeroBannerImgSafety />
            <HeroBannerTitle>Health & safety measures</HeroBannerTitle>
          </HeroBannerContent>
          <HeroBannerContent>
            <HeroBannerParagraph>
              We want you to enjoy unforgettable experiences in the safest way
              possible. So we've made sure all the necessary health measures are
              in place, from sanitizing to social distancing.
            </HeroBannerParagraph>
          </HeroBannerContent>
        </HeroBanner>
      </HeroWrap>
    </>
  );
}

export default Hero;
