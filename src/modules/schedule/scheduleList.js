import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as scheduleAPI from '../../lib/api/schedule/scheduleAPI';

const [
  schedule_LIST,
  schedule_LIST_SUCCESS,
  schedule_LIST_FAILURE,
] = createRequestActionTypes('scheduleList/schedule_LIST');

export const getScheduleList = createAction(schedule_LIST);

const scheduleListSaga = createRequestSaga(
  schedule_LIST,
  scheduleAPI.getScheduleList,
);

export function* scheduleSaga() {
  yield takeLatest(schedule_LIST, scheduleListSaga);
}

const initialState = {
  schedules: null,
  scheduleError: null,
};

const scheduleList = handleActions(
  {
    [schedule_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      schedules: data,
      scheduleError: null,
    }),
    [schedule_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      scheduleError: e,
    }),
  },
  initialState,
);

export default scheduleList;
