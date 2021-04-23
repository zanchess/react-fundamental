import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './course-card.scss';
import propTypes from 'prop-types';
import getTimeFromMins from '../../utils/get-time-from-mins';

const CourseCard = ({
  title, start, duration, description, authors, allAuthors, showEditCourseForm,
}) => {
  const authorsNameObj = authors.map((id) => allAuthors.find((author) => id === author.id)).map((author) => author.name);

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
          <Button onClick={showEditCourseForm} className="course-item__button_edit" variant="primary">Edit Course</Button>
          <Button className="course-item__button_delete" variant="primary">Delete Course</Button>
        </Card.Body>
      </Card>
    </>
  );
};

CourseCard.propTypes = {
  name: propTypes.string,
  start: propTypes.string,
  minutes: propTypes.number,
  description: propTypes.string,
};

export default CourseCard;
