import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as timetableAPI from '../../lib/api/timetable/timetableAPI';

const [
  timetable_LIST,
  timetable_LIST_SUCCESS,
  timetable_LIST_FAILURE,
] = createRequestActionTypes('timetableList/timetable_LIST');

export const getTimetableList = createAction(timetable_LIST);

const timetableListSaga = createRequestSaga(
  timetable_LIST,
  timetableAPI.getTimetableList,
);

export function* timetableSaga() {
  yield takeLatest(timetable_LIST, timetableListSaga);
}

const initialState = {
  timetables: null,
  timetableError: null,
};

const timetableList = handleActions(
  {
    [timetable_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      timetables: data,
      timetableError: null,
    }),
    [timetable_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      timetableError: e,
    }),
  },
  initialState,
);

export default timetableList;
