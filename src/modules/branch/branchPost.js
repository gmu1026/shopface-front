import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as branchAPI from '../../lib/api/branch/branchApI';

const CHANGE_INPUT = 'branchPost/CHANGE_INPUT';
const INITIALIZE_FORM = 'branchPost/INITIALIZE_FORM';

const [
  BRANCH_POST,
  BRANCH_POST_SUCCESS,
  BRANCH_POST_FAILURE,
] = createRequestActionTypes('branchPost/BRANCH_POST');

export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({
  key,
  value,
}));

export const postBranch = createAction(BRANCH_POST, ({ data }) => ({ data }));

export const initializeForm = createAction(
  INITIALIZE_FORM,
  (initForm) => initForm,
);

const initialState = {
  name: '',
  phone: '',
  zipCode: '',
  address: '',
  detailAddress: '',
  branchPostResult: null,
  branchPostError: null,
};

export const branchPostSaga = createRequestSaga(
  BRANCH_POST,
  branchAPI.postBranch,
);

const branchPost = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [INITIALIZE_FORM]: (state, { payload: initForm }) => ({
      ...state,
      [initForm]: initialState[initForm],
    }),
    [BRANCH_POST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      postResult: data,
    }),
    [BRANCH_POST_FAILURE]: (state, { payload: e }) => ({
      ...state,
      postError: e,
    }),
  },
  initialState,
);

export default branchPost;
