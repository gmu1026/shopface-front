import React from 'react';

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

const EmployList = ({ employs, employError, loading }) => {
  return (
    <div className="content">
      <div class="container-fluid p-0">
        <h1 class="h3 mb-3">근무자 관리</h1>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div
                  id="datatables-buttons_wrapper"
                  class="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <div class="row">
                    <div class="col-sm-12 col-md-6">
                      <div class="form-group" id="check-disable" />
                      <input type="checkbox" id="disableCheck" />
                      <label for="checkDisabel">비활성화 근무자</label>
                      <label id="count-Disable"></label>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div class="row">
                      <div class="form-inline col-5"></div>
                      <div class="form-inline col ml-6">
                        <label for="name">이름:</label>
                        <input
                          type="search"
                          id="search-name"
                          class="form-control form-control-sm mr-1 ml-1"
                          placeholder=""
                          aria-controls="datatables-buttons"
                        />
                        <button
                          type="button"
                          class="btn btn-primary mr-1 ml-1"
                          id="searchBtn"
                          name="searchButton"
                        >
                          검색
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary mr-1 ml-1"
                          data-toggle="modal"
                          data-target="#inviteModal"
                        >
                          초대하기
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    class="modal fade"
                    id="inviteModal"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">근무자 초대하기</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body m-3">
                          <form id="validation-invite-form">
                            <input type="hidden" />
                            <div class="form-group">
                              <label class="form-label">이름</label>
                              <input
                                type="text"
                                class="form-control"
                                id="inviteName"
                                name="inviteName"
                                placeholder="이름을 입력해주세요"
                              />{' '}
                              <br />
                              <label class="form-label">이메일</label>
                              <input
                                type="text"
                                class="form-control"
                                id="inviteEmail"
                                name="inviteEmail"
                                placeholder="이메일을 입력해주세요"
                              />
                            </div>
                          </form>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-primary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary"
                              id="inviteBtn"
                            >
                              초대하기
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <form>
                        <input type="hidden" id="employNo-input" name="no" />
                        <table
                          id="datatables-buttons"
                          class="table table-striped dataTable no-footer dtr-inline"
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
                          <tbody id="table_body">
                            {!loading && employs !== null ? (
                              employs.map((employ, index) => (
                                <EmployTableBody
                                  key={index}
                                  employ={employ}
                                ></EmployTableBody>
                              ))
                            ) : (
                              <>
                                <tr role="row">
                                  <td colSpan="4">등록된 고용이 없습니다.</td>
                                </tr>
                              </>
                            )}
                          </tbody>
                        </table>
                      </form>
                      <div
                        class="modal fade"
                        id="resendInviteModal"
                        tabindex="-1"
                        role="dialog"
                        aria-hidden="true"
                      >
                        <div
                          class="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title">다시 초대하기</h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body m-3">
                              <form id="validation-reinvite-form">
                                <div class="form-group">
                                  <label class="form-label">이메일</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="resendInviteEmail"
                                    name="reInviteEmail"
                                    placeholder="이메일을 입력해주세요"
                                  />
                                </div>
                              </form>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-primary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                class="btn btn-primary"
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
