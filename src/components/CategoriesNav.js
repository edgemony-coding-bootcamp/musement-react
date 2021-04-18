import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categories/categoryActions';

import {
  CategoryLinkLoader,
  CategoryLinkWrap,
  CategoryLink,
  CategoryWrap,
  CategoriesSvgIcon,
  CategoryLinkContainer,
  CategoryLinkError,
  Span,
  categoriesSvgIcons,
} from '../styles';

function CategoriesNav() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const categoryState = useSelector((state) => state.categories);
  const { categories, loading, error } = categoryState;

  const ShowCategories = categories.map((cat) => (
    <CategoryLinkWrap key={cat.id}>
      <CategoryLinkContainer>
        <CategoryLink>
          <CategoriesSvgIcon>{categoriesSvgIcons[cat.id]}</CategoriesSvgIcon>
          <Span>{cat.name}</Span>
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
