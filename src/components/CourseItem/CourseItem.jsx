import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './course-item.scss';

const CourseItem = () => (
  <>
    <Card className="course-item">
      <Card.Header>Course 1</Card.Header>
      <Card.Body>
        <Card.Title>Start Date</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button className="course-item__button_edit" variant="primary">Edit Course</Button>
        <Button className="course-item__button_delete" variant="primary">Delete Course</Button>
      </Card.Body>
    </Card>
  </>
);

export default CourseItem;
