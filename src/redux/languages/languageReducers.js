import { SET_USER_LANGUAGE } from './languageConstants';
import { LANGUAGES, DEF_LANG } from '../../config.json';

export const languageReducer = (state = {}, action) => {
  const lang = action.payload;

  const matched = LANGUAGES.find((item) => item.id === lang);
  const defaultLang = LANGUAGES.find((item) => item.id === DEF_LANG);

  switch (action.type) {
    case SET_USER_LANGUAGE:
      return {
        userLang: matched?.iso86 || defaultLang.iso86,
      };

    default:
      return state;
  }
};
