/**
 * ************************************
 *
 * @module  Stretch
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description stretch box
 *
 * ************************************
 */

import React from 'react';

const Stretch = (props) => {
  props = props.exercises;
  // insert any logic for the Stretch here
  // return stretch component with passed-in props from query to server
  return (
    <div className='stretchCard'>
      <h3>{props.name}</h3>
      <ul>
        <li>
          <strong>Equipment:</strong> {props.equipment}
        </li>
        <li>
          <strong>Difficulty:</strong> {props.difficulty}
        </li>
        <li>
          <strong>Instructions:</strong> {props.instructions}
        </li>
      </ul>
    </div>
  );
};
export default Stretch;
