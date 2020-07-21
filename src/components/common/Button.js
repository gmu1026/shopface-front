import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  margin-top: 1.5rem;
  cursor: pointer;
  background: #64bdc4;
  &:hover {
    background: #76d4db;
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
