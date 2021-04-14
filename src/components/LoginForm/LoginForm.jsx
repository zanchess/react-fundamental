import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './login-form.scss';

const LoginForm = () => (
  <>
    <Form className="login-form">
      <Form.Group controlId="for">
        <Form.Label>Login</Form.Label>
        <Form.Control type="text" placeholder="Login" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign in
      </Button>
    </Form>
  </>
);

export default LoginForm;
