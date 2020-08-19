import React, { useEffect, useState } from 'react';
import MemberDetailForm from '../../components/member/MemberDetailForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeInput,
  getMemberDetail,
  memberUpdate,
  memberDelete,
  initializeResult,
} from '../../modules/member/memberDetail';
import { checkExpire } from '../../lib/api/common/authAPI';
import { withRouter } from 'react-router-dom';
import { logout } from '../../modules/common/auth';

const MemberDetailContainer = ({ match, history }) => {
  const [id, setId] = useState(match.params.id);
  const [error, setError] = useState(null);
  const [zoneCode, setZoneCode] = useState('');
  const [address, setAddress] = useState('');
  const [disabled, setDisabled] = useState(false);

  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const handleComplete = (data) => {
    let value = data.address;
    setAddress(value);
    dispatch(changeInput({ key: 'address', value }));

    value = data.zonecode;
    setZoneCode(value);
    dispatch(changeInput({ key: 'zipCode', value }));

    closeModal();
  };

  const dispatch = useDispatch();
  const { member, memberResult, memberError, user } = useSelector(
    ({ memberDetail, auth }) => ({
      member: memberDetail.member,
      memberResult: memberDetail.memberResult,
      memberError: memberDetail.memberError,
      user: auth.user,
    }),
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeInput({
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let data = member;
    if (
      [
        data.name,
        data.password,
        data.email,
        data.email,
        data.zoneCode,
        data.address,
        data.detailAddress,
        data.accountNum,
        data.bankName,
        data.phone,
      ].includes('')
    ) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }

    dispatch(memberUpdate({ id, data }));
  };

  const onDelete = (e) => {
    dispatch(memberDelete({ id }));
  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });

      dispatch(getMemberDetail({ id }));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user !== null) {
      if (id != null && id !== user.name) {
        setDisabled(true);
      }
    }
  }, [member, id, user.name]);

  useEffect(() => {
    if (memberResult === 'OK') {
      alert('변경되었습니다');
      dispatch(initializeResult());

      if (id === user.name) {
        return;
      }
      history.push('/member');
    }
  }, [memberResult, history, dispatch]);

  return (
    <div>
      <MemberDetailForm
        member={member}
        onSubmit={onSubmit}
        onChange={onChange}
        onDelete={onDelete}
        error={error}
        handleComplete={handleComplete}
        closeModal={closeModal}
        openModal={openModal}
        show={show}
        zoneCode={zoneCode}
        address={address}
        disabled={disabled}
      ></MemberDetailForm>
    </div>
  );
};

export default withRouter(MemberDetailContainer);
