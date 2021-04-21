import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoryListReducer } from './categories/categoryReducers';
import { inspirationListReducer } from './inspirations/inspirationReducers';
import { experienceListReducer } from './experiences/experienceReducers';
import { languageReducer } from './languages/languageReducers';

import { DEF_LANG, LANGUAGES } from '../config.json';

const defaultLang = LANGUAGES.find((item) => item.id === DEF_LANG);

/* Combined Reducers */

const reducer = combineReducers({
  languages: languageReducer,
  categories: categoryListReducer,
  inspirations: inspirationListReducer,
  experiences: experienceListReducer,
});

const defaultStore = {
  languages: {
    userLang: `${defaultLang.iso86}`,
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
