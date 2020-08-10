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

import {
  changeInputUpdate,
  initializeResult,
  updateOccupation,
} from '../../modules/occupation/occupationUpdate';

import { deleteOccupation } from '../../modules/occupation/occupationDelete';

const OccupationListContainer = ({ history }) => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const {
    occupationPost,
    occupationPostResult,
    occupationPostError,
    post,
    occupationUpdate,
    occupationUpdateResult,
    occupationUpdateError,
    occupationDelete,
    user,
    occupations,
    occupationError,
    loading,
    selectedBranch,
  } = useSelector(
    ({
      occupationPost,
      auth,
      occupationUpdate,
      occupationDelete,
      occupationList,
      loading,
      branchSelect,
    }) => ({
      occupations: occupationList.occupations,
      occupationError: occupationList.occupationError,
      occupationPost: occupationPost.post,
      occupationPostResult: occupationPost.occupationPostResult,
      occupationPostError: occupationPost.occupationPostError,
      user: auth.user,
      post: occupationUpdate.post,
      occupationUpdate: occupationUpdate.occupationUpdate,
      occupationUpdateResult: occupationUpdate.occupationUpdateResult,
      occupationUpdateError: occupationUpdate.occupationUpdateError,
      loading: loading,
      selectedBranch: branchSelect.selectedBranch,
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

  const onUpdateChange = (e, rowInfo) => {
    const { no, key, value } = e.target;
    dispatch(changeInputUpdate(no, key, value));
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
          branchNo: selectedBranch,
        },
      }),
    );
  };

  const onEdit = (e) => {
    e.preventDefault();
    const data = occupationUpdate;
    if ([data.name, data.color].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
  };

  //  const onDelete = (id) => {
  //    const result = occupations.filter((test) => test.id !== id);
  //    console.log(test.post.color);
  //    console.log(test.post.name);
  //     dispatch(occupationDelete({}));
  //  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(getOccupationList({ selectedBranch }));
    }
  }, [dispatch, selectedBranch, user]);

  useEffect(() => {
    if (occupationPostResult === 200) {
      dispatch(initializeForm());
      dispatch(getOccupationList({ selectedBranch }));
    }
  }, [occupationPostResult, dispatch, selectedBranch]);

  useEffect(() => {
    if (occupationUpdateResult === '200') {
      // TODO   리 랜더링 하기
      dispatch(initializeResult());
      history.push('/occupation');
    }
  }, [occupationUpdateResult, history, dispatch]);

  useEffect(() => {
    if (occupationPostError !== null) {
      setError('등록에 실패 했습니다');
    }
  }, [occupationPostError]);

  useEffect(() => {
    if (occupationUpdateError !== null) {
      setError('수정에 실패 했습니다');
    }
  }, [occupationUpdateError]);

  return (
    <OccupationListForm
      occupations={occupations}
      occupationError={occupationError}
      loading={loading}
      onSubmit={onSubmit}
      onChange={onChange}
      onUpdateChange={onUpdateChange}
      onEdit={onEdit}
      //onDelete={onDelete}
      error={error}
    ></OccupationListForm>
  );
};

export default withRouter(OccupationListContainer);
