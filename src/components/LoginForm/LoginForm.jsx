import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import './login-form.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginForm = ({ onFormSubmit }) => {
  // reg exp for validation
  const emailRegExp = /^[a-zA-Z0-9]+([-._][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,7}$/;
  const passwordRegExp = /^[A-z0-9]+$/;

  // state for login input
  const [email, setEmail] = useState('');
  const [invalidEmailMessage, showInvalidEmailMessage] = useState(false);
  const [emptyEmailMessage, showEmptyEmailMessage] = useState(false);

  // state for password input
  const [password, setPassword] = useState('');
  const [invalidPasswordMessage, showInvalidPasswordMessage] = useState(false);
  const [emptyPasswordMessage, showEmptyPasswordMessage] = useState(false);

  // handler for change event
  const handleChange = (event) => {
    if (event.target.name === 'email') setEmail(event.target.value);
    if (event.target.name === 'password') setPassword(event.target.value);
  };

  // handler for blur event
  const handleBlur = (event) => {
    if (event.target.name === 'email') {
      email === '' ? showEmptyEmailMessage(true) : showEmptyEmailMessage(false);
      !emailRegExp.test(email) && email !== '' ? showInvalidEmailMessage(true) : showInvalidEmailMessage(false);
    }
    if (event.target.name === 'password') {
      password === '' ? showEmptyPasswordMessage(true) : showEmptyPasswordMessage(false);
      !passwordRegExp.test(password) && password !== '' ? showInvalidPasswordMessage(true) : showInvalidPasswordMessage(false);
    }
  };

  const submitHandle = (event) => {
    event.preventDefault();
    onFormSubmit(email, password);
  };

  return (
    <>
      <Form
        onSubmit={submitHandle}
        className="login-form"
      >
        <Form.Group controlId="for">
          <Row />
          <Form.Label>Email</Form.Label>
          <Form.Control className={invalidEmailMessage || emptyEmailMessage ? 'login-incorrect-border' : null} value={email} onBlur={handleBlur} onChange={handleChange} name="email" type="text" placeholder="email" />
          <div className={invalidEmailMessage ? 'login-incorrect' : 'login-correct'}><span>Incorrect email</span></div>
          <div className={emptyEmailMessage ? 'login-empty' : 'login-not-empty'}><span>Please enter email</span></div>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className={invalidPasswordMessage || emptyPasswordMessage ? 'login-incorrect-border' : null} onBlur={handleBlur} onChange={handleChange} name="password" type="password" placeholder="password" />
          <div className={invalidPasswordMessage ? 'password-incorrect' : 'password-correct'}><span>Incorrect password</span></div>
          <div className={emptyPasswordMessage ? 'password-empty' : 'password-not-empty'}><span>Please enter password</span></div>
        </Form.Group>
        <Button type="submit" variant="primary" disabled={!(email !== '' && password !== '')}>
          Sign in
        </Button>
        <Row className="registr">
          <p>
            If you don&apos;t have account you can:
            {' '}
            <Link to="/registration">Registration</Link>
          </p>

        </Row>
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
