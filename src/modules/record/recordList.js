import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as recordAPI from '../../lib/api/record/recordAPI';

const [
  record_LIST,
  record_LIST_SUCCESS,
  record_LIST_FAILURE,
] = createRequestActionTypes('recordList/record_LIST');

export const getRecordList = createAction(record_LIST);

const recordListSaga = createRequestSaga(record_LIST, recordAPI.getRecordList);

export function* recordSaga() {
  yield takeLatest(record_LIST, recordListSaga);
}

const initialState = {
  records: null,
  recordError: null,
};

const recordList = handleActions(
  {
    [record_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      records: data,
      recordError: null,
    }),
    [record_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      recordError: e,
    }),
  },
  initialState,
);

export default recordList;
