import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import SidebarHeader from '../src/components/common/SidebarHeader';
import SideBarMenu from '../src/components/common/SidebarMenu';
import client from './lib/api/client';
import { checkExpire } from './lib/api/common/authAPI';
import { logout } from './modules/common/auth';
import BranchPage from './pages/branch/BranchPage';
import LoginPage from './pages/common/LoginPage';
import RegisterPage from './pages/common/RegisterPage';
import EmployPage from './pages/employ/EmployPage';
import IndexPage from './pages/IndexPage';
import MemberPage from './pages/member/MemberPage';
import OccupationPage from './pages/occupation/OccupationPage';
import RecordPage from './pages/record/RecordPage';
import SchedulePage from './pages/schedule/SchedulePage';
import TimetablePage from './pages/timetable/TimetablePage';

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
          dispatch(logout());
        }
      });
    } else {
      history.push('/login');
    }
  }, [history, user]);

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
        <div className="row">
          <div>
            <Drawer
              variant="permanent"
              classes={{ paper: classes.drawerPaper }}
            >
              <SideBarMenu />
            </Drawer>
          </div>

          <div className="col p-0">
            <SidebarHeader onLogout={onLogout} />
            <div className="content">
              <Route path="/member" component={MemberPage} />
              <Route path="/" component={IndexPage} exact />
              <Route path="/timetable" component={TimetablePage} />
              <Route path="/employ" component={EmployPage} />
              <Route path="/occupation" component={OccupationPage} />
              <Route path="/record" component={RecordPage} />
              <Route path="/schedule" component={SchedulePage} />
              <Route path="/branch" component={BranchPage} />
            </div>
          </div>
        </div>
      </>
    );
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '15.5rem',
  },
  drawerPaper: {
    position: 'relative',
    // whiteSpace: 'nowrap',
    width: '17rem',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: '1.5rem',
    background: '#354052',
    color: '#fff',
    height: '100vh',
  },
  content: {
    //position: 'relative',
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
