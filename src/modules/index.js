import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import branchDetail, { branchDetailSaga } from './branch/branchDetail';
import branchList, { branchSaga } from './branch/branchList';
import branchPost, { branchPostSaga } from './branch/branchPost';
import branchSelect from './branch/branchSelect';
import auth, { authSaga } from './common/auth';
import authCode, { authCodeSaga } from './common/authCode';
import loading from './common/loading';
import employDetail, { employDetailSaga } from './employ/employDetail';
import employList, { employSaga } from './employ/employList';
import employPost, { employPostSaga } from './employ/employPost';
import memberDetail, { memberDetailSaga } from './member/memberDetail';
import occupationList, {
  occupationSaga,
  occupationPostSaga,
  occupationUpdateSaga,
  occupationDeleteSaga,
} from './occupation/occupation';
import memberList, { memberSaga } from './member/memberList';
import occupationSelect from './occupation/occupationSelect';
import recordList, { recordSaga } from './record/recordList';
import timetableList, { timetableSaga } from './timetable/timetableList';

const rootReducer = combineReducers({
  auth,
  authCode,
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
  branchSelect,
  occupationSelect,
  timetableList,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    authCodeSaga(),
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
    timetableSaga(),
  ]);
}

export default rootReducer;
