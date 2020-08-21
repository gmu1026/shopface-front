import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as dashboardAPI from '../../lib/api/dashboard/dashboardAPI';
const [
  EMPLOY_DASHBOARD,
  EMPLOY_DASHBOARD_SUCCESS,
  EMPLOY_DASHBOARD_FAILURE,
] = createRequestActionTypes('dashboard/EMPLOY_DASHBOARD');

const [
  EMPLOY_PUTWORKTIME,
  EMPLOY_PUTWORKTIME_SUCCESS,
  EMPLOY_PUTWORKTIME_FAILURE,
] = createRequestActionTypes('dashboard/EMPLOY_PUTWORKTIME');

const [
  EMPLOY_PUTQUITTIME,
  EMPLOY_PUTQUITTIME_SUCCESS,
  EMPLOY_PUTQUITTIME_FAILURE,
] = createRequestActionTypes('dashboard/EMPLOY_PUTQUITTIME');
const [
  BUSINESS_DASHBOARD,
  BUSINESS_DASHBOARD_SUCCESS,
  BUSINESS_DASHBOARD_FAILURE,
] = createRequestActionTypes('dashboard/BUSINESS_DASHBOARD');

export const getEmployDashboard = createAction(
  EMPLOY_DASHBOARD,
  (id) => id,
  (state) => state,
);
export const getBusinessDashboard = createAction(
  BUSINESS_DASHBOARD,
  (selectedBranch) => selectedBranch,
  (id) => id,
  (state) => state,
);

export const putWorkTime = createAction(EMPLOY_PUTWORKTIME, ({ no }) => ({
  no,
}));

export const putQuitTime = createAction(EMPLOY_PUTQUITTIME, ({ no }) => ({
  no,
}));
const employSaga = createRequestSaga(
  EMPLOY_DASHBOARD,
  dashboardAPI.getEmployDashboard,
);
const businessSaga = createRequestSaga(
  BUSINESS_DASHBOARD,
  dashboardAPI.getBusinessDashboard,
);

const workSaga = createRequestSaga(
  EMPLOY_PUTWORKTIME,
  dashboardAPI.putWorkTime,
);

const quitSaga = createRequestSaga(
  EMPLOY_PUTQUITTIME,
  dashboardAPI.putQuitTime,
);

export function* dashboardSaga() {
  yield takeLatest(BUSINESS_DASHBOARD, businessSaga);
  yield takeLatest(EMPLOY_DASHBOARD, employSaga);
  yield takeLatest(EMPLOY_PUTWORKTIME, workSaga);
  yield takeLatest(EMPLOY_PUTQUITTIME, quitSaga);
}

const initialState = {
  employ: null,
  business: null,
  workResult: null,
  quitResult: null,
  error: null,
};

const dashboard = handleActions(
  {
    [BUSINESS_DASHBOARD_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      business: data,
      error: null,
    }),
    [BUSINESS_DASHBOARD_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      error: e,
    }),

    [EMPLOY_DASHBOARD_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      employ: data,
      error: null,
    }),
    [EMPLOY_DASHBOARD_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      error: e,
    }),
    [EMPLOY_PUTWORKTIME_SUCCESS]: (state, { payload: { code } }) => ({
      ...state,
      workResult: code,
      error: null,
    }),
    [EMPLOY_PUTWORKTIME_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      workResult: null,
      error: message,
    }),
    [EMPLOY_PUTQUITTIME_SUCCESS]: (state, { payload: { code } }) => ({
      ...state,
      workResult: code,
      error: null,
    }),
    [EMPLOY_PUTQUITTIME_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      workResult: null,
      error: message,
    }),
  },
  initialState,
);

export default dashboard;
