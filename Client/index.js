import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

// render app from App.jsx file on the html element with id of app in the index.html page
render(<App />, document.getElementById('app'));
