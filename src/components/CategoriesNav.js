import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categories/categoryActions';

import {
  CategoryLinkLoader,
  CategoryLinkWrap,
  CategoryLink,
  CategoryWrap,
  SvgIcon,
  CategoryLinkContainer,
  CategoryLinkError,
} from '../styles';

import { ReactComponent as NightLifeSvg } from '../Assets/img/nightlife.svg';
import { ReactComponent as ToursAttractionsSvg } from '../Assets/img/tours-attractions.svg';
import { ReactComponent as MuseumsArtSvg } from '../Assets/img/Museums-art.svg';
import { ReactComponent as PerformancesSvg } from '../Assets/img/performances.svg';
import { ReactComponent as FoodWineSvg } from '../Assets/img/food-wine.svg';
import { ReactComponent as SportSvg } from '../Assets/img/sport.svg';
import { ReactComponent as ActiveAdventureSvg } from '../Assets/img/active-adventure.svg';

function CategoriesNav() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const svgIcons = {
    1: <MuseumsArtSvg />,
    2: <ToursAttractionsSvg />,
    3: <FoodWineSvg />,
    4: <PerformancesSvg />,
    5: <SportSvg />,
    6: <ActiveAdventureSvg />,
    7: <NightLifeSvg />,
  };

  const categoryState = useSelector((state) => state.categories);
  const { categories, loading, error } = categoryState;
  console.log(categories);

  const ShowCategories = categories.map((cat) => (
    <CategoryLinkWrap key={cat.id}>
      <CategoryLinkContainer>
        <CategoryLink>
          <SvgIcon>{svgIcons[cat.id]}</SvgIcon>
          {cat.name}
        </CategoryLink>
      </CategoryLinkContainer>
    </CategoryLinkWrap>
  ));

  return (
    <CategoryWrap>
      {loading ? (
        <CategoryLinkLoader />
      ) : error ? (
        // make a new styled component for error
        <CategoryLinkWrap>
          <CategoryLinkContainer>
            <CategoryLinkError>Categories not found</CategoryLinkError>
          </CategoryLinkContainer>
        </CategoryLinkWrap>
      ) : categories ? (
        ShowCategories
      ) : null}
    </CategoryWrap>
  );
}

export default CategoriesNav;
