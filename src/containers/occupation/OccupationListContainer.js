import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OccupationListForm from '../../components/occupation/OccupationListForm';
import { getOccupationList } from '../../modules/occupation/occupationList';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const OccupationListContainer = () => {
  const { occupations, occupationError, loading, user } = useSelector(
    ({ occupationList, loading, auth }) => ({
      occupations: occupationList.occupations,
      occupationError: occupationList.occupationError,
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
      dispatch(getOccupationList());
    }
  }, [dispatch, user]);

  return (
    <OccupationListForm
      occupations={occupations}
      occupationError={occupationError}
      loading={loading}
    ></OccupationListForm>
  );
};

export default withRouter(OccupationListContainer);
