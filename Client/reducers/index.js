import { combineReducers } from 'redux';
import stretchReducer from './stretchReducer';

const reducers = combineReducers({
  stretch: stretchReducer,
});

export default reducers;
