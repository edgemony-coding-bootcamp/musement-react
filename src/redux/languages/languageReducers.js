import { SET_USER_LANGUAGE } from './languageConstants';
import { LANGUAGES, DEF_LANG } from '../../config.json';
import { getLanguageConfiguration } from '../../utilities';

export const languageReducer = (state = {}, action) => {
  const lang = action.payload;

  const matched = LANGUAGES.find((item) => item.id === lang);

  switch (action.type) {
    case SET_USER_LANGUAGE:
      return {
        userLang: matched?.iso86 || getLanguageConfiguration(DEF_LANG),
      };

    default:
      return state;
  }
};
