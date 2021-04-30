import React, { useEffect, useState, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CarouselCardWrapper,
  CarouselContainer,
  CarouselWrapperArrow,
  cardSize,
} from '../styles';

const Carousel = ({ children }) => {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);
  const [maxwidth, setMaxwidth] = useState(0);
  const [cardsnumber, setCardsnumber] = useState(0);
  const prevLeft = () => setCurrent(current - cardSize.lg);
  const nextRight = () => setCurrent(current + cardSize.lg);

  useEffect(() => {
    children?.length > 0 && setCardsnumber(children.length);
    setMaxwidth(
      ref.current.scrollWidth + ref.current.scrollLeft - ref.current.clientWidth
    );
  }, [children]);

  return (
    <CarouselContainer>
      <CarouselWrapperArrow>
        <ArrowLeft
          cardsnumber={cardsnumber}
          maxwidth={maxwidth}
          current={current}
          onClick={prevLeft}
        />
      </CarouselWrapperArrow>
      <CarouselCardWrapper current={current} ref={ref}>
        {children}
      </CarouselCardWrapper>
      <CarouselWrapperArrow>
        <ArrowRight
          cardsnumber={cardsnumber}
          maxwidth={maxwidth}
          current={current}
          onClick={nextRight}
        />
      </CarouselWrapperArrow>
    </CarouselContainer>
  );
};

export default Carousel;
