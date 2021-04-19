import { SET_USER_LANGUAGE } from './languageConstants';
import { SUPPORTED_LANGUAGES } from '../../config.json';

export const languageReducer = (state = {}, action) => {
  const lang = action.payload;

  // finding the match between the landing url and the supported languages
  const matched = SUPPORTED_LANGUAGES[lang];

  switch (action.type) {
    case SET_USER_LANGUAGE:
      return {
        userLang: matched,
      };

    default:
      return state;
  }
};
