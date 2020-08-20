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
    occupationPost,
    occupationPostResult,
    occupationChangeResult,
    occupationError,
    user,
    selectedBranch,
  } = useSelector(({ occupation, auth, branchSelect }) => ({
    occupations: occupation.occupations,
    occupationPost: occupation.post,
    occupationPostResult: occupation.occupationPostResult,
    occupationChangeResult: occupation.occupationChangeResult,
    occupationError: occupation.occupationError,
    user: auth.user,
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
    if ([data.name].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }

    dispatch(
      postOccupation({
        post: {
          name: data.name,
          branchNo: selectedBranch,
        },
      }),
    );

    setError(null);
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
        console.log(selectedBranch);
        dispatch(getOccupationList({ selectedBranch }));
      }
    }
  }, [dispatch, selectedBranch, user]);

  useEffect(() => {
    if (occupationPostResult === 'OK') {
      alert('업무가 등록 되었습니다');
    }
    if (occupationChangeResult) {
      alert('업무가 변경 되었습니다');
    }

    dispatch(initializeForm());

    if (selectedBranch !== null && selectedBranch !== '') {
      dispatch(getOccupationList({ selectedBranch }));
    }
  }, [occupationPostResult, occupationChangeResult, dispatch, selectedBranch]);

  useEffect(() => {
    if (occupationError !== null) {
      alert(`업무 ${occupationError}에 실패 했습니다.`);

      dispatch(initializeForm());
      dispatch(getOccupationList({ selectedBranch }));
    }
  });

  return (
    <OccupationListForm
      occupations={occupations}
      occupationError={occupationError}
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
