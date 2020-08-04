import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as employAPI from '../../lib/api/employ/employAPI';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

const CHANGE_INPUT = 'employDetail/CHANGE_INPUT';
const INITIALIZE_RESULT = 'employDetail/INITIALIZE_FORM';

const [
  EMPLOY_DETAIL,
  EMPLOY_DETAIL_SUCCESS,
  EMPLOY_DETAIL_FAILURE,
] = createRequestActionTypes('employDetail/EMPLOY_DETAIL');

const [
  EMPLOY_UPDATE,
  EMPLOY_UPDATE_SUCCESS,
  EMPLOY_UPDATE_FAILURE,
] = createRequestActionTypes('employDetail/EMPLOY_UPDATE');

const [
  EMPLOY_DELETE,
  EMPLOY_DELETE_SUCCESS,
  EMPLOY_DELETE_FAILURE,
] = createRequestActionTypes('employDetail/EMPLOY_DELETE');

export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({
  key,
  value,
}));
export const initializeResult = createAction(INITIALIZE_RESULT);

export const getEmployhDetail = createAction(EMPLOY_DETAIL, ({ no }) => ({
  no,
}));
export const employUpdate = createAction(EMPLOY_UPDATE, ({ no, data }) => ({
  no,
  data,
}));
export const employDelete = createAction(EMPLOY_DELETE, ({ no }) => ({
  no,
}));

export const getEmploySaga = createRequestSaga(
  EMPLOY_DETAIL,
  employAPI.getEmploy,
);
export const employUpdateSaga = createRequestSaga(
  EMPLOY_UPDATE,
  employAPI.updataEmploy,
);
export const employhDeleteSaga = createRequestSaga(
  EMPLOY_DELETE,
  employAPI.deleteEmploy,
);

export function* employDetailSaga() {
  yield takeLatest(EMPLOY_DETAIL, getEmploySaga);
  yield takeLatest(EMPLOY_UPDATE, employUpdateSaga);
  yield takeLatest(EMPLOY_DELETE, employhDeleteSaga);
}

const initialState = {};

export const employDetail = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {}),
    [INITIALIZE_RESULT]: (state) => ({
      ...state,
    }),
    [EMPLOY_DETAIL_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
    }),
    [EMPLOY_DETAIL_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
    }),
    [EMPLOY_UPDATE_SUCCESS]: (state, { payload: { message } }) => ({
      ...state,
    }),
    [EMPLOY_UPDATE_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
    }),
    [EMPLOY_DELETE_SUCCESS]: (state, { payload: { message } }) => ({
      ...state,
    }),
    [EMPLOY_DELETE_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
    }),
  },
  initialState,
);

export default employDetail;
