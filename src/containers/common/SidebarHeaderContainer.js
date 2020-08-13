import React, { useState, useEffect } from 'react';
import SideBarHeaderForm from '../../components/common/SidebarHeaderForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInput,
  patchEmployByCertCode,
  initialize,
} from '../../modules/common/certCode';

const SidebarHeaderContainer = ({ onLogout, branchs, user }) => {
  const dispatch = useDispatch();
  const { certCode, certCodeResult, certCodeError } = useSelector(
    ({ certCode }) => ({
      certCode: certCode.authCode,
      certCodeError: certCode.certCodeError,
      certCodeResult: certCode.certCodeResult,
    }),
  );

  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const onChange = (e) => {
    const certCode = e.target.value;
    dispatch(changeInput({ certCode }));
  };

  const onCheckCertCode = () => {
    const memberId = user.user;
    dispatch(patchEmployByCertCode({ memberId, certCode }));
  };

  useEffect(() => {
    if (certCodeResult) {
      closeModal();
      alert('지점등록에 성공했습니다.');
      dispatch(initialize());
    }
  }, [certCodeResult, dispatch]);

  return (
    <div>
      <SideBarHeaderForm
        branchs={branchs}
        user={user}
        show={show}
        closeModal={closeModal}
        openModal={openModal}
        onLogout={onLogout}
        onChange={onChange}
        onCheckCertCode={onCheckCertCode}
      />
    </div>
  );
};

export default SidebarHeaderContainer;
