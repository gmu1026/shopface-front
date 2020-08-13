import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OccupationListForm from '../../components/occupation/OccupationListForm';
import {
  changeInput,
  updateChange,
  initializeForm,
  getOccupationList,
  postOccupation,
  updateOccupation,
  deleteOccupation,
} from '../../modules/occupation/occupation';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const OccupationListContainer = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const {
    occupations,
    occupationError,
    occupationPost,
    postError,
    postResult,
    updateError,
    updateResult,
    deleteError,
    deleteResult,
    loading,
    user,
    selectedBranch,
  } = useSelector(({ occupation, auth, loading, branchSelect }) => ({
    occupations: occupation.occupations,
    occupationError: occupation.occupationError,
    occupationPost: occupation.post,
    postError: occupation.postError,
    postResult: occupation.postResult,
    deleteOccupation: occupation.deleteOccupation,
    deleteError: occupation.deleteError,
    deleteResult: occupation.deleteResult,
    updateOccupation: occupation.updateOccupation,
    updateError: occupation.updateError,
    updateResult: occupation.updateResult,
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
    if (postResult === 'OK') {
      alert('등록되었습니다');
      dispatch(initializeForm());
      dispatch(getOccupationList({ selectedBranch }));
    }
  }, [postResult, dispatch, selectedBranch]);

  useEffect(() => {
    if (updateResult === 'OK') {
      alert('수정되었습니다');
      dispatch(initializeForm());
      dispatch(getOccupationList({ selectedBranch }));
    }
  }, [updateResult, dispatch, selectedBranch]);

  useEffect(
    (e) => {
      if (deleteResult === 'OK') {
        alert('삭제되었습니다');
        dispatch(initializeForm());
        dispatch(getOccupationList({ selectedBranch }));
      }
    },
    [deleteResult, dispatch, selectedBranch],
  );

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
