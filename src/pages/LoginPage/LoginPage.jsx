import React from 'react';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.scss';

const LoginPage = () => (
  <div className="login-page">
    <Header />
    <LoginForm />
  </div>
);

export default LoginPage;
