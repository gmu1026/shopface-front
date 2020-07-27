import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import Modal from '../../../node_modules/react-bootstrap/esm/Modal';

const ErrorMessage = styled.div`
  color: red;
  text-align: left;
  font-size: 0.875rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const branchPostForm = ({
  postCode,
  onSubmit,
  onChange,
  error,
  handleComplete,
  show,
  closeModal,
  openModal,
  zoneCode,
  address,
}) => {
  return (
    <>
      <div className="content">
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3">사업장 등록</h1>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                  <form onSubmit={onSubmit}>
                    <input
                      type="hidden"
                      name="memberId"
                      value="${#authentication.principal.username}" /* 추후 수정 */
                    />
                    <div className="form-group col-md-4">
                      사업장 이름 :
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        name="name"
                        onChange={onChange}
                      />
                      <br />
                      <div className="text-center-mt-3" id="checkNameDiv"></div>
                    </div>
                    <div className="form-group col-md-4">
                      전화번호 :
                      <input
                        type="text"
                        id="phone"
                        className="form-control"
                        name="phone"
                        onChange={onChange}
                      />
                      <br />
                      <div
                        className="text-center-mt-3"
                        id="checkPhoneDiv"
                      ></div>
                    </div>
                    <div className="form-group col-md-4">
                      우편 번호 :
                      <Button
                        style={{ margin: '10px' }}
                        className="btn btn-outline-primary"
                        onClick={openModal}
                      >
                        우편번호 찾기
                      </Button>
                      <Modal show={show} onHide={closeModal}>
                        <Modal.Header closeButton>
                          <Modal.Title>우편 번호 찾기</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <DaumPostcode onComplete={handleComplete} />
                        </Modal.Body>
                      </Modal>
                      <input
                        type="text"
                        id="zipCode"
                        className="form-control"
                        name="zipCode"
                        onChange={onChange}
                        readOnly
                        value={zoneCode}
                      />
                      <br />
                      <div
                        className="text-center-mt-3"
                        id="checkZipCodeDiv"
                      ></div>
                    </div>
                    <div className="form-group col-md-4">
                      주소 :
                      <input
                        type="text"
                        id="address"
                        className="form-control"
                        name="address"
                        onChange={onChange}
                        readOnly
                        value={address}
                      />
                      <br />
                      <div
                        className="text-center-mt-3"
                        id="checkAddressDiv"
                      ></div>
                      {/* ???? 확인 요망 */}
                    </div>
                    <div className="form-group col-md-2">
                      상세 주소 :
                      <input
                        type="text"
                        id="detailAddress"
                        className="form-control"
                        name="detailAddress"
                        onChange={onChange}
                      />
                      <br />
                      <div
                        className="text-center-mt-3"
                        id="checkDetailAddressDiv"
                      ></div>
                      {/* ???? 확인 요망 */}
                    </div>
                    <ErrorMessage>{error}</ErrorMessage>
                    <Button className="btn btn-outline-primary">등록</Button>
                    <Button
                      type="button"
                      className="btn btn-outline-primary"
                      to="/branch"
                    >
                      목록
                    </Button>
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

export default branchPostForm;
