import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as authAPI from '../../lib/api/common/authAPI';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_INPUT = 'authCode/CHANGE_INPUT';
const INITIALIZE_FORM = 'authCode/INITIALIZE_FORM';

const [
  CHECK_AUTHCODE,
  CHECK_AUTHCODE_SUCCESS,
  CHECK_AUTHCODE_FAILURE,
] = createRequestActionTypes('authCode/CHECK_AUTHCODE');

export const changeInput = createAction(CHANGE_INPUT, ({ authCode }) => ({
  authCode,
}));

export const initializeForm = createAction(INITIALIZE_FORM);

export const checkAuthCode = createAction(CHECK_AUTHCODE, ({ authCode }) => ({
  authCode,
}));

const checkAuthCodeSaga = createRequestSaga(
  CHECK_AUTHCODE,
  authAPI.checkAuthcode,
);

export function* authCodeSaga() {
  yield takeLatest(CHECK_AUTHCODE, checkAuthCodeSaga);
}

const initialState = {
  authCode: '',
  authCodeResult: null,
  authCodeError: null,
};

const authCode = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { authCode } }) => ({
      ...state,
      authCode: authCode,
      authCodeError: null,
    }),
    [INITIALIZE_FORM]: () => ({
      authCode: '',
      authCodeResult: null,
      authCodeError: null,
    }),

    [CHECK_AUTHCODE_SUCCESS]: (state, { payload: { status } }) => ({
      ...state,
      authCodeResult: status,
      authCodeError: null,
    }),
    [CHECK_AUTHCODE_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      authCodeError: message,
    }),
  },
  initialState,
);

export default authCode;
