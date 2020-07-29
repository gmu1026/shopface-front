import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EmployListForm from '../../components/employ/EmployListForm';
import { getEmployList } from '../../modules/employ/employList';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SideBarMenu from '../../components/common/SidebarMenu';
import Drawer from '@material-ui/core/Drawer';
import SidebarHeader from '../../SidebarHeader';

const EmployListContainer = () => {
  const classes = useStyles();
  const { employs, employError, loading } = useSelector(
    ({ employList, loading }) => ({
      employs: employList.employs,
      employError: employList.employError,
      loading: loading,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (employs !== null) {
      dispatch(getEmployList());
    }
  }, [dispatch, employs]);

  return (
    <div>
      <SidebarHeader />
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <SideBarMenu></SideBarMenu>
      </Drawer>
      <main className={classes.content}>
        <Container className={classes.container}>
          <EmployListForm
            employs={employs}
            employError={employError}
            loading={loading}
          ></EmployListForm>
        </Container>
      </main>
    </div>
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
export default withRouter(EmployListContainer);
