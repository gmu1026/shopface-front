import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './common/auth';
import loading from './common/loading';
import branchList, { branchSaga } from './branch/branchList';
import branchPost, { branchPostSaga } from './branch/branchPost';

const rootReducer = combineReducers({
  auth,
  loading,
  branchList,
  branchPost,
});

export function* rootSaga() {
  yield all([authSaga(), branchSaga(), branchPostSaga()]);
}

export default rootReducer;
