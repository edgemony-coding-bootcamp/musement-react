import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularExperiences } from '../redux/popular-experiences/popularExperienceActions';
import Card from './Card';
import CarouselTitle from './CarouselTitle';

export const PopularExperiences = () => {
  const dispatch = useDispatch();
  const { popularExperiences } = useSelector(
    (state) => state.popularExperiences
  );

  const sortByReviews = popularExperiences.sort(
    (a, b) => parseFloat(b.reviews_avg) - parseFloat(a.reviews_avg)
  );

  const newPopularExperiences = sortByReviews.slice(0, 11);
  // .filter((obj) => obj);
  console.log(newPopularExperiences);

  useEffect(() => {
    dispatch(fetchPopularExperiences());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <>
      <div>
        <CarouselTitle title={`Popular tours & attractions`} />
        {newPopularExperiences?.map((item) => (
          <>
            <Card content={item}></Card>
          </>
        ))}
      </div>
    </>
  );
};
