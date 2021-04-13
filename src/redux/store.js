import { applyMiddleware, combineReducers, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoryListReducer } from './categories/categoryReducers';
import { inspirationListReducer } from './inspirations/inspirationReducers';
import { experienceListReducer } from './experiences/experienceReducers';
import { languageReducer } from './languages/languageReducers';

/* Combined Reducers */

axios.defaults.baseURL = 'https://sandbox.musement.com/api/v3/';
axios.defaults.headers = {
  'x-musement-version': '3.4.0',
  'accept-language': 'en-GB',
};

const reducer = combineReducers({
  languages: languageReducer,
  categories: categoryListReducer,
  inspirations: inspirationListReducer,
  experiences: experienceListReducer,
});

const defaultStore = {
  languages: {
    uk: 'en-GB',
  },
  categories: {
    categories: [],
    error: null,
    loading: false,
  },
  inspirations: {
    inspirations: [],
    error: null,
    loading: false,
  },
  experiences: {
    experiences: [],
    error: null,
    loading: false,
  },
};

const store = createStore(
  reducer,
  defaultStore,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
