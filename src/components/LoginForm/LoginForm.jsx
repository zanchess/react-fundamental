import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import './login-form.scss';

const LoginForm = () => {
  const loginRegExp = /^[A-z]+$/;
  const passwordRegExp = /^[A-z0-9]+$/;

  const [login, setLogin] = useState('');
  const [invalidLoginMessage, showInvalidLoginMessage] = useState(false);
  const [emptyLoginMessage, showEmptyLoginMessage] = useState(false);

  const [password, setPassword] = useState('');
  const [invalidPasswordMessage, showInvalidPasswordMessage] = useState(false);
  const [passwordPlaceHolderValue, setPasswordPlaceHolderValue] = useState('password');

  const handleChange = (event) => {
    if (event.target.name === 'login') setLogin(event.target.value);
    if (event.target.name === 'password') setPassword(event.target.value);
  };

  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };

  const loginHandleBlur = () => {
    login === '' ? showEmptyLoginMessage(true) : showEmptyLoginMessage(false);
    !loginRegExp.test(login) && login !== '' ? showInvalidLoginMessage(true) : showInvalidLoginMessage(false);
  };

  const passwordHandleBlur = () => {
    if (password === '') {
      console.log('enter password');
    }
    if (!passwordRegExp.test(password) && password !== '') {
      console.log('incorrect password');
    }
  };

  return (
    <>
      <Form className="login-form">
        <Form.Group controlId="for">
          <Row />
          <Form.Label>Login</Form.Label>
          <Form.Control className={invalidLoginMessage || emptyLoginMessage ? 'login-incorrect-border' : ''} value={login} onBlur={loginHandleBlur} onChange={handleChange} name="login" type="text" placeholder="Login" />
          <div className={invalidLoginMessage ? 'login-incorrect' : 'login-correct'}><span>Incorrect login</span></div>
          <div className={emptyLoginMessage ? 'login-empty' : 'login-not-empty'}><span>Please enter login</span></div>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={passwordHandleBlur} onChange={handleChange} name="password" type="password" placeholder={passwordPlaceHolderValue} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!(login !== '' && password !== '')}>
          Sign in
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
