import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EmployListForm from '../../components/employ/EmployListForm';
import { getEmployList } from '../../modules/employ/employList';

const EmployListContainer = () => {
  const { employs, employError, loading } = useSelector(
    ({ employList, loading }) => ({
      employs: employList.employs,
      employError: employList.employError,
      loading: loading,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (employs !== null) {
      dispatch(getEmployList());
    }
  }, [dispatch, employs]);

  return (
    <EmployListForm
      employs={employs}
      employError={employError}
      loading={loading}
    ></EmployListForm>
  );
};

export default withRouter(EmployListContainer);
