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
  BUSINESS_DASHBOARD,
  BUSINESS_DASHBOARD_SUCCESS,
  BUSINESS_DASHBOARD_FAILURE,
] = createRequestActionTypes('dashboard/BUSINESS_DASHBOARD');

export const getEmployDashboardList = createAction(EMPLOY_DASHBOARD);
export const getBusinessDashboardList = createAction(BUSINESS_DASHBOARD);

const employSaga = createRequestSaga(
  EMPLOY_DASHBOARD,
  dashboardAPI.getEmployDashboardList,
);
const businessSaga = createRequestSaga(
  BUSINESS_DASHBOARD,
  dashboardAPI.getBusinessDashboardList,
);

export function* businessDashboardSaga() {
  yield takeLatest(BUSINESS_DASHBOARD, businessSaga);
}

export function* employDashboardSaga() {
  yield takeLatest(EMPLOY_DASHBOARD, employSaga);
}

const initialState = {
  employDashboards: null,
  businessDashboards: null,
  dashboardError: null,
};

const dashboard = handleActions(
  {
    [BUSINESS_DASHBOARD_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      businessDashboards: data,
      dashboardError: null,
    }),
    [BUSINESS_DASHBOARD_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      dashboardError: e,
    }),

    [EMPLOY_DASHBOARD_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      employDashboards: data,
      dashboardError: null,
    }),
    [EMPLOY_DASHBOARD_FAILURE]: (state, { payload: { e } }) => ({
      ...state,
      dashboardError: e,
    }),
  },
  initialState,
);

export default dashboard;
