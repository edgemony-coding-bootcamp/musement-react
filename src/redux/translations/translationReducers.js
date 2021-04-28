import { SET_TRANSLATIONS } from './translationConstants';
import { TRANSLATIONS } from '../../config.json';
import { translate } from '../../utilities';

export const translationReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TRANSLATIONS:
      return {
        translatedTexts: translate(TRANSLATIONS, action.payload),
      };

    default:
      return state;
  }
};
