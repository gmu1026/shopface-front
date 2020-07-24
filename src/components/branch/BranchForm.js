import React from 'react';
import '../../lib/styles/scss/_app.scss';
const BranchForm = () => {
  return (
    <>
      <div class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3">사업장 목록</h1>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div
                    id="datatables-buttons_wrapper"
                    class="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div class="row">
                      <div class="col-sm-12">
                        <button
                          style={{ float: 'right' }}
                          type="button"
                          id="add_button"
                          class="btn btn-outline-primary"
                          onclick="location.href='/branch/form'"
                        >
                          등록
                        </button>
                      </div>
                    </div>

                    <div
                      class="modal fade"
                      id="licenseImageModal"
                      tabindex="-1"
                      role="dialog"
                      aria-hidden="true"
                      style={{ display: 'none' }}
                    >
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">
                              사업자 등록증 이미지 보기
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div class="modal-body m-3">
                            <img
                              src=""
                              id="licenseImg"
                              width="835px"
                              height="1000px"
                            />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <table
                          id="datatables-buttons"
                          class="table table-striped dataTable no-footer dtr-inline"
                          style={{ width: '100%' }}
                          role="grid"
                          aria-describedby="datatables-buttons_info"
                        >
                          <thead id="table_head"></thead>
                          <tbody id="table_body">
                            <tr role="row">
                              <td colspan="4">검색 결과가 없습니다.</td>
                            </tr>
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
