import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/common/Button';
import { logout } from '../modules/member/user';
const IndexTestPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  const onLogout = () => {
    try {
      dispatch(logout());
      localStorage.removeItem('user');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {user !== null ? (
        <div>
          <h3>안녕하세요 {user.name} 님</h3>
          <button onClick={onLogout}>로그아웃</button>
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
