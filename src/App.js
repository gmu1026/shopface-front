import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import client from './lib/api/client';
import BranchPage from './pages/branch/BranchPage';
import LoginPage from './pages/common/LoginPage';
import RegisterPage from './pages/common/RegisterPage';
import IndexTestPage from './pages/IndexTestPage';

const App = () => {
  const { user } = useSelector(({ auth }) => ({ user: auth.user }));

  useEffect(() => {
    if (user !== null) {
      client.defaults.headers.common['Authorization'] = 'bearer ' + user.jwt;
    }
  });
  return (
    <div className="App">
      <Route path="/" component={IndexTestPage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/branch/" component={BranchPage} />
    </div>
  );
};

export default App;
