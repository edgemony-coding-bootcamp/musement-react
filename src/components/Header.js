import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../redux/categories/categoryActions';

import {
  HeaderWrapper,
  HeaderLogoDesktop,
  HeaderLogoMobile,
  HeaderGoDown,
  LinkPages,
  HeaderHamburger,
  HeaderHamburgerWrapper,
  useMediaQuery,
  useScrolling,
  ModalHeaderOverlay,
  device,
  ModalHeaderBody,
  H3,
  FlexRowWrap,
  FlexColumnWrap,
  P,
} from '../styles';
import CategoriesNav from './CategoriesNav';
import { useParams } from 'react-router';

function Header({ path }) {
  let { lang } = useParams();
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.categories);
  const { categories } = categoryState;
  const { userLang } = useSelector((state) => state.languages);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCategories());
    }, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLang]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [modalTitle, setModalTitle] = useState('Menu');

  let scrolling = useScrolling(133);
  let scrollInitial = useScrolling(1);

  let isDesktop = useMediaQuery(`${device.desktop}`);

  return (
    <>
      <HeaderWrapper scrollInitial={scrollInitial} scrolling={scrolling}>
        {/* in this div we will put the search button */}
        <div style={{ width: '3rem' }}></div>
        {isDesktop ? (
          <LinkPages to='/'>
            <HeaderLogoDesktop />
          </LinkPages>
        ) : (
          <>
            <LinkPages to='/'>
              <HeaderLogoMobile />
            </LinkPages>
            <HeaderHamburgerWrapper>
              <HeaderHamburger onClick={() => setIsModalOpen(!isModalOpen)} />
            </HeaderHamburgerWrapper>
          </>
        )}
      </HeaderWrapper>
      <HeaderGoDown />
      <CategoriesNav />
      {isModalOpen && (
        <ModalHeaderBody scrolling={scrolling}>
          <ModalHeaderOverlay onClick={() => setIsModalOpen(false)} />
          <FlexColumnWrap>
            <FlexRowWrap>
              <H3>{modalTitle}</H3>
            </FlexRowWrap>
            <FlexColumnWrap>
              <P onClick={() => setShowCategories(!showCategories)}>
                {showCategories ? 'Back' : 'Explore'}
              </P>
              {showCategories &&
                categories.map((cat) => (
                  <LinkPages to={`/${lang}/${cat.slug}`}>
                    <P onClick={() => setIsModalOpen(!isModalOpen)}>
                      {cat.name}
                    </P>
                  </LinkPages>
                ))}
            </FlexColumnWrap>
          </FlexColumnWrap>
        </ModalHeaderBody>
      )}
    </>
  );
}

export default Header;
