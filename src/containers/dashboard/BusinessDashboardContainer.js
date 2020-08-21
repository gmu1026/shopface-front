import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import BusinessDashboard from '../../components/dashboard/BusinessDashboard';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getBusinessDashboard } from '../../modules/dashboard/dashboard';
const BusinessDashboardContainer = () => {
  const dispatch = useDispatch();
  const {
    business,
    error,
    loading,
    user,
    selectedBranch,
    // selectedSchedule,
  } = useSelector(({ dashboard, loading, auth, branchSelect }) => ({
    business: dashboard.business,
    error: dashboard.error,
    loading: loading,
    user: auth.user,
    selectedBranch: branchSelect.selectedBranch,
    // selectedSchedule: scheduleSelect.selectedSchedule,
  }));

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(
        getBusinessDashboard({
          id: user.name,
          selectedBranch,
          state: 'R',
        }),
      );
    }
  }, [dispatch, user, selectedBranch]);

  return (
    <BusinessDashboard
      business={business}
      error={error}
      loading={loading}
    ></BusinessDashboard>
  );
};

export default withRouter(BusinessDashboardContainer);
