import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BranchListForm from '../../components/branch/BranchListForm';
import { getBranchList } from '../../modules/branch/branchList';

const BranchListContainer = () => {
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

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

  useEffect(() => {}, [dispatch]);

  return (
    <div>
      <BranchListForm
        branchs={branchs}
        branchError={branchError}
        loadind={loading}
        show={show}
        closeModal={closeModal}
        openModal={openModal}
      ></BranchListForm>
    </div>
  );
};

export default withRouter(BranchListContainer);
