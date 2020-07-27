import React from 'react';

const BranchDetailForm = () => {
  return (
    <>
      <div className="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3">사업장 조회</h1>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                  <form>
                    <input type="hidden" name="_method" />
                    <input type="hidden" name="memberId" />
                    <div class="form-group col-md-4">
                      사업장 명 :
                      <input type="text" class="form-control" name="name" />
                      <div class="text-center-mt-3" id="checkNameDiv"></div>
                    </div>
                    <div class="form-group col-md-4">
                      <label for="phone">전화번호 : </label>
                      <input type="text" class="form-control" name="phone" />
                      <br />
                      <div class="text-center-mt-3" id="checkPhoneDiv"></div>
                    </div>
                    <div class="form-group col-md-4">
                      <label for="zip_code">우편 번호 : </label>
                      <button type="button" class="btn btn-outline-primary">
                        우편번호 찾기
                      </button>
                      <input
                        type="text"
                        class="form-control"
                        name="zipCode"
                        readOnly
                      />
                      <br />
                      <div class="text-center-mt-3" id="checkZipCodeDiv"></div>
                    </div>
                    <div class="form-group col-md-4">
                      <label for="address">주소 : </label>
                      <input
                        type="text"
                        class="form-control"
                        name="address"
                        readOnly
                      />
                      <br />
                      <div class="text-center-mt-3" id="checkAddressDiv"></div>
                    </div>
                    <div class="form-group col-md-2">
                      <label for="detail_address">상세 주소 : </label>
                      <input
                        type="text"
                        class="form-control"
                        name="detailAddress"
                      />
                      <br />
                      <div
                        class="text-center-mt-3"
                        id="checkDetailAddressDiv"
                      ></div>
                    </div>
                    <div class="form-group col-md-4">
                      <label for="license" class="form-label w-100">
                        사업장 등록증
                      </label>
                      <input type="file" name="licenseImage" />
                    </div>
                    <div class="form-group" style={{ color: 'red' }}>
                      error
                    </div>
                    <button class="btn btn-outline-primary">수정</button>
                    <button class="btn btn-outline-primary">삭제</button>
                    <button class="btn btn-outline-primary">목록</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BranchDetailForm;
