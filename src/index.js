import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setUrlandVersionHeader } from './services/axiosConfig';

// setting the url and api version in axios
setUrlandVersionHeader();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
