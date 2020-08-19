import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import branchDetail, { branchDetailSaga } from './branch/branchDetail';
import branchList, { branchSaga } from './branch/branchList';
import branchPost, { branchPostSaga } from './branch/branchPost';
import branchSelect from './branch/branchSelect';
import auth, { authSaga } from './common/auth';
import certCode, { certCodeSaga } from './common/certCode';
import loading from './common/loading';
import employDetail, { employDetailSaga } from './employ/employDetail';
import employList, { employSaga } from './employ/employList';
import employPost, { employPostSaga } from './employ/employPost';
import memberDetail, { memberDetailSaga } from './member/memberDetail';
import occupation, { occupationSaga } from './occupation/occupation';
import memberList, { memberSaga } from './member/memberList';
import occupationSelect from './occupation/occupationSelect';
import recordList, { recordSaga } from './record/recordList';
import scheduleList, { scheduleSaga } from './schedule/scheduleList';
import dashboard, {
  businessDashboardSaga,
  employDashboardSaga,
} from './dashboard/dashboard';

const rootReducer = combineReducers({
  auth,
  certCode,
  loading,
  branchList,
  branchPost,
  branchDetail,
  occupation,
  memberList,
  recordList,
  employList,
  employPost,
  employDetail,
  memberDetail,
  branchSelect,
  occupationSelect,
  scheduleList,
  dashboard,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    certCodeSaga(),
    branchSaga(),
    branchPostSaga(),
    branchDetailSaga(),
    occupationSaga(),
    memberSaga(),
    recordSaga(),
    employSaga(),
    employPostSaga(),
    employDetailSaga(),
    memberDetailSaga(),
    scheduleSaga(),
    businessDashboardSaga(),
    employDashboardSaga(),
  ]);
}

export default rootReducer;
