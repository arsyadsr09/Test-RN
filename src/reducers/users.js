/* eslint-disable no-fallthrough */
// Imports Constant
import {GET_USERS} from '../constant/types';

// Initial State
const initialState = {
  list: {
    data: [],
    total: 0,
  },
  detail: {},
};
// Reducers (Modifies The State And Returns A New State)
export default function usersReducers(state = initialState, action) {
  switch (action.type) {
    // Set Users
    case GET_USERS:
      return {
        // State
        ...state,
        // Redux Store
        list: {
          ...state.list,
          data: action.payload.data,
          total: action.payload.total,
        },
      };

    // Default
    default: {
      return state;
    }
  }
}
