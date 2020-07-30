import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BranchListForm from '../../components/branch/BranchListForm';
import { getBranchList } from '../../modules/branch/branchList';

const BranchListContainer = () => {
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const { branchs, branchError, loading } = useSelector(
    ({ branchList, loading }) => ({
      branchs: branchList.branchs,
      branchError: branchList.branchError,
      loading: loading,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBranchList());
  }, [dispatch]);

  return (
    <div>
      <BranchListForm
        branchs={branchs}
        branchError={branchError}
        loading={loading}
        show={show}
        closeModal={closeModal}
        openModal={openModal}
      ></BranchListForm>
    </div>
  );
};

export default BranchListContainer;
