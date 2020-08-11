import React from 'react';
import Modal from '../../../node_modules/react-bootstrap/esm/Modal';
import Button from '../common/Button';
import { TimePicker } from 'antd';
import moment from 'moment';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Form } from '../../../node_modules/react-bootstrap/esm/index';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const TimeTableModalForm = ({
  show,
  closeModal,
  modalType,
  occupations,
  employs,
  onSelectChange,
  onTimeChange,
  onTimetablePost,
  error,
}) => {
  const { RangePicker } = TimePicker;

  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === 'post' ? '시간표 등록' : '시간표 수정'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group row">
              <label className="col-form-label col-sm-2 text-sm-right">
                이름
              </label>
              <div className="col-sm-10">
                <Form.Control
                  as="select"
                  name="employNo"
                  className=" col-sm-5"
                  onChange={onSelectChange}
                  //value={modalType === 'update' ? '최민영' : ''}
                >
                  <option>근무자를 선택하세요</option>
                  {/* 추후 조건 추가 */}
                  {employs !== null &&
                  employs.length > 0 &&
                  employs.filter((employ) => employ.state === 'B').length >
                    0 ? (
                    employs.map((employ, index) => (
                      <option key={index} value={employ.no}>
                        {employ.name}
                      </option>
                    ))
                  ) : (
                    <option>근무자를 등록해주세요</option>
                  )}
                </Form.Control>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-sm-2 text-sm-right">
                시간
              </label>
              <div className="col-sm-10">
                <RangePicker
                  format={'HH:mm'}
                  onChange={onTimeChange}
                ></RangePicker>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-sm-2 text-sm-right">
                업무
              </label>
              <div className="col-sm-10">
                <div className="row m-1">
                  <Form.Control
                    as="select"
                    name="occupationNo"
                    className=" col-sm-4"
                    onChange={onSelectChange}
                    //value={modalType === 'post' ? occupations[0].name : ''}
                  >
                    <option>업무를 선택하세요</option> {/* 추후 조건 추가 */}
                    {occupations != null && occupations.length > 0 ? (
                      occupations.map((occupation, index) => (
                        <option key={index} value={occupation.no}>
                          {occupation.name}
                        </option>
                      ))
                    ) : (
                      <option>업무를 등록해주세요</option>
                    )}
                  </Form.Control>
                  <Form.Control
                    as="input"
                    type="color"
                    name="color"
                    placeholder="업무"
                    className=" col-sm-4 ml-3"
                    value={modalType === 'update' ? occupations[0].color : ''}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <ErrorMessage>{error}</ErrorMessage>
        <Modal.Footer>
          {modalType === 'post' ? (
            <Button onClick={onTimetablePost}>시간표 등록</Button>
          ) : (
            <>
              <Button>수정</Button>
              <Button>삭제</Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TimeTableModalForm;
