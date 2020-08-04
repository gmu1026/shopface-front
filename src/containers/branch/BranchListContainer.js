import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BranchListForm from '../../components/branch/BranchListForm';
import { getBranchList } from '../../modules/branch/branchList';
import { withRouter } from 'react-router-dom';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const BranchListContainer = () => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const dispatch = useDispatch();
  const { branchs, branchError, loading, user } = useSelector(
    ({ branchList, loading, auth }) => ({
      branchs: branchList.branchs,
      branchError: branchList.branchError,
      loading: loading,
      user: auth.user,
    }),
  );

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      const { name } = { user };
      dispatch(getBranchList({ name }));
    }
  }, [dispatch, user]);

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

export default withRouter(BranchListContainer);
