import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import './login-form.scss';

const LoginForm = () => {
  // reg exp for validation
  const loginRegExp = /^[A-z]+$/;
  const passwordRegExp = /^[A-z0-9]+$/;

  // state for login input
  const [login, setLogin] = useState('');
  const [invalidLoginMessage, showInvalidLoginMessage] = useState(false);
  const [emptyLoginMessage, showEmptyLoginMessage] = useState(false);

  // state for password input
  const [password, setPassword] = useState('');
  const [invalidPasswordMessage, showInvalidPasswordMessage] = useState(false);
  const [emptyPasswordMessage, showEmptyPasswordMessage] = useState(false);

  // handler for change event
  const handleChange = (event) => {
    if (event.target.name === 'login') setLogin(event.target.value);
    if (event.target.name === 'password') setPassword(event.target.value);
  };

  // handler for blur event
  const handleBlur = (event) => {
    if (event.target.name === 'login') {
      login === '' ? showEmptyLoginMessage(true) : showEmptyLoginMessage(false);
      !loginRegExp.test(login) && login !== '' ? showInvalidLoginMessage(true) : showInvalidLoginMessage(false);
    }
    if (event.target.name === 'password') {
      password === '' ? showEmptyPasswordMessage(true) : showEmptyPasswordMessage(false);
      !passwordRegExp.test(password) && password !== '' ? showInvalidPasswordMessage(true) : showInvalidPasswordMessage(false);
    }
  };

  return (
    <>
      <Form className="login-form">
        <Form.Group controlId="for">
          <Row />
          <Form.Label>Login</Form.Label>
          <Form.Control className={invalidLoginMessage || emptyLoginMessage ? 'login-incorrect-border' : null} value={login} onBlur={handleBlur} onChange={handleChange} name="login" type="text" placeholder="Login" />
          <div className={invalidLoginMessage ? 'login-incorrect' : 'login-correct'}><span>Incorrect login</span></div>
          <div className={emptyLoginMessage ? 'login-empty' : 'login-not-empty'}><span>Please enter login</span></div>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className={invalidPasswordMessage || emptyPasswordMessage ? 'login-incorrect-border' : null} onBlur={handleBlur} onChange={handleChange} name="password" type="password" placeholder="password" />
          <div className={invalidPasswordMessage ? 'password-incorrect' : 'password-correct'}><span>Incorrect password</span></div>
          <div className={emptyPasswordMessage ? 'password-empty' : 'password-not-empty'}><span>Please enter password</span></div>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!(login !== '' && password !== '')}>
          Sign in
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
