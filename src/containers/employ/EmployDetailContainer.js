import React, { useState, useEffect } from 'react';
import EmployDetailForm from '../../components/employ/EmployDetailForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInput,
  employUpdate,
  employDelete,
  getEmployhDetail,
} from '../../modules/employ/employDetail';
import { checkExpire, logout } from '../../lib/api/common/authAPI';

const EmployDetailContainer = ({ match, history }) => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { user } = useSelector(({ auth }) => ({
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
    const data = null;

    if ([].includes('')) {
      setError('빈 칸을 모두 입력하세요');

      return;
    }
    const no = match.params.no;
    dispatch(employUpdate({ no, data }));
  };

  const onDelete = () => {
    const no = match.params.no;
    dispatch(employDelete({ no }));
  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      const url = match.url;
      const no = url.substring(url.lastIndexOf('/') + 1);

      dispatch(getEmployhDetail({ no }));
    }
  }, [dispatch, match.url, user]);

  useEffect(() => {
    // 성공 시 /employ로 이동 하는 함수
    if ('branchResult' === 'Success') {
      //dispatch(initializeResult());
      history.push('/employ');
    }
  }, [history, dispatch]);

  return (
    <div>
      <EmployDetailForm
        onSubmit={onSubmit}
        onChange={onChange}
        onDelete={onDelete}
        error={error}
      ></EmployDetailForm>
    </div>
  );
};

export default EmployDetailContainer;
