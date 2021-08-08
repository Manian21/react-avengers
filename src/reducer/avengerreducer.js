import { Avengers_Initial_State } from '../store/avengersstaticdata';
import {
  ADD_AVENGER,
  SELECTED_AVENGER,
  CLOSE_SELECTED_AVENGER,
  LIKED_AVENGER
} from '../action/actionTypes';

const reducer = (state = Avengers_Initial_State, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_AVENGER:
      return state;
    case SELECTED_AVENGER:
      return { ...state, selectedAvenger: action.avenger };
    case CLOSE_SELECTED_AVENGER:
      return { ...state, selectedAvenger: null };
    case LIKED_AVENGER:
      let newAvengers = state.avengersList.filter(
        avenger => avenger.id !== action.likedAvenger
      );
      let likedAvenger = {
        ...action.likedAvenger,
        liked: !action.likedAvenger.liked
      };
      newAvengers.concat(likedAvenger);

      return {
        ...state,
        avengersList: newAvengers,
        selectedAvenger: likedAvenger
      };
    default:
      return state;
  }
};

export default reducer;
