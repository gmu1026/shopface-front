import React, { useState, useEffect } from 'react';
import EmployDetailForm from '../../components/employ/EmployDetailForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInput,
  employUpdate,
  employDisable,
  employInvite,
  getEmployhDetail,
  initializeResult,
} from '../../modules/employ/employDetail';
import { checkExpire, logout } from '../../lib/api/common/authAPI';

const EmployDetailContainer = ({ match, history }) => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { employs, employResult, employError, user } = useSelector(
    ({ employDetail, auth }) => ({
      employs: employDetail.employs,
      employError: employDetail.employError,
      employResult: employDetail.employResult,
      user: auth.user,
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

  const onInvite = () => {
    const no = match.params.no;
    dispatch(employInvite({ no }));
  };

  const onDisabled = () => {
    const no = match.params.no;
    dispatch(employDisable({ no }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let data = employs;
    if ([data.salary].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    const no = match.params.no;
    dispatch(employUpdate({ no, data }));
  };

  useEffect(() => {
    if (employResult === 'OK') {
      alert('수정되었습니다');
      dispatch(initializeResult());
      history.push('/employ');
    }
  }, [employResult, history, dispatch]);

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      const no = match.params.no;
      dispatch(getEmployhDetail({ no }));
    }
  }, [dispatch, match.params.no, user]);

  return (
    <div>
      <EmployDetailForm
        onSubmit={onSubmit}
        onChange={onChange}
        error={error}
        employs={employs}
        onDisabled={onDisabled}
        onInvite={onInvite}
      ></EmployDetailForm>
    </div>
  );
};

export default EmployDetailContainer;
