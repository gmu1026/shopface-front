import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as timetableAPI from '../../lib/api/timetable/timetableAPI';

const [
  TIMETABLE_LIST,
  TIMETALBE_LIST_SUCCESS,
  TIMETABLE_LIST_FAILURE,
] = createRequestActionTypes('timetableList/timetable_LIST');

export const getTimetableList = createAction(TIMETABLE_LIST);

const timetableListSaga = createRequestSaga(
  TIMETABLE_LIST,
  timetableAPI.getTimetableList,
);

export function* timetableSaga() {
  yield takeLatest(TIMETABLE_LIST, timetableListSaga);
}

const initialState = {
  timetables: null,
  timetableError: null,
};

const timetableList = handleActions(
  {
    [TIMETALBE_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      timetables: data,
      timetableError: null,
    }),
    [TIMETABLE_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      timetableError: e,
    }),
  },
  initialState,
);

export default timetableList;
