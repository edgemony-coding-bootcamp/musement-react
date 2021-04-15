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

const Carousel = ({ cardsFrom, carouselTitle }) => {
  const [current, setCurrent] = useState(0);
  const arraycardslength = cards.length - 4;
  const prevLeft = () => setCurrent(current - 1);
  const nextRight = () => setCurrent(current + 1);
  return (
    <>
      <CarouselContainer>
        <CarouselTitle title={'Esperienze in primo piano'} />
        <ArrowLeft current={current} onClick={prevLeft} />
        <CarouselCardWrapper>
          {cards.map((card) => (
            <Card current={current}>{card}</Card>
          ))}
        </CarouselCardWrapper>
        <ArrowRight
          current={current}
          cardlength={arraycardslength}
          onClick={nextRight}
        />
      </CarouselContainer>
    </>
  );
};

export default Carousel;
