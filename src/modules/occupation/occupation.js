import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as occupationAPI from '../../lib/api/occupation/occupationAPI';
import produce from 'immer';

const INITIALIZE_FORM = 'occupation/INITIALIZE_FORM'; //post 시 초기
const INITIALIZE_RESULT = 'occupation/INITIALIZE_RESULT'; //update시 초기
const CHANGE_INPUT = 'occupation/CHANGE_INPUT';
const UPDATE_CHANGE = 'occupation/UPDATE_CHANGE';

const [
  OCCUPATION_LIST,
  OCCUPATION_LIST_SUCCESS,
  OCCUPATION_LIST_FAILURE,
] = createRequestActionTypes('occupation/occupation_LIST');

const [
  OCCUPATION_POST,
  OCCUPATION_POST_SUCCESS,
  OCCUPATION_POST_FAILURE,
] = createRequestActionTypes('occupation/OCCUPATION_POST');

const [
  OCCUPATION_UPDATE,
  OCCUPATION_UPDATE_SUCCESS,
  OCCUPATION_UPDATE_FAILURE,
] = createRequestActionTypes('occupation/OCCUPATION_UPDATE');

const [
  OCCUPATION_DELETE,
  OCCUPATION_DELETE_SUCCESS,
  OCCUPATION_DELETE_FAILURE,
] = createRequestActionTypes('occupation/OCCUPATION_DELETE');

export const getOccupationList = createAction(
  OCCUPATION_LIST,
  (selectedBranch) => selectedBranch,
);

const occupationListSaga = createRequestSaga(
  OCCUPATION_LIST,
  occupationAPI.getOccupationList,
);

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

export const postSaga = createRequestSaga(
  OCCUPATION_POST,
  occupationAPI.postOccupation,
);

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

export const deleteOccupation = createAction(OCCUPATION_DELETE, ({ no }) => ({
  no,
}));

export const deleteOccupationSaga = createRequestSaga(
  OCCUPATION_DELETE,
  occupationAPI.deleteOccupation,
);

export function* occupationSaga() {
  yield takeLatest(OCCUPATION_LIST, occupationListSaga);
  yield takeLatest(OCCUPATION_POST, postSaga);
  yield takeLatest(OCCUPATION_UPDATE, occupationupdateSaga);
  yield takeLatest(OCCUPATION_DELETE, deleteOccupationSaga);
}

const initialState = {
  occupations: null,
  occupationResult: null,
  occupationError: null,
  postResult: null,
  postError: null,
  updateResult: null,
  updateError: null,
  deleteResult: null,
  deleteError: null,
  post: {
    name: '',
    color: '#00B050',
  },
};

export const occupation = handleActions(
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
      postResult: null,
    }),
    [OCCUPATION_POST_SUCCESS]: (state, { payload: { e } }) => ({
      ...state,
      postResult: e,
      postError: null,
    }),
    [OCCUPATION_POST_FAILURE]: (state, { payload: e }) => ({
      ...state,
      postError: e,
    }),

    [OCCUPATION_DELETE_SUCCESS]: (state, { payload: { e } }) => ({
      ...state,
      deleteResult: e,
      deleteError: null,
    }),
    [OCCUPATION_DELETE_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      deleteError: e,
    }),

    [OCCUPATION_UPDATE_SUCCESS]: (state, { payload: { status } }) => ({
      ...state,
      updateResult: status,
      updateError: null,
    }),
    [OCCUPATION_UPDATE_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      updateError: message,
    }),
  },
  initialState,
);

export default occupation;
