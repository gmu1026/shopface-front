/* eslint-disable no-undef */
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as occupationAPI from '../../lib/api/occupation/occupationAPI';

const [
  OCCUPATION_DELETE,
  OCCUPATION_DELETE_SUCCESS,
  OCCUPATION_DELETE_FAILURE,
] = createRequestActionTypes('occupationDelete/OCCUPATION_DELETE');

export const deleteOccupation = createAction(OCCUPATION_DELETE, ({ no }) => ({
  no,
}));

export const occupationSaga = createRequestSaga(
  OCCUPATION_DELETE,
  occupationAPI.deleteOccupation,
);

export function* occupationDeleteSaga() {
  yield takeLatest(OCCUPATION_DELETE, occupationSaga);
}

const initialState = {
  occupations: null,
  occupationResult: null,
  occupationError: null,
};

const occupationDelete = handleActions(
  {
    [OCCUPATION_DELETE_SUCCESS]: (state, { payload: { message } }) => ({
      ...state,
      occupationResult: message,
      occupationError: null,
    }),
    [OCCUPATION_DELETE_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      occupationError: e,
    }),
  },
  initialState,
);

export default occupationDelete;
