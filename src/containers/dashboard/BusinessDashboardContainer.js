import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import BusinessDashboardForm from '../../components/dashboard/BusinessDashboardForm';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getBusinessDashboardList } from '../../modules/dashboard/dashboard';
const BusinessDashboardContainer = () => {
  const dispatch = useDispatch();
  const { businessDashboards, dashboardError, loading, user } = useSelector(
    ({ dashboard, loading, auth }) => ({
      businessDashboards: dashboard.businessDashboards,
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
      dispatch(getBusinessDashboardList());
    }
  }, [dispatch, user]);

  return (
    <BusinessDashboardForm
      businessDashboards={businessDashboards}
      dashboardError={dashboardError}
      loading={loading}
    ></BusinessDashboardForm>
  );
};

export default withRouter(BusinessDashboardContainer);
