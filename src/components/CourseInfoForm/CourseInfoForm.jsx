import React, { useState } from 'react';
import {
  Form, Button, Col, Row,
} from 'react-bootstrap';
import './course-info-from.scss';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import getTimeFromMins from '../../utils/get-time-from-mins';
import { addCourse } from '../../store/courses/actionCreators';
import SelectAuthor from '../SelectAuthor/SelectAuthor';
import SelectedAuthors from '../SelectedAuthor/SelectedAuthors';
import ROUTE from '../../constants/routes';

const UpdateCourse = () => {
  const authors = useSelector((state) => state.authorsReducer.authors);
  const dispatch = useDispatch();

  // input values
  const history = useHistory();
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [startDateValue, setStartDateValue] = useState('');
  const [durationValue, setDurationValue] = useState('');
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const handleChange = (event) => {
    if (event.target.name === 'title') setTitleValue(event.target.value);
    if (event.target.name === 'description') setDescriptionValue(event.target.value);
    if (event.target.name === 'start') setStartDateValue(event.target.value);
    if (event.target.name === 'duration') setDurationValue(event.target.value);
  };

  const selectAuthorHandle = (event) => {
    const { name } = event.target;
    const author = authors.find((item) => item.name === name);
    setSelectedAuthors([...selectedAuthors, author]);
    console.log(selectedAuthors);
  };

  const deleteAuthorHandle = (event) => {
    const i = selectedAuthors.findIndex((author) => author.name === event.target.name);
    const arr = [...selectedAuthors];
    arr.splice(i, 1);
    setSelectedAuthors(arr);
    console.log(selectedAuthors);
  };

  const submitHandle = (event) => {
    event.preventDefault();
    const newCourse = {
      title: titleValue,
      description: descriptionValue,
      creationDate: startDateValue,
      duration: +durationValue,
      authors: selectedAuthors.map((author) => author.id),
      id: uuidv4(),
    };

    dispatch(addCourse(newCourse));
    history.push(ROUTE.COURSES);
  };

  return (
    <>
      <Form onSubmit={submitHandle}>
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
        </Form.Group>
        <Row>
          <Col className="select-authors" lg={6}>
            <span>List of Authors:</span>
            <div>
              {authors.map((author, i) => (
                <SelectAuthor
                  selectAuthorHandle={selectAuthorHandle}
                  selectedAuthors={selectedAuthors}
                  author={author.name}
                  key={i}
                />
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <span>
              Selected Authors:
            </span>
            <div>
              {selectedAuthors.map((author, i) => (
                <SelectedAuthors
                  deleteAuthorHandle={deleteAuthorHandle}
                  author={author.name}
                  key={i}
                />
              ))}
            </div>
          </Col>
        </Row>
        <div className="btn_group">
          <Button className="btn-group__save" variant="primary" type="submit">
            Save
          </Button>
          <Link />
          <Link className="course-info-page__back btn-link" to={ROUTE.COURSES}>Cancel</Link>
        </div>
      </Form>
    </>
  );
};

export default UpdateCourse;
