import { SET_TRANSLATIONS } from './translationConstants';

export const translateTexts = (lang) => {
  return (dispatch) => {
    dispatch({ type: SET_TRANSLATIONS, payload: lang });
  };
};
