import { SET_USER_CURRENCY } from './currencyConstants';
import { CURRENCY, DEF_CURR } from '../../config.json';

export const currencyReducer = (state = {}, action) => {
  const currency = action.payload;

  const matched = CURRENCY.find((item) => item.id === currency);
  const defaultCurr = CURRENCY.find((item) => item.id === DEF_CURR);

  switch (action.type) {
    case SET_USER_CURRENCY:
      return {
        userCurrency: matched?.code || defaultCurr.code,
      };

    default:
      return state;
  }
};
