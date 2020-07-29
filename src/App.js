import React from 'react';
import LoginPage from './pages/common/LoginPage';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/common/RegisterPage';
import IndexPage from './pages/IndexPage';
import BranchPage from './pages/branch/BranchPage';
import TimetablePage from './pages/timetable/TimetablePage';
import EmployPage from './pages/employ/EmployPage';
import MemberPage from './pages/member/MemberPage';
import OccupationPage from './pages/occupation/OccupationPage';
import RecordPage from './pages/record/RecordPage';
import SchedulePage from './pages/schedule/SchedulePage';

const App = () => {
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

export default App;
