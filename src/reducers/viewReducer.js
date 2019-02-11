import { combineReducers } from 'redux';
import stepAReducer from './stepAReducer';
import stepBReducer from './stepBReducer';
import stepCReducer from './stepCReducer';
import stepDReducer from './stepDReducer';

export default combineReducers({
  stepA: stepAReducer,
  stepB: stepBReducer,
  stepC: stepCReducer,
  stepD: stepDReducer,
})