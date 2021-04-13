import axios from 'axios';
import {
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from './categoryConstants';

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });
    try {
      const { data: categories } = await axios.get('/verticals');
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories });
    } catch (e) {
      dispatch({ type: FETCH_CATEGORIES_ERROR, payload: e });
    }
  };
};
