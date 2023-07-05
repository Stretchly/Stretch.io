/**
 * ************************************
 *
 * @module  stretchReducer
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description reducer for stretch
 *
 * ************************************
 */
import * as types from '../constant/actionTypes.js';

const initialState = {
  exercisesFromAPI: [],
};

const stretchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FROM_API: {
      return {...state, exercisesFromAPI : action.payload};
    }
    default:
      return state;
  }
};

export default stretchReducer;
