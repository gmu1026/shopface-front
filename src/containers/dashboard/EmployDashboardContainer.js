import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import EmployDashboard from '../../components/dashboard/EmployDashboard';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployDashboard } from '../../modules/dashboard/dashboard';
const EmployDashboardContainer = () => {
  const dispatch = useDispatch();
  const {
    employ,
    error,
    loading,
    user,
    putWorkTime,
    putQuitTime,
  } = useSelector(({ dashboard, loading, auth }) => ({
    employ: dashboard.employ,
    error: dashboard.error,
    loading: loading,
    user: auth.user,
    putWorkTime: dashboard.putWorkTime,
    putQuitTime: dashboard.putQuitTime,
  }));

  const onWork = (e) => {
    e.preventDefault();
    console.log(e.target);
    dispatch(putWorkTime({ no: '189' }));
  };

  const onQuit = (e) => {
    e.preventDefault();
    console.log(e.target);
    dispatch(putQuitTime({ no: '189' }));
  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(
        getEmployDashboard({
          id: user.name,
          state: 'R',
        }),
      );
    }
  }, [dispatch, user]);

  return (
    <EmployDashboard
      employ={employ}
      error={error}
      loading={loading}
      onWork={onWork}
      onQuit={onQuit}
    ></EmployDashboard>
  );
};

export default withRouter(EmployDashboardContainer);
