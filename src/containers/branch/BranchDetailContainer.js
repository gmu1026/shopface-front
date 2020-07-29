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

const BranchDetailContainer = ({ match, history }) => {
  const [no, setNo] = useState('');
  const [error, setError] = useState(null);
  const [zoneCode, setZoneCode] = useState('');
  const [address, setAddress] = useState('');
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

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
    dispatch(
      changeInput({
        key: name,
        value,
      }),
    );
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

    const url = match.url;
    const no = url.substring(url.lastIndexOf('/') + 1);
    dispatch(branchUpdate({ no, data }));
  };

  const onDelete = () => {
    const url = match.url;
    const no = url.substring(url.lastIndexOf('/') + 1);
    dispatch(branchDelete({ no }));
  };

  useEffect(() => {
    if (user !== null) {
      const url = match.url;
      const no = url.substring(url.lastIndexOf('/') + 1);

      dispatch(getbranchDetail({ no }));
    }
  }, [dispatch, match.url, user]);

  useEffect(() => {
    if (branchResult === 'Success') {
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
