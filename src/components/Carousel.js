import { useState } from 'react';
import { CarouselCardWrapper, ArrowRight, ArrowLeft } from '../styles';

const Carousel = ({ translatedText, children }) => {
  const [current, setCurrent] = useState(0);
  const prevLeft = () => setCurrent(current - 1);
  const nextRight = () => setCurrent(current + 1);

  return (
    <>
      <ArrowLeft current={current} onClick={prevLeft} />
      <CarouselCardWrapper>{children}</CarouselCardWrapper>
      <ArrowRight current={current} cardlength={4} onClick={nextRight} />
    </>
  );
};

export default Carousel;
