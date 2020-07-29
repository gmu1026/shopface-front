import React from 'react';

const MemberTableBody = ({ member }) => {
  return (
    <>
      <tr role="row">
        <td>{member.name}</td>
        <td>{member.phone}</td>
        <td>{member.email}</td>
        <td>{member.type}</td>
        <td>{member.state}</td>
      </tr>
    </>
  );
};

const MemberListForm = (members, memberError, loading) => {
  return (
    <div className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">회원 목록</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div
                  id="datatables-buttons_wrapper"
                  className="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-8">
                      <input type="checkbox" id="disableCheck" />
                      {/* <label for="checkDisabel">비활성화 근무자</label>
                      <label id="count-Disable"></label> */}{' '}
                      비활성화 근무자
                    </div>
                    <div className="col-sm-12 col-md-4">
                      <div className="row">
                        <div className="form-inline col">
                          <div className="form-inline col-12"></div>
                          {/* <label for="searchQuery">이름 : </label> */} 이름
                          :
                          <input
                            type="text"
                            id="searchQuery"
                            name="searchQuery"
                            className="form-control form-control-sm mr-1 ml-1"
                            placeholder=""
                            aria-controls="datatables-buttons"
                          />
                          <input
                            type="button"
                            className="btn btn-primary mr-1 ml-1"
                            id="searchButton"
                            name="searchButton"
                            value="검색"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="datatables-buttons"
                        className="table table-striped dataTable no-footer dtr-inline"
                        // style="width: 100%;"
                        role="grid"
                        aria-describedby="datatables-buttons_info"
                      >
                        <thead>
                          <tr role="row">
                            <th>이름</th>
                            <th>휴대폰 번호</th>
                            <th>이메일</th>
                            <th>구분</th>
                            <th>상태</th>
                          </tr>
                        </thead>
                        <tbody id="table_body">
                          {!loading && members !== null ? (
                            members.map((member, index) => (
                              <MemberTableBody
                                key={index}
                                member={member}
                              ></MemberTableBody>
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
  );
};

export default MemberListForm;
