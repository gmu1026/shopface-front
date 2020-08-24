import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const ErrorMessage = ({ ...rest }) => {
  return <StyledErrorMessage {...rest} />;
};

export default ErrorMessage;
