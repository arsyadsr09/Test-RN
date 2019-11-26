// Imports Constant
import {SET_USERS} from '../constant/types';

// Get Users
export const getUsers = data => {
  return {
    types: SET_USERS,
    payload: {
      data,
    },
  };
};
