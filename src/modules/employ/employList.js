import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as employAPI from '../../lib/api/employ/employAPI';

const [
  employ_LIST,
  employ_LIST_SUCCESS,
  employ_LIST_FAILURE,
] = createRequestActionTypes('employList/employ_LIST');

export const getEmployList = createAction(employ_LIST);

const employListSaga = createRequestSaga(employ_LIST, employAPI.getEmployList);

export function* employSaga() {
  yield takeLatest(employ_LIST, employListSaga);
}

const initialState = {
  employs: null,
  employError: null,
};

const employList = handleActions(
  {
    [employ_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      employs: data,
      employError: null,
    }),
    [employ_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      employError: e,
    }),
  },
  initialState,
);

export default employList;
