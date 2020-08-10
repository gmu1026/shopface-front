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
import memberList, { memberSaga } from './member/memberList';
import occupationDelete, {
  occupationDeleteSaga,
} from './occupation/occupationDelete';
import occupationList, { occupationSaga } from './occupation/occupationList';
import occupationPost, {
  occupationPostSaga,
} from './occupation/occupationPost';
import occupationSelect from './occupation/occupationSelect';
import occupationUpdate, {
  occupationUpdateSaga,
} from './occupation/occupationUpdate';
import recordList, { recordSaga } from './record/recordList';

const rootReducer = combineReducers({
  auth,
  authCode,
  loading,
  branchList,
  branchPost,
  occupationList,
  occupationPost,
  occupationUpdate,
  occupationDelete,
  memberList,
  recordList,
  employList,
  employPost,
  employDetail,
  branchDetail,
  memberDetail,
  branchSelect,
  occupationSelect,
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
  ]);
}

export default rootReducer;
