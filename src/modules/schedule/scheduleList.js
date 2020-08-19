import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as scheduleAPI from '../../lib/api/schedule/scheduleAPI';
import { produce } from 'immer';

const CHANGE_INPUT = 'scheduleList/CHANGE_INPUT';
const INITIALIZE_FORM = 'scheduleList/INITIALIZE_FORM';

const [
  SCHEDULE_LIST,
  SCHEDULE_LIST_SUCCESS,
  SCHEDULE_LIST_FAILURE,
] = createRequestActionTypes('scheduleList/schedule_LIST');
const [SCHEDULE, SCHEDULE_SUCCESS, SCHEDULE_FAILURE] = createRequestActionTypes(
  'scheduleList/SCHEDULE',
);
const [
  SCHEDULE_POST,
  SCHEDULE_POST_SUCCESS,
  SCHEDULE_POST_FAILURE,
] = createRequestActionTypes('scheduleList/SCHEDULE_POST');
const [
  SCHEDULE_UPDATE,
  SCHEDULE_UPDATE_SUCCESS,
  SCHEDULE_UPDATE_FAILURE,
] = createRequestActionTypes('scheduleList/SCHEDULE_UPDATE');

export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({
  key,
  value,
}));
export const initializeForm = createAction(
  INITIALIZE_FORM,
  (initForm) => initForm,
);

export const getScheduleList = createAction(SCHEDULE_LIST, ({ id }) => ({
  id,
}));
export const getSchdeule = createAction(SCHEDULE, ({ no }) => ({ no }));
export const postSchedule = createAction(SCHEDULE_POST, ({ data }) => ({
  data,
}));
export const updateSchedule = createAction(SCHEDULE_UPDATE);

const getScheduleListSaga = createRequestSaga(
  SCHEDULE_LIST,
  scheduleAPI.getScheduleList,
);
const getScheduleSaga = createRequestSaga(SCHEDULE, scheduleAPI.getSchedule);
const postScheduleSaga = createRequestSaga(
  SCHEDULE_POST,
  scheduleAPI.postSchedule,
);
const updateScheduleSaga = createRequestSaga(
  SCHEDULE_UPDATE,
  scheduleAPI.updateSchedule,
);

export function* scheduleSaga() {
  yield takeLatest(SCHEDULE_LIST, getScheduleListSaga);
  yield takeLatest(SCHEDULE, getScheduleSaga);
  yield takeLatest(SCHEDULE_POST, postScheduleSaga);
  yield takeLatest(SCHEDULE_UPDATE, updateScheduleSaga);
}

const initialState = {
  schedules: null,
  schedule: null,
  scheduleError: null,
  post: {
    employNo: '',
    workStartTime: '',
    workEndTime: '',
    occupationNo: '',
    color: '',
  },
  scheduleResult: '',
};

const scheduleList = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft['post'][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: initForm }) => ({
      ...state,
      [initForm]: initialState[initForm],
      scheduleResult: '',
    }),
    [SCHEDULE_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      schedules: data,
      scheduleError: null,
    }),
    [SCHEDULE_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      scheduleError: e,
    }),
    [SCHEDULE_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      schedules: data,
      scheduleError: null,
    }),
    [SCHEDULE_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      scheduleError: e,
    }),
    [SCHEDULE_POST_SUCCESS]: (state, { payload: { code } }) => ({
      ...state,
      scheduleResult: code,
      scheduleError: null,
    }),
    [SCHEDULE_POST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      scheduleError: e,
    }),
    [SCHEDULE_UPDATE_SUCCESS]: (state, { payload: { code } }) => ({
      ...state,
      scheduleResult: code,
      scheduleError: null,
    }),
    [SCHEDULE_UPDATE_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      scheduleError: e,
    }),
  },
  initialState,
);

export default scheduleList;
