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
  LinkPages,
} from '../styles';
import { useRouteMatch } from 'react-router';

function SearchBar({ onHero, mobile, placeholder, setIsModalSearchOpen }) {
  let { path } = useRouteMatch();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const results = searchState.searchResults[0];

  return (
    <SearchBarContainer
      changeBackground={searchQuery.length > 0 ? true : false}
      $onHero={onHero}
      // eslint-disable-next-line prettier/prettier
      mobile={mobile}>
      <SearchIcon />
      <SearchInput
        $onHero={onHero}
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
                    <LinkPages
                      key={i.id}
                      to={`${path}/activities/${i.id}`}
                      onClick={() => {
                        setIsModalOpen(false);
                        setIsModalSearchOpen && setIsModalSearchOpen(false);
                        // eslint-disable-next-line prettier/prettier
                      }}>
                      <P key={i.id}>
                        {i.title}
                        <br />
                        <Span>{i.hint}</Span>
                      </P>
                    </LinkPages>
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
