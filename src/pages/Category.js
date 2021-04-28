import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PopularExperiences } from '../components/PopularExperiences';
import { fetchPopularExperiences } from '../redux/popular-experiences/popularExperienceActions';
import {
  CategoryGoHome,
  CategoryImg,
  CategoryImgBackground,
  CategoryImgHover,
  CategoryImgTop,
  CategoryImgWrapper,
  CategoryName,
} from '../styles';

export const Category = () => {
  const dispatch = useDispatch();
  let { idCateg } = useParams();
  const categoryState = useSelector((state) => state.categories);
  const { categories } = categoryState;
  const selectedCategory = categories.find((categ) => categ.slug === idCateg);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchPopularExperiences(selectedCategory.id));
    }
  }, [dispatch, selectedCategory]);

  return (
    <>
      <CategoryImgWrapper>
        <CategoryImgBackground>
          <CategoryImg
            src={selectedCategory?.cover_image_url}
            alt={selectedCategory?.name}
          />
        </CategoryImgBackground>
        <CategoryImgHover>
          <CategoryImgTop
            src={selectedCategory?.cover_image_url}
            alt={selectedCategory?.name}
          />
        </CategoryImgHover>
      </CategoryImgWrapper>
      <CategoryGoHome to=''>Home</CategoryGoHome>
      <CategoryName>{`› ${selectedCategory?.name}`}</CategoryName>
      <PopularExperiences />
    </>
  );
};
