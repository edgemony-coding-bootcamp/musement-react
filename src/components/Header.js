import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { ReactComponent as SearchIcon } from '../assets/img/search-icon.svg';
import { ReactComponent as CloseIcon } from '../assets/img/close-x.svg';

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
  ModalOverlay,
  device,
  ModalHeaderBody,
  H3,
  FlexRowWrap,
  FlexColumnWrap,
  P,
  ModalOverlayMobile,
  Div,
} from '../styles';
import CategoriesNav from './CategoriesNav';
import { useParams } from 'react-router';

function Header() {
  let { lang } = useParams();
  const categoryState = useSelector((state) => state.categories);
  const { categories } = categoryState;
  const { translatedTexts } = useSelector((state) => state.translations);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [isModalSearchOpen, setIsModalSearchOpen] = useState(false);

  let scrolling = useScrolling(133);
  let scrollInitial = useScrolling(1);

  let isDesktop = useMediaQuery(`${device.desktop}`);

  return (
    <>
      <HeaderWrapper scrollInitial={scrollInitial} $scrolling={scrolling}>
        {isDesktop ? (
          <>
            <SearchBar
              isOnHero={false}
              placeholder={`${translatedTexts.searchplaceholderheader}`}
            />
            <LinkPages to='/'>
              <HeaderLogoDesktop />
            </LinkPages>
            <p></p>
          </>
        ) : (
          <>
            <SearchIcon onClick={() => setIsModalSearchOpen(true)} />
            {isModalSearchOpen && (
              <ModalOverlayMobile>
                <FlexRowWrap>
                  <Div>Search for experiences and places</Div>
                  <CloseIcon onClick={() => setIsModalSearchOpen(false)} />
                </FlexRowWrap>
                <SearchBar setIsModalSearchOpen={setIsModalSearchOpen} />
              </ModalOverlayMobile>
            )}
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
          <ModalOverlay onClick={() => setIsModalOpen(false)} />
          <FlexColumnWrap>
            <FlexRowWrap>
              <H3>Menu</H3>
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
