import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { fetchSearchResults } from '../redux/autocomplete/autocompleteAction';
import { useDebouncedCallback } from '../utilities';

import { ReactComponent as SearchIcon } from '../assets/img/search-icon.svg';
import {
  SearchInput,
  SearchBarContainer,
  ModalOverlay,
  FlexColumnWrap,
  FlexRowWrap,
  P,
  ModalSearchBody,
  Span,
  Spinner,
  H4,
  H2,
} from '../styles';

function SearchBar({ onHero, mobile, placeholder }) {
  const searchState = useSelector((state) => state.searchResults);
  const { loading, error } = searchState;
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSearch = useDebouncedCallback(() => {
    dispatch(fetchSearchResults(searchQuery));
  }, 700);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      onSearch();
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [searchQuery]);

  const results = searchState.searchResults[0];

  return (
    <SearchBarContainer
      changeBackground={searchQuery.length > 0 ? true : false}
      onHero={onHero}
      mobile={mobile}
    >
      <SearchIcon />
      <SearchInput
        onHero={onHero}
        mobile={mobile}
        placeholder={placeholder}
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClick={() => {
          onHero && setIsModalOpen(true);
        }}
      />
      {isModalOpen && (
        <ModalSearchBody>
          {searchQuery.length < 3 ? (
            <>
              <ModalOverlay onClick={() => setIsModalOpen(false)} />

              <FlexColumnWrap>
                <FlexRowWrap>
                  <H2>Popular searches</H2>
                </FlexRowWrap>
                <FlexRowWrap popular>
                  <H4 onClick={() => setSearchQuery('Milan')}>Milan</H4>
                  <H4 onClick={() => setSearchQuery('Rome')}>Rome</H4>
                  <H4 onClick={() => setSearchQuery('Barcelona')}>Barcelona</H4>
                  <H4 onClick={() => setSearchQuery('Paris')}>Paris</H4>
                  <H4 onClick={() => setSearchQuery('Florence')}>Florence</H4>
                  <H4 onClick={() => setSearchQuery('Sagrada Familia')}>
                    Sagrada Familia
                  </H4>
                  <H4 onClick={() => setSearchQuery('Colosseum')}>Colosseum</H4>
                  <H4 onClick={() => setSearchQuery('Eiffel Tower')}>
                    Eiffel Tower
                  </H4>
                </FlexRowWrap>
              </FlexColumnWrap>
            </>
          ) : loading ? (
            <Spinner />
          ) : results ? (
            <>
              <ModalOverlay onClick={() => setIsModalOpen(false)} />
              <FlexColumnWrap>
                <FlexColumnWrap>
                  {results?.items.map((i) => (
                    <P key={i.id} onClick={() => setIsModalOpen(false)}>
                      {i.title}
                      <br />
                      <Span>{i.hint}</Span>
                    </P>
                  ))}
                </FlexColumnWrap>
              </FlexColumnWrap>
            </>
          ) : error ? (
            <FlexRowWrap>
              <H4 onClick={() => setIsModalOpen(false)}>
                Search Failed, please try again in a moment.
              </H4>
            </FlexRowWrap>
          ) : null}
        </ModalSearchBody>
      )}
    </SearchBarContainer>
  );
}

export default SearchBar;
