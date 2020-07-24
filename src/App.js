import React from 'react';
import LoginPage from './pages/common/LoginPage';
import { Route } from 'react-router-dom';
import RegisterPage from './pages/common/RegisterPage';
import IndexTestPage from './pages/IndexTestPage';
import BranchPage from './pages/branch/BranchPage';

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={IndexTestPage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/branch" component={BranchPage}></Route>
    </div>
  );
};

export default App;
