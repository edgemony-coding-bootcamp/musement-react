import { SET_USER_CURRENCY } from './currencyConstants';
import { CURRENCIES, DEF_CURR } from '../../config.json';

export const currencyReducer = (state = {}, action) => {
  const currency = action.payload;

  const matched = CURRENCIES.find((item) => item.code === currency);
  const defaultCurr = CURRENCIES.find((item) => item.code === DEF_CURR);

  switch (action.type) {
    case SET_USER_CURRENCY:
      return {
        userCurrency: matched?.code || defaultCurr.code,
      };

    default:
      return state;
  }
};
