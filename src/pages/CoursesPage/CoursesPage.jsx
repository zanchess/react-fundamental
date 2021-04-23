import React from 'react';
import './courses-page.scss';
import Courses from '../../components/Courses/Courses';

const CoursesPage = ({
  courses,
  allAuthors,
  showCreateCourseForm,
}) => (
  <div className="courses">
    <Courses
      courses={courses}
      allAuthors={allAuthors}
      showCreateCourseForm={showCreateCourseForm}
    />
  </div>
);

export default CoursesPage;
