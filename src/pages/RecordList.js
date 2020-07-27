import React from 'react';
const RecordList = () => {
  return (
    <div className="content">
      <div className="container-fluid p-0">
        <h1>근무 기록</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-body">
                  <div
                    id="datatables-buttons_wrapper"
                    className="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div className="row">
                      <div className="col-sm-12 col-md-8"></div>
                      <div className="col-sm-12 col-md-4">
                        <div className="row">
                          <div className="form-inline col">
                            <div className="form-inline col-12"></div>
                            <select
                              id="condition"
                              name="condition"
                              className="form-control"
                            >
                              <option value="branch">사업장 명</option>
                              <option value="businessman">사업자 명</option>
                            </select>
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
                          role="grid"
                          aria-describedby="datatables-buttons_info"
                        >
                          <thead id="table_head"></thead>
                          <tbody id="table_body"></tbody>
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
    </div>
  );
};
export default RecordList;
