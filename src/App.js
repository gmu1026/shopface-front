import React from 'react';
import LoginPage from './pages/common/LoginPage';
import { Route } from 'react-router-dom';
import RegisterPage from './pages/common/RegisterPage';

const App = () => {
  return (
    <div className="App">
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </div>
  );
};

export default App;
