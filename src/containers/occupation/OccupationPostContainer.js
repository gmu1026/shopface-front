import React, { useEffect, useState } from 'react';
import OccupationListForm from '../../components/occupation/OccupationListForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInput,
  postOccupation,
} from '../../modules/occupation/occupationPost';

const OccupationPostContainer = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { occupationPost, occupationPostError } = useSelector(
    ({ occupationPost }) => ({
      occupationPost: occupationPost,
      occupationPostError: occupationPost.occupationPostError,
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
    const data = occupationPost;
    console.log(data);
    if ([data.name, data.color].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    dispatch(postOccupation());
  };

  return (
    <OccupationListForm
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
    ></OccupationListForm>
  );
};

export default OccupationPostContainer;
