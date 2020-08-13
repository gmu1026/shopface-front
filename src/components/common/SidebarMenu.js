import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const SidebarMenu = ({ user }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List className={classes.appMenu} disablePadding>
      {user !== null && user.type === 'A' && (
          <>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="회원 관리"></ListItemText>
              {open ? <IconExpandLess /> : <IconExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Divider />
              <List component="div" disablePadding>
                <ListItem button className={classes.menuItem}>
                  <ListItemText inset primary="" />
                  <Link to="/member">회원 목록 </Link>
                </ListItem>
              </List>
            </Collapse>
          </>
        )}
      <ListItem button onClick={handleClick}>
        <ListItemText primary="시간표 관리"></ListItemText>
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="" />
            <Link to="/timetable">시간표 </Link>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="스케줄 관리"></ListItemText>
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="" />
            <Link to="/schedule">스케줄 </Link>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="근태 관리"></ListItemText>
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="" />
            <Link to="/record">근무 기록 </Link>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="회원 관리"></ListItemText>
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="" />
            <Link to="/branch">사업장 관리 </Link>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="" />
            <Link to="/occupation">업무 관리 </Link>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="" />
            <Link to="/employ">근무자 관리</Link>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="" />
            <Link to="/member/id">내 정보 관리</Link>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
);

export default SidebarMenu;
