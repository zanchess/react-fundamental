import React from 'react';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.scss';
import CourseItem from '../../components/CourseItem/CourseItem';

const LoginPage = () => (
  <div className="login-page">
    <Header />
    <LoginForm />
    <CourseItem />
  </div>
);

export default LoginPage;
