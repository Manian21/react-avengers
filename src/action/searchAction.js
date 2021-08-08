import { SEARCH_AVENGER } from './actionTypes';

export const searchAvenger = search => {
  return {
    type: SEARCH_AVENGER,
    search: search
  };
};
