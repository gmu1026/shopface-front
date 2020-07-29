import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/common/Button';
import { logout } from '../modules/common/auth';

const IndexTestPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ auth }) => ({
    user: auth.user,
  }));

  const onLogout = () => {
    dispatch(logout());
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
