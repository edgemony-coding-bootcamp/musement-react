import {
  FETCH_EXPERIENCES_REQUEST,
  FETCH_EXPERIENCES_ERROR,
  FETCH_EXPERIENCES_SUCCESS,
} from './experienceConstants';

export const experienceListReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_EXPERIENCES_SUCCESS:
      return {
        ...state,
        loading: false,
        experiences: action.payload,
      };

    case FETCH_EXPERIENCES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
