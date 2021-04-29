import { useSelector } from 'react-redux';
import { CategoryPopularExperiences, PopularExperiencesTitle } from '../styles';
import Card from './Card';

export const PopularExperiences = () => {
  const { popularExperiences } = useSelector(
    (state) => state.popularExperiences
  );

  return (
    <>
      <PopularExperiencesTitle title={`Popular Experiences`} />
      <CategoryPopularExperiences>
        {popularExperiences?.map((item) => (
          <>
            <Card popular content={item} key={item.city.name}></Card>
          </>
        ))}
      </CategoryPopularExperiences>
    </>
  );
};
