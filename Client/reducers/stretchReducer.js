import * as types from '../constant/actionTypes.js';

const initialState = {
  exercisesFromAPI: [],
};

const stretchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'testCase': {
      return state;
    }
    default:
      return state;
  }
};

export default stretchReducer;
