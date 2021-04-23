import React from 'react';
import './courses-page.scss';
import Courses from '../../components/Courses/Courses';

const CoursesPage = ({
  courses,
  allAuthors,
  showCreateCourseForm,
  showEditCourseForm,
}) => (
  <div className="courses">
    <Courses
      courses={courses}
      allAuthors={allAuthors}
      showCreateCourseForm={showCreateCourseForm}
      showEditCourseForm={showEditCourseForm}
    />
  </div>
);

export default CoursesPage;
