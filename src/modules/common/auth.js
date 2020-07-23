import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as authAPI from '../../lib/api/common/authAPI';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER',
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN',
);

export const changeInput = createAction(
  CHANGE_INPUT,
  ({ type, id, value }) => ({
    type, //login, register
    id,
    value,
  }),
);
export const initializeForm = createAction(
  INITIALIZE_FORM,
  (initForm) => initForm,
);

export const register = createAction(
  REGISTER,
  ({ id, password, name, phone, email }) => ({
    id,
    name,
    password,
    phone,
    email,
  }),
);

export const login = createAction(LOGIN, ({ id, password }) => ({
  id,
  password,
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  login: {
    id: '',
    password: '',
  },
  register: {
    id: '',
    password: '',
    phone: '',
    email: '',
  },
  auth: {
    name: '',
    jwt: '',
  },
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
    [LOGIN_SUCCESS]: (state, { payload: { name, jwt } }) => ({
      ...state,
      auth: { name, jwt },
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
