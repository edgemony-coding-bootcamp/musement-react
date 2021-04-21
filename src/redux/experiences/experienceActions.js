import axios from 'axios';
import {
  FETCH_EXPERIENCES_REQUEST,
  FETCH_EXPERIENCES_ERROR,
  FETCH_EXPERIENCES_SUCCESS,
} from './experienceConstants';

export const expIds = [88080, 87218, 35703];

export const fetchExperiences = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_EXPERIENCES_REQUEST });
    let totalExperiences = [];
    Promise.all(
      // eslint-disable-next-line array-callback-return
      expIds.map((expId) => {
        try {
          axios.get(`/activities/${expId}`).then((res) => {
            totalExperiences = [...totalExperiences, res.data];
            dispatch({
              type: FETCH_EXPERIENCES_SUCCESS,
              payload: totalExperiences,
            });
          });
        } catch (e) {
          dispatch({ type: FETCH_EXPERIENCES_ERROR, payload: e });
        }
      })
    );
  };
};
