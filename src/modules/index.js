import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import branchDetail, { branchDetailSaga } from './branch/branchDetail';
import branchList, { branchSaga } from './branch/branchList';
import branchPost, { branchPostSaga } from './branch/branchPost';
import auth, { authSaga } from './common/auth';
import loading from './common/loading';
import employList, { employSaga } from './employ/employList';
import memberList, { memberSaga } from './member/memberList';
import occupationList, { occupationSaga } from './occupation/occupationList';
import occupationPost, {
  occupationPostSaga,
} from './occupation/occupationPost';
import recordList, { recordSaga } from './record/recordList';

const rootReducer = combineReducers({
  auth,
  loading,
  branchList,
  branchPost,
  occupationList,
  occupationPost,
  memberList,
  recordList,
  employList,
  branchDetail,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    branchSaga(),
    branchPostSaga(),
    branchDetailSaga(),
    occupationSaga(),
    occupationPostSaga,
    memberSaga(),
    recordSaga(),
    employSaga(),
  ]);
}

export default rootReducer;
