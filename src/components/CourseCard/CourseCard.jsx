import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './course-card.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getTimeFromMins from '../../utils/get-time-from-mins';
import { deleteCourse } from '../../store/courses/actionCreators';

const CourseCard = ({
  id, title, start, duration, description, authors, allAuthors,
}) => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.userReducer.user);

  const authorsNameObj = authors
    .map((authorId) => allAuthors.find((author) => authorId === author.id))
    .map((author) => author.name);

  const deleteCourseHandle = (event) => {
    dispatch(deleteCourse(event.target.name));
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
            { role === 'admin'
              ? (
                <>
                  <Link className="btn-link" to={`/courses/update/${id}`}>Update Course</Link>
                  <Button onClick={deleteCourseHandle} name={id} className="btn-group__delete" variant="primary">
                    Delete
                  </Button>
                </>
              ) : null}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CourseCard;
