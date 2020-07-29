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
  const [zipCode, setZipCode] = useState('');
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
    setError(null);
    //TODO memberId  값 수정
    dispatch(
      postBranch({
        post: {
          name: data.name,
          phone: data.phone,
          address: data.address,
          detailAddress: data.detailAddress,
          zipCode: data.zipCode,
          memberId: 'test',
        },
      }),
    );
  };

  const handleComplete = (data) => {
    let value = data.address;
    setAddress(value);
    dispatch(changeInput({ key: 'address', value }));

    value = data.zonecode;
    setZipCode(value);
    dispatch(changeInput({ key: 'zipCode', value }));

    closeModal();
  };

  useEffect(() => {
    if (postResult === 'Success') {
      history.push('/branch');
    }
  }, [history, postResult]);

  useEffect(() => {
    if (postError !== null) {
      setError('등록에 실패 했습니다.');
    }
  }, [postError]);

  useEffect(() => {
    dispatch(initializeForm('post'));
  }, [dispatch]);

  return (
    <BranchPostForm
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
      handleComplete={handleComplete}
      show={show}
      closeModal={closeModal}
      openModal={openModal}
      zipCode={zipCode}
      address={address}
    ></BranchPostForm>
  );
};

export default withRouter(BranchPostContainer);
