import { combineReducers } from 'redux';
import avengerReducer from './avengerreducer';
import searchReducer from './searchreducer';

const rootReducer = combineReducers({
  avengers: avengerReducer,
  search: searchReducer
});

export default rootReducer;
