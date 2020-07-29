import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ScheduleListForm from '../../components/schedule/ScheduleListForm';
import { getScheduleList } from '../../modules/schedule/scheduleList';

const ScheduleListContainer = () => {
  const { schedules, scheduleError, loading } = useSelector(
    ({ scheduleList, loading }) => ({
      schedules: scheduleList.schedules,
      scheduleError: scheduleList.scheduleError,
      loading: loading,
    }),
  );
  console.log(schedules);
  const dispatch = useDispatch();

  useEffect(() => {
    if (schedules !== null) {
      dispatch(getScheduleList());
    }
  }, [dispatch, schedules]);

  return (
    <ScheduleListForm
      schedules={schedules}
      scheduleError={scheduleError}
      loading={loading}
    ></ScheduleListForm>
  );
};

export default withRouter(ScheduleListContainer);
