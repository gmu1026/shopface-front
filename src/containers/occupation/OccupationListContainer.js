import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OccupationListForm from '../../components/occupation/OccupationListForm';
import { getOccupationList } from '../../modules/occupation/occupationList';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import {
  changeInput,
  postOccupation,
  initializeForm,
} from '../../modules/occupation/occupationPost';

const OccupationListContainer = ({ history }) => {
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [show, setShow] = useState('');

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const dispatch = useDispatch();
  const {
    occupations,
    occupationError,
    loading,
    occupationPost,
    occupationPostResult,
    occupationPostError,
    user,
  } = useSelector(({ occupationList, loading, auth, occupationPost }) => ({
    occupations: occupationList.occupations,
    occupationError: occupationList.occupationError,
    occupationPost: occupationPost.occupationPost,
    occupationPostResult: occupationPost.occupationPostResult,
    occupationPostError: occupationPost.occupationPostError,
    loading: loading,
    user: auth.user,
  }));

  const onChange = (e) => {
    console.log('rere');
    const { name, value } = e.target;
    dispatch(
      changeInput({
        key: name,
        value,
      }),
    );
  };

  const handleComplete = (data) => {
    let value = data.name;
    setName(value);
    dispatch(changeInput({ key: 'name', value }));

    value = data.color;
    setColor(value);
    dispatch(changeInput({ key: 'color', value }));

    closeModal();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = occupationPost;
    if ([data.name, data.color].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    setError(null);
    dispatch(
      postOccupation({
        post: {
          name: data.name,
          color: data.color,
          branchNo: 43,
        },
      }),
    );
  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(getOccupationList());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (occupationPostResult === 'Success') {
      history.push('/occupation');
    }
  }, [history, occupationPostResult]);

  useEffect(() => {
    if (occupationPostError !== null) {
      setError('등록에 실패 했습니다');
    }
  }, [occupationPostError]);

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(initializeForm('post'));
    }
  }, [dispatch, user]);

  return (
    <OccupationListForm
      occupations={occupations}
      occupationError={occupationError}
      loading={loading}
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
      handleComplete={handleComplete}
      show={show}
      closeModal={closeModal}
      openModal={openModal}
      name={name}
      color={color}
    ></OccupationListForm>
  );
};

export default withRouter(OccupationListContainer);
