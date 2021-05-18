import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './course-card.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import getTimeFromMins from '../../utils/get-time-from-mins';
import { deleteCourse } from '../../store/courses/actionCreators';

const CourseCard = ({
  id, title, start, duration, description, authors, allAuthors,
}) => {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  const authorsNameObj = authors
    .map((authorId) => allAuthors.find((author) => authorId === author.id))
    .map((author) => author.name);

  const deleteCourseHandle = (event) => {
    const allCourses = [...courses];
    const i = courses.findIndex((author) => author.id === event.target.name);

    allCourses.splice(i, 1);

    dispatch(deleteCourse(allCourses));
  };

  return (
    <>
      <Card className="course-item">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <div className="course-item__wrap">
            <Card.Text>
              {`Date start: ${start}`}
            </Card.Text>
            <Card.Text>
              {getTimeFromMins(duration)}
            </Card.Text>
          </div>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            <span>Authors:</span>
            {' '}
            <br />
            {authorsNameObj.map((author, i) => (
              <span key={i}>
                {i + 1}
                {')'}
                {author}
                {' '}
              </span>
            ))}
          </Card.Text>
          <div className="btns-block">
            <Link className="btn-link" to={`/courses/${id}`}>Show Course</Link>
            <Button onClick={deleteCourseHandle} name={id} className="btn-group__delete" variant="primary">
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

CourseCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  authors: PropTypes.instanceOf(Array).isRequired,
  allAuthors: PropTypes.instanceOf(Array).isRequired,
};

export default CourseCard;
