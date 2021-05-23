import React from 'react';
import './courses.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CourseCard from '../CourseCard/CourseCard';
import Searching from '../Searching/Searching';
import ROUTE from '../../constants/routes';

const Courses = (props) => {
  const { role } = useSelector((state) => state.userReducer.user);
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
    />
  ));
  return (
    <div className="login-page">
      <div className="courses__block">
        <div className="login-page__control">
          <Searching searchCourse={props.searchCourse} />
          {role === 'admin'
            ? <Link className="btn-link add-course" to={`${ROUTE.COURSES}${ROUTE.ADD}`}>Add Course</Link>
            : null}
        </div>
        <div className="course__block_courses">
          {coursesList}
        </div>
      </div>
    </div>
  );
};

export default Courses;
