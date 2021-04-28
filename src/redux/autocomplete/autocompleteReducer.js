import {
  FETCH_AUTOCOMPLETE_REQUEST,
  FETCH_AUTOCOMPLETE_ERROR,
  FETCH_AUTOCOMPLETE_SUCCESS,
} from './autocompleteConstants';

const defaultState = {
  searchResults: [],
  error: undefined,
  loading: false,
};

export const autocompleteListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_AUTOCOMPLETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action.payload,
      };

    case FETCH_AUTOCOMPLETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
