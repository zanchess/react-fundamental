import React, { useState } from 'react';
import {
  Form, Button, Col, Row,
} from 'react-bootstrap';
import './course-info-from.scss';

const LoginForm = () => {
  const loginRegExp = /^[A-z]+$/;
  const passwordRegExp = /^[A-z0-9]+$/;

  return (
    <>
      <Form.Group className="course-info-form">
        <Form.Row>
          <Form.Label className="course-info-form__lable" column="sm" lg={2}>
            Title
          </Form.Label>
          <Col>
            <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label className="course-info-form__lable" column="sm" lg={2}>
            Description
          </Form.Label>
          <Col>
            <Form.Control as="textarea" rows={3} />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label className="course-info-form__lable" column="sm" lg={2}>
            Start Date
          </Form.Label>
          <Col>
            <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label className="course-info-form__lable" column="sm" lg={2}>
            Duration
          </Form.Label>
          <Col>
            <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label className="course-info-form__lable" column="sm" lg={2}>
            List of Authors
          </Form.Label>
          <Col lg={4}>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Col>
          <Col lg={1}>
            <Button className="course-info-form__back-btn" variant="primary" type="submit">
              &laquo;
            </Button>
            <br />
            <Button className="course-info-form__add-btn" variant="primary" type="submit">
              &raquo;
            </Button>
          </Col>
          <Col lg={4}>
            <Form.Control as="select" multiple />
          </Col>
        </Form.Row>
      </Form.Group>
      <div className="btn_group">
        <Button className="btn-group__save" variant="primary" type="submit">
          Save
        </Button>
        <Button className="btn-group__cancel" variant="primary" type="submit">
          Cancel
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
