import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarMenu from '../src/components/common/SidebarMenu';
import SidebarHeaderContainer from './containers/common/SidebarHeaderContainer';
import client from './lib/api/client';
import { checkExpire } from './lib/api/common/authAPI';
import { getBranchList } from './modules/branch/branchList';
import { logout } from './modules/common/auth';
import IndexPage from './pages/IndexPage';

const LoginPage = lazy(() => import('./pages/common/LoginPage'));
const CertCodePage = lazy(() => import('./pages/common/CertCodePage'));
const BranchPage = lazy(() => import('./pages/branch/BranchPage'));
const RegisterPage = lazy(() => import('./pages/common/RegisterPage'));
const EmployPage = lazy(() => import('./pages/employ/EmployPage'));
const MemberPage = lazy(() => import('./pages/member/MemberPage'));
const OccupationPage = lazy(() => import('./pages/occupation/OccupationPage'));
const RecordPage = lazy(() => import('./pages/record/RecordPage'));

const SchedulePage = lazy(() =>
  import('./components/schedule/ScheduleListForm'),
);
const BusinessDashboardPage = lazy(() =>
  import('./pages/dashboard/BusinessDashboardPage'),
);
const EmployDashboardPage = lazy(() =>
  import('./pages/dashboard/EmployDashboardPage'),
);

const App = ({ history, match }) => {
  const dispatch = useDispatch();
  const { user, branchs } = useSelector(({ auth, branchList }) => ({
    user: auth.user,
    branchs: branchList.branchs,
  }));

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '15rem',
    },
    drawerPaper: {
      position: 'fixed',
      width: '16rem',
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
        window.location.pathname === '/certcode' ||
        window.location.pathname === '/register'
      ) {
        return;
      }
      history.push('/login');
    }
  }, [history, dispatch, user]);

  if (
    window.location.pathname === '/login' ||
    window.location.pathname === '/register' ||
    window.location.pathname === '/certcode'
  ) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/certcode" component={CertCodePage} />
        </Switch>
      </Suspense>
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
              <SideBarMenu user={user} />
            </Drawer>
          </div>

          <div className="col p-0" style={{ marginLeft: '17rem' }}>
            <SidebarHeaderContainer
              onLogout={onLogout}
              branchs={branchs}
              user={user}
            />

            <div className="content">
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path="/member" component={MemberPage} />
                  <Route path="/timetable" component={IndexPage} />
                  {/* timetable Component */}
                  <Route path="/" component={EmployDashboardPage} exact />
                  {/* <Route
                    path="/dashboard"
                    component={EmployDashboardPage}
                    exact
                  /> */}
                  <Route path="/employ" component={EmployPage} />
                  <Route path="/occupation" component={OccupationPage} />
                  <Route path="/record" component={EmployDashboardPage} />
                  <Route path="/schedule" component={SchedulePage} />
                  <Route path="/branch" component={BranchPage} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default withRouter(App);
