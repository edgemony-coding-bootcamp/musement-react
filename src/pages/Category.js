import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

// STYLED COMPONENT FOR PAGE'S CATEGORY

const CategoryImgWrapper = styled.div`
  height: fit-content;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 479px) {
    height: 420px;
    margin: auto;
  }
`;

const CategoryImgBackground = styled.div`
  width: 100%;
  height: 260px;
  position: absolute;
  z-index: 1;
  opacity: 0.7;
  @media (max-width: 479px) {
    opacity: 1;
  }
  @media (min-width: 759px) {
    height: 300px;
  }
  @media (min-width: 1024px) {
    height: 400px;
  }
  @media (min-width: 1350px) {
    height: 500px;
  }
`;

const CategoryImgHover = styled.div`
  width: 188px;
  height: 250px;
  padding: 25px;
  position: relative;
  z-index: 3;
  box-shadow: 0 0 25px -2px;
  background-color: white;
  @media (max-width: 479px) {
    display: none;
  }
  @media (min-width: 759px) {
    width: 230px;
    height: 290px;
  }
  @media (min-width: 1024px) {
    width: 300px;
    height: 390px;
  }
  @media (min-width: 1350px) {
    width: 380px;
    height: 510px;
  }
`;

const CategoryImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const CategoryImgTop = styled(CategoryImg)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CategoryGoHome = styled(Link)`
  margin-left: 30px;
  color: black;
`;

const CategoryName = styled.span`
  margin-left: 8px;
  text-transform: capitalize;
`;

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
