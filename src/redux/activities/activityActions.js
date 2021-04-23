import axios from 'axios';
import {
  FETCH_ACTIVITY_ERROR,
  FETCH_ACTIVITY_REQUEST,
  FETCH_ACTIVITY_SUCCESS,
} from './activityConstants';

export const getActivityById = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ACTIVITY_REQUEST });
    try {
      const { data: activity } = await axios.get(`/activities/${id}`);
      dispatch({ type: FETCH_ACTIVITY_SUCCESS, payload: activity });
    } catch (e) {
      dispatch({ type: FETCH_ACTIVITY_ERROR, payload: e });
    }
  };
};
