import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './login-page.scss';

const LoginPage = ({ onFormSubmit, isAuth }) => (
  <div className="login-page">
    <LoginForm isAuth={isAuth} onFormSubmit={onFormSubmit} />
  </div>
);

export default LoginPage;
