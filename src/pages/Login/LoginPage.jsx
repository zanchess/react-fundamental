import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.scss';

const LoginPage = ({ onFormSubmit }) => (
  <div className="login-page">
    <LoginForm onFormSubmit={onFormSubmit} />
  </div>
);

export default LoginPage;
