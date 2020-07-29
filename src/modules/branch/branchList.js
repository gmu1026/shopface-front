import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as branchAPI from '../../lib/api/branch/branchAPI';


const [
  BRANCH_LIST,
  BRANCH_LIST_SUCCESS,
  BRANCH_LIST_FAILURE,
] = createRequestActionTypes('branchList/BRANCH_LIST');

export const getBranchList = createAction(BRANCH_LIST);

const branchListSaga = createRequestSaga(BRANCH_LIST); //branchAPI.getBranchList

export function* branchSaga() {
  yield takeLatest(BRANCH_LIST, branchListSaga);
}

const initialState = {
  branchs: null,
  branchError: null,
};

const branchList = handleActions(
  {
    [BRANCH_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      branchs: data,
      branchError: null,
    }),
    [BRANCH_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      branchError: e,
    }),
  },
  initialState,
);

export default branchList;
