/**
 * ************************************
 *
 * @module
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/03/23
 * @description drop down menu item for selecting stretch target muscle group and difficulty
 * question: can we pass the data from the drop down menus in menu container to the stretch container to render the stretch components? menu container and stretch container are siblings, do we need a parent to hold both containers?
 *
 * ************************************
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actionCreator/actionCreator.js';

const MenuContainer = (prop) => {
  const dispatch = useDispatch();

    const refreshExercises = () => {
      const muscle = document.getElementById('muscle').value;
      const difficulty = document.getElementById('difficulty').value;
      fetch(
        `http://localhost:3000/api?muscle=${muscle}&difficulty=${difficulty}&type=stretching`
      )
        // .then(data => json(data))
        .then( data => console.log(data) )
        .catch( error => console.log('error'))
        // .then((data) => dispatch(actions.updateExercisesFromAPI(data)))
        // .catch((error) => console.log('Error in MenuContainer.jsx fetch', error));
    };

  return (
    <div>
      <select className="muscle" id="muscle" onChange={() => null}>
        <option value="abdominals">Abdominals</option>
        <option value="abductors">Abductors</option>
        <option value="adductors">Adductors</option>
        <option value="biceps">Biceps</option>
        <option value="calves">Calves</option>
        <option value="chest">Chest</option>
        <option value="forearms">Forearms</option>
        <option value="glutes">Glutes</option>
        <option value="hamstrings">Hamstrings</option>
        <option value="lats">Lats</option>
        <option value="lower_back">Lower Back</option>
        <option value="middle_back">Middle Back</option>
        <option value="neck">Neck</option>
        <option value="quadriceps">Quadriceps</option>
        <option value="traps">Traps</option>
        <option value="triceps">Triceps</option>
      </select>
      <select
        className="difficulty"
        id="difficulty"
        onChange={() => null}
      >
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="expert">Expert</option>
      </select>
    </div>
  );
};

export default MenuContainer;
