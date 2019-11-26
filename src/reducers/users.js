// Imports Constant
import {SET_USERS} from '../constant/types';

// Initial State
const initialState = {
  users: [],
};
// Reducers (Modifies The State And Returns A New State)
const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    // Set Users
    case SET_USERS:
      return {
        // State
        ...state,
        // Redux Store
        users: action.payload.data,
      };

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default usersReducers;
