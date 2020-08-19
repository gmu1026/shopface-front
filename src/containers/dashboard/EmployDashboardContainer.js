import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import EmployDashboardForm from '../../components/dashboard/EmployDashboardForm';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployDashboardList } from '../../modules/dashboard/dashboard';
const EmployDashboardContainer = () => {
  const dispatch = useDispatch();
  const { employDashboards, dashboardError, loading, user } = useSelector(
    ({ dashboard, loading, auth }) => ({
      employDashboards: dashboard.employDashboards,
      dashboardError: dashboard.dashboardError,
      loading: loading,
      user: auth.user,
    }),
  );

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(getEmployDashboardList());
    }
  }, [dispatch, user]);

  return (
    <EmployDashboardForm
      employDashboards={employDashboards}
      dashboardError={dashboardError}
      loading={loading}
    ></EmployDashboardForm>
  );
};

export default withRouter(EmployDashboardContainer);
