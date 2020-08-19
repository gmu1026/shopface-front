import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as memberAPI from '../../lib/api/member/memberAPI';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

const CHANGE_INPUT = 'memberDetail/CHANGE_INPUT';
const INITIALIZE_RESULT = 'memberDetail/INITIALIZE_FORM';

const [
  MEMBER_DETAIL,
  MEMBER_DETAIL_SUCCESS,
  MEMBER_DETAIL_FAILURE,
] = createRequestActionTypes('memberDetail/MEMBER_DETAIL');

const [
  MEMBER_UPDATE,
  MEMBER_UPDATE_SUCCESS,
  MEMBER_UPDATE_FAILURE,
] = createRequestActionTypes('memberDetail/MEMBER_UPDATE');

const [
  MEMBER_DELETE,
  MEMBER_DELETE_SUCCESS,
  MEMBER_DELETE_FAILURE,
] = createRequestActionTypes('memberDetail/MEMBER_DELETE');

export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({
  key,
  value,
}));
export const initializeResult = createAction(INITIALIZE_RESULT);

export const getMemberDetail = createAction(MEMBER_DETAIL, ({ id }) => ({
  id,
}));

export const memberUpdate = createAction(MEMBER_UPDATE, ({ id, data }) => ({
  id,
  data,
}));
export const memberDelete = createAction(MEMBER_DELETE, ({ id }) => ({
  id,
}));

export const getMemberSaga = createRequestSaga(
  MEMBER_DETAIL,
  memberAPI.getMember,
);

export const memberUpdateSaga = createRequestSaga(
  MEMBER_UPDATE,
  memberAPI.putMember,
);
export const memberDeleteSaga = createRequestSaga(
  MEMBER_DELETE,
  memberAPI.deleteMember,
);

export function* memberDetailSaga() {
  yield takeLatest(MEMBER_DETAIL, getMemberSaga);
  yield takeLatest(MEMBER_UPDATE, memberUpdateSaga);
  yield takeLatest(MEMBER_DELETE, memberDeleteSaga);
}

const initialState = {
  member: null,
  memberResult: null,
  memberError: null,
};

const memberDetail = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft['member'][key] = value;
      }),
    [INITIALIZE_RESULT]: (state) => ({
      ...state,
      memberResult: null,
    }),
    [MEMBER_DETAIL_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      member: data,
      memberResult: null,
      memberError: null,
    }),
    [MEMBER_DETAIL_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      memberError: message,
    }),

    [MEMBER_UPDATE_SUCCESS]: (state, { payload: { code } }) => ({
      ...state,
      memberResult: code,
      memberError: null,
    }),
    [MEMBER_UPDATE_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      memberResult: null,
      memberError: message,
    }),
    [MEMBER_DELETE_SUCCESS]: (state, { payload: { code } }) => ({
      ...state,
      memberResult: code,
      memberError: null,
    }),
    [MEMBER_DELETE_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      memberResult: null,
      memberError: message,
    }),
  },
  initialState,
);

export default memberDetail;
