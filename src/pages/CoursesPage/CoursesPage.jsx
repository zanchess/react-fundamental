import React from 'react';
import './courses-page.scss';
import { Switch, Route } from 'react-router-dom';
import Courses from '../../components/Courses/Courses';
import ROUTE from '../../constants/routes';
import CourseInfoPage from '../CourseInfoPage/CourseInfoPage';
import CreateCoursePage from '../CreateCoursePage/CreateCoursePage';

const CoursesPage = ({
  courses,
  allAuthors,
  showCreateCourseForm,
  showEditCourseForm,
  searchCourse,
}) => (
  <Switch>
    <Route
      exact
      path={ROUTE.COURSES}
      component={() => (
        <Courses
          courses={courses}
          allAuthors={allAuthors}
          showCreateCourseForm={showCreateCourseForm}
          showEditCourseForm={showEditCourseForm}
          searchCourse={searchCourse}
        />
      )}
    />
    <Route path={`${ROUTE.COURSES}${ROUTE.ADD}`} component={() => <CreateCoursePage />} />
    <Route path={`${ROUTE.COURSES}/:id`} component={() => <CourseInfoPage courses={courses} allAuthors={allAuthors} />} />
  </Switch>
);

export default CoursesPage;
