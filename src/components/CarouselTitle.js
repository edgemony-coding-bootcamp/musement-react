import { CarouselTitleContainer, H2 } from '../styles/stylesCarousel';

const CarouselTitle = ({ title }) => {
  return (
    <CarouselTitleContainer>
      <H2>{title}</H2>
    </CarouselTitleContainer>
  );
};

export default CarouselTitle;
