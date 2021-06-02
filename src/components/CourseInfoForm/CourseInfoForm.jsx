import React, { useState } from 'react';
import {
  Form, Button, Col,
} from 'react-bootstrap';
import './course-info-from.scss';
import { useHistory } from 'react-router-dom';
import getTimeFromMins from '../../utils/get-time-from-mins';

const CourseInfoForm = () => {
  // input values
  const history = useHistory();
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [startDateValue, setStartDateValue] = useState('');
  const [durationValue, setDurationValue] = useState('');

  const handleChange = (event) => {
    if (event.target.name === 'title') setTitleValue(event.target.value);
    if (event.target.name === 'description') setDescriptionValue(event.target.value);
    if (event.target.name === 'start') setStartDateValue(event.target.value);
    if (event.target.name === 'duration') setDurationValue(event.target.value);
  };

  return (
    <>
      <Form.Group className="course-info-form">
        <Form.Row>
          <Form.Label className="course-info-form__lable" column="sm" lg={2}>
            Title
          </Form.Label>
          <Col>
            <Form.Control onChange={handleChange} name="title" value={titleValue} size="sm" type="text" placeholder="Small text" />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label className="course-info-form__lable" column="sm" lg={2}>
            Description
          </Form.Label>
          <Col>
            <Form.Control onChange={handleChange} name="description" value={descriptionValue} as="textarea" rows={3} />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label className="course-info-form__lable" column="sm" lg={2}>
            Start Date
          </Form.Label>
          <Col>
            <Form.Control onChange={handleChange} name="start" value={startDateValue} size="sm" type="text" placeholder="Small text" />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label className="course-info-form__lable" column="sm" lg={2}>
            Duration
          </Form.Label>
          <Col>
            <Form.Control onChange={handleChange} name="duration" value={durationValue} size="sm" type="text" placeholder="Small text" />
          </Col>
          <Col>
            <span>{getTimeFromMins(durationValue)}</span>
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
        <Button onClick={() => history.push('/courses')} className="btn-group__cancel" variant="primary" type="submit">
          Cancel
        </Button>
      </div>
    </>
  );
};

export default CourseInfoForm;
