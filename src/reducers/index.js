import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import viewReducer from './viewReducer';

const appReducer = combineReducers({
  routing: routerReducer,
  views: viewReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;