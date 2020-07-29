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
import SidebarHeader from '../src/components/common/SidebarHeader';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const App = ({ history, match }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ auth }) => ({ user: auth.user }));

  const classes = useStyles();

  const onLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (user !== null) {
      client.defaults.headers.common['Authorization'] = 'bearer ' + user.jwt;
      checkExpire().then((isExpired) => {
        if (isExpired) {
          onLogout();
        }
      });
    } else {
      history.push('/login');
    }
  }, [user, history, dispatch]);

  if (
    window.location.pathname === '/login' ||
    window.location.pathname === '/register'
  ) {
    return (
      <>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </>
    );
  } else {
    return (
      <>
        {/* <div>
      <SidebarHeader />
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <SideBarMenu />
      </Drawer>
      <main className={classes.content}>
        <Container className={classes.container}>
        </Container>
      </main>
    </div> */}

        <SidebarHeader user={user} onLogout={onLogout}></SidebarHeader>
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
          <SideBarMenu />
        </Drawer>

        <main className="content">
          <Container className={classes.container}>
            <Route path="/timetable" component={TimetablePage} />
            <Route path="/employ" component={EmployPage} />
            <Route path="/member" component={MemberPage} />
            <Route path="/occupation" component={OccupationPage} />
            <Route path="/record" component={RecordPage} />
            <Route path="/schedule" component={SchedulePage} />
            <Route path="/" component={IndexPage} exact />
            <Route path="/branch" component={BranchPage} />
          </Container>
        </main>
      </>
    );
  }
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
