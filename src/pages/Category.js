import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
  let { idCateg } = useParams();
  const categoryState = useSelector((state) => state.categories);
  const { categories } = categoryState;
  const selectedCategory = categories.find((categ) => categ.slug === idCateg);

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
    </>
  );
};
