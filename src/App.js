import React from 'react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import LoginPage from './pages/common/LoginPage';
import RegisterPage from './pages/common/RegisterPage';
import IndexPage from './pages/IndexPage';
import BranchPage from './pages/branch/BranchPage';
import TimetablePage from './pages/timetable/TimetablePage';
import EmployPage from './pages/employ/EmployPage';
import MemberPage from './pages/member/MemberPage';
import OccupationPage from './pages/occupation/OccupationPage';
import RecordPage from './pages/record/RecordPage';
import SchedulePage from './pages/schedule/SchedulePage';
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
    <div>
      <Switch>
        <Route path="/timetable" component={TimetablePage} exact />
        <Route path="/employ" component={EmployPage} />
        <Route path="/member" component={MemberPage} />
        <Route path="/occupation" component={OccupationPage} />
        <Route path="/record" component={RecordPage} />
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/" component={IndexPage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/branch" component={BranchPage} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
