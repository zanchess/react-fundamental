import React from 'react';
import './courses-page.scss';
import Courses from '../../components/Courses/Courses';

const CoursesPage = ({
  courses,
  allAuthors,
  showCreateCourseForm,
  showEditCourseForm,
  searchCourse,
  coursesPageIsHidden,
}) => (
  <div className={coursesPageIsHidden ? 'courses hidden' : 'courses visible'}>
    <Courses
      courses={courses}
      allAuthors={allAuthors}
      showCreateCourseForm={showCreateCourseForm}
      showEditCourseForm={showEditCourseForm}
      searchCourse={searchCourse}
    />
  </div>
);

export default CoursesPage;
