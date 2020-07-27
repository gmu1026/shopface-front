import React from 'react';

const EmployList = () => {
  return (
    <div className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">근무자 관리</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div
                  id="datatables-buttons_wrapper"
                  className="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="form-group" id="check-disable" />
                      <input type="checkbox" id="disableCheck" />
                      <label for="checkDisabel">비활성화 근무자</label>
                      <label id="count-Disable"></label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="row">
                      <div className="form-inline col-5"></div>
                      <div className="form-inline col ml-6">
                        <label for="name">이름:</label>
                        <input
                          type="search"
                          id="search-name"
                          className="form-control form-control-sm mr-1 ml-1"
                          placeholder=""
                          aria-controls="datatables-buttons"
                        />
                        <button
                          type="button"
                          className="btn btn-primary mr-1 ml-1"
                          id="searchBtn"
                          name="searchButton"
                        >
                          검색
                        </button>
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
                  <div
                    className="modal fade"
                    id="inviteModal"
                    tabindex="-1"
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
                              <label className="form-label">이름</label>
                              <input
                                type="text"
                                className="form-control"
                                id="inviteName"
                                name="inviteName"
                                placeholder="이름을 입력해주세요"
                              />{' '}
                              <br />
                              <label className="form-label">이메일</label>
                              <input
                                type="text"
                                className="form-control"
                                id="inviteEmail"
                                name="inviteEmail"
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
                            <button
                              type="button"
                              className="btn btn-primary"
                              id="inviteBtn"
                            >
                              초대하기
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <form>
                        <input type="hidden" id="employNo-input" name="no" />
                        <table
                          id="datatables-buttons"
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
                              <th>관리</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody id="table_body"></tbody>
                        </table>
                      </form>
                      <div
                        className="modal fade"
                        id="resendInviteModal"
                        tabindex="-1"
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
                                  <label className="form-label">이메일</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="resendInviteEmail"
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
                              <button
                                type="button"
                                className="btn btn-primary"
                                id="resendInviteBtn"
                              >
                                초대하기
                              </button>
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
    </div>
  );
};
export default EmployList;
