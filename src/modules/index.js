import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './common/auth';
import loading from './common/loading';
import branchList, { branchSaga } from './branch/branchList';
import branchPost, { branchPostSaga } from './branch/branchPost';
import branchDetail, { branchDetailSaga } from './branch/branchDetail';

const rootReducer = combineReducers({
  auth,
  loading,
  branchList,
  branchPost,
  branchDetail,
});

export function* rootSaga() {
  yield all([authSaga(), branchSaga(), branchPostSaga(), branchDetailSaga()]);
}

export default rootReducer;
