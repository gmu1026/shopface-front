import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as authAPI from '../../lib/api/common/authAPI';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const TEMP_SET_USER = 'auth/TEMP_SET_USER';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN',
);
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER',
);

export const changeInput = createAction(
  CHANGE_INPUT,
  ({ type, id, value }) => ({
    type,
    id,
    value,
  }),
);
export const initializeForm = createAction(
  INITIALIZE_FORM,
  (initForm) => initForm,
);
export const tempSetUser = createAction(TEMP_SET_USER, (user) => ({
  user,
}));

export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const logoutFailure = createAction(LOGOUT_FAILURE);

export const login = createAction(LOGIN, ({ id, password }) => ({
  id,
  password,
}));
export const register = createAction(REGISTER, ({ id, password }) => ({
  id,
  password,
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const registerSaga = createRequestSaga(REGISTER, authAPI.singUp);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
}

const initialState = {
  login: {
    id: '',
    password: '',
  },
  register: {
    id: '',
    password: '',
    name: '',
    phone: '',
    email: '',
  },
  user: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { type, id, value } }) =>
      produce(state, (draft) => {
        draft[type][id] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: initForm }) => ({
      ...state,
      [initForm]: initialState[initForm],
    }),
    [TEMP_SET_USER]: (state, { payload: { user } }) => ({
      ...state,
      user,
    }),
    [LOGIN_SUCCESS]: (state, { payload: { user } }) => ({
      ...state,
      user,
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGOUT_SUCCESS]: (state) => ({
      ...state,
      user: null,
      authError: null,
    }),
    [LOGOUT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [REGISTER_SUCCESS]: (state, { payload: { user } }) => ({
      ...state,
      authError: null,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
