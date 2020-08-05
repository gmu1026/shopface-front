import React from 'react';
import Button from '../common/Button';

const EmployDetailForm = ({ employ, onSubmit, onChange, onDelete, error }) => {
  if (employ === null) return;
  return (
    <div>
      <div class="container-fluid p-0">
        <h1 class="h3 mb-3">근무자 상세 조회</h1>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">근무자 기본정보</h5>
              </div>
              <div class="card-body">
                <form onSubmit={onSubmit}>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label>이름</label>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        onChange={onChange}
                        value={employ.name !== null ? employ.name : ''}
                      />
                    </div>
                    <div class="form-group">
                      <label>전화번호</label>
                      <input
                        type="text"
                        class="form-control"
                        name="phone"
                        readonly
                        value={employ.phone !== null ? employ.phone : ''}
                      />
                    </div>
                    <div class="form-group">
                      <label>이메일</label>
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        readonly
                        value={employ.email !== null ? employ.email : ''}
                      />
                    </div>
                    <div class="form-group">
                      <label>은행 명</label>
                      <input
                        type="text"
                        class="form-control"
                        name="bankName"
                        readonly
                        value={employ.banckName !== null ? employ.bankName : ''}
                      />
                    </div>
                    <div class="form-group">
                      <label>계좌번호</label>
                      <input
                        type="text"
                        class="form-control"
                        name="accountNum"
                        readonly
                        value={
                          employ.accountNum !== null ? employ.accountNum : ''
                        }
                      />
                    </div>
                    <div class="form-group">
                      <label>급여</label>
                      <input
                        type="text"
                        class="form-control"
                        name="salary"
                        onChange={onChange}
                        value={employ.salary !== null ? employ.salary : ''}
                      />
                    </div>
                    <div class="mb-3">
                      <Button
                        type="button"
                        class="btn btn-primary"
                        onChange={onChange}
                        disabled={employ.state === 'C'}
                      >
                        비활성화
                      </Button>
                      <Button to="/employ" class="btn btn-primary">
                        수정
                      </Button>
                      <Button
                        type="button"
                        to="/employ"
                        class="btn btn-primary"
                      >
                        취소
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployDetailForm;
