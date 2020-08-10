import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OccupationListForm from '../../components/occupation/OccupationListForm';
import {
  changeInput,
  initializeForm,
  initializeResult,
  getOccupationList,
  postOccupation,
  updateOccupation,
  deleteOccupation,
} from '../../modules/occupation/occupationList';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import createRequestSaga from '../../lib/createRequestSaga';

const OccupationListContainer = ({ history }) => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const {
    occupations,
    occupationResult,
    occupationError,
    loading,
    user,
    occupationPost,
    occupationUpdate,
    occupationDelete,
    selectedBranch,
  } = useSelector(
    ({
      occupationPost,
      occupationUpdate,
      occupationDelete,
      occupationList,
      auth,
      loading,
      branchSelect,
    }) => ({
      occupations: occupationList.occupations,
      occupationError: occupationList.occupationError,
      occupationResult: occupationList.occupationResult,
      occupationPost: occupationList.post,
      occupationUpdate: occupationList.occupationUpdate,
      deleteOccupation: occupationList.deleteOccupation,
      occupationDelete: occupationList.occupationDelete,
      user: auth.user,
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

  // const onUpdateChange = (e, rowInfo) => {
  //   const { no, key, value } = e.target;
  //   dispatch(changeInputUpdate(no, key, value));
  // };

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

  const onDelete = () => {
    const occupation = occupations.map((occupation, index) => (
      <li key={index}>{occupation.name}</li>
    ));
    console.log(occupation.name);
    dispatch(deleteOccupation());
  };

  const onEdit = (e) => {
    e.preventDefault();
    const data = occupationUpdate;
    if ([data.name, data.color].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
  };

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
    if (occupationResult === 200) {
      dispatch(initializeForm());
      dispatch(getOccupationList({ selectedBranch }));
    }
  }, [occupationResult, dispatch, selectedBranch]);

  return (
    <OccupationListForm
      occupations={occupations}
      occupationError={occupationError}
      loading={loading}
      onSubmit={onSubmit}
      onChange={onChange}
      onDelete={onDelete}
      // onUpdateChange={onUpdateChange}
      onEdit={onEdit}
      error={error}
    ></OccupationListForm>
  );
};

export default withRouter(OccupationListContainer);
