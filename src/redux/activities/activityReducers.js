import {
  FETCH_ACTIVITY_REQUEST,
  FETCH_ACTIVITY_ERROR,
  FETCH_ACTIVITY_SUCCESS,
} from './activityConstants';

export const activityReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ACTIVITY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        activity: action.payload,
      };

    case FETCH_ACTIVITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
