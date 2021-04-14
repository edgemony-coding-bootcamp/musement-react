import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categories/categoryActions';

import {
  CategoryLinkLoader,
  CategoryLinkWrap,
  CategoryLink,
  CategoryWrap,
  FakeIcon,
  CategoryLinkContainer,
} from '../styles/styles';
import logo from '../Assets/img/favicon_m2 (7).png';

function CategoriesNav() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoryState = useSelector((state) => state.categories);
  const { categories, loading, error } = categoryState;
  return (
    <CategoryWrap>
      {categories.map((cat) => (
        <CategoryLinkWrap key={cat.id}>
          {loading ? (
            <CategoryLinkLoader />
          ) : error ? (
            <CategoryLink>Category not found</CategoryLink>
          ) : (
            <CategoryLinkContainer>
              <CategoryLink>
                <FakeIcon src={logo} /> {cat.name}
              </CategoryLink>
            </CategoryLinkContainer>
          )}
        </CategoryLinkWrap>
      ))}
    </CategoryWrap>
  );
}

export default CategoriesNav;
