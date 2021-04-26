import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../redux/categories/categoryActions';
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

function Header() {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.categories);

  const { categories } = categoryState;

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCategories());
    }, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState([{ name: 'Explore' }]);
  const [modalTitle, setModalTitle] = useState('Menu');
  const [isModalSearchOpen, setIsModalSearchOpen] = useState(false);

  function ModalHeaderF(e) {
    const a = e.target;
    const b = a.textContent;
    if (b === 'Back') {
      setModalTitle('Menu');
      setModalSrc([{ name: 'Explore' }]);
    } else if (b === 'Explore') {
      setModalSrc(categories);
      setModalTitle('Back');
      return <P>{categories.map((cat) => cat.slug)}</P>;
    }
  }

  let scrolling = useScrolling(133);
  let scrollInitial = useScrolling(1);

  let isDesktop = useMediaQuery(`${device.desktop}`);

  return (
    <>
      <HeaderWrapper scrollInitial={scrollInitial} scrolling={scrolling}>
        {isDesktop ? (
          <>
            <SearchBar placeholder={'Search in experiences and places'} />
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
                <SearchBar />
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
              <H3 onClick={(e) => ModalHeaderF(e)}>{modalTitle}</H3>
            </FlexRowWrap>{' '}
            <FlexColumnWrap>
              {modalSrc.map((i) => (
                <P onClick={(e) => ModalHeaderF(e)}>{i.name}</P>
              ))}
            </FlexColumnWrap>
          </FlexColumnWrap>
        </ModalHeaderBody>
      )}
    </>
  );
}

export default Header;
