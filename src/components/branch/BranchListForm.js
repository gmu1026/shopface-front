import React from 'react';
import Button from '../common/Button';

const BranchTableBody = ({ branch }) => {
  return (
    <>
      <tr role="row">
        <td>{branch.no}</td>
        <td>{branch.note}</td>
      </tr>
    </>
  );
};
const BranchForm = ({ branchs, branchError, loading }) => {
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
                  <div
                    id="datatables-buttons_wrapper"
                    className="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <Button
                          style={{ float: 'right' }}
                          type="button"
                          id="add_button"
                          className="btn btn-outline-primary"
                          to="/branch/post"
                        >
                          등록
                        </Button>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="licenseImageModal"
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
                            <img
                              src=""
                              id="licenseImg"
                              width="835px"
                              height="1000px"
                            />
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
                          id="datatables-buttons"
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

export default BranchForm;
