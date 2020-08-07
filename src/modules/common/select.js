import { createAction, handleActions } from 'redux-actions';

const CHANGE_SELECT = 'select/CHANGE_SELECT';

export const changeSelect = createAction(CHANGE_SELECT);

const initalState = {
  selectedBranch: '',
};

const select = handleActions(
  {
    [CHANGE_SELECT]: (state, { payload: value }) => ({
      ...state,
      selectedBranch: value,
    }),
  },
  initalState,
);

export default select;
