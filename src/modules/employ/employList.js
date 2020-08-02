import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as employAPI from '../../lib/api/employ/employAPI';

const [
  EMPLOY_LIST,
  EMPLOY_LIST_SUCCESS,
  EMPLOY_LIST_FAILURE,
] = createRequestActionTypes('employList/employ_LIST');
const CHANGE_INPUT = 'employList/CHANGE_INPUT';

export const getEmployList = createAction(EMPLOY_LIST);
export const changeInput = createAction(CHANGE_INPUT, (value) => value);

const employListSaga = createRequestSaga(EMPLOY_LIST, employAPI.getEmployList);

export function* employSaga() {
  yield takeLatest(EMPLOY_LIST, employListSaga);
}

const initialState = {
  name: '',
  employs: null,
  employError: null,
};

const employList = handleActions(
  {
    [EMPLOY_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      employs: data,
      employError: null,
    }),
    [EMPLOY_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      employError: e,
    }),
    [CHANGE_INPUT]: (state, { payload: value }) => ({
      ...state,
      name: value,
    }),
  },
  initialState,
);

export default employList;
