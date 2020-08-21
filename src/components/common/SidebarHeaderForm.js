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
          {user !== null && user.type === 'B' && (
            <div className="ml-auto" style={{ width: '200px' }}>
              <BranchSelectBox branchs={branchs} />
            </div>
          )}

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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SideBarHeaderForm;
