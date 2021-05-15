import React from 'react';
import './courses.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CourseCard from '../CourseCard/CourseCard';
import Searching from '../Searching/Searching';
import ROUTE from '../../constants/routes';

const Courses = (props) => {
  console.log(props);
  const coursesList = props.courses.map((course, index) => (
    <CourseCard
      key={index}
      id={course.id}
      title={course.title}
      start={course.creationDate}
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
          <Searching searchCourse={props.searchCourse} />
          <Link className="btn-link add-course" to={`${ROUTE.COURSES}${ROUTE.ADD}`}>Add Course</Link>
        </div>
        <div className="course__block_courses">
          {coursesList}
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  start: PropTypes.string,
  duration: PropTypes.number,
  description: PropTypes.string,
  authors: PropTypes.instanceOf(Array),
  allAuthors: PropTypes.instanceOf(Array),
  showEditCourseForm: PropTypes.func,
};

export default Courses;
