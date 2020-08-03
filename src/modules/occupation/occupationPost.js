import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as occupationAPI from '../../lib/api/occupation/occupationAPI';
import { takeLatest } from 'redux-saga/effects';

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
    color: '#967373',
  },
  occupationPostResult: null,
  occupationPostError: null,
};

export const occupationpostSaga = createRequestSaga(
  OCCUPATION_POST,
  occupationAPI.postOccupation,
);
export function* occupationPostSaga() {
  yield takeLatest(OCCUPATION_POST, occupationpostSaga);
}

const occupationPost = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [INITIALIZE_FORM]: (state, { payload: initForm }) => ({
      ...state,
      [initForm]: initialState[initForm],
    }),
    [OCCUPATION_POST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      postResult: data,
      postError: null,
    }),
    [OCCUPATION_POST_FAILURE]: (state, { payload: e }) => ({
      ...state,
      postError: e,
    }),
  },
  initialState,
);

export default occupationPost;
