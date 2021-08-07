import { ADD_AVENGER } from './actionTypes';

export const addAvenger = avenger => {
  return {
    type: ADD_AVENGER,
    avenger: avenger
  };
};
