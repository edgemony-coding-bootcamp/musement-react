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
  stylesVar,
  ModalHeaderBody,
  H3,
  FlexRowWrap,
  FlexColumnWrap,
  P,
} from '../styles';

function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  const categoryState = useSelector((state) => state.categories);
  const { categories, loading, error } = categoryState;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState([{ name: 'Explore' }]);
  const [modalTitle, setModalTitle] = useState('Menu');

  function ModalHeaderF(e) {
    const a = e.target;
    const b = a.textContent;
    if (b === 'Back') {
      setModalTitle('Menu');
      setModalSrc([{ name: 'Explore' }]);
    } else if (b === 'Explore') {
      console.log(b);
      setModalSrc(categories);
      setModalTitle('Back');
      return <P>{categories.map((cat) => cat.name)}</P>;
    }
  }

  let scrolling = useScrolling(133);
  let scrollInitial = useScrolling(1);

  let isDesktop = useMediaQuery(`(${stylesVar.desktopMediaQuery})`);

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
      {isModalOpen && (
        // why this overlay don't work?
        // <ModalHeaderOverlay onClick={() => setIsModalOpen(false)}>
        <ModalHeaderBody scrolling={scrolling}>
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
        // </ModalHeaderOverlay>
      )}
    </>
  );
}

export default Header;
