import axios from 'axios';
import { BASE_URL, API_VERSION } from '../config.json';

export const setUrlandVersionHeader = () => {
  axios.defaults.baseURL = `${BASE_URL}`;
  axios.defaults.headers['x-musement-version'] = `${API_VERSION}`;
};

export const setLangHeader = (userLang) => {
  axios.defaults.headers['accept-language'] = `${userLang}`;
  console.log(axios.defaults.headers['accept-language']);
};
