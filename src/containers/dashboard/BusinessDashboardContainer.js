import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import BusinessDashboard from '../../components/dashboard/BusinessDashboard';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBusinessWDashboard,
  getBusinessRDashboard,
  getBusinessCDashboard,
} from '../../modules/dashboard/dashboard';
const BusinessDashboardContainer = () => {
  const dispatch = useDispatch();
  const { businessW, businessR, businessC, user, selectedBranch } = useSelector(
    ({ dashboard, loading, auth, branchSelect }) => ({
      businessW: dashboard.businessW,
      businessR: dashboard.businessR,
      businessC: dashboard.businessC,
      user: auth.user,
      selectedBranch: branchSelect.selectedBranch,
    }),
  );

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(
        getBusinessWDashboard({
          id: user.name,
          selectedBranch,
          state: 'W',
        }),
      );
    }
  }, [dispatch, user, selectedBranch]);

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(
        getBusinessRDashboard({
          id: user.name,
          selectedBranch,
          state: 'R',
        }),
      );
    }
  }, [dispatch, user, selectedBranch]);

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(
        getBusinessCDashboard({
          id: user.name,
          selectedBranch,
          state: 'C',
        }),
      );
    }
  }, [dispatch, user, selectedBranch]);

  const onRefresh = (e) => {
    e.preventDefault();
    window.location.reload(false);
  };

  return (
    <BusinessDashboard
      businessW={businessW}
      businessR={businessR}
      businessC={businessC}
      onRefresh={onRefresh}
    ></BusinessDashboard>
  );
};

export default withRouter(BusinessDashboardContainer);
