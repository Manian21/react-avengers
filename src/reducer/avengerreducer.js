import { Avengers_Initial_State } from '../store/avengersstaticdata';

const reducer = (state = Avengers_Initial_State, action) => {
  switch (action.type) {
    case 'ADD':
      return state;
    default:
      return state;
  }
};

export default reducer;
