import axios from 'axios';
import {
	FETCH_INSPIRATIONS_ERROR,
	FETCH_INSPIRATIONS_REQUEST,
	FETCH_INSPIRATIONS_SUCCESS,
} from './inspirationConstants';

export const fetchInspirations = () => {
	return async (dispatch) => {
		dispatch({ type: FETCH_INSPIRATIONS_REQUEST });
		try {
			const { data: inspirations } = await axios.get('/lists?offset=0&limit=10&listtypes=3&exclude_not_tagged=0');
			dispatch({ type: FETCH_INSPIRATIONS_SUCCESS, payload: inspirations });
		} catch (e) {
			dispatch({ type: FETCH_INSPIRATIONS_ERROR, payload: e });
		}
	};
};
