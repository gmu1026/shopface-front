import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as scheduleAPI from '../../lib/api/schedule/scheduleAPI';

const [
  SCHEDULE_LIST,
  SCHEDULE_LIST_SUCCESS,
  SCHEDULE_LIST_FAILURE,
] = createRequestActionTypes('scheduleList/schedule_LIST');

export const getScheduleList = createAction(SCHEDULE_LIST);

const scheduleListSaga = createRequestSaga(
  SCHEDULE_LIST,
  scheduleAPI.getScheduleList,
);

export function* scheduleSaga() {
  yield takeLatest(SCHEDULE_LIST, scheduleListSaga);
}

const initialState = {
  schedules: null,
  scheduleError: null,
};

const scheduleList = handleActions(
  {
    [SCHEDULE_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      schedules: data,
      scheduleError: null,
    }),
    [SCHEDULE_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      scheduleError: e,
    }),
  },
  initialState,
);

export default scheduleList;
