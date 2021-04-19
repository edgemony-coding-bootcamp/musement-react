import { useState } from 'react';
import {
  Card,
  CarouselContainer,
  CarouselCardWrapper,
  ArrowRight,
  ArrowLeft,
} from '../styles/stylesCarousel';
import CarouselTitle from './CarouselTitle';
let cards = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
];

let title = ['Esperienze in primo piano'];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const prevLeft = () => setCurrent(current - 1);
  const nextRight = () => setCurrent(current + 1);
  return (
    <>
      <CarouselContainer>
        <CarouselTitle title={title} />
        <ArrowLeft current={current} onClick={prevLeft} />
        <CarouselCardWrapper>
          {cards.map((card) => (
            <Card current={current}>{card}</Card>
          ))}
        </CarouselCardWrapper>
        <ArrowRight
          current={current}
          cardlength={cards.length}
          onClick={nextRight}
        />
      </CarouselContainer>
    </>
  );
};

export default Carousel;
