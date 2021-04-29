import { useSelector } from 'react-redux';
import {
  CarouselSection,
  CarouselTitleContainer,
  CategoryPopularExperiences,
  PopularExperiencesTitle,
} from '../styles';
import CarouselTitle from './CarouselTitle';
import Card from './Card';

export const PopularExperiences = () => {
  const { popularExperiences } = useSelector(
    (state) => state.popularExperiences
  );

  return (
    <>
      <CarouselSection>
        <CarouselTitle title={`Popular Experiences`} />
        <CategoryPopularExperiences>
          {popularExperiences?.map((item) => (
            <Card popular content={item} key={item.uuid}></Card>
          ))}
        </CategoryPopularExperiences>
      </CarouselSection>
    </>
  );
};
