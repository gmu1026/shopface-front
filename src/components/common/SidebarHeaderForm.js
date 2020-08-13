/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Button from './Button';
import BranchSelectBox from '../branch/BranchSelectForm';
import Modal from '../../../node_modules/react-bootstrap/esm/Modal';
import { Form } from '../../../node_modules/react-bootstrap/esm/index';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const SideBarHeaderForm = ({
  user,
  branchs,
  show,
  error,
  openModal,
  closeModal,
  onLogout,
  onChange,
  onPatchEmployByCertCode,
}) => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white">
        <a className="sidebar-toggle d-flex mr-2">
          <i className="hamburger align-self-center"></i>
        </a>
        <div className="navbar-collapse collapse">
          <div className="ml-auto" style={{ width: '200px' }}>
            <BranchSelectBox branchs={branchs} />
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <div className="position-relative">
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bell align-middle mr-2"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                aria-labelledby="alertsDropdown"
              >
                <div className="dropdown-menu-header">
                  읽지 않은 알람 카운트
                </div>
                <div id="alarmSpace" className="list-group"></div>
                <div className="dropdown-menu-footer">
                  <a href="#" className="text-muted">
                    Show all notifications
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>
                  {user !== null ? (
                    <div>
                      <Button onClick={onLogout}>로그아웃</Button>
                    </div>
                  ) : (
                    <div>
                      <Button to="/login">로그인</Button>
                    </div>
                  )}
                </div>
                <div>
                  {user !== null ? (
                    user.type !== undefined && user.type === 'E' ? (
                      <div style={{ marginRight: '1rem' }}>
                        <Button onClick={openModal}>지점 추가</Button>
                      </div>
                    ) : (
                      <div></div>
                    )
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                  <Modal.Title>인증 코드</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                    <label>인증 코드</label>
                    <Form.Control
                      type="text"
                      placeholder="ex) Qedxd"
                      onChange={onChange}
                    />
                  </Form.Group>
                </Modal.Body>
                <ErrorMessage>{error}</ErrorMessage>
                <Modal.Footer>
                  <Button onClick={onPatchEmployByCertCode}>인증</Button>
                </Modal.Footer>
              </Modal>
            </li>
            {/*  <li className="nav-item dropdown">
              <a
                className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                href="#"
                data-toggle="dropdown"
              >
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-settings align-middle"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </a>
              <a
                className="nav-link dropdown-toggle d-none d-sm-inline-block"
                href="#"
                data-toggle="dropdown"
              >
                <img
                  //   src="/img/avatars/avatar.jpg"
                  className="avatar img-fluid rounded-circle mr-1"
                  alt="NAM GWANGSUNG"
                />
                <span id="user" className="text-dark"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item">
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user align-middle mr-1"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Profile
                </a>
                <div className="dropdown-divider"></div>
                
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SideBarHeaderForm;
