import * as types from '../constant/actionTypes';

export const updateExercisesFromAPI = (array) => ({
  type: types.UPDATE_FROM_API,
  payload: array,
});

export const updateUSER_LOG_ON = () => ({
  type: types.USER_LOG_ON,
  payload: "to be determined"
})

export const updateUSER_LOG_OFF = () => ({
  type: types.USER_LOG_OFF,
  payload: 'probably none'
})