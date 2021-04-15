import { useState } from 'react';
import {
  Card,
  CarouselContainer,
  CarouselCardWrapper,
  ArrowRight,
  ArrowLeft,
} from '../styles/stylesCarousel';

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const cardlength = 20 - 4;

  const prevLeft = () => {
    setCurrent(current - 1);
  };

  const nextRight = () => {
    setCurrent(current + 1);
  };

  return (
    <CarouselContainer>
      <ArrowLeft current={current} onClick={prevLeft} />
      <CarouselCardWrapper>
        <Card current={current}>1</Card>
        <Card current={current}>2</Card>
        <Card current={current}>3</Card>
        <Card current={current}>4</Card>
        <Card current={current}>5</Card>
        <Card current={current}>6</Card>
        <Card current={current}>7</Card>
        <Card current={current}>8</Card>
        <Card current={current}>9</Card>
        <Card current={current}>10</Card>
        <Card current={current}>11</Card>
        <Card current={current}>12</Card>
        <Card current={current}>13</Card>
        <Card current={current}>14</Card>
        <Card current={current}>15</Card>
        <Card current={current}>16</Card>
        <Card current={current}>17</Card>
        <Card current={current}>18</Card>
        <Card current={current}>19</Card>
        <Card current={current}>20</Card>
      </CarouselCardWrapper>
      <ArrowRight
        current={current}
        cardlength={cardlength}
        onClick={nextRight}
      />
    </CarouselContainer>
  );
};

export default Carousel;
