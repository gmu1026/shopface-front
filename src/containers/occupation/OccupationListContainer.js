import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OccupationListForm from '../../components/occupation/OccupationListForm';
import { getOccupationList } from '../../modules/occupation/occupationList';

const OccupationListContainer = () => {
  const { occupations, occupationError, loading } = useSelector(
    ({ occupationList, loading, auth }) => ({
      occupations: occupationList.occupations,
      occupationError: occupationList.occupationError,
      loadind: loading,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (occupations !== null) {
      dispatch(getOccupationList());
    }
  }, [dispatch, occupations]);

  return (
    <div>
      <OccupationListForm
        occupations={occupations}
        occupationError={occupationError}
        loadind={loading}
      ></OccupationListForm>
    </div>
  );
};

export default withRouter(OccupationListContainer);
