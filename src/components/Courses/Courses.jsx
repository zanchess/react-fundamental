import React from 'react';
import './courses.scss';
import { Button } from 'react-bootstrap';
import CourseCard from '../CourseCard/CourseCard';
import Searching from '../Searching/Searching';

const Courses = (props) => {
  const coursesList = props.courses.map((course, index) => (
    <CourseCard
      key={index}
      title={course.title}
      start={course.start}
      duration={course.duration}
      description={course.description}
      authors={course.authors}
      allAuthors={props.allAuthors}
      showEditCourseForm={props.showEditCourseForm}
    />
  ));
  return (
    <div className="login-page">
      <div className="courses__block">
        <div className="login-page__control">
          <Searching />
          <Button onClick={props.showCreateCourseForm} className="add-btn" variant="primary">Add Course</Button>
        </div>
        <div className="course__block_courses">
          {coursesList}
        </div>
      </div>
    </div>
  );
};

export default Courses;
