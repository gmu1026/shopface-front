import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import EmployDashboard from '../../components/dashboard/EmployDashboard';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEmployWDashboard,
  getEmployRDashboard,
  getEmployCDashboard,
  putWorkTime,
  putQuitTime,
  initializeForm,
} from '../../modules/dashboard/dashboard';
const EmployDashboardContainer = ({ history }) => {
  const [Error, setError] = useState(null);
  const dispatch = useDispatch();
  const {
    employW,
    employR,
    employC,
    error,
    loading,
    user,
    workResult,
    quitResult,
    dashboardError,
  } = useSelector(({ dashboard, loading, auth }) => ({
    employW: dashboard.employW,
    employR: dashboard.employR,
    employC: dashboard.employC,
    error: dashboard.error,
    loading: loading,
    user: auth.user,
    dashboardError: dashboard.dashboardError,
    workResult: dashboard.workResult,
    quitResult: dashboard.quitResult,
  }));

  const onWork = (e) => {
    // console.log(e.target.no);
    dispatch(putWorkTime({ no: '368' }));
  };

  const onQuit = (e) => {
    // console.log(e.target);
    dispatch(putQuitTime({ no: '368' }));
  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(
        getEmployRDashboard({
          id: user.name,
          state: 'R',
        }),
      );
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(
        getEmployWDashboard({
          id: user.name,
          state: 'W',
        }),
      );
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(
        getEmployCDashboard({
          id: user.name,
          state: 'C',
        }),
      );
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (workResult === 'OK') {
      alert('출근하셨습니다');
      dispatch(initializeForm());
      history.push('/');
    }
  }, [workResult, history, dispatch]);

  useEffect(() => {
    if (quitResult === 'OK') {
      alert('출근하셨습니다');
      dispatch(initializeForm());
      history.push('/');
    }
  }, [quitResult, dispatch, history]);

  useEffect(() => {
    if (dashboardError !== null) {
      setError(dashboardError);
    }
  }, [dashboardError]);

  return (
    <EmployDashboard
      employW={employW}
      employR={employR}
      employC={employC}
      error={error}
      loading={loading}
      onWork={onWork}
      onQuit={onQuit}
    ></EmployDashboard>
  );
};

export default withRouter(EmployDashboardContainer);
