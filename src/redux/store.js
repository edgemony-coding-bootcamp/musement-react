import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoryListReducer } from './categories/categoryReducers';
import { inspirationListReducer } from './inspirations/inspirationReducers';
import { experienceListReducer } from './experiences/experienceReducers';
import { languageReducer } from './languages/languageReducers';
import { autocompleteListReducer } from './autocomplete/autocompleteReducer';

import { DEF_LANG, SUPPORTED_LANGUAGES } from '../config.json';

const defaultLang = SUPPORTED_LANGUAGES[DEF_LANG];

/* Combined Reducers */

const reducer = combineReducers({
  languages: languageReducer,
  categories: categoryListReducer,
  inspirations: inspirationListReducer,
  experiences: experienceListReducer,
  searchResults: autocompleteListReducer,
});

const defaultStore = {
  languages: {
    userLang: `${defaultLang}`,
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
  searchResults: {
    searchResults: [],
    inputToSearch: '',
  },
};

const store = createStore(
  reducer,
  defaultStore,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
