import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/common/Button';
import { logout, getTest } from '../lib/api/common/authAPI';
import { logoutSuccess, logoutFailure } from '../modules/common/auth';
import client from '../lib/api/client';

const IndexTestPage = () => {
  const dispatch = useDispatch();
  const { user, authError } = useSelector(({ auth }) => ({
    user: auth.user,
    authError: auth.authError,
  }));

  const onLogout = ({ history }) => {
    try {
      logout();
      dispatch(logoutSuccess());

      if (user.authError === null) {
        history.push('/login');
      }
    } catch (error) {
      console.log(error);
      dispatch(logoutFailure(error));
    }
  };

  return (
    <div>
      {user !== null ? (
        <div>
          <h3>안녕하세요 {user.name} 님</h3>
          <button onClick={onLogout}>로그아웃</button>
          <div>
            <Button to="/branch">지점</Button>
          </div>
        </div>
      ) : (
        <div>
          <h3>로그인하세요</h3>
          <Button to="/login">로그인</Button>
        </div>
      )}
    </div>
  );
};

export default IndexTestPage;
