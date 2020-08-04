import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../../node_modules/react-bootstrap/esm/index';

const SelectBox = () => {
  const dispatch = useDispatch();
  const { branchs } = useSelector(({ branchList }) => ({
    branchs: branchList.branchs,
  }));

  return (
    <div>
      <Form.Group>
        <Form.Control defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default SelectBox;
