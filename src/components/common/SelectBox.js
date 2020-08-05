import React from 'react';
import { Form } from '../../../node_modules/react-bootstrap/esm/index';

const SelectBox = ({ branchs }) => {
  return (
    <div>
      <Form.Group>
        <Form.Control as="select">
          {branchs != null ? (
            branchs.map((branch, index) => (
              <option key={index}>{branch.name}</option>
            ))
          ) : (
            <option>사업장을 등록하세요</option>
          )}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default SelectBox;
