/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  IndexSlider,
  IndexSliderCounter,
  JumbotronGalleryMobile,
  JumbotronMobileSlides,
} from '../styles';

function MobileMediaSlideshow() {
  const { media } = useSelector((state) => state.activity);
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);

  const handleActiveSlide = () => {
    const scrollPosition = ref.current.scrollLeft;
    let active = scrollPosition / ref.current.offsetWidth;
    // Here i'm parsing the value cause i noticed that is faster than waiting for the integer value
    setCurrent(parseInt(active));
  };

  return (
    <>
      <JumbotronGalleryMobile ref={ref} onScroll={() => handleActiveSlide()}>
        {media.map((item, index) => (
          <JumbotronMobileSlides
            key={index}
            src={item.url}
          ></JumbotronMobileSlides>
        ))}
      </JumbotronGalleryMobile>
      <IndexSlider>
        {media.map((item, index) => (
          <IndexSliderCounter
            key={index}
            id={index}
            active={current === index}
          ></IndexSliderCounter>
        ))}
      </IndexSlider>
    </>
  );
}

export default MobileMediaSlideshow;
