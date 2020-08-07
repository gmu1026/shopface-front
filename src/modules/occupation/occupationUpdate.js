/* eslint-disable no-undef */
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as occupationAPI from '../../lib/api/occupation/occupationAPI';
import produce from 'immer';

const CHANGE_INPUT = 'occupationUpdate/CHAHNGE_INPUT';
const INITIALIZE_RESULT = 'occupationUpdate/INITIALIZE_FORM';

const [
  OCCUPATION_UPDATE,
  OCCUPATION_UPDATE_SUCCESS,
  OCCUPATION_UPDATE_FAILURE,
] = createRequestActionTypes('occupationUpdate/OCCUPATION_UPDATE');

export const changeInputUpdate = createAction(
  CHANGE_INPUT,
  ({ key, value }) => ({
    key,
    value,
  }),
);

export const initializeResult = createAction(INITIALIZE_RESULT);
export const updateOccupation = createAction(
  OCCUPATION_UPDATE,
  ({ no, data }) => ({
    no,
    data,
  }),
);

const initialState = {
  post: {
    name: '',
    color: '#00B050',
  },
  occupationUpdaateResult: null,
  occupationUpdateError: null,
};

export const occupationupdateSaga = createRequestSaga(
  OCCUPATION_UPDATE,
  occupationAPI.updateOccupation,
);

export function* occupationUpdateSaga() {
  yield takeLatest(OCCUPATION_UPDATE, occupationupdateSaga);
}

const occupationUpdate = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft['post'][key] = value;
      }),
    [INITIALIZE_RESULT]: (state) => ({
      ...state,
      occupationUpdateResult: null,
    }),
    [OCCUPATION_UPDATE_SUCCESS]: (state, { payload: { status } }) => ({
      ...state,
      occupationUpdateResult: status,
      occupationUpdateError: null,
    }),
    [OCCUPATION_UPDATE_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      occupationUpdateError: e,
    }),
  },
  initialState,
);

export default occupationUpdate;
