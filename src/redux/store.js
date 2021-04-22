import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoryListReducer } from './categories/categoryReducers';
import { inspirationListReducer } from './inspirations/inspirationReducers';
import { experienceListReducer } from './experiences/experienceReducers';
import { languageReducer } from './languages/languageReducers';
import { currencyReducer } from './currencies/currencyReducers';

import { DEF_LANG, LANGUAGES, DEF_CURR, CURRENCIES } from '../config.json';
import { matchDefaultLang } from '../utilities';

const defaultCurrency = CURRENCIES.find((item) => item.code === DEF_CURR);

/* Combined Reducers */

const reducer = combineReducers({
  languages: languageReducer,
  currencies: currencyReducer,
  categories: categoryListReducer,
  inspirations: inspirationListReducer,
  experiences: experienceListReducer,
});

const defaultStore = {
  languages: {
    userLang: matchDefaultLang(LANGUAGES, DEF_LANG),
  },
  currencies: {
    userCurrency: `${defaultCurrency.code}`,
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
