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
      const { data: popularExperiences } = await axios.get(
        '/events?vertical_in=1&vertical_in=2&vertical_in=3&vertical_in=4&vertical_in=5&vertical_in=6&vertical_in=7&limit=100&offset=0&sort_by=-relevance'
      );
      dispatch({
        type: FETCH_POPULAR_EXPERIENCES_SUCCESS,
        payload: popularExperiences,
      });
    } catch (e) {
      dispatch({ type: FETCH_POPULAR_EXPERIENCES_ERROR, payload: e });
    }
  };
};
