import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EmployListForm from '../../components/employ/EmployListForm';
import { getEmployList } from '../../modules/employ/employList';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import {
  changeInput,
  postEmploy,
  initializeForm,
} from '../../modules/employ/employPost';

const EmployListContainer = ({ history }) => {
  const [show, setShow] = useState(false);
  const [filterEmploys, setFilterEmploys] = useState(null);
  const [error, setError] = useState(null);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const dispatch = useDispatch();
  const {
    employs,
    employError,
    loading,
    employPost,
    postResult,
    postError,
    user,
    name,
    selectedBranch,
  } = useSelector(({ employList, employPost, loading, auth, select }) => ({
    employs: employList.employs,
    employError: employList.employError,
    loading: loading,
    employPost: employPost.post,
    postResult: employPost.postResult,
    postError: employPost.postError,
    user: auth.user,
    name: employList.name,
    selectedBranch: select.selectedBranch,
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

  const onSearch = () => {
    const searchName = name;
    const filterEmploys = employs.filter((employ) =>
      employ.name.toLowerCase().includes(searchName),
    );
    setFilterEmploys(filterEmploys);
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const onSubmit = (e) => {
    closeModal();
    e.preventDefault();
    const data = employPost;
    if (
      // [data.nameNo, data.branchNo, data.roleNo, data.departmentNo].includes('')
      [data.name].includes('')
    ) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    setError(null);
    dispatch(
      postEmploy({
        post: {
          name: data.name,
          state: 'B',
          branchNo: selectedBranch,
          roleNo: 3,
          departmentNo: 2,
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
    }
    dispatch(initializeForm('post'));
  }, [dispatch, user]);

  useEffect(() => {
    if (postResult === 200) {
      dispatch(initializeForm());
      dispatch(getEmployList({ selectedBranch }));
    }
  }, [postResult, dispatch, selectedBranch]);

  useEffect(() => {
    if (postError !== null) {
      setError('등록에 실패 했습니다.');
    }
  }, [postError]);

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(getEmployList({ selectedBranch }));
    }
  }, [dispatch, selectedBranch, user]);

  return (
    <EmployListForm
      employs={employs}
      employError={employError}
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
      error={error}
      filterEmploys={filterEmploys}
      show={show}
      closeModal={closeModal}
      openModal={openModal}
    ></EmployListForm>
  );
};

export default withRouter(EmployListContainer);
