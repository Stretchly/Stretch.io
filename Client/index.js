/**
 * ************************************
 *
 * @module  App.jsx
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/03/23
 * @description index file to render app
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import './stylesheets/styles.css';
import { Provider } from 'react-redux';
import store from './store.js';
// import { createRoot } from 'react-dom/client';

// render app from App.jsx file on the html element with id of app in the index.html page
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
