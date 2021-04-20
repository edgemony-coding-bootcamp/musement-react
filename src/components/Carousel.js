import { useState } from 'react';
import {
  CarouselContainer,
  CarouselCardWrapper,
  ArrowRight,
  ArrowLeft,
} from '../styles';

const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const prevLeft = () => setCurrent(current - 1);
  const nextRight = () => setCurrent(current + 1);

  return (
    <>
      <CarouselContainer>
        <ArrowLeft current={current} onClick={prevLeft} />
        <CarouselCardWrapper>{children}</CarouselCardWrapper>
        <ArrowRight current={current} cardlength={4} onClick={nextRight} />
      </CarouselContainer>
    </>
  );
};

export default Carousel;
