import axios from 'axios';
import { BASE_URL, API_VERSION, DEF_CURR } from '../config.json';

export const setUrlandVersionHeader = () => {
  axios.defaults.baseURL = `${BASE_URL}`;
  axios.defaults.headers['x-musement-version'] = `${API_VERSION}`;
  axios.defaults.headers['x-musement-currency'] = `${DEF_CURR}`;
};

export const setLangHeader = (userLang) => {
  axios.defaults.headers['accept-language'] = `${userLang}`;
};

export const setCurrencyHeader = (userCurr) => {
  axios.defaults.headers['x-musement-currency'] = `${userCurr}`;
};
