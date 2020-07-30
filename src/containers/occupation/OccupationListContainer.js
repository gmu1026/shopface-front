import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OccupationListForm from '../../components/occupation/OccupationListForm';
import { getOccupationList } from '../../modules/occupation/occupationList';

const OccupationListContainer = () => {
  const { occupations, occupationError, loading } = useSelector(
    ({ occupationList, loading }) => ({
      occupations: occupationList.occupations,
      occupationError: occupationList.occupationError,
      loading: loading,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOccupationList());
  }, [dispatch]);

  return (
    <OccupationListForm
      occupations={occupations}
      occupationError={occupationError}
      loading={loading}
    ></OccupationListForm>
  );
};

export default withRouter(OccupationListContainer);
