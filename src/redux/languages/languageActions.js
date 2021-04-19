import { SET_USER_LANGUAGE } from './languageConstants';

export const setUserLang = (lang) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_LANGUAGE, payload: lang });
  };
};
