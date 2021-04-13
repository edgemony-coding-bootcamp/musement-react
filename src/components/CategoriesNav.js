import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categories/categoryActions';

import { CategoryLink, CategoryWarp } from '../styles/styles';

function CategoriesNav() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const categoryState = useSelector((state) => state.categories);
  const { categories } = categoryState;
  return (
    <CategoryWarp>
      {categories.map((cat) => (
        <CategoryLink>{cat.name}</CategoryLink>
      ))}
    </CategoryWarp>
  );
}

export default CategoriesNav;
