import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';
import Modal from '../../../node_modules/react-bootstrap/esm/Modal';
import { Link, withRouter } from 'react-router-dom';
// import spectrum from '../../spect';

const ErrorMessage = styled.div`
  color: red;
  text-align: left;
  font-size: 0.875rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const OccupationTableBody = ({ occupation }) => {
  return (
    <>
      <tr role="row">
        <td>{occupation.name}</td>
        <td>
          <div classname="btn btn-primary">{occupation.color}</div>
        </td>
        <td>
          <Button className="btn btn-primary">수정</Button>
          <Button className="btn btn-primary">삭제</Button>
        </td>
      </tr>
    </>
  );
};

const OccupationListForm = ({
  occupations,
  occupationError,
  loading,
  onSubmit,
  onChange,
  error,
  handleComplete,
  show,
  closeModal,
  openModal,
  name,
  color,
}) => {
  return (
    <>
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">업무 관리</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="col-sm-6">
                  <form onSubmit={onsubmit}>
                    <div className="row">
                      <div>
                        <div className="row"></div>
                        <div>
                          업무명:
                          <input
                            type="text"
                            className="form-control ml-2 mr-2"
                            id="occupation-input"
                            name="name"
                            onChange={onChange}
                          />
                          <br />
                        </div>
                      </div>
                      <div>
                        색상:
                        <input
                          className="form-control ml-2 mr-2"
                          type="color"
                          id="occupation-color"
                          name="color"
                          onChange={onChange}
                        />
                      </div>
                      <div className="ml-4 mr-2">
                        <ErrorMessage>{error}</ErrorMessage>
                        <Button
                          type="button"
                          className="btn btn-primary"
                          id="post-button"
                          name="postBtn"
                        >
                          등록
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  id="datatables-buttons_wrapper"
                  className="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="datatables-buttons"
                        className="table table-striped dataTable no-footer dtr-inline"
                        role="grid"
                        aria-describedby="datatables-buttons_info"
                      >
                        <thead id="table_head">
                          <tr role="row">
                            <th>업무</th>
                            <th>색상</th>
                            <th>관리</th>
                          </tr>
                        </thead>
                        <tbody id="table-body">
                          {occupations !== null ? (
                            occupations.map((occupation, index) => (
                              <OccupationTableBody
                                key={index}
                                occupation={occupation}
                                show={show}
                                closeModal={closeModal}
                                openModal={openModal}
                              ></OccupationTableBody>
                            ))
                          ) : (
                            <>
                              <tr role="row">
                                <td colSpan="4">등록된 업무가 없습니다.</td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                      <Modal show={show} onHide={closeModal}>
                        <Modal.Header closeButton>
                          <Modal.Title>색상 변경</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>색상</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={closeModal}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      <div
                        className="modal fade"
                        id="color-modal-form"
                        tabIndex="-1"
                        role="dialog"
                        aria-hidden="true"
                        style={{ display: 'none' }}
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">색상 선택</h5>
                              <Button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </Button>
                            </div>
                            <div className="modal-body m-3">
                              색상:
                              <input
                                type="text"
                                id="modal-color"
                                name="modalColor"
                                onChange={onChange}
                              />
                            </div>
                            <div className="modal-footer">
                              <Button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                              >
                                취소
                              </Button>
                              <Button
                                type="button"
                                className="btn btn-primary"
                                id="change-color-button"
                              >
                                선택
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(OccupationListForm);
