import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OccupationListForm from '../../components/occupation/OccupationListForm';
import {
  changeInput,
  updateChange,
  initializeForm,
  initializeResult,
  getOccupationList,
  postOccupation,
  updateOccupation,
  deleteOccupation,
} from '../../modules/occupation/occupation';
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
    selectedBranch,
  } = useSelector(({ occupationList, auth, loading, branchSelect }) => ({
    occupations: occupationList.occupations,
    occupationError: occupationList.occupationError,
    occupationResult: occupationList.occupationResult,
    occupationPost: occupationList.post,
    occupationUpdate: occupationList.occupationUpdate,
    deleteOccupation: occupationList.deleteOccupation,
    updateOccupation: occupationList.updateOccupation,
    occupationDelete: occupationList.occupationDelete,
    user: auth.user,
    loading: loading,
    selectedBranch: branchSelect.selectedBranch,
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

  const onUpdateChange = (e) => {
    const index = e.target.getAttribute('index');
    const { name, value } = e.target;

    dispatch(
      updateChange({
        index,
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
          branchNo: selectedBranch,
        },
      }),
    );
  };

  const onEdit = (e) => {
    e.preventDefault();
    const no = parseInt(e.target.value);
    const modifiedOcupation = occupations.filter(
      (occupation) => occupation.no === no,
    );

    const data = modifiedOcupation[0];
    if ([data.name].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }

    dispatch(updateOccupation({ no, occupation: data }));
  };

  const onDelete = (e) => {
    const no = e.target.value;
    dispatch(deleteOccupation({ no }));
  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      if (selectedBranch !== null && selectedBranch !== '') {
        dispatch(getOccupationList({ selectedBranch }));
      }
    }
  }, [dispatch, selectedBranch, user]);

  useEffect(() => {
    if (occupationResult === 200) {
      alert('변경되었습니다');
      dispatch(initializeForm());
      dispatch(getOccupationList({ selectedBranch }));
    }
  }, [occupationResult, dispatch, selectedBranch]);

  useEffect(() => {
    if (occupationError !== null) {
      alert(occupationError);
    }
  }, [occupationError]);

  return (
    <OccupationListForm
      occupations={occupations}
      occupationError={occupationError}
      loading={loading}
      onSubmit={onSubmit}
      onEdit={onEdit}
      onChange={onChange}
      updateChange={onUpdateChange}
      onDelete={onDelete}
      error={error}
    />
  );
};

export default withRouter(OccupationListContainer);
