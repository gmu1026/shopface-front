import React from 'react';
import Button from '../common/Button';
import { Link, withRouter } from 'react-router-dom';
import Modal from '../../../node_modules/react-bootstrap/esm/Modal';

const BranchTableBody = ({ branch, match, show, openModal, closeModal }) => {
  return (
    <>
      <tr role="row">
        <td>
          <Link to={`${match.url}/${branch.no}`}> {branch.name}</Link>
        </td>
        <td>{branch.phone}</td>
        <td>
          {branch.approvalStatus === 'W'
            ? '승인 대기중'
            : branch.approvalStatus === 'Y'
            ? '승인 완료'
            : '승인 거부'}
        </td>
        <td>
          <Button className="btn btn-outline-primary" onClick={openModal}>
            보기
          </Button>
        </td>
      </tr>
    </>
  );
};
const BranchForm = ({
  branchs,
  branchError,
  loading,
  match,
  show,
  closeModal,
  openModal,
}) => {
  if (branchError) {
    return <h1>에러가 발생했습니다.</h1>;
  }
  return (
    <>
      <div className="content">
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3">사업장 목록</h1>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                    <div className="row">
                      <div className="col-sm-12">
                        <Button
                          style={{ float: 'right' }}
                          className="btn btn-outline-primary"
                          to="/branch/post"
                        >
                          등록
                        </Button>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      tabIndex="-1"
                      role="dialog"
                      aria-hidden="true"
                      style={{ display: 'none' }}
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">
                              사업자 등록증 이미지 보기
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body m-3">
                            <img src="" width="835px" height="1000px" />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          className="table table-striped dataTable no-footer dtr-inline"
                          style={{ width: '100%' }}
                          role="grid"
                          aria-describedby="datatables-buttons_info"
                        >
                          <thead id="table_head">
                            <tr>
                              <th>사업장 명</th>
                              <th>전화변호</th>
                              <th>승인 현황</th>
                              <th>사업장 등록증</th>
                            </tr>
                          </thead>
                          <tbody id="table_body">
                            {!loading && branchs !== null ? (
                              branchs.map((branch, index) => (
                                <BranchTableBody
                                  key={index}
                                  branch={branch}
                                  match={match}
                                  show={show}
                                  closeModal={closeModal}
                                  openModal={openModal}
                                ></BranchTableBody>
                              ))
                            ) : (
                              <>
                                <tr role="row">
                                  <td colSpan="4">등록된 지점이 없습니다.</td>
                                </tr>
                              </>
                            )}
                          </tbody>
                        </table>
                        <div>
                          <Modal show={show} onHide={closeModal}>
                            <Modal.Header closeButton>
                              <Modal.Title>사업자 등록증 이미지</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>이미지~~~~~~~~</Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={closeModal}>
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal>
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

export default withRouter(BranchForm);
