import { SET_USER_CURRENCY } from './currencyConstants';

export const setUserCurrency = (currency) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_CURRENCY, payload: currency });
  };
};
