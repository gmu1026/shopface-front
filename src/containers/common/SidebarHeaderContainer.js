import React, { useState } from 'react';
import SideBarHeaderForm from '../../components/common/SidebarHeaderForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, checkCertCode } from '../../modules/common/certCode';

const SidebarHeaderContainer = ({ onLogout, branchs, user }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { certCode } = useSelector(({ certCode }) => ({
    certCode: certCode.authCode,
    authCodeError: certCode.authCodeError,
    authResult: certCode.authResult,
  }));
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const onChange = (e) => {
    const certCode = e.target.value;
    dispatch(changeInput({ certCode }));
  };

  const onCheckCertCode = () => {
    dispatch(checkCertCode({ memberId: user.user, certCode }));
  };

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
