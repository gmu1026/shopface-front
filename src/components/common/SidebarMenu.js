import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Icon, Nav, Sidenav } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const SidebarMenu = ({ user }) => {
  return (
    <Sidenav
      activeKey="1"
      style={{
        backgroundColor: '#354052',
        position: 'fixed',
        width: '15rem',
        color: '#64bdc4',
        height: '100vh',
      }}
    >
      <Sidenav.Body>
        <Nav>
          {user !== null && user.type === 'A' && (
            <Dropdown
              eventKey="1"
              title="회원 관리"
              icon={<Icon icon="peoples" />}
            >
              <Dropdown.Item eventKey="1-1">
                <Link to="/member">회원 목록</Link>
              </Dropdown.Item>
            </Dropdown>
          )}

          <Link to="/">
            <Nav.Item eventKey="2" icon={<Icon icon="dashboard" />} href="/">
              홈
            </Nav.Item>
          </Link>

          <Dropdown
            eventKey="3"
            title="스케줄 관리"
            icon={<Icon icon="calendar" />}
          >
            <Dropdown.Item eventKey="3-1">
              <Link to="/schedule">전체 스케줄 관리</Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="3-2">나의 스케줄 관리</Dropdown.Item>
          </Dropdown>

          <Dropdown
            eventKey="4"
            title="근태 관리"
            icon={<Icon icon="character-authorize" />}
          >
            <Dropdown.Item eventKey="4-1">
              <Link href="/record">근무 기록 </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="4-2">이벤트 관리</Dropdown.Item>
          </Dropdown>
          <Dropdown
            eventKey="5"
            title="사업장 관리"
            icon={<Icon icon="building-o" />}
          >
            <Dropdown.Item eventKey="5-1">
              <Link to="/branch">사업장 관리 </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="5-2">
              <Link to="/employ">근무자 관리</Link>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            eventKey="6"
            title="설정"
            icon={<Icon icon="gear-circle" />}
          >
            <Dropdown.Item eventKey="6-1">
              <Link to={user != null ? `/member/${user.name}` : '/login'}>
                나의 정보 관리
              </Link>
            </Dropdown.Item>
            {user !== null && user.type === 'B' && (
              <Dropdown.Item eventKey="6-2">
                <Link to="/occupation">업무 관리 </Link>
              </Dropdown.Item>
            )}
          </Dropdown>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  );
};

export default SidebarMenu;
