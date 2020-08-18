import React from 'react';
import { Link } from 'react-router-dom';
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

const typeMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, onChange, onSubmit, error }) => {
  const text = typeMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          type="text"
          name="id"
          placeholder="이메일"
          onChange={onChange}
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChange}
        />
        {type === 'register' && (
          <>
            <StyledInput
              type="text"
              name="name"
              placeholder="이름"
              onChange={onChange}
            />
            <StyledInput
              type="text"
              name="phone"
              placeholder="전화번호"
              onChange={onChange}
            />
          </>
        )}
        <ErrorMessage>{error}</ErrorMessage>
        <Footer>
          {type === 'login' && (
            <div>
              <Link to="/">비밀번호 재발급</Link>
            </div>
          )}
        </Footer>
        <Footer>
          <div style={{ textAlign: 'center' }}>
            {type === 'login' ? (
              <Link to="/register">회원가입</Link>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </Footer>
        <div style={{ textAlign: 'center' }}>
          <Button>{text}</Button>
        </div>
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
