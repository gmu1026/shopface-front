import React, { useState, useEffect } from 'react';
import { Form } from '../../../node_modules/react-bootstrap/esm/index';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelect } from '../../modules/occupation/occupationSelect';

const OccupationSelectForm = ({ occupations }) => {
  const dispatch = useDispatch();
  const { selectedOccupation } = useSelector(({ occupationSelect }) => ({
    selectedOccupation: occupationSelect.selectedOccupation,
  }));

  const onChange = (e) => {
    dispatch(changeSelect(e.target.value));
  };

  useEffect(() => {
    if (
      occupations != null &&
      occupations.length > 0 &&
      selectedOccupation === ''
    ) {
      dispatch(changeSelect(occupations[0].no));
    }
  }, [occupations, selectedOccupation, dispatch]);

  return (
    <div>
      <Form.Group>
        <Form.Control
          as="select"
          value={selectedOccupation}
          onChange={onChange}
        >
          {occupations != null && occupations.length > 0 ? (
            occupations.map((occupation, index) => (
              <option key={index} value={occupation.no}>
                {occupation.name}
              </option>
            ))
          ) : (
            <option>업무를 등록하세요</option>
          )}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default OccupationSelectForm;
