import { combineReducers } from 'redux';
import auth from './common/auth';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
