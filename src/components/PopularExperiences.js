import { useSelector } from 'react-redux';
import {
  CarouselSection,
  CategoryPopularExperiences,
  DummyCardContent,
  DummyCardImg,
  DummyCardWrapper,
} from '../styles';
import CarouselTitle from './CarouselTitle';
import Card from './Card';

export const PopularExperiences = () => {
  const { popularExperiences, loading } = useSelector(
    (state) => state.popularExperiences
  );

  return (
    <>
      <CarouselSection>
        <CarouselTitle title={`Popular Experiences`} />
        <CategoryPopularExperiences>
          {loading ? (
            <>
              <DummyCardWrapper>
                <DummyCardImg></DummyCardImg>
                <DummyCardContent></DummyCardContent>
                <DummyCardContent></DummyCardContent>
              </DummyCardWrapper>
              <DummyCardWrapper>
                <DummyCardImg></DummyCardImg>
                <DummyCardContent></DummyCardContent>
                <DummyCardContent></DummyCardContent>
              </DummyCardWrapper>
              <DummyCardWrapper>
                <DummyCardImg></DummyCardImg>
                <DummyCardContent></DummyCardContent>
                <DummyCardContent></DummyCardContent>
              </DummyCardWrapper>
            </>
          ) : (
            popularExperiences?.map((item) => (
              <Card popular content={item} key={item.uuid}></Card>
            ))
          )}
        </CategoryPopularExperiences>
      </CarouselSection>
    </>
  );
};
