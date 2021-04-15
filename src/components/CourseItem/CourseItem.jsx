import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './course-item.scss';

const CourseItem = (props) => (
  <>
    <Card className="course-item">
      <Card.Header>{props.info.name}</Card.Header>
      <Card.Body>
        <div className="course-item__wrap">
          <Card.Text>
            {`Date start ${props.info.start}`}
          </Card.Text>
          <Card.Text>
            {`Duration ${props.info.duration.hours} hours ${props.info.duration.minutes} minutes`}
          </Card.Text>
        </div>
        <Card.Text>
          {props.info.description}
        </Card.Text>
        <Button className="course-item__button_edit" variant="primary">Edit Course</Button>
        <Button className="course-item__button_delete" variant="primary">Delete Course</Button>
      </Card.Body>
    </Card>
  </>
);

export default CourseItem;
