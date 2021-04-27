import { SET_USER_CURRENCY } from './currencyConstants';

export const currencyReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_CURRENCY:
      return {
        userCurrency: action.payload,
      };

    default:
      return state;
  }
};
