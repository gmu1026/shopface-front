import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import client from './lib/api/client';
import BranchPage from './pages/branch/BranchPage';
import LoginPage from './pages/common/LoginPage';
import RegisterPage from './pages/common/RegisterPage';
import IndexTestPage from './pages/IndexTestPage';
import { checkExpire } from './lib/api/common/authAPI';
import { logout } from './modules/common/auth';

const App = ({ history }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ auth }) => ({ user: auth.user }));

  useEffect(() => {
    if (user !== null) {
      client.defaults.headers.common['Authorization'] = 'bearer ' + user.jwt;
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
    } else {
      history.push('/login');
    }
  }, [user, history, dispatch]);
  return (
    <div className="App">
      <Route path="/" component={IndexTestPage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/branch" component={BranchPage} />
    </div>
  );
};

export default withRouter(App);
