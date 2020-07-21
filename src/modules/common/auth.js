import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

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
  },
  initialState,
);

export default auth;
