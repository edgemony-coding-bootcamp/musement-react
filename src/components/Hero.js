import React from 'react';

import {
  HeroContainer,
  HeroTitleOrange,
  HeroTitleWhite,
  HeroBanner,
  HeroBannerImg,
  HeroBannerContent,
  HeroWrap,
  HeroBannerImgCancellation,
  HeroBannerImgSafety,
} from '../styles/styles';

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
            <h3>Free cancellation</h3>
          </HeroBannerContent>
          <HeroBannerContent>
            <p>
              We understand how important flexibility is right now. That's why
              we offer free cancellation on thousands of experiences. No
              waiting, no stress, just one click and it's done!
            </p>
          </HeroBannerContent>
        </HeroBanner>
        <HeroBanner>
          <HeroBannerContent>
            <HeroBannerImgSafety />
            <h3>Health & safety measures</h3>
          </HeroBannerContent>
          <HeroBannerContent>
            <p>
              We want you to enjoy unforgettable experiences in the safest way
              possible. So we've made sure all the necessary health measures are
              in place, from sanitizing to social distancing.
            </p>
          </HeroBannerContent>
        </HeroBanner>
      </HeroWrap>
    </>
  );
}

export default Hero;
