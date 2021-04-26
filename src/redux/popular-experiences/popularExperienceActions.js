import axios from 'axios';
import {
  FETCH_POPULAR_EXPERIENCES_ERROR,
  FETCH_POPULAR_EXPERIENCES_REQUEST,
  FETCH_POPULAR_EXPERIENCES_SUCCESS,
} from './popularExperienceConstants';

export const fetchPopularExperiences = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POPULAR_EXPERIENCES_REQUEST });
    try {
      const { data: popularExperiences } = await axios.get('/events');
      dispatch({
        type: FETCH_POPULAR_EXPERIENCES_SUCCESS,
        payload: popularExperiences,
      });
    } catch (e) {
      dispatch({ type: FETCH_POPULAR_EXPERIENCES_ERROR, payload: e });
    }
  };
};
