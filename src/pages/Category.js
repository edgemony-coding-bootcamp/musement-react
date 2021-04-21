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
  console.log(categories);
  let { idCateg } = useParams();

  return (
    <>
      <CategoryImgWrapper>
        <CategoryImgBackground>
          <CategoryImg src='https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg' />
        </CategoryImgBackground>
        <CategoryImgHover>
          <CategoryImg src='https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg' />
        </CategoryImgHover>
      </CategoryImgWrapper>
      <CategoryGoHome to=''>Home</CategoryGoHome>
      <CategoryName>{`› ${idCateg}`}</CategoryName>
    </>
  );
};
