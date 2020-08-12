import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as authAPI from '../../lib/api/common/authAPI';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_INPUT = 'certCode/CHANGE_INPUT';
const INITIALIZE_FORM = 'certCode/INITIALIZE_FORM';

const [
  CHECK_CERTCODE,
  CHECK_CERTCODE_SUCCESS,
  CHECK_CERTCODE_FAILURE,
] = createRequestActionTypes('certCode/CHECK_certCode');

export const changeInput = createAction(CHANGE_INPUT, ({ certCode }) => ({
  certCode,
}));

export const initialize = createAction(INITIALIZE_FORM);

export const checkCertCode = createAction(
  CHECK_CERTCODE,
  ({ memberId, certCode }) => ({
    memberId,
    certCode,
  }),
);

const checkCertCodeSaga = createRequestSaga(
  CHECK_CERTCODE,
  authAPI.checkCertCode,
);

export function* certCodeSaga() {
  yield takeLatest(CHECK_CERTCODE, checkCertCodeSaga);
}

const initialState = {
  certCode: '',
  certCodeResult: null,
  certCodeError: null,
};

const certCode = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { certCode } }) => ({
      ...state,
      certCode: certCode,
      certCodeError: null,
    }),
    [INITIALIZE_FORM]: () => ({
      certCode: '',
      certCodeResult: null,
      certCodeError: null,
    }),

    [CHECK_CERTCODE_SUCCESS]: (state, { payload: { code } }) => ({
      ...state,
      certCodeResult: code,
      certCodeError: null,
    }),
    [CHECK_CERTCODE_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      certCodeError: message,
    }),
  },
  initialState,
);

export default certCode;
