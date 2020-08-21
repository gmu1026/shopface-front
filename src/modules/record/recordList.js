import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as recordAPI from '../../lib/api/record/recordAPI';

const [
  RECORD_LIST,
  RECORD_LIST_SUCCESS,
  RECORD_LIST_FAILURE,
] = createRequestActionTypes('recordList/record_LIST');

export const getRecordList = createAction(RECORD_LIST, (id) => id);

const recordListSaga = createRequestSaga(RECORD_LIST, recordAPI.getRecordList);

export function* recordSaga() {
  yield takeLatest(RECORD_LIST, recordListSaga);
}

const initialState = {
  records: null,
  recordError: null,
};

const recordList = handleActions(
  {
    [RECORD_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      records: data,
      recordError: null,
    }),
    [RECORD_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      recordError: e,
    }),
  },
  initialState,
);

export default recordList;
