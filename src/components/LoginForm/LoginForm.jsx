import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './login-form.scss';

const LoginForm = () => {
  const loginRegExp = /^[A-z]+$/;
  const passwordRegExp = /^[A-z0-9]+$/;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    if (event.target.name === 'login') setLogin(event.target.value);
    if (event.target.name === 'password') setPassword(event.target.value);
  };

  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };

  const loginHandleBlur = () => {
    if (login === '') {
      console.log('enter');
    }
    if (!loginRegExp.test(login) && login !== '') {
      console.log('incorrect login');
    }
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
          <Form.Label>Login</Form.Label>
          <Form.Control value={login} onBlur={loginHandleBlur} onChange={handleChange} name="login" type="text" placeholder="Login" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={passwordHandleBlur} onChange={handleChange} name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!(login !== '' && password !== '')}>
          Sign in
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
