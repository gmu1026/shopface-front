import React from 'react';
import LoginPage from './pages/common/LoginPage';
import { Route } from 'react-router-dom';
import RegisterPage from './pages/common/RegisterPage';
import IndexTestPage from './pages/IndexTestPage';
import BranchPage from './pages/branch/BranchPage';
import TimetableList from './pages/timetable/TimetableList';
import EmployList from './pages/employ/EmployPage';
import MemberList from './pages/member/MemberList';
import OccupationPage from './pages/occupation/OccupationPage';
import RecordPage from './pages/RecordPage';
import ScheduleList from './pages/schedule/ScheduleList';
import Sidebar from '../src/Sidebar';

const App = () => {
  return (
    <div className="App">
      <Route path="/timetable" component={TimetableList} exact />
      <Route path="/employ" component={EmployList} />
      <Route path="/member" component={MemberList} />
      <Route path="/occupation" component={OccupationPage} />
      <Route path="/record" component={RecordPage} />
      <Route path="/main" component={Sidebar} />
      <Route path="/schedule" component={ScheduleList} />
      <Route path="/" component={IndexTestPage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/branch" component={BranchPage} />
    </div>
  );
};

export default App;
