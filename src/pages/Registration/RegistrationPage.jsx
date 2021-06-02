import React from 'react';
import './registration-page.scss';
import RegistrationForm from '../../components/Registration/Registration';

const RegistrationPage = ({ registerSubmit }) => (
  <div className="login-page">
    <RegistrationForm registerSubmit={registerSubmit} />
  </div>
);

export default RegistrationPage;
