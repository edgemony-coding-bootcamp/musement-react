import {
	FETCH_INSPIRATIONS_REQUEST,
	FETCH_INSPIRATIONS_ERROR,
	FETCH_INSPIRATIONS_SUCCESS,
} from './inspirationConstants';

const defaultState = {
  inspirations: [],
  error: undefined,
  loading: false
};

export const inspirationListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_INSPIRATIONS_REQUEST:
			return {
        ...state,
				loading: true,
			};

		case FETCH_INSPIRATIONS_SUCCESS:
			return {
        ...state,
				loading: false,
				inspirations: action.payload,
			};

		case FETCH_INSPIRATIONS_ERROR:
			return {
        ...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};