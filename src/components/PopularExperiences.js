import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularExperiences } from '../redux/popular-experiences/popularExperienceActions';
import { CategoryPopularExperiences } from '../styles';
import Card from './Card';
import CarouselTitle from './CarouselTitle';

export const PopularExperiences = ({ params }) => {
  const dispatch = useDispatch();
  const { popularExperiences } = useSelector(
    (state) => state.popularExperiences
  );
  console.log(popularExperiences);

  const getCategoryExperiences = popularExperiences.filter((data) =>
    data.verticals.find((item) => item.slug === params)
  );
  console.log(getCategoryExperiences);

  const sortByRelevance = getCategoryExperiences.slice(0, 12);
  console.log(sortByRelevance);

  useEffect(() => {
    dispatch(fetchPopularExperiences());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <div>
        <CarouselTitle title={`Popular Experiences`} />
        <CategoryPopularExperiences>
          {sortByRelevance?.map((item) => (
            <>
              <Card content={item} key={item.city.name}></Card>
            </>
          ))}
        </CategoryPopularExperiences>
      </div>
    </>
  );
};
