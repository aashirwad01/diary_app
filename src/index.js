import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createCache from '@emotion/cache';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from './store_data_api/store/configureStore';

const store = configureStore()

export const muiCache = createCache({
    'key': 'mui',
    'prepend': true,
  });

function render(){
  ReactDOM.render (
    <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
  )
};

if(module.hot){
  module.hot.accept('./App.js',function(){
    setTimeout(render);
  })
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
