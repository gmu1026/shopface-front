import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MemberListForm from '../../components/member/MemberListForm';
import { getMemberList } from '../../modules/member/memberList';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SideBarMenu from '../../components/common/SidebarMenu';
import Drawer from '@material-ui/core/Drawer';
import SidebarHeader from '../../SidebarHeader';

const MemberListContainer = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { members, memberError, loading } = useSelector(
    ({ memberList, loading }) => ({
      members: memberList.members,
      memberError: memberList.memberError,
      loading: loading,
    }),
  );

  useEffect(() => {
    dispatch(getMemberList());
  }, [dispatch, history]);

  return (
    <div>
      <SidebarHeader />
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <SideBarMenu />
      </Drawer>
      <main className={classes.content}>
        <Container className={classes.container}>
          <MemberListForm
            members={members}
            memberError={memberError}
            loading={loading}
          ></MemberListForm>
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

export default withRouter(MemberListContainer);
