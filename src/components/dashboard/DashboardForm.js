import React from 'react';
import Button from '../common/Button';
import { withRouter } from 'react-router-dom';
const DashboardTableBody = () => {
  return (
    <>
      <tr role="row">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </>
  );
};

const DashboardForm = () => {
  return (
    <div className="container-fluid p-0">
      <h1 className="h3 mb-3">Dashboard</h1>
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
                      <div className="form-inline col ml-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                      {
                        <>
                          <tr role="row">
                            <td colSpan="4">등록된 회원이 없습니다.</td>
                          </tr>
                        </>
                      }
                    </tbody>
                  </table>
                </form>

                <div className="form-group">
                  <form></form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(DashboardForm);
