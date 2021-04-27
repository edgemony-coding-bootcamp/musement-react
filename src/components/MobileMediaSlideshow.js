/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
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
  const [maxWidth, setMaxWidth] = useState(0);
  const [medianumber, setMedianumber] = useState(0);

  useEffect(() => {
    media?.length > 0 && setMedianumber(media.length);
    setMaxWidth(ref.current.offsetWidth * medianumber);
  }, [media, medianumber]);

  const handleActiveSlide = () => {
    const scrollPosition = ref.current.scrollLeft;
    setCurrent(scrollPosition);
    let mediasize = maxWidth / medianumber;
    let active = scrollPosition / mediasize;
    setCurrent(active);
  };

  return (
    <>
      <JumbotronGalleryMobile ref={ref} onScroll={() => handleActiveSlide()}>
        {media.map((item, index) => (
          <JumbotronMobileSlides
            id={index}
            src={item.url}></JumbotronMobileSlides>
        ))}
      </JumbotronGalleryMobile>
      <IndexSlider>
        {media.map((item, index) => (
          <IndexSliderCounter
            id={index}
            active={current === index}></IndexSliderCounter>
        ))}
      </IndexSlider>
    </>
  );
}

export default MobileMediaSlideshow;
