import { SET_LANGUAGES } from './languageConstants';

export const setLanguage = () => {
  return (dispatch) => {
    dispatch({ type: SET_LANGUAGES });
  };
};
