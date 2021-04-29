import {
  FETCH_POPULAR_EXPERIENCES_ERROR,
  FETCH_POPULAR_EXPERIENCES_REQUEST,
  FETCH_POPULAR_EXPERIENCES_SUCCESS,
} from './popularExperienceConstants';

const defaultState = {
  popularExperiences: [],
  error: undefined,
  loading: false,
};

export const popularExperienceListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_EXPERIENCES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_POPULAR_EXPERIENCES_SUCCESS:
      return {
        ...state,
        loading: false,
        popularExperiences: action.payload,
      };

    case FETCH_POPULAR_EXPERIENCES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
