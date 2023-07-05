/**
 * ************************************
 *
 * @module
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/03/23
 * @description main app container rendering 3 child containers
 *
 * ************************************
 */

import React from 'react';
import TimerContainer from './containers/TimerContainer.jsx';
import MenuContainer from './containers/MenuContainer.jsx';
import StretchContainer from './containers/StretchContainer.jsx';
import './stylesheets/styles.css';

// Init func app that returns our main containers
const App = () => {
  return (
    <div>
      <TimerContainer />
      <MenuContainer />
      <StretchContainer />
    </div>
  );
};

export default App;
