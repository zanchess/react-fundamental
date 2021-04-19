import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './course-item.scss';
import PropTypes from 'prop-types';

const CourseItem = ({
  name, start, hours, minutes, description,
}) => (
  <>
    <Card className="course-item">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <div className="course-item__wrap">
          <Card.Text>
            {`Date start ${start}`}
          </Card.Text>
          <Card.Text>
            {`Duration ${hours} hours ${minutes} minutes`}
          </Card.Text>
        </div>
        <Card.Text>
          {description}
        </Card.Text>
        <Button className="course-item__button_edit" variant="primary">Edit Course</Button>
        <Button className="course-item__button_delete" variant="primary">Delete Course</Button>
      </Card.Body>
    </Card>
  </>
);

CourseItem.PropTypes = {
  name: PropTypes.string,
  start: PropTypes.string,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  description: PropTypes.string,
};

export default CourseItem;
