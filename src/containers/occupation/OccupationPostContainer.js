import React, { useEffect, useState } from 'react';
import OccupationListForm from '../../components/occupation/OccupationListForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInput,
  postOccupation,
  initializeForm,
} from '../../modules/occupation/occupationPost';
import { withRouter } from 'react-router-dom';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const OccupationPostContainer = ({ history }) => {
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [show, setShow] = useState('');

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const dispatch = useDispatch();
  const {
    occupationPost,
    occupationPostResult,
    occupationPostError,
  } = useSelector(({ occupationPost, auth }) => ({
    occupationPost: occupationPost.occupationPost,
    occupationPostResult: occupationPost.occupationPostResult,
    occupationPostError: occupationPost.occupationPostError,
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

  const handleComplete = (data) => {
    let value = data.name;
    setName(value);
    dispatch(changeInput({ key: 'name', value }));

    value = data.color;
    setColor(value);
    dispatch(changeInput({ key: 'color', value }));

    closeModal();
  };

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

  // useEffect(() => {
  //   if (user !== null) {
  //     checkExpire().then((isExpired) => {
  //       if (isExpired) {
  //         dispatch(logout());
  //       }
  //     });
  //     dispatch(initializeForm('post'));
  //   }
  // }, [dispatch, user]);

  return (
    <OccupationListForm
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

export default withRouter(OccupationPostContainer);
