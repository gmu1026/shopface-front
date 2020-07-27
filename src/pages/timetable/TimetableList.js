import React from 'react';
//  import Header from '../components/common/Header';
//   import Sidebar from '../Sidebar';
//   import { Items } from '../components/common/Items';

function TimetableList() {
  return (
    <div className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">전체 시간표</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div
                  id="datatables-buttons_wrapper"
                  className="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6"></div>
                    <div className="col-sm-12 col-md-6"></div>
                  </div>
                  <div id="fullcalendar"></div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="addModal"
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
                    <div className="modal-title">
                      <div id="time"></div>
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
                      <form>
                        <div className="form-group">
                          <table
                            id="datatables-buttons"
                            className="table table-striped dataTable no-footer dtr-inline"
                            role="grid"
                            aria-describedby="datatables-buttons_info"
                          >
                            <thead></thead>
                            <tbody id="table_body_add"></tbody>
                          </table>
                        </div>
                      </form>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        id="addBtn"
                      >
                        시간표 등록
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="editRemoveModal"
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
                      <div className="modal-title">
                        <div id="edt_time"></div>
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
                        <form>
                          <input type="hidden" name="_method" />
                          <div className="form-group">
                            <table
                              id="datatables-buttons"
                              className="table table-striped dataTable no-footer dtr-inline"
                              role="grid"
                              aria-describedby="datatables-buttons_info"
                            >
                              <thead></thead>
                              <tbody id="table_body_edit"></tbody>
                            </table>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          id="editBtn"
                        >
                          수정
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          id="removeBtn"
                        >
                          삭제
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
  );
}
export default TimetableList;
