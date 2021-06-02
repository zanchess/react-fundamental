import React, { useEffect, useState } from 'react';
import {
  Form, Button, Col, Row,
} from 'react-bootstrap';
import './update-course.scss';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import getTimeFromMins from '../../utils/get-time-from-mins';
import { updateCourse } from '../../store/courses/actionCreators';
import SelectAuthor from '../SelectAuthor/SelectAuthor';
import SelectedAuthors from '../SelectedAuthor/SelectedAuthors';
import ROUTE from '../../constants/routes';

const UpdateCourse = () => {
  const authors = useSelector((state) => state.authorsReducer.authors);
  const courses = useSelector((state) => state.coursesReducer.courses);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  // input values
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [startDateValue, setStartDateValue] = useState('');
  const [durationValue, setDurationValue] = useState('');
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [currentCourse, setCurrentCourse] = useState([]);

  useEffect(() => {
    if (courses.length) {
      const course = courses.find((item) => item.id === id);
      const currentAuthors = course.authors.map((item) => authors
        .find((author) => author.id === item));
      setCurrentCourse(course);
      setSelectedAuthors(currentAuthors);
      setTitleValue(course.title);
      setDescriptionValue(course.description);
      setStartDateValue(course.creationDate);
      setDurationValue(course.duration);
    }
  }, []);

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
  };

  const deleteAuthorHandle = (event) => {
    const i = selectedAuthors.findIndex((author) => author.name === event.target.name);
    const arr = [...selectedAuthors];
    arr.splice(i, 1);
    setSelectedAuthors(arr);
  };

  const submitHandle = (event) => {
    event.preventDefault();

    const updatedCourse = {
      title: titleValue,
      description: descriptionValue,
      creationDate: startDateValue,
      duration: durationValue,
      authors: selectedAuthors.map((author) => author.id),
      id: currentCourse.id,
    };

    dispatch(updateCourse(updatedCourse));
    history.push(ROUTE.COURSES);
  };

  return (
    <>
      <h2>
        Update
        {' '}
        {currentCourse.title}
        {' '}
        course
      </h2>
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
            Update
          </Button>
          <Link />
          <Link className="course-info-page__back btn-link" to={ROUTE.COURSES}>Cancel</Link>
        </div>
      </Form>
    </>
  );
};

export default UpdateCourse;
