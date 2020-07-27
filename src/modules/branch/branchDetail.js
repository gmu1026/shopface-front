import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as branchAPI from '../../lib/api/branch/branchApI';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_INPUT = 'branchDetail/CHANGE_INPUT';

const [
  BRANCH_DETAIL,
  BRANCH_DETAIL_SUCCESS,
  BRANCH_DETAIL_FAILURE,
] = createRequestActionTypes('branchDetail/BRANCH_DETAIL');

const [
  BRANCH_UPDATE,
  BRANCH_UPDATE_SUCCESS,
  BRANCH_UPDATE_FAILURE,
] = createRequestActionTypes('branchDetail/BRANCH_UPDATE');

const [
  BRANCH_DELETE,
  BRANCH_DELETE_SUCCESS,
  BRANCH_DELETE_FAILURE,
] = createRequestActionTypes('branchDetail/BRANCH_DELETE');

export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({
  key,
  value,
}));

export const getbranchDetail = createAction(BRANCH_DETAIL, ({ no }) => ({
  no,
}));

export const getBranchSaga = createRequestSaga(
  BRANCH_DETAIL,
  branchAPI.getBranch,
);

export function* branchDetailSaga() {
  yield takeLatest(BRANCH_DETAIL, getBranchSaga);
}

const initialState = {
  branch: {
    name: '',
    phone: '',
    address: '',
    zipCode: '',
    detailAddress: '',
    businessLicensePath: '',
  },
  originBranch: null,
  branchError: null,
};

export const branchDetail = handleActions({});
