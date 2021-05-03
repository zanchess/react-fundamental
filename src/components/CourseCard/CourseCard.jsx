import React from 'react';
import { Card } from 'react-bootstrap';
import './course-card.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getTimeFromMins from '../../utils/get-time-from-mins';

const CourseCard = ({
  id, title, start, duration, description, authors, allAuthors,
}) => {
  const authorsNameObj = authors
    .map((authorId) => allAuthors.find((author) => authorId === author.id))
    .map((author) => author.name);

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
          <Link className="btn-link" to={`/courses/${id}`}>Show Course</Link>
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
