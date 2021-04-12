import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoryListReducer } from './categories/categoryReducers';

// import { starshipReducers } from './starships/starshipReducers';
// import { userReducers } from './users/userReducer';
/* Combined Reducers */

const categoriesReducer = categoryListReducer;

const defaultStore = {
	categories: {
		categories: [],
		error: null,
		loading: false,
	},
};

const middleware = [thunk];

const store = createStore(
	categoriesReducer,
	defaultStore,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
