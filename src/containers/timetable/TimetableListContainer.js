import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TimetableListForm from '../../components/timetable/TimetableListForm';
import { getTimetableList } from '../../modules/timetable/timetableList';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const TimetableListContainer = () => {
  const { timetables, timetableError, loading, user } = useSelector(
    ({ timetableList, loading, auth }) => ({
      timetables: timetableList.timetables,
      timetableError: timetableList.timetableError,
      loading: loading,
      user: auth.user,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(getTimetableList());
    }
  }, [dispatch, timetables, user]);

  return (
    <TimetableListForm
      timetables={timetables}
      timetableError={timetableError}
      loading={loading}
    ></TimetableListForm>
  );
};

export default withRouter(TimetableListContainer);
