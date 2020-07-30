import React, { useState, useEffect } from 'react';
import OccupationListForm from '../../components/occupation/OccupationListForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInput,
  postOccupation,
} from '../../modules/occupation/occupationPost';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const OccupationPostContainer = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { occupationPost, user } = useSelector(({ occupationPost, auth }) => ({
    occupationPost: occupationPost,
    occupationPostError: occupationPost.occupationPostError,
    user: auth.user,
  }));

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
    const data = occupationPost;
    console.log(data);
    if ([data.name, data.color].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    dispatch(postOccupation());
  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
    }
  }, [dispatch, user]);

  return (
    <OccupationListForm
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
    ></OccupationListForm>
  );
};

export default OccupationPostContainer;
