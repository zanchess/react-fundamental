import React, { useEffect, useState } from 'react';
import './course-info-page.scss';
import { Link, useParams } from 'react-router-dom';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import getTimeFromMins from '../../utils/get-time-from-mins';
import authorsAdapter from '../../utils/authors-adapter';
import ROUTE from '../../constants/routes';

const CourseInfoPage = ({ allAuthors, courses }) => {
  const { id } = useParams();
  const [currentCourse, setCurrentCourse] = useState({});
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const course = courses.find((courseItem) => courseItem.id === id);
    setCurrentCourse(course);
    if (course) {
      const courseAuthors = authorsAdapter(course, allAuthors);
      setAuthors(courseAuthors);
    }
  }, []);

  return (
    <>
      <div className="course-info-page">
        <h2 className="course-info-page__header">
          {currentCourse.title}
        </h2>
        <Container className="course-info-page__info">
          <Row>
            <Col>
              {currentCourse.description}
            </Col>
            <Col>
              <span>{`ID:${currentCourse.id}`}</span>
              {' '}
              s
              <br />
              <span>{getTimeFromMins(currentCourse.duration)}</span>
              {' '}
              <br />
              <span>{`Start Date: ${currentCourse.creationDate}`}</span>
              <br />
              <span>Authors:</span>
              {' '}
              <br />
              <span>
                {authors.map((author, i) => (
                  <span key={i}>
                    {' '}
                    {author}
                    {' '}
                  </span>
                ))}
              </span>
            </Col>
          </Row>
        </Container>
        <Link className="course-info-page__back btn-link" to={`${ROUTE.COURSES}`}>Back</Link>

      </div>
    </>
  );
};

export default CourseInfoPage;
