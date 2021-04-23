import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect, useRef, useCallback } from 'react';

import { fetchSearchResults } from '../redux/autocomplete/autocompleteAction';

import { ReactComponent as SearchIcon } from '../assets/img/search-icon.svg';
import {
  SearchInput,
  SearchBarContainer,
  ModalHeaderBody,
  ModalHeaderOverlay,
  FlexColumnWrap,
  FlexRowWrap,
  H3,
  P,
  ModalSearchBody,
  Span,
} from '../styles';

const useDebouncedCallback = (func, wait) => {
  const timeout = useRef();

  return useCallback(
    (...args) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, wait);
    },
    [func, wait]
  );
};

function SearchBar({ onHero }) {
  const searchState = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState([{ name: 'Explore' }]);
  const [modalTitle, setModalTitle] = useState('Menu');

  const onSearch = useDebouncedCallback(() => {
    const response = searchQuery.toUpperCase();
    setSearchResults(response);
  }, 2000);

  useEffect(() => {
    onSearch();
  }, [searchQuery, onSearch]);

  useEffect(() => {
    if (searchResults.length >= 3) {
      dispatch(fetchSearchResults(searchResults));
      console.log(searchState);

      setIsModalOpen(true);
    }
    if (searchResults.length < 3) {
      setIsModalOpen(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);

  function ModalSearchFunction(e) {
    const a = e.target;
    const b = a.textContent;
    if (b === 'Back') {
      setModalTitle('Menu');
      setModalSrc([{ name: 'Explore' }]);
    } else if (b === 'Explore') {
      setModalSrc(searchState);
      setModalTitle('Back');
      return <P>{searchState.map((cat) => cat.name)}</P>;
    }
  }
  function handleModalChange(e) {
    ModalSearchFunction(e);
    setIsModalOpen(false);
  }

  function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
  }

  const result = searchResults ? searchState.searchResults[0] : null;

  return (
    <SearchBarContainer
      changeBackground={searchQuery.length > 0 ? true : false}
      onHero={onHero}
    >
      <SearchIcon />
      <SearchInput
        onHero={onHero}
        placeholder='Search in experiences and places'
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />{' '}
      {isModalOpen && (
        <ModalSearchBody>
          <ModalHeaderOverlay onClick={() => setIsModalOpen(false)} />
          <FlexColumnWrap>
            <FlexRowWrap>
              <H3
                onClick={(e) => {
                  ModalSearchFunction(e);
                  // eslint-disable-next-line prettier/prettier
                }}>
                {result && capitalizeFirstLetter(result?.type)}
              </H3>
            </FlexRowWrap>
            <FlexColumnWrap>
              {result?.items.map((i) => (
                <P key={i.id} onClick={(e) => handleModalChange(e)}>
                  {i.title}
                  <br />
                  <Span>{i?.hint}</Span>
                </P>
              ))}
            </FlexColumnWrap>
          </FlexColumnWrap>
        </ModalSearchBody>
      )}
    </SearchBarContainer>
  );
}

export default SearchBar;
