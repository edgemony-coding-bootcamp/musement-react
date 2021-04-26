import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoryListReducer } from './categories/categoryReducers';
import { inspirationListReducer } from './inspirations/inspirationReducers';
import { experienceListReducer } from './experiences/experienceReducers';
import { languageReducer } from './languages/languageReducers';
import { currencyReducer } from './currencies/currencyReducers';
import { translationReducer } from './translations/translationReducers';

import {
  DEF_LANG,
  DEFAULT_CURRENCY,
  CURRENCIES,
  TRANSLATIONS,
} from '../config.json';
import { getLanguageConfiguration } from '../utilities';
import { activityReducer } from './activities/activityReducers';

const defaultCurrency = CURRENCIES.find(
  (item) => item.code === DEFAULT_CURRENCY
);

/* Combined Reducers */

const reducer = combineReducers({
  languages: languageReducer,
  currencies: currencyReducer,
  translations: translationReducer,
  categories: categoryListReducer,
  activity: activityReducer,
  inspirations: inspirationListReducer,
  experiences: experienceListReducer,
});

const defaultStore = {
  languages: {
    userLang: getLanguageConfiguration(DEF_LANG),
  },
  currencies: {
    userCurrency: `${defaultCurrency.code}`,
  },
  translations: {
    translatedTexts: TRANSLATIONS[getLanguageConfiguration(DEF_LANG)],
  },
  categories: {
    categories: [],
    error: null,
    loading: false,
  },
  activity: {
    activity: [],
    media: [],
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
