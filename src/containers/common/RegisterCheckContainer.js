import React from 'react';
import AuthTemplate from '../../components/common/AuthTemplate';
import RegisterCheckForm from '../../components/common/RegisterCheckForm';

const RegisterCheckContainer = () => {
  return (
    <div>
      <AuthTemplate>
        <RegisterCheckForm></RegisterCheckForm>
      </AuthTemplate>
    </div>
  );
};

export default RegisterCheckContainer;
