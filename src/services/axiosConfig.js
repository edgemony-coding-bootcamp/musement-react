import axios from 'axios';
import { BASE_URL, API_VERSION } from '../config.json';

axios.defaults.baseURL = `${BASE_URL}`;

axios.defaults.headers['x-musement-version'] = `${API_VERSION}`;

export const SetLangInEndpoint = (userLang) => {
  axios.defaults.headers['accept-language'] = `${userLang}`;
};
