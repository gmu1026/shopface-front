import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BranchListForm from '../../components/branch/BranchListForm';
import { getBranchList } from '../../modules/branch/branchList';
import { withRouter } from 'react-router-dom';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const BranchListContainer = () => {
  const [modal, setModal] = useState({ targetModal: '', show: false });
  const closeModal = () => setModal({ targetModal: '', show: false });
  const openModal = (no) => setModal({ targetModal: no, show: true });

  const dispatch = useDispatch();
  const { branchs, branchError, loading, user } = useSelector(
    ({ branchList, loading, auth }) => ({
      branchs: branchList.branchs,
      branchError: branchList.branchError,
      loading: loading,
      user: auth.user,
    }),
  );
  const onModalBtn = (e) => {
    const no = e.target.value;
    openModal(no);
  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      const { name } = user;
      dispatch(getBranchList({ name }));
    }
  }, [dispatch, user]);

  return (
    <div>
      <BranchListForm
        branchs={branchs}
        branchError={branchError}
        loading={loading}
        modal={modal}
        closeModal={closeModal}
        onModalBtn={onModalBtn}
      ></BranchListForm>
    </div>
  );
};

export default withRouter(BranchListContainer);
