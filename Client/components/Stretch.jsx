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
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';

const Stretch = (props) => {
  props = props.exercises;
  // insert any logic for the Stretch here
  let FavIcon;

  // if (fav)
  //   FavIcon = (
  //     <span className="favIcon">
  //       <FAIcon
  //         onClick={() => props.favClicked(id)}
  //         icon={solidStar}
  //         style={{ color: '#ff7300' }}
  //       />
  //     </span>
  //   );
  // else
  //   FavIcon = (
  // <span className="favIcon">
  //   <FAIcon onClick={() => props.favClicked(id)} icon={regStar} />
  // </span>;
  //   );
  // return stretch component with passed-in props from query to server
  return (
    <div className="stretchCard">
      <h3>{props.name}</h3>
      {/* need logic to make Fav Icon then comment this back in and delete other */}
      <span className="favIcon">
        <FAIcon onClick={() => props.favClicked(id)} icon={regStar} />
      </span>
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
