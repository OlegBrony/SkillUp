import { combineReducers } from 'redux';
import { homeReducer } from './homeReducer';

export const rootReducer = combineReducers({
  Home: homeReducer
})
