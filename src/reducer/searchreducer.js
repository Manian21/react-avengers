import { Search_Initial_State } from '../store/avengersstaticdata';
import { SEARCH_AVENGER } from '../action/actionTypes';

const reducer = (state = Search_Initial_State, action) => {
  switch (action.type) {
    case SEARCH_AVENGER:
      return { value: action.search };
    default:
      return state;
  }
};

export default reducer;
