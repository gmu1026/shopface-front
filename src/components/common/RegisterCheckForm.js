import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const RegisterCheckForm = () => {
  const AuthFormBlock = styled.div`
    h3 {
      margin: 0;
      color: ${palette.gray[8]};
      margin-bottom: 1rem;
    }
  `;

  const CheckBlock = styled.button`
    background: #64bdc4;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 6px 4px;
    cursor: pointer;
    &:hover {
      background: #76d4db;
    }
  `;

  return (
    <AuthFormBlock>
      <div style={{ textAlign: 'center' }}>
        <Link to="/login">
          <CheckBlock type="button">기존 회원</CheckBlock>
        </Link>
        <Link to="/register/employ">
          <CheckBlock type="button">신규 회원</CheckBlock>
        </Link>
      </div>
    </AuthFormBlock>
  );
};

export default RegisterCheckForm;
