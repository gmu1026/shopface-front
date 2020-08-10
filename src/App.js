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
import { getBranchList } from './modules/branch/branchList';
import AuthCodePage from './pages/common/AuthCodePage';

const App = ({ history, match }) => {
  const dispatch = useDispatch();
  const { user, branchs } = useSelector(({ auth, branchList }) => ({
    user: auth.user,
    branchs: branchList.branchs,
  }));

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '15.5rem',
    },
    drawerPaper: {
      position: 'fixed',
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

      const { name } = user;
      dispatch(getBranchList({ name }));
    } else {
      if (
        window.location.pathname === '/register/employ' ||
        window.location.pathname === '/register/check' ||
        window.location.pathname === '/authcode'
      ) {
        return;
      }
      history.push('/login');
    }
  }, [history, user]);

  if (
    window.location.pathname === '/login' ||
    window.location.pathname === '/register' ||
    window.location.pathname === '/register/employ' ||
    window.location.pathname === '/register/check' ||
    window.location.pathname === '/authcode'
  ) {
    return (
      <>
        <Route path="/login" component={LoginPage} />
        <Route
          path={['/register', '/register/employ', '/register/check']}
          component={RegisterPage}
        />
        <Route path="/authcode" component={AuthCodePage} />
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

          <div className="col p-0" style={{ marginLeft: '18.5rem' }}>
            <SidebarHeader onLogout={onLogout} branchs={branchs} />
            <div className="content">
              <Route path="/member" component={MemberPage} />
              <Route path="/timetable" component={TimetablePage} />
              <Route path="/" component={IndexPage} exact />
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

export default withRouter(App);
