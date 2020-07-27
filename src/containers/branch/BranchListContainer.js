import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BranchListForm from '../../components/branch/BranchListForm';
import { getBranchList } from '../../modules/branch/branchList';

const BranchListContainer = () => {
  const { branchs, branchError, loading, user } = useSelector(
    ({ branchList, loading, auth }) => ({
      branchs: branchList.branchs,
      branchError: branchList.branchError,
      loadind: loading,
      user: auth.user,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (user !== null) {
      dispatch(getBranchList());
    }
  }, [dispatch, user]);

  return (
    <div>
      <BranchListForm
        branchs={branchs}
        branchError={branchError}
        loadind={loading}
      ></BranchListForm>
    </div>
  );
};

export default withRouter(BranchListContainer);
