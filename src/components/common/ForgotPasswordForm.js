import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from './Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: left;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const ForgotPasswordForm = ({ type, onChange, onSubmit, error }) => {
  return (
    <AuthFormBlock>
      <h3>비밀번호 재발급</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          type="text"
          name="certCode"
          placeholder="인증 코드"
          onChange={onChange}
        />
        <ErrorMessage>{error}</ErrorMessage>
        <Footer>
          <div style={{ textAlign: 'center' }}>
            <Button>전송</Button>
          </div>
        </Footer>
      </form>
    </AuthFormBlock>
  );
};

export default ForgotPasswordForm;