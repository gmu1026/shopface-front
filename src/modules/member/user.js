import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, (user) => ({
  user: user,
}));

export const logout = createAction(LOGOUT);

export const initializeState = {
  user: null,
};

const user = handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: { user } }) => ({
      ...state,
      user,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initializeState,
);

export default user;
