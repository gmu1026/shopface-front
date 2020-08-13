import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ScheduleListForm from '../../components/schedule/ScheduleListForm';
import { getScheduleList } from '../../modules/schedule/scheduleList';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const ScheduleListContainer = () => {
  const { schedules, scheduleError, loading, user } = useSelector(
    ({ scheduleList, loading, auth }) => ({
      schedules: scheduleList.schedules,
      scheduleError: scheduleList.scheduleError,
      loading: loading,
      user: auth.user,
    }),
  );
  console.log(schedules);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(getScheduleList());
    }
  }, [dispatch, user]);

  return (
    <ScheduleListForm
      schedules={schedules}
      scheduleError={scheduleError}
      loading={loading}
    ></ScheduleListForm>
  );
};

export default withRouter(ScheduleListContainer);
