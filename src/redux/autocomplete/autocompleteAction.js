import axios from 'axios';
import {
  FETCH_AUTOCOMPLETE_ERROR,
  FETCH_AUTOCOMPLETE_REQUEST,
  FETCH_AUTOCOMPLETE_SUCCESS,
} from './autocompleteConstants';

export const fetchSearchResults = (text) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_AUTOCOMPLETE_REQUEST });
    try {
      const { data: searchResults } = await axios.get(
        `/autocomplete?sort_by=-relevance&activity_limit=3&city_limit=2&venue_limit=2&list_limit=2&text=${text}`
      );
      dispatch({ type: FETCH_AUTOCOMPLETE_SUCCESS, payload: searchResults });
    } catch (e) {
      dispatch({ type: FETCH_AUTOCOMPLETE_ERROR, payload: e });
    }
  };
};
