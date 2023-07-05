import * as types from '../constant/actionTypes';

export const updateExercisesFromAPI = (array) => ({
  type: types.UPDATE_FROM_API,
  payload: array,
});
