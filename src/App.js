import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';

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
import client from './lib/api/client';
import SideBarMenu from '../src/components/common/SidebarMenu';
import Drawer from '@material-ui/core/Drawer';
import SidebarHeader from './SidebarHeader';
import { makeStyles } from '@material-ui/core/styles';

const App = ({ history }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ auth }) => ({ user: auth.user }));

  const classes = useStyles();

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
    <>
      <div>
        <SidebarHeader user={user} />
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
          <SideBarMenu />
        </Drawer>
        <Route path="/timetable" component={TimetablePage} exact />
        <Route path="/employ" component={EmployPage} />
        <Route path="/member" component={MemberPage} />
        <Route path="/occupation" component={OccupationPage} />
        <Route path="/record" component={RecordPage} />
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/" component={IndexPage} exact />
        <Route path="/branch" component={BranchPage} />
      </div>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </>
  );
};

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    // position: 'relative',
    // whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
  },
  content: {
    position: 'relative',
    left: '100px',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default withRouter(App);
