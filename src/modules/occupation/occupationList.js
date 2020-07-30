import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as occupationAPI from '../../lib/api/occupation/occupationAPI';

const [
  OCCUPATION_LIST,
  OCCUPATION_LIST_SUCCESS,
  OCCUPATION_LIST_FAILURE,
] = createRequestActionTypes('occupationList/occupation_LIST');

export const getOccupationList = createAction(OCCUPATION_LIST);

const occupationListSaga = createRequestSaga(
  OCCUPATION_LIST,
  occupationAPI.getOccupationList,
);

export function* occupationSaga() {
  yield takeLatest(OCCUPATION_LIST, occupationListSaga);
}

const initialState = {
  occupations: null,
  occupationError: null,
};

const occupationList = handleActions(
  {
    [OCCUPATION_LIST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      occupations: data,
      occupationError: null,
    }),
    [OCCUPATION_LIST_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      occupationError: e,
    }),
  },
  initialState,
);

export default occupationList;
