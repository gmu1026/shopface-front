import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as occupationAPI from '../../lib/api/occupation/occupationAPI';
import produce from 'immer';

const INITIALIZE_FORM = 'occupationList/INITIALIZE_FORM'; //post 시 초기
const INITIALIZE_RESULT = 'occupationList/INITIALIZE_RESULT'; //update시 초기
const CHANGE_INPUT = 'occupationList/CHANGE_INPUT';
const UPDATE_CHANGE = 'occupationList/UPDATE_CHANGE';

const [
  OCCUPATION_LIST,
  OCCUPATION_LIST_SUCCESS,
  OCCUPATION_LIST_FAILURE,
] = createRequestActionTypes('occupationList/occupation_LIST');

const [
  OCCUPATION_POST,
  OCCUPATION_POST_SUCCESS,
  OCCUPATION_POST_FAILURE,
] = createRequestActionTypes('occupationList/OCCUPATION_POST');

const [
  OCCUPATION_UPDATE,
  OCCUPATION_UPDATE_SUCCESS,
  OCCUPATION_UPDATE_FAILURE,
] = createRequestActionTypes('occupationList/OCCUPATION_UPDATE');

const [
  OCCUPATION_DELETE,
  OCCUPATION_DELETE_SUCCESS,
  OCCUPATION_DELETE_FAILURE,
] = createRequestActionTypes('occupationList/OCCUPATION_DELETE');

export const getOccupationList = createAction(
  OCCUPATION_LIST,
  (selectedBranch) => selectedBranch,
);

const occupationListSaga = createRequestSaga(
  OCCUPATION_LIST,
  occupationAPI.getOccupationList,
);

export function* occupationSaga() {
  yield takeLatest(OCCUPATION_LIST, occupationListSaga);
}

export const postOccupation = createAction(OCCUPATION_POST, ({ post }) => ({
  post,
}));

export const initializeForm = createAction(
  INITIALIZE_FORM,
  (initForm) => initForm,
);

export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({
  key,
  value,
}));

export const updateChange = createAction(
  UPDATE_CHANGE,
  ({ index, key, value }) => ({
    index,
    key,
    value,
  }),
);
const initialState = {
  occupations: null,
  occupationResult: null,
  occupationError: null,
  post: {
    name: '',
    color: '#00B050',
  },
  updateOccupations: null,
};

export const postSaga = createRequestSaga(
  OCCUPATION_POST,
  occupationAPI.postOccupation,
);
export function* occupationPostSaga() {
  yield takeLatest(OCCUPATION_POST, postSaga);
}

export const initializeResult = createAction(INITIALIZE_RESULT);
export const updateOccupation = createAction(
  OCCUPATION_UPDATE,
  ({ no, occupation }) => ({
    no,
    occupation,
  }),
);

export const occupationupdateSaga = createRequestSaga(
  OCCUPATION_UPDATE,
  occupationAPI.updateOccupation,
);

export function* occupationUpdateSaga() {
  yield takeLatest(OCCUPATION_UPDATE, occupationupdateSaga);
}

export const deleteOccupation = createAction(OCCUPATION_DELETE, ({ no }) => ({
  no,
}));

export const deleteOccupationSaga = createRequestSaga(
  OCCUPATION_DELETE,
  occupationAPI.deleteOccupation,
);

export function* occupationDeleteSaga() {
  yield takeLatest(OCCUPATION_DELETE, deleteOccupationSaga);
}

const occupationList = handleActions(
  {
    [OCCUPATION_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      occupations: data,
      occupationError: null,
    }),
    [OCCUPATION_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      occupationError: e,
    }),

    [CHANGE_INPUT]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft['post'][key] = value;
      }),

    [UPDATE_CHANGE]: (state, { payload: { index, key, value } }) =>
      produce(state, (draft) => {
        draft['occupations'][index][key] = value;
      }),
    [INITIALIZE_FORM]: (state) => ({
      ...state,
      post: initialState['post'],
      occupationResult: null,
    }),
    [OCCUPATION_POST_SUCCESS]: (state, { payload: { status } }) => ({
      ...state,
      occupationResult: status,
      occupationError: null,
    }),
    [OCCUPATION_POST_FAILURE]: (state, { payload: e }) => ({
      ...state,
      occupationError: e,
    }),

    [OCCUPATION_DELETE_SUCCESS]: (state, { payload: { status } }) => ({
      ...state,
      occupationResult: status,
      occupationError: null,
    }),
    [OCCUPATION_DELETE_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      occupationError: e,
    }),

    [INITIALIZE_RESULT]: (state) => ({
      ...state,
      occupationResult: null,
    }),
    [OCCUPATION_UPDATE_SUCCESS]: (state, { payload: { status } }) => ({
      ...state,
      occupationResult: status,
      occupationError: null,
    }),
    [OCCUPATION_UPDATE_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      occupationError: message,
    }),
  },
  initialState,
);

export default occupationList;
