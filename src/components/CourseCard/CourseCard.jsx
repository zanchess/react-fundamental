import React from 'react';
import { Card } from 'react-bootstrap';
import './course-card.scss';
import { Link } from 'react-router-dom';
import getTimeFromMins from '../../utils/get-time-from-mins';

const CourseCard = ({
  title, start, duration, description, authors, allAuthors,
}) => {
  const authorsNameObj = authors
    .map((id) => allAuthors.find((author) => id === author.id))
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
          <Link to="/courses/1">Show Course</Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CourseCard;
