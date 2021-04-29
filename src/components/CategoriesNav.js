/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router';
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
  const [activeCategory, setActiveCategory] = useState(null);

  let location = useLocation();
  let match = useRouteMatch();
  let history = useHistory();
  const pathIncludes = (category) => {
    const path = match.url + category;
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  };
  const redirectToActiveCategory = () => {
    const newPath = categories?.find((cat) => cat?.id === activeCategory?.id);
    if (newPath) {
      history.push(`/${lang}/${newPath?.slug}`);
    }
  };

  useEffect(() => {
    if (categories.length > 0) {
      let categoryPath = location.pathname.replace(`/${lang}/`, '');
      let activeCat = categories?.find((cat) => cat?.slug === categoryPath);
      setActiveCategory(activeCat);
      redirectToActiveCategory(activeCat);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, categories]);

  const ShowCategories = categories.map((cat) => (
    <CategoryLinkWrap
      to={`/${lang}/${cat.slug}`}
      key={cat.id}
      $pathincludes={pathIncludes(`/${cat.slug}`)}>
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
