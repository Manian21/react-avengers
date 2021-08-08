import { Avengers_Initial_State } from '../store/avengersstaticdata';
import {
  ADD_AVENGER,
  SELECTED_AVENGER,
  CLOSE_SELECTED_AVENGER,
  LIKED_AVENGER,
  RATED_AVENGER
} from '../action/actionTypes';

const reducer = (state = Avengers_Initial_State, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_AVENGER:
      return state;
    case SELECTED_AVENGER:
      console.log(action.avenger);
      return { ...state, selectedAvenger: action.avenger };
    case CLOSE_SELECTED_AVENGER:
      return { ...state, selectedAvenger: null };
    case LIKED_AVENGER:
      let newAvengers = state.avengersList.filter(
        avenger => avenger.id !== action.likedAvenger.id
      );
      let likedAvenger = {
        ...action.likedAvenger,
        liked: !action.likedAvenger.liked
      };
      newAvengers = newAvengers.concat(likedAvenger);

      return {
        ...state,
        avengersList: newAvengers,
        selectedAvenger: likedAvenger
      };
    case RATED_AVENGER:
      let avengers = state.avengersList.filter(
        avenger => avenger.id !== action.ratingDtl.id
      );
      let ratedAvenger = {
        ...state.avengersList.find(
          avenger => avenger.id === action.ratingDtl.id
        )
      };
      ratedAvenger[action.ratingDtl.key] = action.ratingDtl.value;
      avengers = avengers.concat(ratedAvenger);
      return {
        ...state,
        avengersList: avengers,
        selectedAvenger: ratedAvenger
      };
    default:
      return state;
  }
};

export default reducer;
