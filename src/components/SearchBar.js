import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect, useRef, useCallback } from 'react';

import { fetchSearchResults } from '../redux/autocomplete/autocompleteAction';
import { ReactComponent as SearchIcon } from '../assets/img/search-icon.svg';

import { SearchInput, SearchBarContainer } from '../styles';

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

function SearchBar() {
  const searchState = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();
  console.log(searchState);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');

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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);

  return (
    <SearchBarContainer>
      <SearchIcon />
      <SearchInput
        placeholder='search in experiences and places'
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
