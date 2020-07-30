import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EmployListForm from '../../components/employ/EmployListForm';
import { getEmployList } from '../../modules/employ/employList';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const EmployListContainer = () => {
  const { employs, employError, loading, user } = useSelector(
    ({ employList, loading, auth }) => ({
      employs: employList.employs,
      employError: employList.employError,
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
      dispatch(getEmployList());
    }
  }, [dispatch, employs, user]);

  return (
    <EmployListForm
      employs={employs}
      employError={employError}
      loading={loading}
    ></EmployListForm>
  );
};

export default withRouter(EmployListContainer);
