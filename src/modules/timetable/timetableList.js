import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as timetableAPI from '../../lib/api/timetable/timetableAPI';
import produce from 'immer';

const CHANGE_INPUT = 'timetableList/CHANGE_INPUT';
const INITIALIZE_FORM = 'timetableList/INITIALIZE_FORM';

const [
  TIMETABLE_LIST,
  TIMETALBE_LIST_SUCCESS,
  TIMETABLE_LIST_FAILURE,
] = createRequestActionTypes('timetableList/TIMETABLE_LIST');
const [
  TIMETABLE,
  TIMETALBE_SUCCESS,
  TIMETABLE_FAILURE,
] = createRequestActionTypes('timetableList/TIMETABLE');

export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({
  key,
  value,
}));
export const initializeForm = createAction(
  INITIALIZE_FORM,
  (initForm) => initForm,
);

export const getTimetableList = createAction(
  TIMETABLE_LIST,
  ({ selectedBranch }) => ({ selectedBranch }),
);
export const getTimetable = createAction(TIMETABLE_LIST, ({ no }) => ({ no }));

const getTimetableListSaga = createRequestSaga(
  TIMETABLE_LIST,
  timetableAPI.getTimetableList,
);
const getTimetableSaga = createRequestSaga(
  TIMETABLE,
  timetableAPI.getTimetable,
);

export function* timetableSaga() {
  yield takeLatest(TIMETABLE_LIST, getTimetableListSaga);
  yield takeLatest(TIMETABLE, getTimetableSaga);
}

const initialState = {
  timetables: null,
  timetable: null,
  timetableError: null,
  post: {
    employNo: '',
    startTime: '',
    endTime: '',
    occupationNo: '',
    occupationColor: '',
  },
};

const timetableList = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft['post'][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: initForm }) => ({
      ...state,
      [initForm]: initialState[initForm],
      postResult: null,
    }),
    [TIMETALBE_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      timetables: data,
      timetableError: null,
    }),
    [TIMETABLE_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      timetableError: e,
    }),
    [TIMETALBE_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      timetable: data,
      timetableError: null,
    }),
    [TIMETABLE_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      timetableError: e,
    }),
  },
  initialState,
);

export default timetableList;
