import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as occupationAPI from '../../lib/api/occupation/occupationAPI';

const [
  occupation_LIST,
  occupation_LIST_SUCCESS,
  occupation_LIST_FAILURE,
] = createRequestActionTypes('occupationList/occupation_LIST');

export const getOccupationList = createAction(occupation_LIST);

const occupationListSaga = createRequestSaga(
  occupation_LIST,
  occupationAPI.getOccupationList,
);

export function* occupationSaga() {
  yield takeLatest(occupation_LIST, occupationListSaga);
}

const initialState = {
  occupations: null,
  occupationError: null,
};

const occupationList = handleActions(
  {
    [occupation_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      occupations: data,
      occupationError: null,
    }),
    [occupation_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      occupationError: e,
    }),
  },
  initialState,
);

export default occupationList;
