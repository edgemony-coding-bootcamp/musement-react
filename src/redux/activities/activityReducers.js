import {
  FETCH_ACTIVITY_REQUEST,
  FETCH_ACTIVITY_ERROR,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_MEDIA_REQUEST,
  FETCH_ACTIVITY_MEDIA_SUCCESS,
  FETCH_ACTIVITY_MEDIA_ERROR,
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
    case FETCH_ACTIVITY_MEDIA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ACTIVITY_MEDIA_SUCCESS:
      return {
        ...state,
        loading: false,
        media: action.payload,
      };

    case FETCH_ACTIVITY_MEDIA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
