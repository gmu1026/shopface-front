import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BranchListForm from '../../components/branch/BranchListForm';
import { getBranchList } from '../../modules/branch/branchList';

const BranchListContainer = ({ history }) => {
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const { branchs, branchError, loading, user } = useSelector(
    ({ branchList, loading, auth }) => ({
      branchs: branchList.branchs,
      branchError: branchList.branchError,
      loading: loading,
      user: auth.user,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (user !== null) {
      dispatch(getBranchList());
    } else {
      history.push('/login');
    }
  }, [dispatch, user, history]);

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
