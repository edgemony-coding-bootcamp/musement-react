import axios from 'axios';
import {
  FETCH_EXPERIENCES_REQUEST,
  FETCH_EXPERIENCES_ERROR,
  FETCH_EXPERIENCES_SUCCESS,
} from './experienceConstants';

export const expIds = [88080 /* , 87218, 35703 */];

export const fetchExperiences = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_EXPERIENCES_REQUEST });
    Promise.all(
      expIds.map((expId) => {
        try {
          axios.get(`/activities/${expId}`).then((res) => {
            dispatch({ type: FETCH_EXPERIENCES_SUCCESS, payload: res.data });
          });
        } catch (e) {
          dispatch({ type: FETCH_EXPERIENCES_ERROR, payload: e });
        }
      })
    );
  };
};
