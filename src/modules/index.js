import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import branchDetail, { branchDetailSaga } from './branch/branchDetail';
import branchList, { branchSaga } from './branch/branchList';
import branchPost, { branchPostSaga } from './branch/branchPost';
import auth, { authSaga } from './common/auth';
import loading from './common/loading';
import employList, { employSaga } from './employ/employList';
import employPost, { employPostSaga } from './employ/employPost';
import employDetail, { employDetailSaga } from './employ/employDetail';
import memberList, { memberSaga } from './member/memberList';
import memberDetail, { memberDetailSaga } from './member/memberDetail';
import occupationList, {
  occupationSaga,
  occupationPostSaga,
  occupationUpdateSaga,
  occupationDeleteSaga,
} from './occupation/occupationList';

import recordList, { recordSaga } from './record/recordList';
import select from './common/select';

const rootReducer = combineReducers({
  auth,
  loading,
  branchList,
  branchPost,
  branchDetail,
  occupationList,
  memberList,
  recordList,
  employList,
  employPost,
  employDetail,
  memberDetail,
  select,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    branchSaga(),
    branchPostSaga(),
    branchDetailSaga(),
    occupationSaga(),
    occupationPostSaga(),
    occupationUpdateSaga(),
    occupationDeleteSaga(),
    memberSaga(),
    recordSaga(),
    employSaga(),
    employPostSaga(),
    employDetailSaga(),
    memberDetailSaga(),
  ]);
}

export default rootReducer;
