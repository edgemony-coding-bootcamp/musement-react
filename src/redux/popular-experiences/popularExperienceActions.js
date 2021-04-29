import axios from 'axios';
import {
  FETCH_POPULAR_EXPERIENCES_ERROR,
  FETCH_POPULAR_EXPERIENCES_REQUEST,
  FETCH_POPULAR_EXPERIENCES_SUCCESS,
} from './popularExperienceConstants';

export const fetchPopularExperiences = (idCategory) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POPULAR_EXPERIENCES_REQUEST });
    try {
      const { data: popularExperiences } = await axios.get(
        `/events?vertical_in=${idCategory}&limit=12&offset=0&sort_by=-relevance`
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
