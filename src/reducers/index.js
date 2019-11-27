// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import usersReducers from './users';

// Redux: Root Reducer
const rootReducer = combineReducers({
  usersReducers: usersReducers,
});

// Exports
export default rootReducer;
