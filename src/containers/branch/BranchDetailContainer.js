import React, { useState, useEffect } from 'react';
import BranchDetailForm from '../../components/branch/BranchDetailForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeInput,
  getbranchDetail,
  branchUpdate,
  branchDelete,
  initializeResult,
} from '../../modules/branch/branchDetail';
import { withRouter } from 'react-router-dom';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const BranchDetailContainer = ({ match, history }) => {
  const [error, setError] = useState(null);
  const [zoneCode, setZoneCode] = useState('');
  const [address, setAddress] = useState('');
  const [show, setShow] = useState(false);
  const [imgFile, setImgFile] = useState(null);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(false);

  const dispatch = useDispatch();

  const { originBranch, branchResult, branchError, user } = useSelector(
    ({ branchDetail, auth }) => ({
      originBranch: branchDetail.originBranch,
      branchError: branchDetail.branchError,
      branchResult: branchDetail.branchResult,
      user: auth.user,
    }),
  );

  const handleComplete = (data) => {
    let value = data.address;
    setAddress(value);
    dispatch(changeInput({ key: 'address', value }));

    value = data.zonecode;
    setZoneCode(value);
    dispatch(changeInput({ key: 'zoneCode', value }));

    closeModal();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'licenseImage') {
      setImgFile(e.target.files[0]);
    }
    dispatch(
      changeInput({
        key: name,
        value,
      }),
    );
    setError('');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = originBranch;
    if (
      [
        data.name,
        data.phone,
        data.address,
        data.detailAddress,
        data.zipCode,
      ].includes('')
    ) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('address', data.address);
    formData.append('detailAddress', data.detailAddress);
    formData.append('zipCode', data.zipCode);
    formData.append('businessLicenseImage', imgFile);

    const no = match.params.no;
    dispatch(branchUpdate({ no, data: formData }));
  };

  const onDelete = () => {
    const no = match.params.no;
    dispatch(branchDelete({ no }));
  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      const no = match.params.no;
      dispatch(getbranchDetail({ no }));
    }
  }, [dispatch, match.params.no, user]);

  useEffect(() => {
    if (branchResult === 'OK') {
      dispatch(initializeResult());
      history.push('/branch');
    }
  }, [branchResult, history, dispatch]);

  return (
    <div>
      <BranchDetailForm
        onSubmit={onSubmit}
        onChange={onChange}
        onDelete={onDelete}
        originBranch={originBranch}
        error={error}
        handleComplete={handleComplete}
        closeModal={closeModal}
        openModal={openModal}
        show={show}
        zoneCode={zoneCode}
        address={address}
      ></BranchDetailForm>
    </div>
  );
};

export default withRouter(BranchDetailContainer);
