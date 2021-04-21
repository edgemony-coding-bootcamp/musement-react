import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

// STYLED COMPONENT FOR PAGE'S CATEGORY

const CategoryImgWrapper = styled.div`
  max-width: 1350px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CategoryImgBackground = styled.div`
  width: 100%;
  height: 380px;
  position: absolute;
  z-index: 1;
  opacity: 0.7;
`;

const CategoryImgHover = styled.div`
  width: 350px;
  height: 390px;
  padding: 25px;
  position: relative;
  z-index: 3;
  box-shadow: 0 0 25px -2px;
  background-color: white;
`;

const CategoryImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const CategoryGoHome = styled(Link)`
  margin-left: 30px;
  color: black;
`;

const CategoryName = styled.span`
  margin-left: 8px;
`;

export const Category = ({ categories }) => {
  let { idCateg } = useParams();
  console.log(categories);
  const selectedCategory = categories.find((categ) => categ.slug === idCateg);

  return (
    <>
      <CategoryImgWrapper>
        <CategoryImgBackground>
          <CategoryImg
            src={selectedCategory.cover_image_url}
            alt={selectedCategory.name}
          />
        </CategoryImgBackground>
        <CategoryImgHover>
          <CategoryImg
            src={selectedCategory.cover_image_url}
            alt={selectedCategory.name}
          />
        </CategoryImgHover>
      </CategoryImgWrapper>
      <CategoryGoHome to=''>Home</CategoryGoHome>
      <CategoryName>{`› ${idCateg}`}</CategoryName>
    </>
  );
};
