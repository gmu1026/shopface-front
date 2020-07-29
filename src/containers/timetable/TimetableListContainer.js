import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TimetableListForm from '../../components/timetable/TimetableListForm';
import { getTimetableList } from '../../modules/timetable/timetableList';

const TimetableListContainer = () => {
  const { timetables, timetableError, loading } = useSelector(
    ({ timetableList, loading }) => ({
      timetables: timetableList.timetables,
      timetableError: timetableList.timetableError,
      loading: loading,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (timetables !== null) {
      dispatch(getTimetableList());
    }
  }, [dispatch, timetables]);

  return (
    <TimetableListForm
      timetables={timetables}
      timetableError={timetableError}
      loading={loading}
    ></TimetableListForm>
  );
};

export default withRouter(TimetableListContainer);
