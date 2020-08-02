import React from 'react';
import Button from '../common/Button';

const EmployTableBody = ({ employ }) => {
  return (
    <>
      <tr role="row">
        <td>{employ.name}</td>
        <td>{employ.phone}</td>
        <td>{employ.email}</td>
        <td>{employ.salary}</td>
        <td>{employ.state}</td>
      </tr>
    </>
  );
};

const EmployListForm = ({
  employs,
  employError,
  loading,
  onChange,
  onSearch,
  onKeyPress,
  filterEmploys,
}) => {
  return (
    <div className="container-fluid p-0">
      <h1 className="h3 mb-3">근무자 관리</h1>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group" id="check-disable" />
                    <input type="checkbox" />
                    비활성화 근무자
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="row">
                      <div className="form-inline col-5"></div>
                      <div className="form-inline col ml-6">
                        이름:
                        <input
                          type="text"
                          className="form-control form-control-sm mr-1 ml-1"
                          placeholder=""
                          aria-controls="datatables-buttons"
                          name="name"
                          onChange={onChange}
                          onKeyPress={onKeyPress}
                        />
                        <Button
                          className="btn btn-primary mr-1 ml-1"
                          onClick={onSearch}
                        >
                          검색
                        </Button>
                        <button
                          type="button"
                          className="btn btn-primary mr-1 ml-1"
                          data-toggle="modal"
                          data-target="#inviteModal"
                        >
                          초대하기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div
                  className="modal fade"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">근무자 초대하기</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body m-3">
                        <form id="validation-invite-form">
                          <input type="hidden" />
                          <div className="form-group">
                            이름
                            <input
                              type="text"
                              className="form-control"
                              name="inviteName"
                              placeholder="이름을 입력해주세요"
                            />{' '}
                            <br />
                            이메일
                            <input
                              type="text"
                              className="form-control"
                              id="inviteEmail"
                              placeholder="이메일을 입력해주세요"
                            />
                          </div>
                        </form>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            초대하기
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-sm-12">
                    <form>
                      <table
                        className="table table-striped dataTable no-footer dtr-inline"
                        role="grid"
                        aria-describedby="datatables-buttons_info"
                      >
                        <thead>
                          <tr role="row">
                            <th>이름</th>
                            <th>휴대폰 번호</th>
                            <th>이메일</th>
                            <th>급여</th>
                            <th>상태</th>
                          </tr>
                        </thead>

                        <tbody id="table_body">
                          {filterEmploys !== null ? (
                            filterEmploys.map((filterEmploy, index) => (
                              <EmployTableBody
                                key={index}
                                employ={filterEmploy}
                              ></EmployTableBody>
                            ))
                          ) : employs !== null ? (
                            employs.map((employ, index) => (
                              <EmployTableBody
                                key={index}
                                employ={employ}
                              ></EmployTableBody>
                            ))
                          ) : (
                            <>
                              <tr role="row">
                                <td colSpan="4">등록된 회원이 없습니다.</td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                    </form>
                    {/* <div
                      className="modal fade"
                      tabIndex="-1"
                      role="dialog"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">다시 초대하기</h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body m-3">
                            <form id="validation-reinvite-form">
                              <div className="form-group">
                                이메일
                                <input
                                  type="text"
                                  className="form-control"
                                  name="reInviteEmail"
                                  placeholder="이메일을 입력해주세요"
                                />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <Button type="button" className="btn btn-primary">
                              초대하기
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployListForm;
