import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as memberAPI from '../../lib/api/member/memberAPI';
import { takeLatest } from 'redux-saga/effects';

const [
  MEMBER_DETAIL,
  MEMBER_DETAIL_SUCCESS,
  MEMBER_DETAIL_FAILURE,
] = createRequestActionTypes('memberDetail/MEMBER_DETAIL');

export const getMemberDetail = createAction(MEMBER_DETAIL, ({ no }) => ({
  no,
}));

export const getMemberSaga = createRequestSaga(
  MEMBER_DETAIL,
  memberAPI.getMember,
);

export function* memberDetailSaga() {
  yield takeLatest(MEMBER_DETAIL, getMemberSaga);
}

const initialState = {
  member: null,
  memberError: null,
};

const memberDetail = handleActions(
  {
    [MEMBER_DETAIL_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      member: data,
      branchError: null,
    }),
    [MEMBER_DETAIL_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      branchError: message,
    }),
  },
  initialState,
);

export default memberDetail;
