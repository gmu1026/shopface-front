import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BranchListForm from '../../components/branch/BranchListForm';
import { getBranchList } from '../../modules/branch/branchList';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SideBarMenu from '../../components/common/SidebarMenu';
import Drawer from '@material-ui/core/Drawer';
import SidebarHeader from '../../SidebarHeader';

const BranchListContainer = ({ history }) => {
  const classes = useStyles();

  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const { branchs, branchError, loading, user } = useSelector(
    ({ branchList, loading, auth }) => ({
      branchs: branchList.branchs,
      branchError: branchList.branchError,
      loading: loading,
      user: auth.user,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (user !== null) {
      dispatch(getBranchList());
    } else {
      history.pushState('/login');
    }
  }, [dispatch, user, history]);

  //useEffect(() => {}, [dispatch]);

  return (
    <div>
      <SidebarHeader />
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <SideBarMenu />
      </Drawer>
      <main className={classes.content}>
        <Container className={classes.container}>
          <BranchListForm
            branchs={branchs}
            branchError={branchError}
            loading={loading}
            show={show}
            closeModal={closeModal}
            openModal={openModal}
          ></BranchListForm>
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

export default withRouter(BranchListContainer);
