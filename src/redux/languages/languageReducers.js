import { SET_LANGUAGES } from './languageConstants';

const defaultState = {
	languages: 'en-GB',
};

export const languageReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_LANGUAGES:
			return {
				languages: action.payload,
			};

		default:
			return state;
	}
};
