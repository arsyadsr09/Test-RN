// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import usersReducer from './users';

// Redux: Root Reducer
const rootReducer = combineReducers({
  usersReducer: usersReducer,
});

// Exports
export default rootReducer;
