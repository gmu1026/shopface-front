import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SideBarMenu from '../../src/components/common/SidebarMenu';
import Drawer from '@material-ui/core/Drawer';
import SidebarHeader from '../SidebarHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import '@fullcalendar/core/main.css';
// import '@fullcalendar/daygrid/main.css';
// import SidebarFooter from '../SidebarFooter';

const IndexPage = () => {
  /* const classes = useStyles(); */
  const events = [{ title: "today's event", date: new Date() }];
  return (
    <div>
      <div>
        {/* <SidebarHeader />
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
          <SideBarMenu />
        </Drawer> */}
        {/* <main className={classes.content}>
          <Container className={classes.container}></Container>
        </main> */}
      </div>
      <div className="App">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={events}
        />
      </div>
    </div>
  );
};

/* const drawerWidth = 240;
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
})); */

export default IndexPage;
