import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './common/auth';
import loading from './common/loading';
import branchList, { branchSaga } from './branch/branchList';
import branchPost, { branchPostSaga } from './branch/branchPost';
import occupationList, { occupationSaga } from './occupation/occupationList';
import occupationPost, {
  occupationPostSaga,
} from './occupation/occupationPost';
import memberList, { memberSaga } from './member/memberList';
import recordList, { recordSaga } from './record/recordList';
import employList, { employSaga } from './employ/employList';

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
});

export function* rootSaga() {
  yield all([
    authSaga(),
    branchSaga(),
    branchPostSaga(),
    occupationSaga(),
    occupationPostSaga,
    memberSaga(),
    recordSaga(),
    employSaga(),
  ]);
}

export default rootReducer;
