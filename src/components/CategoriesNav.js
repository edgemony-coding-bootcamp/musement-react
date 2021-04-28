import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams, useRouteMatch } from 'react-router';
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
  let { lang } = useParams();
  const categoryState = useSelector((state) => state.categories);
  const { categories, loading, error } = categoryState;

  let location = useLocation();
  let match = useRouteMatch();

  const pathIncludes = (location, category) => {
    const path = match.url + category;
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  };

  const ShowCategories = categories.map((cat) => (
    <CategoryLinkWrap
      to={`/${lang}/${cat.slug}`}
      key={cat.id}
      pathIncludes={pathIncludes(location, `/${cat.slug}`)}
    >
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
        <>
          <CategoryLinkWrap>
            <CategoryLinkContainer>
              <CategoryLinkLoader />
            </CategoryLinkContainer>
          </CategoryLinkWrap>
          <CategoryLinkWrap>
            <CategoryLinkContainer>
              <CategoryLinkLoader />
            </CategoryLinkContainer>
          </CategoryLinkWrap>
          <CategoryLinkWrap>
            <CategoryLinkContainer>
              <CategoryLinkLoader />
            </CategoryLinkContainer>
          </CategoryLinkWrap>
          <CategoryLinkWrap>
            <CategoryLinkContainer>
              <CategoryLinkLoader />
            </CategoryLinkContainer>
          </CategoryLinkWrap>
          <CategoryLinkWrap>
            <CategoryLinkContainer>
              <CategoryLinkLoader />
            </CategoryLinkContainer>
          </CategoryLinkWrap>
          <CategoryLinkWrap>
            <CategoryLinkContainer>
              <CategoryLinkLoader />
            </CategoryLinkContainer>
          </CategoryLinkWrap>
          <CategoryLinkWrap>
            <CategoryLinkContainer>
              <CategoryLinkLoader />
            </CategoryLinkContainer>
          </CategoryLinkWrap>
        </>
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
