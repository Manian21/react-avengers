import { combineReducers } from 'redux';
import avengerReducer from './avengerreducer';

const rootReducer = combineReducers({
  avengers: avengerReducer
});

export default rootReducer;
