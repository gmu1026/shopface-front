import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as occupationAPI from '../../lib/api/occupation/occupationAPI';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

const INITIALIZE_FORM = 'occupationPost/INITIALIZE_FORM';
const CHANGE_INPUT = 'occupationPost/CHANGE_INPUT';

const [
  OCCUPATION_POST,
  OCCUPATION_POST_SUCCESS,
  OCCUPATION_POST_FAILURE,
] = createRequestActionTypes('occupationPost/OCCUPATION_POST');

export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({
  key,
  value,
}));

export const postOccupation = createAction(OCCUPATION_POST, ({ post }) => ({
  post,
}));

export const initializeForm = createAction(
  INITIALIZE_FORM,
  (initForm) => initForm,
);

const initialState = {
  post: {
    name: '',
    color: '#00B050',
  },
  occupationPostResult: null,
  occupationPostError: null,
};

export const postSaga = createRequestSaga(
  OCCUPATION_POST,
  occupationAPI.postOccupation,
);
export function* occupationPostSaga() {
  yield takeLatest(OCCUPATION_POST, postSaga);
}

const occupationPost = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft['post'][key] = value;
      }),
    [INITIALIZE_FORM]: (state) => ({
      ...state,
      post: initialState['post'],
      postResult: null,
    }),
    [OCCUPATION_POST_SUCCESS]: (state, { payload: message }) => ({
      ...state,
      occupationPostResult: message,
      occupationPostError: null,
    }),
    [OCCUPATION_POST_FAILURE]: (state, { payload: e }) => ({
      ...state,
      occupationPostError: e,
    }),
  },
  initialState,
);

export default occupationPost;
