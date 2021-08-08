import {
  ADD_AVENGER,
  SELECTED_AVENGER,
  CLOSE_SELECTED_AVENGER,
  LIKED_AVENGER,
  RATED_AVENGER
} from './actionTypes';

export const addAvenger = avenger => {
  return {
    type: ADD_AVENGER,
    avenger: avenger
  };
};

export const selectedAvenger = avenger => {
  return {
    type: SELECTED_AVENGER,
    avenger: avenger
  };
};

export const closeSelectedAvenger = () => {
  return {
    type: CLOSE_SELECTED_AVENGER
  };
};

export const likedAvenger = avenger => {
  return {
    type: LIKED_AVENGER,
    likedAvenger: avenger
  };
};

export const ratingAvenger = ratingDtl => {
  return {
    type: RATED_AVENGER,
    ratingDtl: ratingDtl
  };
};
