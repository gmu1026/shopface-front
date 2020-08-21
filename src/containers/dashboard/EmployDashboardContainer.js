import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import EmployDashboard from '../../components/dashboard/EmployDashboard';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEmployDashboard,
  putWorkTime,
  putQuitTime,
} from '../../modules/dashboard/dashboard';
const EmployDashboardContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { employ, error, loading, user, workResult, quitResult } = useSelector(
    ({ dashboard, loading, auth }) => ({
      employ: dashboard.employ,
      error: dashboard.error,
      loading: loading,
      user: auth.user,
      workResult: dashboard.workResult,
      quitResult: dashboard.quitResult,
    }),
  );

  const onWork = (e) => {
    // console.log(e.target.type);
    dispatch(putWorkTime({ no: '191' }));
  };

  const onQuit = (e) => {
    // console.log(e.target);
    dispatch(putQuitTime({ no: '191' }));
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

  useEffect(() => {
    if (workResult === 'OK') {
      alert('출근하셨습니다');
      history.push('/');
    }
  }, [workResult, history, dispatch]);

  useEffect(() => {
    if (quitResult === 'OK') {
      alert('퇴근하셨습니다');
      history.push('/');
    }
  }, [quitResult, history, dispatch]);

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
