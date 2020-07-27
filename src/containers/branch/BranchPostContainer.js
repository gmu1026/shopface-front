import React, { useEffect, useState } from 'react';
import BranchPostForm from '../../components/branch/BranchPostForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInput,
  postBranch,
  initializeForm,
} from '../../modules/branch/branchPost';
import { withRouter } from 'react-router-dom';

const BranchPostContainer = ({ history }) => {
  const [error, setError] = useState(null);
  const [zoneCode, setZoneCode] = useState('');
  const [address, setAddress] = useState('');
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const dispatch = useDispatch();
  const { branchPost, postResult, postError } = useSelector(
    ({ branchPost }) => ({
      branchPost: branchPost.post,
      postResult: branchPost.postResult,
      postError: branchPost.postError,
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
    const data = branchPost;
    if (
      [
        data.id,
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
    dispatch(postBranch({ post: data }));
  };

  useEffect(() => {
    if (postResult !== null) {
      history.push('/branch');
    }
  }, [history, postResult]);

  useEffect(() => {
    dispatch(initializeForm('post'));
  }, [dispatch]);

  const handleComplete = (data) => {
    let value = data.address;
    setAddress(value);
    dispatch(changeInput({ key: 'address', value }));

    value = data.zonecode;
    setZoneCode(value);
    dispatch(changeInput({ key: 'zoneCode', value }));

    closeModal();
  };

  return (
    <BranchPostForm
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
      handleComplete={handleComplete}
      show={show}
      closeModal={closeModal}
      openModal={openModal}
      zoneCode={zoneCode}
      address={address}
    ></BranchPostForm>
  );
};

export default withRouter(BranchPostContainer);
